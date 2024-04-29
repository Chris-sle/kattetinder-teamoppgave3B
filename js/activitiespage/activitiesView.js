function activitiesView() {
    const app = document.getElementById('app');
    const activityPage = model.inputs.activityPage;

    if (activityPage.createNewActivity.isTrue && activityPage.selectedActivity === null) {
        app.innerHTML = /*HTML*/ `
            ${createHeaderHtml()}
            ${createRegisterNewActivityHtml()}
        `;
    } else if (activityPage.selectedActivity !== null && activityPage.selectedActivity >= 0) {
        app.innerHTML = /*HTML*/ `
            ${createShowAllActivityInfoHtml(activityPage.selectedActivity)}
        `;
        initializeMap();
    } else {
        app.innerHTML = /*HTML*/ `
            ${createRegularStateHtml()} 
        `;
    }
}

function createRegisterNewActivityHtml() {
    let html = /*HTML*/`
        <div class="activitiesContainer">
            <h1>Aktiviteter</h1>
            <div class="addActivity">
                <h3>Legg til Aktivitet</h3>
                <input 
                    type="text"
                    oninput="model.inputs.activityPage.createNewActivity.title=this.value" 
                    placeholder="Activity Name" />
                <input 
                    type="date"
                    oninput="model.inputs.activityPage.createNewActivity.date=this.value"  
                    placeholder="Date" />
                <input 
                    class="description"
                    type="text"
                    oninput="model.inputs.activityPage.createNewActivity.description=this.value"  
                    placeholder="description" />
                <div>
                    Privat:
                    <input 
                        type="checkbox"
                        id="privacyCheckbox"
                        onchange="setPrivacy()" />
                </div>
                <button onclick="addActivity()">Legg til ny Aktivitet</button>
                <button onclick="showAddActivity(false)">Tilbake</button>
            </div>
        </div>
    `;
    return html;
}


function createShowAllActivityInfoHtml(selectedActivityId) {
    const selectedActivity = model.data.activities.find(activity => activity.hostId === selectedActivityId);
    let html = '';
    if (selectedActivity) {
        html = /*HTML*/ `
            ${createHeaderHtml()}
            <div id="activitiesContainer">
                <div class="activityInfo">
                    <h1>${selectedActivity.title}</h1>
                    <p>${selectedActivity.description}</p>
                </div>
                <div>
                    <h1>Aktiviteter</h1>
                    <div class="activitiesList">
                        <h3>Aktivitetsliste</h3>
                        ${createActivitiesListHtml()}
                        <button onclick="showAddActivity(true)">Legg til ny Aktivitet</button>
                    </div>
                </div>
                <div id="mapid"></div>
            </div>
        `;
        getCoordinatesFromAddress(selectedActivity.location)
    } else {
        html = /*HTML*/ `
            ${createHeaderHtml()}
            <div class="activitiesContainer">
                <h1>Error: Activity not found</h1>
            </div>
        `;
    }
    return html;
}

function createRegularStateHtml() {
    let html = /*HTML*/`
    ${createHeaderHtml()}
        <div class="activitiesContainer">
            <h1>Aktiviteter</h1>
            <div class="activitiesList">
                <h3>Aktivitetsliste</h3>
                ${createActivitiesListHtml()}
                <button onclick="showAddActivity(true)">Legg til ny Aktivitet</button>
            </div>
        </div>
    `;
    return html;
}

function createActivitiesListHtml() {
    const activities = model.data.activities;
    const users = model.data.registeredUsers;
    const userId = model.app.currentUserId;
    let html = '';

    for (let activity of activities) {
        let date = new Date(activity.date);
        let formattedDate = date.toLocaleDateString('no-nb', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        // Finn brukeren som er vert for denne aktiviteten
        const hostUser = users.find(user => user.id === activity.hostId);
        let hostImage = hostUser ? hostUser.uploadedImgs[hostUser.profilePictureIndex] : 'placeholder.jpg';

        html += /*HTML*/ `
            <div class="activity" onclick="showActivityInfo(${activity.hostId})">
                <div class="activity-header">
                    <img src="${hostImage}" alt="Host Image" class="host-image">
                    <h3>${activity.title}</h3>
                    <p>${formattedDate}</p>
                </div>
                ${activity.hostId === userId ? 
                    `<button onclick="editActivity(${activity.id}); event.stopPropagation();">Rediger</button>
                     <button onclick="deleteActivity(${activity.id}); event.stopPropagation();">Slett</button>`
                    : ''}
            </div>
        `;
    }
    return html;
}

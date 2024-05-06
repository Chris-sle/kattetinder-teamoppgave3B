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
                    class="location"
                    type="text"
                    oninput="model.inputs.activityPage.createNewActivity.location=this.value"  
                    placeholder="Address, Postalcode Area" />
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
    const selectedActivity = model.data.activities.find(activity => activity.id === selectedActivityId);
    let html = '';
    if (selectedActivity) {
        const participantListHtml = getParticipantsListHtml(selectedActivity.participantsIds);
        const date = new Date(selectedActivity.date);
        let formattetDate = date.toLocaleDateString('no-NO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

        html = /*HTML*/ `
            ${createHeaderHtml()}
            <div id="activitiesContainer">
                <div>
                    <h1>Aktiviteter</h1>

                    ${model.inputs.activityPage.isEditing ?
                    createEditActivityHtml() : `
                    <div class="activitiesList">
                        <h3>Aktivitetsliste</h3>
                        ${createActivitiesListHtml()}
                        <button onclick="showAddActivity(true)">Legg til ny Aktivitet</button>
                    </div>
                    `}
                </div>
                <div class="activityInfo">
                    <h3>${selectedActivity.title}</h3>
                    <p>Tid: ${formattetDate}</p>
                    <p>Sted: ${selectedActivity.location}</p>
                    <p>${selectedActivity.description}</p>
                    <div>${participantListHtml}</div>
                    <button onclick="participantAction(${selectedActivity.id})">
                        ${isParticipant(model.app.currentUserId, selectedActivity.participantsIds) ? 'Meld deg av' : 'Meld deg på'}
                    </button>
                    ${selectedActivity.hostId === model.app.currentUserId ? (model.inputs.activityPage.isEditing ? `
                    <button onclick="showEditActivity(${selectedActivity.id}, false)">Tilbake</button>` : `
                    <button onclick="showEditActivity(${selectedActivity.id}, true)">Rediger</button>`) : ''}
                    ${selectedActivity.hostId === model.app.currentUserId ?
                    `<button onclick="deleteActivity(${selectedActivity.id})">Slett</button>` : ''}
                </div>
                <div id="mapid"></div>
            </div>
        `;
        getCoordinatesFromAddress(selectedActivity.location);
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

function getParticipantsListHtml(participantIds) {
    const participants = participantIds.map(id => {
        const user = model.data.registeredUsers.find(user => user.id === id);
        if (!user) return `<li>Ukjent deltaker</li>`;

        const userImage = user.uploadedImgs[user.profilePictureIndex] || 'default-img.jpg';
        return `<div><img src="${userImage}" alt="${user.displayName}" style="width:50px; height:50px; border-radius:50%;"><span>${user.displayName}</span></div>`;
    }).join('');

    return `<div class="participant-list">${participants}</div>`;
}

function createRegularStateHtml() {
    let html = /*HTML*/`
    ${createHeaderHtml()}
        <div class="activitiesContainer">
            <h1>Aktiviteter</h1>
            ${model.inputs.activityPage.isEditing ?
            createEditActivityHtml() : `
            <div class="activitiesList">
                <h3>Aktivitetsliste</h3>
                ${createActivitiesListHtml()}
                <button onclick="showAddActivity(true)">Legg til ny Aktivitet</button>
            </div>`}
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
        let formattedDate = date.toLocaleDateString('no-NO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
        const hostUser = users.find(user => user.id === activity.hostId);
        let hostImage = hostUser ? hostUser.uploadedImgs[hostUser.profilePictureIndex] : 'placeholder.jpg';

        html += /*HTML*/ `
            <div class="activity" >
                <div class="activity-header" onclick="showActivityInfo(${activity.id})">
                    <img src="${hostImage}" alt="Host Image" class="host-image">
                    <h3>${activity.title}</h3>
                    <p>${formattedDate}</p>
                </div>
                ${activity.hostId === userId ? 
                    `⭐` : ''}
            </div>
        `;
    }
    return html;
}

function createEditActivityHtml() {
    const activityId = model.inputs.activityPage.selectedActivity;
    const selectedActivity = model.data.activities.find(activity => activity.id === activityId);

    if (!selectedActivity) {
        console.error("Selected activity not found");
        return "Activity not found";
    }

    const formattedDate = formatDateString(selectedActivity.date);

    let html = /*HTML*/`
        <div class="activitiesContainer">
            <div class="addActivity">
                <h3>Redigere Aktivitet</h3>
                <input
                    id="titleInput"  
                    type="text"
                    value="${selectedActivity.title}"/>
                <input
                    id="dateInput"  
                    type="date"
                    value="${formattedDate}"/>
                <input 
                    id="locationInput"
                    class="location"
                    type="text"
                    value="${selectedActivity.location}"/>
                <input
                    id="descriptionInput" 
                    class="description"
                    type="text"
                    value="${selectedActivity.description}"/>  
                <div>
                    Privat:
                    <input 
                        type="checkbox"
                        id="privacyCheckbox"
                        onchange="changePrivacy(selectedActivity)" />
                </div>
                <button onclick="editActivity()">Lagre</button>
            </div>
        </div>
    `;
    return html;
}

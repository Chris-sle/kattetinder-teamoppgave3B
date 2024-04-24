function activitiesView() {
    const app = document.getElementById('app');
    const activityPage = model.inputs.activityPage;

    if (activityPage.createNewActivity.isTrue && activityPage.selectedActivity === null) {
        app.innerHTML = /*HTML*/ `
            ${createHeaderHtml()}
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
    } else if (activityPage.selectedActivity !== null && activityPage.selectedActivity >= 0) {
        const selectedActivity = model.data.activities.find(activity => activity.hostId === activityPage.selectedActivity);

        if (selectedActivity) {
            app.innerHTML = /*HTML*/ `
                ${createHeaderHtml()}
                <div class="activitiesContainer">
                <div class="activityInfo">
                <h1>${selectedActivity.title}</h1>
                <p>${selectedActivity.description}</p>
                </div>
                <div class="mapSection">
                Map!
                <!-- Include map display here -->
                </div>
                <div>
                    <h1>Aktiviteter</h1>
                    <div class="activitiesList">
                        <h3>Aktivitetsliste</h3>
                        ${createActivitiesListHtml()}
                        <button onclick="showAddActivity(true)">Legg til ny Aktivitet</button>
                    </div>
                </div>
                </div>
            `;
        } else {
            app.innerHTML = /*HTML*/ `
                ${createHeaderHtml()}
                <div class="activitiesContainer">
                    <h1>Error: Activity not found</h1>
                </div>
            `;
        }
    } else {
        app.innerHTML = /*HTML*/ `
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
    }
}


function createSelectedActivitieHtml() {

}

function createActivitiesListHtml() {
    const activities = model.data.activities;
    let html = '';

    for (activity of activities) {
        html += /*HTML*/ `
            <div class="activity" onclick="showActivityInfo(${activity.hostId})">
                ${activity.title}
            </div>
        `;
    }
    return html;
}
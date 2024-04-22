function activitiesView() {
    const app = document.getElementById('app');
    const activies = model.data.activities;

    app.innerHTML = /*HTML*/ `
        ${createHeaderHtml()}
        <div class="activitiesContainer">
            <h1>Aktiviteter</h1>
            <div class="activitiesList">
                <h3>Aktivitetsliste</h3>
                ${createActivitiesListHtml()}
            </div>
        </div>
    `;
}

function createActivitiesListHtml() {
    const activities = model.data.activities;
    let html = '';

    for(activity of activities){
        html += /*HTML*/ `
            <div class="activity" onclick="showActivityInfo(activity.id)">
                ${activity.title}
            </div>
        `;
    }
    return html;
}
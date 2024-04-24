function updateView() {
    const page = model.app.currentPage;
    if (page == null) loginView();
    else if (page == 'homepage') homepageView();
    else if (page == 'settings') settingsView();
    else if (page == 'profilepage') profileView();
    else if (page == 'activities') activitiesView();
}

function createHeaderHtml() {
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);

    let html = /*HTML*/ `
    <div class="headerFull">

        <div class="headerLeft, headerItem">
            <button onclick="goTo('homepage')">Hjem</button>
            <button>Chat</button>
            <button onclick="goTo('activities')">Aktiviteter</button>
        </div>

        <div class="headerCenter, headerItem">
            <h1>Meowtch!<h1>
        </div>

        <div class="headerRight, headerItem">
            <p>Du er logget inn som ${currentUser.displayName}
            <button onclick="goTo('profilepage')">Profil</button>
            <button onclick="goTo('settings')">Innstillinger</button>
        </div>

    </div>
    `;

    return html;
}

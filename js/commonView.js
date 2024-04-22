function updateView() {
    const page = model.app.currentPage;
    if (page == null) loginView();
    else if (page == 'homepage') homepageView();
    else if (page == 'settings') settingsView();
    else if (page == 'activities') activitiesView();
}

function createHeaderHtml() {
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);

    let html = /*HTML*/ `
    <div class="headerFull">

        <div class="headerLeft, headerItem">
            <button onclick="goTo('homepage')">Hjem</button>
            <button>Chat</button>
            <button>Aktiviteter</button>
        </div>

        <div class="headerCenter, headerItem">
            <h1>Meowtch!<h1>
        </div>

        <div class="headerRight, headerItem">
            <div>
            <p>Du er logget inn som ${currentUser.displayName}
            <button>Profil</button>
            <button onclick="goTo('settings')">Innstillinger</button>
            </div>
        </div>

    </div>
    `;

    return html;
}

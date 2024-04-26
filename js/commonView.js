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
    
    if (!currentUser) {
        console.error("No current user found");
        return "<div class='header'>Error: No user found</div>"; // Provide a fallback or error message
    }

    let html = /*HTML*/ `
    <div class="headerFull">

        <div class="headerLeft headerItem"> <!-- Corrected class names -->
            <button onclick="goTo('homepage')">Hjem</button>
            <button>Chat</button>
            <button onclick="goTo('activities')">Aktiviteter</button>
        </div>

        <div class="headerCenter headerItem">
            <h1>Meowtch!</h1> <!-- Corrected closing tag -->
        </div>

        <div class="headerRight headerItem">
            <p>Du er logget inn som ${currentUser.displayName}</p> <!-- Ensure text is enclosed in <p> -->
            <button onclick="goTo('profilepage')">Profil</button>
            <button onclick="goTo('settings')">Innstillinger</button>
        </div>

    </div>
    `;

    return html;
}

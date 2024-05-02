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
            <button class="header" onclick="goTo('homepage')">HJEM</button>
            <button class="header">CHAT</button>
            <button class="header" onclick="goTo('activities')">AKTIVITETER</button>
        </div>

        <div class="headerCenter headerItem">
            <h1 class="header" >MEOWTCH!</h1> <!-- Corrected closing tag -->
        </div>

        <div class="headerRight headerItem">
            <p class="logInnUser" >Du er logget inn som: <u>${currentUser.displayName}</u></p> <!-- Ensure text is enclosed in <p> -->
            <button class="header" onclick="goTo('profilepage')">PROFIL</button>
            <button class="header" onclick="goTo('settings')">INSTILLINGER</button>
        </div>

    </div>
    `;

    return html;
}

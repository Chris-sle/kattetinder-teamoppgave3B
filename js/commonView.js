function updateView() {
    const page = model.app.currentPage;
    if (page == null) loginView();
    else if (page == 'homepage') homepageView();
}

function createHeaderHtml() {
    let html = /*HTML*/ `
    <div class="headerFull">

        <div class="headerLeft, headerItem">
            <button>Hjem</button>
            <button>Chat</button>
            <button>Aktiviteter</button>
        </div>

        <div class="headerCenter, headerItem">
            <h1>Meowtch!<h1>
        </div>

        <div class="headerRight, headerItem">
            <div>
            <button>Profil</button>
            <button>Innstillinger</button>
            </div>
        </div>

    </div>
    `;

    return html;
}

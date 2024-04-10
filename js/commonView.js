

function updateView() {
    const page = model.app.currentPage;
    if (page == null) homepageView();
    // else if (page == 'homepage') homepageView();
}

function createHeaderHtml() {
    let html = /*HTML*/ `
    <div class="headerFull">

        <div class="headerRight, headerItem">
            <button>Hjem</button>
            <button>Chat</button>
            <button>Aktiviteter</button>
        </div>

        <div class="headerCenter, headerItem">
            <h1>Meowtch!<h1>
        </div>

        <div class="headerRight, headerItem">
            <button>Profil</button>
            <button>Innstillinger</button>
        </div>

    </div>
    `;

    return html;
}

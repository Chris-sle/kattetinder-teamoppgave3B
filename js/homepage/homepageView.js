function homepageView() {
    const hasProfiles = moveToNextProfile();
    const app = document.getElementById('app');

    if (!hasProfiles) {
        app.innerHTML = /*HTML*/ `
            ${createHeaderHtml()}
            <div class="swipePageContainer">
                ${createEndOfSwipeHtml()}
                ${createUndoButtonHtml()}
            </div>
        `;
    } else {
        app.innerHTML = /*HTML*/ `
            ${createHeaderHtml()}
            <div class="swipePageContainer">
                ${createSwipePageHtml()}
                ${createUndoButtonHtml()}
            </div>
        `;
    };
}

function createSwipePageHtml() {
    const user = model.data.registeredUsers;
    const index = model.inputs.mainPage.currentProfileIndex;
    let html = /*HTML*/ `
        <div>
            <h1>${user[index].displayName}</h1>
            <div class="profileCard">
                <button class="thumbs" onclick="swipeLeft(${user[index].id})">👎🏾</button>
                <div class="img-container">
                <img id="profileImg" 
                    src="${user[index].uploadedImgs[user[index].profilePictureIndex]}" 
                    alt="profile picture">
                </div>
                <button class="thumbs" onclick="swipeRight(${user[index].id})">👍🏾</button>
                <p id="displayBio">${user[index].displayBio}</p>
            </div>
        </div>
    `;
    return html;
}

function createEndOfSwipeHtml() {
    let html = /*HTML*/ `
        <div class="endMessage">
            <h3>Slutt på listen 😟</h3>
            <p>Her er noen forslåg på hva du kan gjøre:</p>
            <ol>
                <li>Du kan gjøre endringer på profilen din.</li>
                <li>Du kan se om du har matchet med noen inne på chat.</li>
                <li>Du kan sjekke ut aktiviteter i omerådet.</li>
            </ol>
        </div>
    `;
    return html;
}

function createUndoButtonHtml() {
    const actionHistory = model.inputs.mainPage.actionHistory
    if (actionHistory && actionHistory.length > 0) {
        let html = /*HTML*/ `
            <button class="undoButton" onclick="undoLastAction()">↩ Undo</button>
        `;
        return html;
    }
    return '';
}
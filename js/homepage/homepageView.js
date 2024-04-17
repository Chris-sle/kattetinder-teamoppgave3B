
function homepageView() {
    moveToNextProfile()
    const app = document.getElementById('app');
    
    app.innerHTML = /*HTML*/ `
    ${createHeaderHtml()}
    <div class="swipePageContainer">
        ${createSwipePageHtml()}
    </div>
    `;
    
}

function createSwipePageHtml() {
    const user = model.data.registeredUsers;
    const index = model.inputs.mainPage.currentProfileIndex;
    let html = /*HTML*/ `
        <div>
            <h3>${user[index].displayName}</h3>
            <div class="profileCard">
                <button onclick="swipeLeft(${user[index].id})">👎</button>
                <div class="img-container">
                <img id="profileImg" 
                    src="${user[index].uploadedImgs[user[index].profilePictureIndex]}" 
                    alt="profile picture">
                </div>
                <button onclick="swipeRight(${user[index].id})">👍</button>
                <p id="displayBio">${user[index].displayBio}</p>
            </div>
        </div>
    `;
    return html;
}

/*
    lag et ekstra view, med forslag på hva du kan gjøre da du har sett alle profilene som f.eks. 
    chatte, aktiviteter eller gjøre endringer på egen profil
*/

function homepageView() {
    const app = document.getElementById('app');
    const registeredUsers = model.data.registeredUsers;
    const index = model.inputs.mainPage.currentProfileIndex;
     
    


    app.innerHTML = /*HTML*/ `
    <div class="swipePageContainer">
        ${createHeaderHtml()}
        <div>
            <h3>${registeredUsers[index].displayName}</h3>
            <div class="profileCard">
                <button></button>
                <div class="img-container">
                <img id="profileImg" src="${registeredUsers[index].uploadedImgs[registeredUsers[index].profilePictureIndex]}" alt="profile picture">
                </div>
                <p id="displayBio">${registeredUsers[index].displayBio}</p>
                <button></button>
            </div>
        </div>
    </div>
    `;
}


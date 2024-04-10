function homepageView() {
    const app = document.getElementById('app');
    const registeredUsers = model.data.registeredUsers;
    const index = model.inputs.mainPage.currentProfileIndex;
    let html = '';


    app.innerHTML = /*HTML*/ `
    <div class="container">
<<<<<<< Updated upstream
        createHeaderHtml()
=======
        ${createHeaderHtml()}
>>>>>>> Stashed changes
        <div>
            <h3>${registeredUsers[index].displayName}</h3>
            <div class="profileCard">
                <button></button>
                <img id="profileImg" src="${registeredUsers[index].uploadedImgs[profilePictureId]}" alt="profile picture">
                <p id="displayBio"></p>
                <button></button>
            </div>
        </div>
    </div>
    `;
}


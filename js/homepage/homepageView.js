function homepageView() {
    const app = document.getElementById('app');
    const user = model.data.registeredUsers;
    const index = model.inputs.mainPage.currentProfileIndex;
     
    
    app.innerHTML = /*HTML*/ `
    ${createHeaderHtml()}
    <div class="swipePageContainer">
        <div>
            <h3>${user[index].displayName}</h3>
            <div class="profileCard">
                <button>👎</button>
                <div class="img-container">
                <img id="profileImg" 
                    src="${user[index].uploadedImgs[user[index].profilePictureIndex]}" 
                    alt="profile picture">
                </div>
                <button onclick="swipeRight(${user[index].id})">👍</button>
                <p id="displayBio">${user[index].displayBio}</p>
            </div>
        </div>
    </div>
    `;
}


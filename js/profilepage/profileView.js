function profileView() {
    const app = document.getElementById('app');
    const profilePage = model.inputs.profilePage;

    if (profilePage.isEditing === true) {
        app.innerHTML = /*HTML*/ `
            ${editProfileView()}
        `;
    } else if (profilePage.isAddingMedia === true ) {
        app.innerHTML = /*HTML*/ `
            ${addMediaView()}
        `;
    } else {
        app.innerHTML = /*HTML*/ `
        ${originalProfileView()} 
        `;
    }
}


//Main Profile View
function originalProfileView() {
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);

    let html = /*HTML*/`
    ${createHeaderHtml()}
        <div class="profileContainer">
            <h1>Profile</h1>
                <img class="mainProfileIcon" id="mainProfileIcon" src="${currentUser.uploadedImgs[currentUser.profilePictureIndex]}" />
                <h3>${currentUser.displayName}, ${currentUser.displayAge}</h3>
                <div class="settingsEditContainer">
                    <div class="conatinerIcons">
                        <div class="settingsIcon" id="" onclick="goTo('settings')" ><img class="mainProfileIcon" id="mainProfileIcon" src="img/settingsIcon.jpg"/></div>
                        <div>SETTINGS</div>
                    </div>
                    <div class="conatinerIcons">
                        <div class="addMediaIcon" id="" onclick="addMedia(true)" ></div>
                        <div>ADD MEDIA</div>
                    </div>
                    <div class="conatinerIcons">
                        <div class="editIcon" id="" onclick="editProfile(true)" ><img class="mainProfileIcon" id="mainProfileIcon" src="img/pencil.png"/></div>
                        <div>EDIT</div>
                    </div>
                </div>            
        </div>
    `;
    return html;
}


//Edit Page View
function editProfileView(){
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
    let html = /*HTML*/`
    ${createHeaderHtml()}
    <div class="bioContainer">
        <br>
        <div class="bioOfUser">${currentUser.displayBio}</div>
        <br>
        <input id="inputBio" type="text" value="${currentUser.displayBio}">
        <button onclick="editBio()">UPDATE BIO</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div>
            <h3>Your Preferences</h3>
            <div>Gender Selection</div>
            <div>${currentUser.activeFilters.genderSelected}</div>
            <button>Male</button>
            <button>Female</button>
            <button>All</button>
            <br>
            <br>
            <div>Breed Selection</div>
            <div>${currentUser.activeFilters.breedSelected}</div>
            <button>something</button>
            <button>something</button>
            <button>something</button>
            <button>All</button>
            <br>
            <br>
            <div>Age-Range Selection</div>
            <div>${currentUser.activeFilters.ageRangeSelected}</div>
            <button>something</button>
            <button>something</button>
            <button>something</button>
            <button>All</button>
        </div>
        <button onclick="editProfile(false)">Back to profile</button>
    </div>
    `;
    return html
}


//Add Media View
function addMediaView(){
    let html = /*HTML*/`
        ${createHeaderHtml()}
        <button onclick="addMedia(false)">Back to profilepage</button>

    `;
    return html
}

















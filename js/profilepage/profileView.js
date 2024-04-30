function profileView() {
    const app = document.getElementById('app');
    const profilePage = model.inputs.profilePage;

    if (profilePage !== null) {
        app.innerHTML = /*HTML*/ `
            ${editProfileView()}
        `;
    } else if (profilePage === null ) {
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
                <img class="mainProfileIcon" id="mainProfileIcon" src="img/Picture1.png" />
                <h3>${currentUser.displayName}, ${currentUser.displayAge}</h3>
                <div class="settingsEditContainer">
                    <div class="conatinerIcons">
                        <div class="settingsIcon" id="" onclick="" ></div>
                        <div>SETTINGS</div>
                    </div>
                    <div class="conatinerIcons">
                        <div class="addMediaIcon" id="" onclick="addMedia()" ></div>
                        <div>ADD MEDIA</div>
                    </div>
                    <div class="conatinerIcons">
                        <div class="editIcon" id="" onclick="editProfile()" ></div>
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
        <input id="inputBio" type="text">
        <button>UPDATE BIO</button>
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
            <div>${currentUser.activeFilters.age}</div>
            <button>something</button>
            <button>something</button>
            <button>something</button>
            <button>All</button>
        </div>
    </div>
    `;
    return html
}


//Add Media View
function addMediaView(){
    let html = /*HTML*/`
    ${createHeaderHtml()}


    `;
    return html
}

















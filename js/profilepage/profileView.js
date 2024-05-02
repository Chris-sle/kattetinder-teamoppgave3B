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
            <h1 class="profile">PROFILE</h1>
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

        <input class="inputBio" id="inputBio" type="text" value="${currentUser.displayBio}">
        <br>
        <!--<button onclick="discardChangesBio()">DISCARD CHANGES</button>-->
        <button onclick="saveChangesBio()">SAVE CHANGES</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="prefrenceContainer">
            <h3><u>Your Preferences</u></h3>
            <div class="optionsContainer">
                <div class="selectionContainer">
                    <div><u>Gender Selection</u></div>
                    <br>
                    <div>(${currentUser.activeFilters.genderSelected})</div>
                    <br>
                    <button onclick="changeGender('male')">Male</button>
                    <br>
                    <button onclick="changeGender('female')">Female</button>
                    <br>
                    <button onclick="changeGender('all')">All</button>
                </div>
                <div class="selectionContainer">
                    <div><u>Breed Selection</u></div>
                    <br>
                    <div>(${currentUser.activeFilters.breedSelected})</div>
                    <br>
                    <button>something</button>
                    <br>
                    <button>something</button>
                    <br>
                    <button>something</button>
                    <br>
                    <button>All</button>
                </div>
                <div class="selectionContainer">
                    <div><u>Age-Range Selection</u></div>
                    <div>(${currentUser.activeFilters.ageRangeSelected})</div>
                    <br>
                </div>
            </div>
        </div>
        <button onclick="editProfile(false)">↩ Back to profile</button>
        <br>
        <br>
    </div>
    `;
    return html
}














//Add Media View
function addMediaView(){
    let html = /*HTML*/`
        ${createHeaderHtml()}
        <button onclick="addMedia(false)">↩ Back to profilepage</button>

    `;
    return html
}

















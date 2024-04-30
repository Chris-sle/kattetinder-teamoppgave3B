//Main Profile Page
function addMedia(bolean) {
    model.inputs.profilePage.isAddingMedia = bolean;
    updateView();
}

function editProfile(bolean) {
    model.inputs.profilePage.isEditing = bolean;
    updateView();
}















//Edit Page
function editBio() {
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
    const inputElement = document.getElementById('inputBio');
    const newBio = inputElement.value;

    if (currentUser && newBio !== currentUser.displayBio) {
        currentUser.displayBio = newBio;

        console.log('Bio updated:', currentUser.displayBio);
    } else {
        console.log('No changes made or user not found.');
    }
}













//Add Media Page





















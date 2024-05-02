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
function saveChangesBio() {
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


// function changeGender(gender){
//     const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
//     const currentFilter = currentUser.activeFilters;
//     const currentGender = currentFilter.genderSelected;

//     if(currentGender !== gender){
//         currentGender[currentGender.length - 1] = gender;
//         console.log(`Gender Changed to: ${gender}`)
//     } else {
//         console.log(`Gender remains ${gender}`)        
//     }

//     // currentGender[currentGender.length - 1] = gender;
//     // currentGender.splice(0,1);
//     // currentGender.push(gender);
//     updateView();
// }
















//Add Media Page





















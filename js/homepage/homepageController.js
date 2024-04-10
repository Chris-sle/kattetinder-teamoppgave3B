function swipeRight() {
    const profileIndex = model.inputs.mainPage.currentProfileIndex;
    const profile = model.data.registeredUsers
    profile[profileIndex].id
}

function moveToNextProfile() {
    const profileIndex = model.inputs.mainPage.currentProfileIndex;

    profileIndex++;
    updateView()
}   
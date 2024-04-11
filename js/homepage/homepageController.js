function swipeRight() {
    const profileIndex = model.inputs.mainPage.currentProfileIndex;
    const profile = model.data.registeredUsers
    moveToNextProfile()
}

function moveToNextProfile() {
    model.inputs.mainPage.currentProfileIndex++;

    if (model.inputs.mainPage.currentProfileIndex >= model.data.registeredUsers.length) {
        model.inputs.mainPage.currentProfileIndex = 0;
    }

    updateView();
}  
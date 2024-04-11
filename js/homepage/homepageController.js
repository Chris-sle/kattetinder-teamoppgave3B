function swipeRight(likedUserId) {
    likeProfile(likedUserId);
    moveToNextProfile();
}

function moveToNextProfile() {
    const registeredUsers = model.data.registeredUsers
    let profileIndex = model.inputs.mainPage.currentProfileIndex;
    profileIndex++;
    console.log(profileIndex)

    if (profileIndex >= registeredUsers.length) {
        profileIndex = 0;
    }
    model.inputs.mainPage.currentProfileIndex = profileIndex;
    updateView();
}

function likeProfile(likedUserId) {
    const currentUserId = model.app.currentUserId
    let currentUser = model.data.registeredUsers.find(user => user.id === currentUserId);
    
    if (!currentUser.likes.includes(likedUserId)) {
        currentUser.likes.push(likedUserId);
        console.log(`User ${currentUserId} liked User ${likedUserId}`);
    } else {
        console.log(`User ${currentUserId} already liked User ${likedUserId}`);
    }
}
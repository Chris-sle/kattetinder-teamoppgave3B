function swipeRight(likedUserId) {
    likeProfile(likedUserId);
    moveToNextProfile();
    updateView();
}

function swipeLeft(dislikedUserId) {
    dislikeProfile(dislikedUserId);
    moveToNextProfile();
    updateView();
}

function moveToNextProfile() {
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
    if (!currentUser) {
        console.error('Current user not found.');
        return false;
    }

    const potentialProfiles = model.data.registeredUsers.filter(user => {
        return user.id !== model.app.currentUserId &&
               !currentUser.likes.includes(user.id) &&
               !currentUser.dislikes.includes(user.id);
    });

    if (potentialProfiles.length === 0) {
        console.log('No more profiles available.');
        return false;
    }

    let randomIndex = Math.floor(Math.random() * potentialProfiles.length);
    let nextProfile = potentialProfiles[randomIndex];
    let nextProfileGlobalIndex = model.data.registeredUsers.findIndex(user => user.id === nextProfile.id);

    model.inputs.mainPage.currentProfileIndex = nextProfileGlobalIndex;
    return true;
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

function dislikeProfile(dislikedUserId) {
    const currentUserId = model.app.currentUserId;
    let currentUser = model.data.registeredUsers.find(user => user.id === currentUserId);

    if(!currentUser.dislikes.includes(dislikedUserId)) {
        currentUser.dislikes.push(dislikedUserId);
        console.log(`User ${currentUserId} disliked User ${dislikedUserId}`)
    } else {
        console.log(`User ${currentUserId} already disliked User ${dislikedUserId}`);
    }
}


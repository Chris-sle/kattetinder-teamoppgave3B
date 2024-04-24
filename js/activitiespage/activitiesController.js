function showActivityInfo(activityId) {
    const currentSelection = model.inputs.activityPage.selectedActivity;

    if (currentSelection === activityId) {
        model.inputs.activityPage.selectedActivity = null;
    } else {
        model.inputs.activityPage.selectedActivity = activityId;
    }
    updateView();
}

function showAddActivity(bolean) {
    model.inputs.activityPage.createNewActivity.isTrue = bolean;
    console.log(model.inputs.activityPage);
    updateView()
}

function setPrivacy() {
    const privacyCheckbox = document.getElementById('privacyCheckbox')
    let privacy = model.inputs.activityPage.createNewActivity.privacy;

    if(privacyCheckbox.checked){
        privacy = true;
        console.log(privacy);
    } else {
        privacy = false;
        console.log(privacy);
    }
}

function addActivity() {
    const createNewActivity = model.inputs.activityPage.createNewActivity;
    const newActivity = {
        hostId: model.data.activities.length + 1,
        participantsIds: [],
        title: createNewActivity.title,
        description: createNewActivity.description,
        date: createNewActivity.date,
        location: createNewActivity.location,
        privacy: createNewActivity.privacy,
    };
    model.data.activities.push(newActivity);
    model.inputs.activityPage.createNewActivity.isTrue = false;
    updateView()
}
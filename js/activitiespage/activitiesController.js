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

function deleteActivity(activityId) {
    console.log('Sletter aktivitet', activityId);
    // Legg til logikk for å slette aktiviteten
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

function generateActivityId() {
    if (model.data.activities.length === 0) {
        return 1;
    } else {
        const maxId = model.data.activities.reduce((max, activity) => {
            return (activity.hostId > max) ? activity.hostId : max;
        }, 0);
        return maxId + 1;
    }
}

function addActivity() {
    const createNewActivity = model.inputs.activityPage.createNewActivity;
    const newActivity = {
        hostId: generateActivityId(),
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
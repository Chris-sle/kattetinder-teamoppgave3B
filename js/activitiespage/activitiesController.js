function showActivityInfo(activityId) {
    const currentSelection = model.inputs.activityPage.selectedActivity;

    if (currentSelection === activityId) {
        model.inputs.activityPage.selectedActivity = null;
    } else {
        model.inputs.activityPage.selectedActivity = activityId;
        
    }
    
    updateView();
}

function initializeMap() {
    model.inputs.activityPage.myMap = L.map('mapid').setView([59.9133301, 10.7389701], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(model.inputs.activityPage.myMap);
}

function getCoordinatesFromAddress(location) {
    const address = location;
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const latitude = parseFloat(data[0].lat);
            const longitude = parseFloat(data[0].lon);
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            updateMap(latitude, longitude);
        } else {
            console.log('No results found');
        }
    })
    .catch(error => console.error('Error:', error));
}

function updateMap(lat, lng) {
    let myMap = model.inputs.activityPage.myMap;
    myMap.setView([lat, lng], 13);
    L.marker([lat, lng]).addTo(myMap);
}

function isParticipant(userId, participantsIds) {
    return participantsIds.includes(userId);
}

function participantAction(activityId) {
    console.log(activityId)
    const currentUserId = model.app.currentUserId;
    const activity = model.data.activities.find(a => a.id === activityId);

    if (!activity) {
        console.log("Activity not found.");
        return;
    }

    if (activity.participantsIds.includes(currentUserId)) {
        activity.participantsIds = activity.participantsIds.filter(id => id !== currentUserId);
        console.log(`User ${currentUserId} has left the activity (${activityId}).`);
    } else {
        activity.participantsIds.push(currentUserId);
        console.log(`User ${currentUserId} has joined the activity (${activityId}).`);
    }
    updateView();
}


function showAddActivity(bolean) {
    model.inputs.activityPage.createNewActivity.isTrue = bolean;
    model.inputs.activityPage.selectedActivity = null;
    console.log(model.inputs.activityPage);
    updateView()
}

function deleteActivity(activityId) {
    console.log("Attempting to delete activity with ID:", activityId);
    const activity = model.data.activities.find(a => a.hostId === activityId);
    const activityIndex = model.data.activities.findIndex(a => a.hostId === activityId && a.hostId === model.app.currentUserId);

    console.log("ActivityId found for deletion:", activity);
    console.log("Activity's host ID:", activity.hostId);
    console.log("Current User ID:", model.app.currentUserId);
    console.log("All Activities before:", model.data.activities);

    if (activityIndex !== -1) {
        console.log("Before deletion, activities count:", model.data.activities.length);

        model.data.activities.splice(activityIndex, 1);

        console.log(`Activity with hostId ${activityId} has been deleted`);
        console.log("After deletion, activities count:", model.data.activities.length);
        model.inputs.activityPage.selectedActivity = null;
    } else {
        console.log("Activity not found or user not authorized to delete this activity.");
    }
    console.log("All Activities after:", model.data.activities);
    updateView();
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
    const currentUserId = model.app.currentUserId
    const newActivity = {
        id: model.data.activities.length +1,
        hostId: model.app.currentUserId,
        participantsIds: [currentUserId],
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

function showEditActivity(activityId, editing) {
    console.log(activityId);
    model.inputs.activityPage.selectedActivity = activityId;
    model.inputs.activityPage.isEditing = editing;
    updateView();
}

function editActivity() {
    const activityId = model.inputs.activityPage.selectedActivity;

    if (activityId) {
        // Update the selected activity properties from input values
        const title = document.getElementById('titleInput').value;
        const date = document.getElementById('dateInput').value;
        const location = document.getElementById('locationInput').value;
        const description = document.getElementById('descriptionInput').value;

        // Find and update the activity with the matching ID
        const activityToUpdate = model.data.activities.find(activity => activity.id === activityId);
        if (activityToUpdate) {
            activityToUpdate.title = title;
            activityToUpdate.date = date;
            activityToUpdate.location = location;
            activityToUpdate.description = description;

            
        } else {
            console.error("Selected activity not found for ID:", activityId);
        }
    } else {
        console.error("No selected activity found.");
    }
    model.inputs.activityPage.isEditing = false;
    updateView()
}

function formatDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return `${year}-${month}-${day}`;
}

function changePrivacy() {
    const activityId = model.inputs.activityPage.selectedActivity;

    if (activityId) {
        const selectedActivity = model.data.activities.find(activity => activity.id === activityId);
        if (selectedActivity) {
            selectedActivity.privacy = document.getElementById('privacyCheckbox').checked;
            
            alert('Privacy setting updated successfully!');
        } else {
            console.error("Selected activity not found for ID:", activityId);
        }
    }
}
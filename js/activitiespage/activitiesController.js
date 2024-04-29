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
    L.marker([lat, lng]).addTo(myMap).bindPopup("New marker based on search").openPopup();
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
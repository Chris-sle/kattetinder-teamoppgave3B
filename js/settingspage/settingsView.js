function settingsView() {
  const app = document.getElementById("app");

  app.innerHTML = /*HTML*/ `
        ${createHeaderHtml()}
        ${createSettingsPageHtml()}
        `;
}

function createSettingsPageHtml() {
    const settings = model.inputs.settingPage;
    const currentUser = model.data.registeredUsers.find(user => user.id === model.app.currentUserId);
    let html;


    if (settings.isChanging == null) {
        html = /*HTML*/ `
            <div class="settingsContainer">
            <div class="settingsItem">
            <h3>Kontoinnstillinger</h3>
            <br>
            <div class="settingsContent">
            <button onclick="isNowChanging('email')">Bytt E-post</button>
            <button onclick="isNowChanging('phone')">Bytt Telefonnummer</button>
            <button onclick="isNowChanging('password')">Bytt Passord</button>
            </div>
            </div>
            
            <div class="settingsItem">
            <h3>Oppdagelse</h3>
            <div class="settingsContent">
            
            </div>
            </div>
            
            <div class="settingsItem">
            <br>
            <div class="settingsContent">
            
            </div>
            </div>
            
            <div class="settingsItem">
            <h3>Filtrering</h3>
            <br>
            <div class="settingsContent">
            
            </div>
            </div>
            
            </div>  
        `;
        return html;
    }
    else if (settings.isChanging == 'phone') {
        html = /*HTML*/ `
            old:
            <input disabled value="${currentUser.phone}">
            enter new:
            <input value="${settings.phone.newPhoneInput1 == null ? '' : settings.phone.newPhoneInput1}" onchange="">
            re-enter new:
            <input>
            <br>
            ${createErrorMessageHtml()}
            <br>
            <button>lagre</button>
            <button onclick="isNowChanging(null)">tilbake</button>
        `;
        return html;
    }
    
    else if (settings.isChanging == 'email') {
        html = /*HTML*/ `

        `;
        return html;
    }

    else if (settings.isChanging == 'password') {
        html = /*HTML*/ `

        `;
        return html;
    }
}

function createErrorMessageHtml() {
    const settings = model.inputs.settingPage;
    let html = '';

    if(settings.changingErrorMessage != null){
        html = settings.changingErrorMessage;
        console.log(settings.changingErrorMessage)
        return html;
    }
    else {
        html = '';
        return html;
    }
}
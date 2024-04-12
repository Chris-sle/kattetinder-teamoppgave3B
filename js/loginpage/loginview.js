function loginView() {
  if (model.inputs.loginPage.registerNewUser.isActive != true) {
    document.getElementById("app").innerHTML = /*HTML*/ `
      <div class="container">
        <input 
          type="text" 
          oninput="model.inputs.loginPage.usernameInput=this.value" 
          placeholder="Enter Username"/>
        <input 
          type="password" 
          oninput="model.inputs.loginPage.passwordInput=this.value" 
          placeholder="Enter Password"/>
        <button onclick="login()">Login</button>
        <button onclick="changeModel(true)">New User</button>
      </div>
    `;
  } else {
    document.getElementById("app").innerHTML = /*HTML*/ `
      <div class="container">
        <input 
          type="text" 
          oninput="model.inputs.loginPage.registerNewUser.newUserNameInput=this.value" 
          placeholder="Enter Username"/>
        <input 
          type="text" 
          oninput="model.inputs.loginPage.registerNewUser.newEmailInput=this.value" 
          placeholder="Enter Email"/>
        <input 
          type="text" 
          oninput="model.inputs.loginPage.registerNewUser.newPhoneNrInput=this.value" 
          placeholder="Enter PhoneNumber"/>
        <input 
          type="password" 
          oninput="model.inputs.loginPage.registerNewUser.newPasswordInput=this.value" 
          placeholder="Enter Password"/>
        <input 
          type="password" 
          oninput="model.inputs.loginPage.registerNewUser.newPasswordReInput=this.value" 
          placeholder="Re Enter Password"/>
        <button onclick="registerNewUser()">Register</button>
        <button onclick="changeModel(false)">Existing User</button>
      </div>
    `;
  }
}

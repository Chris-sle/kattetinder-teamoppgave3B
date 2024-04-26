function changeModel(bolean) {
  model.inputs.loginPage.registerNewUser.isActive = bolean;
  loginView();
}

function login() {
  let userId = findUser();
  const login = model.inputs.loginPage;
  if (userId == null) {
      login.errorMessage = 'Feil brukernavn og/eller passord';
  } else {
      model.app.currentPage = 'homepage';
      model.app.loggedInUserId = userId;
      login.errorMessage = '';
      login.usernameInput = null;
      login.passwordInput = null;
  }
  updateView();
}

function findUser() {
  console.log("Logging inn med:", model.inputs.loginPage.usernameInput, model.inputs.loginPage.passwordInput);
  for (let user of model.data.registeredUsers) {
      if (user.displayName == model.inputs.loginPage.usernameInput
          && user.userPassword == model.inputs.loginPage.passwordInput) {
          return user.id;
      }
  }
  return null;
}


function registerNewUser() {
  const newUserInputs = model.inputs.loginPage.registerNewUser;

  if (newUserInputs.newPasswordInput === newUserInputs.newPasswordReInput) {
      const newUserId = model.data.registeredUsers.length + 1;
      const newUser = {
          id: newUserId,
          userPassword: newUserInputs.newPasswordInput,
          uploadedImgs:[],
          displayName: newUserInputs.newUserNameInput,
          displayAge: null,
          displayBio: null,
          profilePictureIndex: 0,
          displayImgs: [],
          visability: true,
          email: newUserInputs.newEmailInput,
          phone: newUserInputs.newPhoneNrInput,
          activeFilters: {
            genderSelected: 'all',
            breedSelected: 'all',
            ageRangeSelected: 'all',
          },
          likes: [],
          dislikes: [],

      };

      model.data.registeredUsers.push(newUser);

      model.app.currentPage = 'homepage';
      model.app.loggedInUserId = newUserId;

      resetRegistrationInputs();
      updateView()
  } else {
      model.inputs.loginPage.errorMessage = "Passwords do not match.";
      updateView()
  }
}

function resetRegistrationInputs() {
  model.inputs.loginPage.registerNewUser = {
      newUserNameInput: '',
      newPasswordInput: '',
      newPasswordReInput: '',
      newEmailInput: '',
      newPhoneNrInput: '',
  };
}
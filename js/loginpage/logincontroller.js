function changeModel(bolean) {
  model.inputs.loginPage.registerNewUser.isActive = bolean;
  loginView();
}

function goTo(page) {
    model.app.currentPage = page;
    updateView()
}

function logOut(){
    model.app.currentUser = null;
    goToPage('null');
}
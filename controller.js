function selectPerson(id){
    model.app.selectedPerson = id;
    model.app.page = 'single';
    updateView();
}
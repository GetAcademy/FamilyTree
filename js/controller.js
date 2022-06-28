function goToSinglePage(id) {
    model.app.selectedPerson = id;
    model.app.page = 'single';
    updateView();
}

function goToAddPage(addRelationshopFunction) {
    model.inputs.addPage = addRelationshopFunction;
    model.app.page = 'add';
    model.app.selectedPerson = null;
    updateView();
}
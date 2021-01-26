function editBtn() {
    console.log("edit this shid");
}

function deleteBtn(index) {
    model.existing.splice(index, 1);
    listView();
}

function addReview() {
    let wineRegionInput = document.getElementById('regionInput');
    let wineCastleInput;
    let wineYearInput;
    let winePriceInput;
    let wineReviewInput;
    let winePictureInput;
}
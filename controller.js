function editBtn() {
    console.log("edit this shid");
}

function deleteBtn(index) {
    model.existing.splice(index, 1);
    listView();
}

function addReview() {
    let wineRegionInput = document.getElementById('regionInput');
    let wineCastleInput = document.getElementById('castleInput');
    let wineYearInput = document.getElementById('yearInput');
    let winePriceInput = document.getElementById('priceInput');
    let wineReviewInput = document.getElementById('mainNoteInput');
    let wineSideNoteInput = document.getElementById('sideNoteInput');
    let winePictureInput = document.getElementById('pictureInput');
}
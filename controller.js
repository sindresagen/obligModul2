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
    let wineReviewInput = document.getElementById('mainNote');
    let wineSideNoteInput = document.getElementById('sideNote');
    let winePictureInput = document.getElementById('pictureInput');

    model.existing.push({
        region: wineRegionInput.value,
        castle: wineCastleInput.value,
        year: wineYearInput.value,
        price: winePriceInput.value,
        mainNote: wineReviewInput.value,
        sideNote: wineSideNoteInput.value,
        picture: winePictureInput.value,

    });
    listView();
}

function editReview(index) {
    const wine = model.existing[index];
    let wineRegionInput = document.getElementById('regionInput');
    let wineCastleInput = document.getElementById('castleInput');
    let wineYearInput = document.getElementById('yearInput');
    let winePriceInput = document.getElementById('priceInput');
    let wineReviewInput = document.getElementById('mainNote');
    let wineSideNoteInput = document.getElementById('sideNote');
    let winePictureInput = document.getElementById('pictureInput');

    wine.region = wineRegionInput.value;
    wine.castle = wineCastleInput.value;
    wine.year = wineYearInput.value;
    wine.price = winePriceInput.value;
    wine.mainNote = wineReviewInput.value;
    wine.sideNote = wineSideNoteInput.value;
    wine.picture = winePictureInput.value;

    listView();
}
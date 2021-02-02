

function deleteBtn(index) {
    model.existing.splice(index, 1);
    listView();
}

function addReview() {
    let wineRegionInput = model.newNotes[0].region;
    let wineCastleInput = model.newNotes[0].castle;
    let wineYearInput = model.newNotes[0].year;
    let winePriceInput = model.newNotes[0].price;
    let wineReviewInput = model.newNotes[0].mainNote;
    let wineSideNoteInput = model.newNotes[0].sideNote;
    let winePictureInput = model.newNotes[0].picture;
    if (wineRegionInput == '' || wineCastleInput == '' || wineYearInput == '') {
        console.log('error');
        return;    
    } 
        model.existing.push({
        region: wineRegionInput,
        castle: wineCastleInput,
        year: wineYearInput,
        price: winePriceInput,
        mainNote: wineReviewInput,
        sideNote: wineSideNoteInput,
        picture: winePictureInput,

    });
    listView();
}

function editReview(index) {
    const wine = model.existing[index];

    wine.region = model.newNotes[0].region == '' ? wine.region : model.newNotes[0].region;
    wine.castle = model.newNotes[0].castle == '' ? wine.castle : model.newNotes[0].castle;
    wine.year = model.newNotes[0].year == '' ? wine.year : model.newNotes[0].year;
    wine.price = model.newNotes[0].price == '' ? wine.price : model.newNotes[0].price;
    wine.mainNote = model.newNotes[0].mainNote == '' ? wine.mainNote : model.newNotes[0].mainNote;
    wine.sideNote = model.newNotes[0].sideNote == '' ? wine.sideNote : model.newNotes[0].sideNote;
    wine.picture = model.newNotes[0].picture == '' ? wine.picture : model.newNotes[0].picture;

    listView();
}
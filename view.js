const model = {

    existing: [
        { region: 'Bordeaux', castle: 'Chateau Dudon', year: 2002, price: 209.90 + 'kr' },
        { region: 'Bordeaux', castle: 'Chateau Margaux', year: 2013, price: 5784.46 + 'kr' },
        { region: 'Bordeaux', castle: 'Chateau Lafite Rothschild', year: 2016, price: 6300 + 'kr' },
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr' },
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr' },
    ],

    newNotes: [

        {
            regionTxt: '',
            castleTxt: '',
            year,
            price,
            mainNoteTxt: '',
            sideNoteTxt: '',
            notePicture: '',
        }
    ],
};

updateView();
function updateView() {


}

function listOfExistingWines() {
    let vinListe = '';
    for (let i = 0; i < model.existing.length; i++) {

    }
}
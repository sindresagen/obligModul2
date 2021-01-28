// const model = {
    
//     existing: [
//     { region: 'Bordeaux', castle: 'Chateau Dudon', year: 2002, price: 209.90 + 'kr' },
//     { region: 'Bordeaux', castle: 'Chateau Margaux', year: 2013, price: 5784.46 + 'kr' },
//     { region: 'Bordeaux', castle: 'Chateau Lafite Rothschild', year: 2016, price: 6300 + 'kr' },
//     { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr' },
//     { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr' },
//     ],

//     newNotes: [
//         {  },
//     ],
// };

const appDiv = document.getElementById('app');
const model = {

    existing: [
        { region: 'Bordeaux', castle: 'Chateau Dudon', year: 2002, price: 209.90 + 'kr', mainNote: 'APR 19 Ruby. Blueberries, light anise and cassis nose. Fresh acidity, ripe tannins, dark fruity, spicy, blueberries, good length. 85.', sideNote: 'Some text some text some text some text <br /> some text some text some text some text <br /> some text some text some text some text <br /> some text some text some text some text', picture: 'https://smp.vgc.no/v2/images/a14d8da9-40c4-4762-9c20-45e474479468?fit=crop&h=551&w=980&s=9ecc6bc2449b8bebc452ffea460f9c66a01636dc' },
        { region: 'Bordeaux', castle: 'Chateau Margaux', year: 2013, price: 5784.46 + 'kr', mainNote: '', sideNote: '', picture: ''},
        { region: 'Bordeaux', castle: 'Chateau Lafite Rothschild', year: 2016, price: 6300 + 'kr', mainNote: '', sideNote: '', picture: ''},
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr', mainNote: '', sideNote: '', picture: ''},
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr', mainNote: '', sideNote: '', picture: ''},
    ],

    // newNotes: [

    //     {
    //         region: '',
    //         castle: '',
    //         year: '',
    //         price: '',
    //         mainNoteTxt: '',
    //         sideNoteTxt: '',
    //         notePicture: '',
    //     }
    // ],
};
// for (let i = 0; i < model.existing.length; i++){
//     console.log(model.existing[i]);
// };
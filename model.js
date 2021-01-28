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
        { region: 'Bordeaux', castle: 'Chateau Dudon', year: 2002, price: 209.90 + 'kr', mainNote: 'APR 19 Ruby. Blueberries, light anise and cassis nose. Fresh acidity, ripe tannins, dark fruity, spicy, blueberries, good length. 85.', sideNote: 'Some text some text some text some text <br /> some text some text some text some text <br /> some text some text some text some text <br /> some text some text some text some text', picture: 'https://media.discordapp.net/attachments/394567922858721290/804341515283070976/oblig3.jpg?width=901&height=676' },
        { region: 'Bordeaux', castle: 'Chateau Margaux', year: 2013, price: 5784.46 + 'kr', mainNote: '', sideNote: '', picture: 'https://media.discordapp.net/attachments/394567922858721290/804341515283070976/oblig3.jpg?width=901&height=676'},
        { region: 'Bordeaux', castle: 'Chateau Lafite Rothschild', year: 2016, price: 6300 + 'kr', mainNote: '', sideNote: '', picture: 'https://media.discordapp.net/attachments/394567922858721290/804341515283070976/oblig3.jpg?width=901&height=676'},
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr', mainNote: '', sideNote: '', picture: 'https://media.discordapp.net/attachments/394567922858721290/804341515283070976/oblig3.jpg?width=901&height=676'},
        { region: 'Some region', castle: 'Some castle', year: 'N/A', price: 'N/A' + ' kr', mainNote: '', sideNote: '', picture: 'https://media.discordapp.net/attachments/394567922858721290/804341515283070976/oblig3.jpg?width=901&height=676'},
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
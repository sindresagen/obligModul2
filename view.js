
listView();
    function listView() {
        listHTML = `
        <table>
        <tr>
            <th>Region</th>
            <th>Castle</th>
            <th>Year</th>
            <th>Price</th>    
        </tr>
        <td>Bordeaux</td>
            <td>Chateau Dudon</td>
            <td>2002</td>
            <td>209.90</td>
            <td><a class="userLink" onclick="userView()">Read</a></td>
            <td><button class="editBtns">Edit</button></td>
            <td><button class="editBtns">Add</button></td>
            <td><button class="editBtns">X</button></td>
        </table>
        `;
        appDiv.innerHTML = listHTML;
    }

    function userView() {
        userHTML = `<div class="backBtn"><a href="index.html">Back to admin page</a></div>
        <h1>Chateau Dudon</h1>
        <p class="sideNote">Some text some text some text some text <br /> some text some text
            some text some text <br /> some text some text some text
            some text <br /> some text some text some text some text
            <br />
            <br />
            Some text some text some text some text <br /> some text some text
            some text some text <br /> some text some text some text
            some text <br /> some text some text some text some text</p>

            <div><img id="bilde" src="oblig3.jpg"></div>

        <p class="mainNote">APR 19 Ruby. Blueberries, light anise and cassis nose. 
            Fresh acidity, ripe tannins, dark fruity, spicy, blueberries, good length. 85. 
            Some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text some text 
            some text some text some text some text some text some text some text.</p>`;

        appDiv.innerHTML = userHTML;
    }


function listOfExistingWines() {
    let vinListe = '';
    for (let i = 0; i < model.existing.length; i++) {
        console.log(model.existing[i]);
    }
}
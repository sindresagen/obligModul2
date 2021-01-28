
listView();
    function listView() {
        listHTML = `
        <table id="lists"></table>
        `;
        appDiv.innerHTML = listHTML;
        const tableTag = document.getElementById('lists');
        tableContent = `
        <tr id="header">
            <th><button class="addBtns" onclick="newReview()">+</button></th>
            <th>Region</th>
            <th>Castle</th>
            <th>Year</th>
            <th>Price</th> 
            <th>Link</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        `;

        for (let i = 0; i < model.existing.length; i++) {
             tableContent += existingWines(i);         
        }
        tableTag.innerHTML = tableContent;
    }
    
    function existingWines(i){
        const wines = model.existing[i];
        return `
        <tr id="existingRows">
            <td>✔</td>
            <td>${wines.region}</td>
            <td>${wines.castle}</td>
            <td>${wines.year}</td>
            <td>${wines.price}</td>
            <td><a class="userLink" onclick="userView(${i})">Read</a></td>
            <td><button class="editBtns" onclick="editView(${i})">Edit</button></td>
            <td><button class="deleteBtns" onclick="deleteBtn(${i})">X</button></td>
        </tr>
        `;
    }    
    

    function userView(index) {
        userHTML = `<div class="backBtn" onclick="listView()">Back to admin page</div>
        <h1>${model.existing[index].castle}</h1>
        <p class="sideNote">${model.existing[index].sideNote}</p>

            <div><img id="bilde" src="${model.existing[index].picture}"></div>

        <p class="mainNote">${model.existing[index].mainNote}
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

    function newReview() {
        newReviewHTML = `
        <div class="backBtn" onclick="listView()">Back to admin page</div>
        <h2>New Review:</h2>
        <input id="regionInput" class="inputField" type="text" placeholder="Region"> <br />
        <input id="castleInput" class="inputField" type="text" placeholder="Castle"> <br />
        <input id="yearInput" class="inputField" type="text" placeholder="Year"> <br />
        <input id="priceInput" class="inputField" type="text" placeholder="Price"> <br />
        <input id="mainNote" type="text" placeholder="Main notes">
        <input id="sideNote" type="text" placeholder="Side note">
        <img id="imgPlaceholder" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlaceholderLC.png/600px-PlaceholderLC.png">
        <input id="pictureInput" class="picInputField" placeholder="Picture link">
        <button id="addImage">+</button>
        <button class="addNewNote" onclick="addReview()">Add Note</button>
        `;

        appDiv.innerHTML = newReviewHTML;
    }

    function editView(index) {
        const wine = model.existing[index];
        editViewHTML = `
        <div class="backBtn" onclick="listView()">Back to admin page</div>
        <h2>Edit Review:</h2>
        <input id="regionInput" class="inputField" type="text" placeholder="Region" value="${wine.region}"> <br />
        <input id="castleInput" class="inputField" type="text" placeholder="Castle" value="${wine.castle}"> <br />
        <input id="yearInput" class="inputField" type="text" placeholder="Year" value="${wine.year}"> <br />
        <input id="priceInput" class="inputField" type="text" placeholder="Price" value="${wine.price}"> <br />
        <input id="mainNote" type="text" placeholder="Main notes" value="${wine.mainNote}">
        <input id="sideNote" type="text" placeholder="Side note" value="${wine.sideNote}">
        <img id="imgPlaceholder" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlaceholderLC.png/600px-PlaceholderLC.png">
        <input id="pictureInput" class="picInputField" placeholder="Picture link" value="${wine.picture}">
        <button id="addImage">+</button>
        <button class="addNewNote" onclick="editReview(${index})">Done edit</button>
        `;

        appDiv.innerHTML = editViewHTML;
    }

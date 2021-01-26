
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
            <td><a class="userLink" onclick="userView()">Read</a></td>
            <td><button class="editBtns" onclick="editBtn(${i})">Edit</button></td>
            <td><button class="deleteBtns" onclick="deleteBtn(${i})">X</button></td>
        </tr>
        `;
    }    
    

    function userView() {
        userHTML = `<div class="backBtn" onclick="listView()">Back to admin page</div>
        <h1>${model.existing[0].castle}</h1>
        <p class="sideNote">${model.existing[0].sideNote}</p>

            <div><img id="bilde" src="${model.existing[0].picture}"></div>

        <p class="mainNote">${model.existing[0].mainNote}
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
        <input id="regionInput" class="inputField" type="text" placeholder="Region"><button class="addInput">Add</button> <br />
        <input id="castleInput" class="inputField" type="text" placeholder="Castle"><button class="addInput">Add</button> <br />
        <input id="yearInput" class="inputField" type="text" placeholder="Year"><button class="addInput">Add</button> <br />
        <input id="priceInput" class="inputField" type="text" placeholder="Price"><button class="addInput">Add</button> <br />
        <input id="mainNote" type="text" placeholder="Main notes"><button class="addMainNote">Add</button>
        <input id="sideNote" type="text" placeholder="Side note"><button class="addSideNote">Add</button>
        <img id="imgPlaceholder" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlaceholderLC.png/600px-PlaceholderLC.png">
        <input id="pictureInput" class="picInputField" placeholder="Picture link">
        <button id="addImage">+</button>
        `;

        appDiv.innerHTML = newReviewHTML;
    }



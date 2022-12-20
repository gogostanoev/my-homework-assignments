console.log("--- Homework ---");



let mainDiv = document.getElementsByClassName("mainDiv");

let tableInput = document.getElementById("tableInput");

let tableInputTwo = document.getElementById("tableInputTwo");

let clickBtn = document.getElementById("clickBtn");

let tableDiv = document.getElementById("tableDiv");




function dynamicTable(tableInput, createTable, tableInputTwo){

    for(let i = 0; i < tableInput.value; i++){

        let row = document.createElement("tr")

        for(let j = 0; j < tableInputTwo.value; j++){

            let column = document.createElement("td")
            column.innerHTML = `Row ${i + 1} Column ${j + 1}`
            row.appendChild(column);
        }
        createTable.appendChild(row);
    }
}


clickBtn.addEventListener("click", function(){

    tableDiv.innerHTML = "";

    dynamicTable(tableInput, tableDiv, tableInputTwo);
})
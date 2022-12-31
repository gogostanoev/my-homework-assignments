console.log("Exercise #9");


// Write a JavaScript program called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!


// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or constructor function its up to you) and add it to an array!


let fName = document.getElementById("fName");

let lName = document.getElementById("lName");

let phoneNum = document.getElementById("phoneNum");

let saveButton = document.getElementById("saveButton");

let tableInfo = document.getElementById("tableInfo");


/*  I create a function with 4 parameters that will create data in them

    I initialize 3 different variables and in them I create the columns

    On each of the newly created variables I assign the parameters value
    with inner.HTML
    
    Then I append the variables in the row I created previously

    After that, I append the row into the tableContainer because the row
    contains all the information(variables)

    I create an addEventListener for the button so I can click the button
    and inside I call out the function so it will display the data

*/


function phoneBook(firstName, lastName, phoneNumber, tableContainer){

    let row = document.createElement("tr");

    let firstNameData = document.createElement("td");

    let lastNameData = document.createElement("td");

    let phoneNumberData = document.createElement("td");

    firstNameData.innerHTML = firstName;

    lastNameData.innerHTML = lastName;

    phoneNumberData.innerHTML = phoneNumber;

    row.appendChild(firstNameData);

    row.appendChild(lastNameData);

    row.appendChild(phoneNumberData);

    tableContainer.appendChild(row);
}


saveButton.addEventListener("click", function(){

    phoneBook(fName.value, lName.value, phoneNum.value, tableInfo);
    
})


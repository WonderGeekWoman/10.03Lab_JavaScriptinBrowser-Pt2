// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to add user-entered tasks to a to-do list when the Add button is clicked

//Dynamically change h1's font
let element = document.querySelector("h1");
element.style.fontFamily = 'Verdana, cursive, "Apple Chancery"';

//This function will run when the HTML document is loaded
function domLoaded() {
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addBtnClick);
}

document.addEventListener("DOMContentLoaded", domLoaded);

// This function will be called when the Add button is clicked
function addBtnClick() {
    let newTaskInput = document.getElementById("newTask");
    let newTaskText = newTaskInput.value;
    addTask(newTaskText);
}

//This function will add the text of the entered task to the list
function addTask() {
    let addItem = document.createElement("li");
    addItem.innerHTML = `<span class="taskText">${addItem}</span><button class="doneBtn>&#10006;</button>`;
}
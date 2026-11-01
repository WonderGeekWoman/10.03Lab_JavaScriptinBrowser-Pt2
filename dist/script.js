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
    let toDoInput = document.getElementById(toDo);
    toDoInput
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

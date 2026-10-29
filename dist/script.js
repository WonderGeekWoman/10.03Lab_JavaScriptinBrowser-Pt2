// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to add user-entered tasks to a to-do list when the Add button is clicked

//Dynamically change h1's font
let element = document.getElementById("h1");
element.style.family = '"Brush Script MT", "Lucinda Handwriting", "Apple Chancery", cursive';

function addNewTask() {
    domLoaded();
    //register addBtnClick()
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

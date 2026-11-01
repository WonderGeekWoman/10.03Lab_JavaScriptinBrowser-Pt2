// This is a simple JavaScript file that adds interactivity to the HTML page
// It gathers and displays the user-input for a new task when the Add button is clicked
// or the Enter key is pressed. It also allows the user to delete any task by clicking on the X
// next to the un-desired task.

// This function will run when the HTML document is loaded
function domLoaded() {
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addBtnClick);
    newTask.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
}

document.addEventListener("DOMContentLoaded", domLoaded);

// This function is called when the Add button is clicked or Enter is pressed.
function addBtnClick() {
    let newTaskInput = document.getElementById("newTask");
    let newTaskText = newTaskInput.value;
    addTask(newTaskText);
    newTaskInput = "";
    newTaskInput.focus();
}

// This function is called by addBtnClick()
function addTask(newItem) {
    if (newItem != "") {
        let addItem = document.createElement("li");
        addItem.innerHTML = `<span class="taskText">${newItem}</span><button class="doneBtn">&#10006;</button>`;
        document.querySelector("ol").appendChild(addItem);
    } else {
        console.log("Please enter a task");
        //need to display it too
    }
}
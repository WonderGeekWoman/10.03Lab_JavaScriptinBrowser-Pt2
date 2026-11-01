// This is a simple JavaScript file that adds interactivity to the HTML page
// It gathers and displays the user-input for a new task when the Add button is clicked
// or the Enter key is pressed. It also allows the user to delete any task by clicking on the X
// next to the un-desired task.

// This function will run when the HTML document is loaded
function domLoaded() {
    let addBtn = document.getElementById("add-btn");
    let newTask = document.getElementById("new-task");
    addBtn.addEventListener("click", addBtnClick);
    newTask.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
    addBtn.insertAdjacentHTML("afterend", `<span id="error-text" style="color: red; margin-left:15px; position: absolute;"></span>`);
}

document.addEventListener("DOMContentLoaded", domLoaded);

// This function is called when the Add button is clicked or Enter is pressed.
function addBtnClick() {
    let newTaskInput = document.getElementById("new-task");
    let newTaskText = newTaskInput.value.trim();
    if (newTaskText != "") {
        addTask(newTaskText);
        newTaskInput.value = "";
        newTaskInput.focus();
        document.getElementById("error-text").textContent = "";
    } else {
        document.getElementById("error-text").textContent = "Please enter a task";
        newTaskInput.value = "";
        newTaskInput.focus();
    }
}

// This function is called by addBtnClick()
function addTask(newItem) {
    let addItem = document.createElement("li");
    addItem.innerHTML = `<span class="taskText">${newItem}</span><button class="done-btn">&#10006;</button>`;
    document.querySelector("ol").appendChild(addItem);

    let buttons = document.querySelectorAll(".done-btn");
    let lastBtn = buttons[buttons.length - 1];
    lastBtn.addEventListener("click", removeTask);
}
        
// This function is called by addTask()
function removeTask(event) {
    let listParent = event.target.parentNode;
    let listTotal = listParent.parentNode;
    listTotal.removeChild(listParent);
}
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");

  // Handle Add button click
  addBtn.addEventListener("click", addBtnClick);

  // Handle Enter key
  taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });
}

function addBtnClick() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();

  // Prevent empty tasks
  if (newTask === "") {
    return;
  }

  // Add the task
  addTask(newTask);

  // Clear and refocus
  taskInput.value = "";
  taskInput.focus();
}

function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

  const ol = document.querySelector("#taskList");
  ol.appendChild(li);

  // Register remove button for the newly added task
  const doneButtons = document.querySelectorAll(".done-btn");
  const lastButton = doneButtons[doneButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  const li = event.target.parentNode;
  const ol = li.parentNode;
  ol.removeChild(li);
}

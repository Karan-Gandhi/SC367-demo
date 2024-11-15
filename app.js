const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="btn btn-success btn-sm complete-btn">Complete</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    `;

  taskList.appendChild(li);

  taskInput.value = "";
}

taskList.addEventListener("click", e => {
  if (e.target.classList.contains("complete-btn")) {
    const task = e.target.parentElement.previousElementSibling;
    task.classList.toggle("completed");
  }

  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    taskList.removeChild(li);
  }
});

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTask();
  }
});

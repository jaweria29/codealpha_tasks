document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("clearCompleted").addEventListener("click", clearCompletedTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => {
    li.classList.toggle("completed");
  };

  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.flex = "1";

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null) span.textContent = newTask.trim();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  li.append(checkbox, span, editBtn, deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

function clearCompletedTasks() {
  document.querySelectorAll("li.completed").forEach(li => li.remove());
}

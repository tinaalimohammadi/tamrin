const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function createTask(text) {
  const task = document.createElement("div");
  task.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const trash = document.createElement("div");
  trash.className = "trash";
  trash.textContent = "🗑";

  trash.onclick = () => task.remove();

  task.appendChild(checkbox);
  task.appendChild(span);
  task.appendChild(trash);

  list.appendChild(task);
}

function addTask() {
  const text = input.value.trim();
  if (!text) return;
  createTask(text);
  input.value = "";
  input.focus();
}
addBtn.onclick = addTask;

["Learn React", "Push to Github", "Push to Github"].forEach(createTask);

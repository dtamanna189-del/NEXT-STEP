let tasks = [];

// Add Task
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (!text) return;

  tasks.push({ text, completed: false });
  input.value = "";

  renderTasks();
}

// Render
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <div class="task-card">
        <div class="task-left">
          <input type="checkbox" ${task.completed ? "checked" : ""}
            onchange="toggleTask(${index})">
          <span class="${task.completed ? "completed" : ""}">
            ${task.text}
          </span>
        </div>

        <button class="delete-btn" onclick="deleteTask(${index})">
          Delete
        </button>
      </div>
    `;
  });

  updateProgress();
}

// Toggle
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Progress
function updateProgress() {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;

  const percent = total ? (done / total) * 100 : 0;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    Math.round(percent) + "% completed";
}
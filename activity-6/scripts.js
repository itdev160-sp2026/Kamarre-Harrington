const state = {
  tasks: [],
  filter: "all"
};

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const list = document.getElementById("todo-list");
const emptyState = document.getElementById("emptyState");

// Add Task
function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false,
    priority: prioritySelect.value
  };

  state.tasks.push(task);
  render();
}

// Create Task Element
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-item " + (task.completed ? "completed" : "");

  li.innerHTML = `
    <div class="task-priority priority-${task.priority}"></div>
    <span>${task.text}</span>
    <div class="task-actions">
      <button class="task-btn toggle-btn" data-id="${task.id}">✔</button>
      <button class="task-btn delete-btn" data-id="${task.id}">🗑</button>
    </div>
  `;

  return li;
}

// Delete Task
function deleteTask(id) {
  if (confirm("Delete this task?")) {
    state.tasks = state.tasks.filter(t => t.id != id);
    render();
  }
}

// Toggle Task
function toggleTaskStatus(id) {
  const task = state.tasks.find(t => t.id == id);
  task.completed = !task.completed;
  render();
}

// Filter
function filterTasks(tasks) {
  if (state.filter === "pending") return tasks.filter(t => !t.completed);
  if (state.filter === "completed") return tasks.filter(t => t.completed);
  return tasks;
}

// Render
function render() {
  list.innerHTML = "";

  const filtered = filterTasks(state.tasks);

  filtered.forEach(task => {
    list.appendChild(createTaskElement(task));
  });

  emptyState.classList.toggle("hidden", state.tasks.length > 0);
}

// Event Listeners
document.getElementById("addTaskBtn").addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});

// Delegation
list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("delete-btn")) {
    deleteTask(id);
  }

  if (e.target.classList.contains("toggle-btn")) {
    toggleTaskStatus(id);
  }
});

// Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    state.filter = btn.dataset.filter;
    render();
  });
});

// Bulk Actions
document.getElementById("markAllDoneBtn").onclick = () => {
  state.tasks.forEach(t => t.completed = true);
  render();
};

document.getElementById("deleteCompletedBtn").onclick = () => {
  state.tasks = state.tasks.filter(t => !t.completed);
  render();
};

document.getElementById("clearAllBtn").onclick = () => {
  state.tasks = [];
  render();
};
console.log("Activity 4 Loaded Successfully");

/* =========================
   Part A: Element Creation
========================= */

const newParagraph = document.createElement("p");
console.log("Created element:", newParagraph);

newParagraph.textContent = "This paragraph was created using JavaScript!";
console.log("Modified element:", newParagraph);

/* =========================
   Part B: Element Styling
========================= */

newParagraph.style.color = "blue";
newParagraph.style.fontWeight = "bold";

newParagraph.classList.add("demo-class");
console.log("Class added:", newParagraph.classList.contains("demo-class"));

newParagraph.classList.remove("demo-class");
console.log("Class removed:", newParagraph.classList.contains("demo-class"));

newParagraph.classList.toggle("demo-class");
console.log("Class toggled:", newParagraph.classList.contains("demo-class"));

/* =========================
   Part C: Appending Elements
========================= */

const outputDiv = document.getElementById("output");

outputDiv.appendChild(newParagraph);
console.log("Paragraph appended to output div");

const prependedElement = document.createElement("p");
prependedElement.textContent = "This was prepended!";
outputDiv.prepend(prependedElement);

const insertedElement = document.createElement("p");
insertedElement.textContent = "Inserted before paragraph!";
outputDiv.insertBefore(insertedElement, newParagraph);

// Remove demonstration
// outputDiv.removeChild(insertedElement);

/* =========================
   Part D: To-Do Core Function
========================= */

let totalTasks = 0;
let completedTasks = 0;

function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("pending");

    li.onclick = function () {
        toggleTask(li);
    };

    document.getElementById("todo-list").appendChild(li);

    totalTasks++;
    console.log("Task added:", taskText);
    updateStats();

    input.value = "";
}

/* =========================
   Part E: Task State Management
========================= */

function toggleTask(taskElement) {
    if (taskElement.classList.contains("done")) {
        taskElement.classList.remove("done");
        taskElement.classList.add("pending");
        completedTasks--;
    } else {
        taskElement.classList.remove("pending");
        taskElement.classList.add("done");
        completedTasks++;
    }

    console.log("Task toggled:", taskElement.textContent);
    updateStats();
}

function updateStats() {
    console.log("Total Tasks:", totalTasks);
    console.log("Completed Tasks:", completedTasks);
}
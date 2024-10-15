const taskInput = document.getElementById("task-input");
const taskDeadlineInput = document.getElementById("task-deadline");
const taskPriorityInput = document.getElementById("task-priority");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearAllButton = document.getElementById("clear-tasks");
const filterCompletedButton = document.getElementById("filter-completed");
const filterIncompleteButton = document.getElementById("filter-incomplete");

let taskArray = JSON.parse(localStorage.getItem("taskArray")) || [];
let id = taskArray.length > 0 ? taskArray[taskArray.length - 1].id + 1 : 0;

function addTask() {
    const taskText = taskInput.value;
    const taskDeadline = taskDeadlineInput.value;
    const taskPriority = taskPriorityInput.value;

    if (taskText !== "") {
        const task = {
            id: id++,
            text: taskText,
            deadline: taskDeadline || 'No Deadline',
            priority: taskPriority,
            completed: false,
        };
        taskArray.push(task);
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
        taskInput.value = "";
        taskDeadlineInput.value = "";
        viewTasks();
    } else {
        alert("Please enter a task");
    }
}

function viewTasks(filteredTasks = taskArray) {
    taskList.innerHTML = "";
    filteredTasks.forEach((task) => {
        const taskListItem = document.createElement("li");
        taskListItem.innerHTML = `
            ${task.text} - <strong>Priority:</strong> ${task.priority} - <strong>Deadline:</strong> ${task.deadline}
        `;
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.id = "edit-button";
        editButton.addEventListener("click", () => editTask(task.id));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.id = "remove-button";
        removeButton.addEventListener("click", () => removeTask(task.id));

        const toggleButton = document.createElement("button");
        toggleButton.id = "toggle-button";
        toggleButton.textContent = task.completed ? "Mark Incomplete" : "Mark Completed";
        toggleButton.addEventListener("click", () => toggleTaskCompletion(task.id));

        taskListItem.appendChild(editButton);
        taskListItem.appendChild(removeButton);
        taskListItem.appendChild(toggleButton);
        taskList.appendChild(taskListItem);
    });
}

function removeTask(id) {
    taskArray = taskArray.filter(task => task.id !== id);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    viewTasks();
}

function toggleTaskCompletion(id) {
    taskArray = taskArray.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    viewTasks();
}

function editTask(id) {
    const task = taskArray.find(task => task.id === id);
    taskInput.value = task.text;
    taskDeadlineInput.value = task.deadline;
    taskPriorityInput.value = task.priority;
    removeTask(id);
}

function filterTasks(completed) {
    const filteredTasks = taskArray.filter(task => task.completed === completed);
    viewTasks(filteredTasks);
}

filterCompletedButton.addEventListener("click", () => filterTasks(true));
filterIncompleteButton.addEventListener("click", () => filterTasks(false));
addTaskButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", () => {
    taskArray = [];
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    viewTasks();
});

viewTasks();

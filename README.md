# Task Manager

This project is a simple task management application that allows users to add, view, edit, remove, and filter tasks. The application uses the browser's `localStorage` to persist tasks across page reloads.

## Features

- Add tasks with a description, deadline, and priority.
- View tasks in a list.
- Edit existing tasks.
- Remove tasks from the list.
- Mark tasks as completed or incomplete.
- Filter tasks based on their completion status.
- Clear all tasks.

## Code Overview

### HTML Structure

The HTML file (`index.html`) includes the following elements:

- Input fields for task details (`task-input`, `task-deadline`, `task-priority`).
- Buttons for adding tasks (`add-task`), clearing all tasks (`clear-tasks`), and filtering tasks (`filter-completed`, `filter-incomplete`).
- A list container (`task-list`) to display the tasks.

### JavaScript Functionality

The JavaScript file (`index.js`) contains the following key functions:

- `addTask()`: Creates a new task and adds it to the task array.
- `viewTasks(filteredTasks = taskArray)`: Displays the tasks in the list.
- `removeTask(id)`: Removes a task by its ID.
- `toggleTaskCompletion(id)`: Toggles the completion status of a task.
- `editTask(id)`: Allows editing a task by its ID.
- `filterTasks(completed)`: Filters tasks based on their completion status.

### Event Listeners

Event listeners are added to handle user interactions:

- `addTaskButton`: Adds a new task when clicked.
- `clearAllButton`: Clears all tasks when clicked.
- `filterCompletedButton`: Filters and displays completed tasks when clicked.
- `filterIncompleteButton`: Filters and displays incomplete tasks when clicked.

### Local Storage

The tasks are stored in `localStorage` to persist data across page reloads. The task array is initialized by retrieving any existing tasks from `localStorage` or setting it to an empty array if no tasks are found.

## Getting Started

To run the application, simply open the `index.html` file in a web browser.

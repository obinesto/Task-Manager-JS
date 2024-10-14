const taskInput= document.getElementById('task-input');
const addTaskButton= document.getElementById('add-task');
const taskList= document.getElementById('task-list');
addTaskButton.addEventListener('click',() => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
});

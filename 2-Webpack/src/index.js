import './style.css';
import createBaseComponents from './components/base_components.js';
import TaskElements from './components/task_components.js';
import Constants from './constants.js';

document.body.appendChild(createBaseComponents());

const addTaskButton = document.querySelector(classSelectorFor(Constants.AddTaskClassNames.ADD_TASK_BUTTON))
addTaskButton.addEventListener("click", (event) => addTask(event), false);

function addTask() {
    const taskInput = document.querySelector(classSelectorFor(Constants.AddTaskClassNames.TASK_INPUT));

    if (taskInput.value != '') {
        createTask(taskInput.value);
        taskInput.value = '';
    }
};

function createTask(taskInput) {
    const table = document.querySelector(classSelectorFor(Constants.AddTaskClassNames.INCOMPLETE_TASKS_TABLE));
    const checkbox = TaskElements.createCheckbox();
    const taskText = TaskElements.createTaskTextElement(taskInput);
    const editButton = TaskElements.createEditButton();
    const removebutton = TaskElements.createRemoveButton();

    checkbox.addEventListener("change", (event) => itemCheckboxChange(event), false);
    editButton.addEventListener("click", (event) => editItem(event), false);
    removebutton.addEventListener("click", (event) => removeItem(event), false);

    const row = table.insertRow();
    row.dataset.edit_mode = 'false';
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(removebutton);
};

function itemCheckboxChange(event) {
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const taskTextElement = taskTextCell.querySelector(classSelectorFor(Constants.SingleTaskClassNames.TEXT));
    const editButton = row.querySelector(classSelectorFor(Constants.SingleTaskClassNames.EDIT_BUTTON));
    
    if (event.target.checked) {
        const strikeThrough = TaskElements.createStrikeThroughElement();
        taskTextCell.appendChild(strikeThrough);
        strikeThrough.appendChild(taskTextElement);
        editButton.style.display = 'none';
    } else {
        const strikeThrough = taskTextCell.querySelector(classSelectorFor(Constants.SingleTaskClassNames.STRIKE_THROUGH));
        taskTextCell.appendChild(taskTextElement);
        strikeThrough.remove();
        editButton.style.display = 'inline-block';
    };
};

function removeItem(event) {
    const row = event.path[2];
    row.remove();
};

function editItem(event) {
    const editButton = event.target;
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const checkbox = row.cells[0].firstChild;

    if (isItemEditMode(row)) {
        exitEditModeAndUpdate(row, checkbox, taskTextCell, editButton);
    } else {
        enterItemEditMode(row, checkbox, taskTextCell, editButton);
    };
};

function enterItemEditMode(row, checkbox, taskTextCell, editButton) {
    const taskTextElement = taskTextCell.querySelector(classSelectorFor(Constants.SingleTaskClassNames.TEXT));

    const editInput = TaskElements.createTaskEditInput(taskTextElement.textContent);

    taskTextCell.appendChild(editInput);
    taskTextElement.remove();

    toggleEditButtonText(editButton);
    row.dataset.edit_mode = 'true';
    checkbox.disabled = true;
};

function exitEditModeAndUpdate(row, checkbox, taskTextCell, editButton) {
    const newTaskInput = taskTextCell.querySelector(classSelectorFor(Constants.SingleTaskClassNames.EDIT_INPUT));
    const newTaskText = TaskElements.createTaskTextElement(newTaskInput.value);
    taskTextCell.appendChild(newTaskText);
    newTaskInput.remove();
    toggleEditButtonText(editButton);
    row.dataset.edit_mode = 'false';
    checkbox.disabled = false;
};

function toggleEditButtonText(editButton) {
    isItemEditMode(editButton) ? editButton.value = Constants.ButtonTexts.EDIT : editButton.value = Constants.ButtonTexts.SAVE;
};

function isItemEditMode(row) {
    return row.dataset.edit_mode == 'true';
};

function classSelectorFor(className) { 
    return '.' + className 
};
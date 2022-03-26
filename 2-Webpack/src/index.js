import './style.css';
import createBaseComponents from './components/base_components.js';
import TaskElements from './components/task_components.js';
import Constants from './constants.js';
import { classSelectorFor } from './helpers.js';
import SingleTask from './single_task_logic.js';

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

    checkbox.addEventListener("change", (event) => SingleTask.itemCheckboxChange(event), false);
    editButton.addEventListener("click", (event) => SingleTask.editItem(event), false);
    removebutton.addEventListener("click", (event) => SingleTask.removeItem(event), false);

    const row = table.insertRow();
    row.dataset.edit_mode = 'false';
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(removebutton);
};
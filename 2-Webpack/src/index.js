import './style.css';
import createBaseComponents from './base_components.js';
import createElement from './helpers.js';
import Constants from './constants.js';

createBaseComponents();

function addTask() {
    const input = document.querySelector('.task_input').value;

    if (input != '') {
        createTask(input);
        form.task_input.value = '';
    }
};

function createTask(taskInput) {
    const table = document.querySelector('.incomplete_tasks_body');
    const checkbox = createCheckbox();
    const taskText = createTaskTextElement(taskInput);
    const editButton = createEditButton();
    const deleteButton = createRemoveButton();

    const row = table.insertRow();
    row.dataset.edit_mode = 'false';
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(deleteButton);
};

function itemCheckboxChange(event) {
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const taskTextElement = taskTextCell.querySelector(selectorFor(Constants.SingleTaskClassNames.TEXT));
    const editButton = row.querySelector(selectorFor(Constants.SingleTaskClassNames.EDIT_BUTTON));
    
    if (event.target.checked) {
        const strikeThrough = createStrikeThroughElement();
        taskTextCell.appendChild(strikeThrough);
        strikeThrough.appendChild(taskTextElement);
        editButton.style.display = 'none';
    } else {
        const strikeThrough = taskTextCell.querySelector(selectorFor(Constants.SingleTaskClassNames.STRIKE_THROUGH));
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
    const taskTextElement = taskTextCell.querySelector(selectorFor(Constants.SingleTaskClassNames.TEXT));

    const editInput = createTaskEditInput(taskTextElement.textContent);

    taskTextCell.appendChild(editInput);
    taskTextElement.remove();

    toggleEditButtonText(editButton);
    row.dataset.edit_mode = 'true';
    checkbox.disabled = true;
};

function exitEditModeAndUpdate(row, checkbox, taskTextCell, editButton) {
    const newTaskInput = taskTextCell.querySelector(selectorFor(Constants.SingleTaskClassNames.EDIT_INPUT));
    const newTaskText = createTaskTextElement(newTaskInput.value);
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

function selectorFor(className) { 
    return '.' + className 
};

//     Elements Creation

function createTaskTextElement(taskInput) {
    return createElement( {
        tag: 'p',
        textContent: taskInput,
        className: Constants.SingleTaskClassNames.TEXT,
    });
};

function createTaskEditInput(taskText) {
    return createElement( {
        tag: 'input',
        type: 'text',
        className: Constants.SingleTaskClassNames.EDIT_INPUT,
        value: taskText,
    });
};

function createStrikeThroughElement() {
    return createElement( {
        tag: 'del',
        className: Constants.SingleTaskClassNames.STRIKE_THROUGH,
    });;
};

function createCheckbox() {
    const checkbox = createElement( {
        tag: 'input',
        type: 'checkbox',
        className: Constants.SingleTaskClassNames.CHECKBOX,
    });

    checkbox.addEventListener("change", (event) => itemCheckboxChange(event), false);
    return checkbox;
};

function createEditButton() {
    const editButton = createElement( {
        tag: 'input',
        type: 'button',
        className: Constants.SingleTaskClassNames.EDIT_BUTTON,
        value: Constants.ButtonTexts.EDIT,
    });

    editButton.addEventListener("click", (event) => editItem(event), false);
    return editButton;
};

function createRemoveButton() {
    const removebutton = createElement( {
        tag: 'input',
        type: 'button',
        className: Constants.SingleTaskClassNames.REMOVE_BUTTON,
        value: Constants.ButtonTexts.REMOVE,
    });
    
    removebutton.addEventListener("click", (event) => removeItem(event), false);
    return removebutton;
};
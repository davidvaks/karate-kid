import { classSelectorFor } from './helpers.js';
import Constants from './constants.js';
import TaskElements from './components/task_components.js';

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

const SingleTask = {
    itemCheckboxChange: itemCheckboxChange,
    removeItem: removeItem,
    editItem: editItem,
}

export default SingleTask;
const ButtonTexts = {
    EDIT: 'Edit',
    REMOVE: 'X',
    SAVE: 'Save'
};

const SingleTaskClassNames = {
    CHECKBOX: 'task_checkbox',
    TEXT: 'task_text',
    EDIT_INPUT: 'task_edit_input',
    EDIT_BUTTON: 'task_edit_button',
    REMOVE_BUTTON: 'task_remove_button',
    STRIKE_THROUGH: 'task_strike_through',
}

const addTask = () => {
    const form = document.querySelector('#new_task_form');
    const input =  form.task_input.value;

    if (input != '') {
        const tableBody = document.querySelector('.incomplete_tasks>tbody');
        createTaskNewRow(tableBody, input);
        form.task_input.value = '';
    }
};

const createTaskNewRow = (table, taskInput) => {
    const checkbox = createCheckbox();
    const taskText = createTaskTextElement(taskInput);
    const editButton = createEditButton();
    const deleteButton = createRemoveButton();

    const row = table.insertRow();
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(deleteButton);
};

const itemCheckboxChange = (event) => {
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const taskTextElement = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.TEXT));
    
    if (event.target.checked) {
        const strikeThrough = createStrikeThroughElement();
        taskTextCell.appendChild(strikeThrough);
        strikeThrough.appendChild(taskTextElement);
    } else {
        const strikeThrough = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.STRIKE_THROUGH));
        taskTextCell.appendChild(taskTextElement);
        strikeThrough.remove();
    };
};

const removeItem = (event) => {
    const row = event.path[2];
    row.remove();
};

const editItem = (event) => {
    const editButton = event.target;
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const checkbox = row.cells[0].firstChild;

    if (isItemEditMode(editButton)) {
        exitEditModeAndUpdate(checkbox, taskTextCell, editButton);
    } else {
        enterItemEditMode(checkbox, taskTextCell, editButton);
    };
};

const enterItemEditMode = (checkbox, taskTextCell, editButton) => {
    const taskTextElement = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.TEXT));

    const editInput = createTaskEditInput(taskTextElement.textContent);

    taskTextCell.appendChild(editInput);
    taskTextElement.remove();

    toggleEditButtonText(editButton);
    checkbox.disabled = true;
};

const exitEditModeAndUpdate = (checkbox, taskTextCell, editButton) => {
    const newTaskInput = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.EDIT_INPUT));
    const newTaskText = createTaskTextElement(newTaskInput.value);
    taskTextCell.appendChild(newTaskText);
    newTaskInput.remove();
    toggleEditButtonText(editButton);
    checkbox.disabled = false;
};

const toggleEditButtonText = (editButton) => {
    isItemEditMode(editButton) ? editButton.value = ButtonTexts.EDIT : editButton.value = ButtonTexts.SAVE;
};

const isItemEditMode = (editButton) => {
    return editButton.value == ButtonTexts.SAVE;
};

const selectorFor = (className) => '.' + className;

//     Elements Creation

const createTaskTextElement = (taskInput) => {
    const taskText = document.createElement('p');
    taskText.textContent = taskInput;
    taskText.className = SingleTaskClassNames.TEXT;
    return taskText;
};

const createTaskEditInput = (taskText) => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = SingleTaskClassNames.EDIT_INPUT;
    editInput.value = taskText;
    return editInput;
};

const createStrikeThroughElement = () => {
    const strikeThrough = document.createElement('del');
    strikeThrough.className = SingleTaskClassNames.STRIKE_THROUGH;
    return strikeThrough;
};

const createCheckbox = () => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = SingleTaskClassNames.CHECKBOX;
    checkbox.addEventListener("change", (event) => itemCheckboxChange(event), false);
    return checkbox;
};

const createEditButton = () => {
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.className = SingleTaskClassNames.EDIT_BUTTON;
    editButton.value = ButtonTexts.EDIT;
    editButton.addEventListener("click", (event) => editItem(event), false);
    return editButton;
};

const createRemoveButton = () => {
    const removebutton = document.createElement('input');
    removebutton.type = 'button';
    removebutton.className = SingleTaskClassNames.REMOVE_BUTTON;
    removebutton.value = ButtonTexts.REMOVE;
    removebutton.addEventListener("click", (event) => removeItem(event), false);
    return removebutton;
};
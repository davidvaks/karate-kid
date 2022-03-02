const ButtonTexts = {
    EDIT: 'Edit',
    REMOVE: 'X',
    SAVE: 'Save'
};

const SingleTaskParts = {
    CHECKBOX: 'task_checkbox',
    TEXT: 'task_text',
    EDIT_INPUT: 'task_edit_input',
    EDIT_BUTTON: 'task_edit_button',
    REMOVE_BUTTON: 'task_remove_button'
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
    const checkbox = document.createElement('input');
    const taskText = createTaskTextElement(taskInput);
    const editButton = document.createElement('input');
    const deleteButton = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.className = SingleTaskParts.CHECKBOX;

    editButton.type = 'button';
    editButton.className = SingleTaskParts.EDIT_BUTTON;
    editButton.value = ButtonTexts.EDIT;

    deleteButton.type = 'button';
    deleteButton.className = SingleTaskParts.REMOVE_BUTTON;
    deleteButton.value = ButtonTexts.REMOVE;

    const row = table.insertRow();
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => deleteItem(event), false);
    editButton.addEventListener("click", (event) => editItem(event), false);
    checkbox.addEventListener("change", (event) => itemCheckboxChange(event), false);
};

const itemCheckboxChange = (event) => {
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const taskTextElement = taskTextCell.querySelector('p');
    
    if (event.target.checked) {
        const strikeThrough = document.createElement('del');
        taskTextCell.appendChild(strikeThrough);
        strikeThrough.appendChild(taskTextElement);
    } else {
        const text = taskTextCell.querySelector('p');
        const strikeThrough = taskTextCell.querySelector('del');
        taskTextCell.appendChild(text);
        strikeThrough.remove();
    };
};

const deleteItem = (event) => {
    const row = event.path[2];
    row.remove();
};

const editItem = (event) => {
    const editButton = event.target;
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const checkbox = row.cells[0].firstChild;

    if (itemEditMode(editButton)) {
        exitEditModeAndUpdate(checkbox, taskTextCell, editButton);
    } else {
        enterItemEditMode(checkbox, taskTextCell, editButton);
    };
};

const enterItemEditMode = (checkbox, taskTextCell, editButton) => {
    const taskTextElement = taskTextCell.querySelector('p');

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = SingleTaskParts.EDIT_INPUT;
    editInput.value = taskTextElement.textContent;

    taskTextCell.appendChild(editInput);
    taskTextElement.remove();

    toggleEditButtonText(editButton);
    checkbox.disabled = true;
};

const exitEditModeAndUpdate = (checkbox, taskTextCell, editButton) => {
    const newTaskInput = taskTextCell.querySelector('input');
    const newTaskText = createTaskTextElement(newTaskInput.value);
    taskTextCell.appendChild(newTaskText);
    newTaskInput.remove();
    toggleEditButtonText(editButton);
    checkbox.disabled = false;
};

const createTaskTextElement = (taskInput) => {
    const taskText = document.createElement('p');
    taskText.textContent = taskInput;
    taskText.className = SingleTaskParts.TEXT;
    return taskText;
}

const toggleEditButtonText = (editButton) => {
    itemEditMode(editButton) ? editButton.value = ButtonTexts.EDIT : editButton.value = ButtonTexts.SAVE;
};

const itemEditMode = (editButton) => {
    return editButton.value == ButtonTexts.SAVE;
};
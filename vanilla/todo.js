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
    // maybe add a helper that wraps document.querySelector(xxx) instead of writing it every time?
    const form = document.querySelector('#new_task_form');
    // you are only using task_input in this function why not select it directly?
    const input =  form.task_input.value;

    if (input != '') {
        // why is this line here and not inside "createTask" ?
        // It's nicer to write .xxx > .yyy
        // and better not select any element by tag-name - always have a class / id / attribute to select by
        const tableBody = document.querySelector('.incomplete_tasks>tbody');
        createTaskNewRow(tableBody, input);
        form.task_input.value = '';
    }
};

// not sure about the name "row" - it's abstract task creation - maybe it wont be a row in the future?
const createTaskNewRow = (table, taskInput) => {
    const checkbox = createCheckbox();
    const taskText = createTaskTextElement(taskInput);
    const editButton = createEditButton();
    const deleteButton = createRemoveButton();

    // can all this be in a generic helper that gets any number of table row children cells?
    const row = table.insertRow();
    row.insertCell(0).appendChild(checkbox);
    row.insertCell(1).appendChild(taskText);
    row.insertCell(2).appendChild(editButton);
    row.insertCell(3).appendChild(deleteButton);
};

const itemCheckboxChange = (event) => {
    // i'm not sure path is encouraged or standard, and even if it was, it's too fragile
    // what if you changed the html? this would break. maybe use "Element.closest" ?
    const row = event.path[2];
    const taskTextCell = row.cells[1]; // this is fragile too
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
    const row = event.path[2]; // dont use path
    row.remove();
};

const editItem = (event) => {
    const editButton = event.target;
    const row = event.path[2]; // no path
    const taskTextCell = row.cells[1]; // fragile
    const checkbox = row.cells[0].firstChild; // same

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
    // maybe there's a better way than checking the text - it's fragile and could change
    return editButton.value == ButtonTexts.SAVE;
};

const selectorFor = (className) => '.' + className;

//     Elements Creation
// how about a generic element creator helper that also sets props?
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
    // why do you need strikethrough class if you're using del?
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
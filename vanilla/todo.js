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
    const input = document.querySelector('.task_input').value;

    if (input != '') {
        createTask(input);
        form.task_input.value = '';
    }
};

const createTask = (taskInput) => {
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

const itemCheckboxChange = (event) => {
    const row = event.path[2];
    const taskTextCell = row.cells[1];
    const taskTextElement = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.TEXT));
    const editButton = row.querySelector(selectorFor(SingleTaskClassNames.EDIT_BUTTON));
    
    if (event.target.checked) {
        const strikeThrough = createStrikeThroughElement();
        taskTextCell.appendChild(strikeThrough);
        strikeThrough.appendChild(taskTextElement);
        editButton.style.display = 'none';
    } else {
        const strikeThrough = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.STRIKE_THROUGH));
        taskTextCell.appendChild(taskTextElement);
        strikeThrough.remove();
        editButton.style.display = 'inline-block';
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

    if (isItemEditMode(row)) {
        exitEditModeAndUpdate(row, checkbox, taskTextCell, editButton);
    } else {
        enterItemEditMode(row, checkbox, taskTextCell, editButton);
    };
};

const enterItemEditMode = (row, checkbox, taskTextCell, editButton) => {
    const taskTextElement = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.TEXT));

    const editInput = createTaskEditInput(taskTextElement.textContent);

    taskTextCell.appendChild(editInput);
    taskTextElement.remove();

    toggleEditButtonText(editButton);
    row.dataset.edit_mode = 'true';
    checkbox.disabled = true;
};

const exitEditModeAndUpdate = (row, checkbox, taskTextCell, editButton) => {
    const newTaskInput = taskTextCell.querySelector(selectorFor(SingleTaskClassNames.EDIT_INPUT));
    const newTaskText = createTaskTextElement(newTaskInput.value);
    taskTextCell.appendChild(newTaskText);
    newTaskInput.remove();
    toggleEditButtonText(editButton);
    row.dataset.edit_mode = 'false';
    checkbox.disabled = false;
};

const toggleEditButtonText = (editButton) => {
    isItemEditMode(editButton) ? editButton.value = ButtonTexts.EDIT : editButton.value = ButtonTexts.SAVE;
};

const isItemEditMode = (row) => {
    return row.dataset.edit_mode == 'true';
};

const selectorFor = (className) => '.' + className;

//     Elements Creation

const createElement = (props) => {
    const element = document.createElement(props.tag);
    if (props.type) element.type = props.type;
    if (props.className) element.className = props.className;
    if (props.value) element.value = props.value;
    if (props.textContent) element.textContent = props.textContent;
    return element;
}

const createTaskTextElement = (taskInput) => {
    return createElement( {
        tag: 'p',
        textContent: taskInput,
        className: SingleTaskClassNames.TEXT,
    });
};

const createTaskEditInput = (taskText) => {
    return createElement( {
        tag: 'input',
        type: 'text',
        className: SingleTaskClassNames.EDIT_INPUT,
        value: taskText,
    });
};

const createStrikeThroughElement = () => {
    return createElement( {
        tag: 'del',
        className: SingleTaskClassNames.STRIKE_THROUGH,
    });;
};

const createCheckbox = () => {
    const checkbox = createElement( {
        tag: 'input',
        type: 'checkbox',
        className: SingleTaskClassNames.CHECKBOX,
    });

    checkbox.addEventListener("change", (event) => itemCheckboxChange(event), false);
    return checkbox;
};

const createEditButton = () => {
    const editButton = createElement( {
        tag: 'input',
        type: 'button',
        className: SingleTaskClassNames.EDIT_BUTTON,
        value: ButtonTexts.EDIT,
    });

    editButton.addEventListener("click", (event) => editItem(event), false);
    return editButton;
};

const createRemoveButton = () => {
    const removebutton = createElement( {
        tag: 'input',
        type: 'button',
        className: SingleTaskClassNames.REMOVE_BUTTON,
        value: ButtonTexts.REMOVE,
    });
    
    removebutton.addEventListener("click", (event) => removeItem(event), false);
    return removebutton;
};
import createElement from '../helpers.js';
import Constants from '../constants.js';

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

    return checkbox;
};

function createEditButton() {
    const editButton = createElement( {
        tag: 'input',
        type: 'button',
        className: Constants.SingleTaskClassNames.EDIT_BUTTON,
        value: Constants.ButtonTexts.EDIT,
    });

    return editButton;
};

function createRemoveButton() {
    const removebutton = createElement( {
        tag: 'input',
        type: 'button',
        className: Constants.SingleTaskClassNames.REMOVE_BUTTON,
        value: Constants.ButtonTexts.REMOVE,
    });
    
    return removebutton;
};

const TaskElements = {
    createTaskTextElement: createTaskTextElement,
    createTaskEditInput: createTaskEditInput,
    createStrikeThroughElement: createStrikeThroughElement,
    createCheckbox: createCheckbox,
    createEditButton: createEditButton,
    createRemoveButton: createRemoveButton,
};

export default TaskElements;
import { createElement } from '../helpers.js';
import Constants from '../constants.js';

export default function createBaseComponents() {
    const container = createElement({
        tag: 'div',
        className: Constants.AddTaskClassNames.CONTAINER,
    });

    const taskInput = createElement({
        tag: 'input',
        type: 'text',
        className: Constants.AddTaskClassNames.TASK_INPUT,
    });
    taskInput.placeholder = 'Create New Task';

    const addTaskButton = createElement({
        tag: 'input',
        type: 'button',
        className: Constants.AddTaskClassNames.ADD_TASK_BUTTON,
        value: 'Add'
    });
    addTaskButton.onClick = 'addTask()';

    const baseForm = createElement({
        tag: 'form',
        className: Constants.AddTaskClassNames.NEW_TASK_FORM,
    })

    baseForm.appendChild(taskInput);
    baseForm.appendChild(addTaskButton);

    container.appendChild(baseForm);

    const listHeader = createElement({
        tag: 'h3',
    });
    listHeader.textContent = 'List: '

    container.appendChild(listHeader);

    const table = createElement({
        tag: 'table',
        className: Constants.AddTaskClassNames.INCOMPLETE_TASKS_TABLE,
    });

    const tBody = createElement({
        tag: 'tbody',
        className: Constants.AddTaskClassNames.INCOMPLETE_TASKS_TABLE_BODY,
    })

    table.appendChild(tBody);
    container.appendChild(table);

    return container;
};
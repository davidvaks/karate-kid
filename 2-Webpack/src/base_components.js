import createElement from './helpers.js';

export default function createBaseComponents() {
    const container = createElement({
        tag: 'div',
        className: 'container',
    });

    const taskInput = createElement({
        tag: 'input',
        type: 'text',
        className: 'task_input',
    });
    taskInput.placeholder = 'Create New Task';

    const addTaskButton = createElement({
        tag: 'input',
        type: 'button',
        className: 'add_task_button',
        value: 'Add'
    });
    addTaskButton.onclick = 'addTask()';

    const baseForm = createElement({
        tag: 'form',
        className: 'new_task_form',
    })

    const table = createElement({
        tag: 'table',
        className: 'incomplete_tasks',
    });

    const tBody = createElement({
        tag: 'tbody',
        className: 'incomplete_tasks_body',
    })

    const h3 = createElement({
        tag: 'h3',
    });
    h3.text = 'List: '

    baseForm.appendChild(taskInput);
    baseForm.appendChild(addTaskButton);

    container.appendChild(baseForm);

    table.appendChild(tBody);
    container.appendChild(table);

    return container;
};
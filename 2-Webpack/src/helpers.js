export function createElement(props) {
    const element = document.createElement(props.tag);
    if (props.type) element.type = props.type;
    if (props.className) element.className = props.className;
    if (props.value) element.value = props.value;
    if (props.textContent) element.textContent = props.textContent;
    return element;
}

export function classSelectorFor(className) { 
    return '.' + className 
};
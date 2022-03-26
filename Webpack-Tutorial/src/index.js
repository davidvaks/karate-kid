async function getComponent() {
  const element = document.createElement('div');

  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
getComponent().then((component) => {
 document.body.appendChild(component);
});
function setupElement(elementName, block) {
  const element = document.createElement(elementName);
  element.append(...block.children);
  block.replaceWith(element);
}

export default function curryDecorator(elementName, contructor) {
  return function decorate(block) {
    if (customElements.get(elementName)) {
      setupElement(elementName, block);
    } else {
      customElements.define(elementName, contructor);
      window.raqnComponents[elementName] = contructor;
      setupElement(elementName, block);
    }
  };
}

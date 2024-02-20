export class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `<link rel="stylesheet" href="${import.meta.url.replace(
      '.js',
      '.css',
    )}">`;
    this.shadowRoot.append(...this.children);
  }
}

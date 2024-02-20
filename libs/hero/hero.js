export class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.onload = () => {
      this.shadowRoot.append(...this.children);
      console.log('hero loaded');
      if (this.onComponentComplete) this.onComponentComplete(this);
    };
    css.href = import.meta.url.replace('.js', '.css');
    this.shadowRoot.append(css);
  }
}

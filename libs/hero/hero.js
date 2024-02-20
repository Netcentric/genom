import curryDecorator from '../../libs/curry-decorate/curry-decorate.js';

export class Hero extends HTMLElement {
  connectedCallback() {
    console.log('Hero connected');
    if (this.onComponentComplete) this.onComponentComplete(this);
  }
}

export default curryDecorator('raqn-hero', Hero);

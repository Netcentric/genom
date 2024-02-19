import curryDecorator from '../../libs/curry-decorate/curry-decorate';

export default curryDecorator(
  'raqn-hero',
  class extends HTMLElement {
    connectedCallback() {
      this.classList.add('hero');
    }
  },
);

import customElementsDecorate from '../../libs/custom-element-decorate/custom-element-decorate.js';
import { CustomParamsComponent } from '../../libs/custom-params-component/custom-params-component.js';

export class Grid extends CustomParamsComponent {
  connectedCallback() {
    super.connectedCallback();
    // setup grid variables
    this.setupGrid();
    // show component when complete
    if (this.onComponentComplete) this.onComponentComplete(this);
  }
  // observe changes in the col attribute
  static get observedAttributes() {
    return ['col'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'col' && oldValue !== newValue) this.setupGrid();
  }

  // update variables and styles if col attribute is set
  setupGrid() {
    const cols = this.getAttribute('col');
    if (!cols) {
      return;
    }
    this.cols = parseInt(cols, 10);
    this.area = Array.from(Array(this.cols))
      .map(() => '1fr')
      .join(' ');
    this.style.setProperty('--grid-template-columns', this.area);
  }
}
// create custom element
export default customElementsDecorate('eddys-grid', Grid);

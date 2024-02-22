import customElementsDecorate from '../../libs/custom-element-decorate/custom-element-decorate.js';
import { ShadowDomComponent } from '../../libs/shadow-dom-component/shadow-dom-component.js';

export default customElementsDecorate(
  'eddys-hero',
  class Hero extends ShadowDomComponent {},
);

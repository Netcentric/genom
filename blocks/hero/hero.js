import curryDecorator from '../../libs/curry-decorate/curry-decorate.js';
import { ShadowDomComponent } from '../../libs/shadow-dom-component/shadow-dom-component.js';

export default curryDecorator(
  'raqn-hero',
  class Hero extends ShadowDomComponent {},
);

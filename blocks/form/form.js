import { defaultDecorate } from '../../libs/eddys-form/eddys-form.js';

export default async function decorate(block) {
  // Custom decoration can be done here
  await defaultDecorate(block);
}

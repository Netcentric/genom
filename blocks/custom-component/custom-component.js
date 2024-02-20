import { defaultDecorate, ExampleComponent } from '/libs/blocks/example-component/example-component.js';

class CustomComponent extends ExampleComponent {
    constructor() {
        super();
        this.init();
    }

    init() {
        console.log('this is the extended class');
    }
}
export default async function decorate(block) {
    await defaultDecorate(block, CustomComponent);
}
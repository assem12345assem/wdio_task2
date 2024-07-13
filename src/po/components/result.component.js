const BaseComponent = require('./base.component')

class ResultComponent extends BaseComponent {
    constructor() {
        super('.content');
    }

    async items(name) {
        const selectos = {
            text: 'div.de1',
            expiration: '.expire',
            syntax: 'a[href="/archive/bash"]',
            title: 'h1',
        }
        return await this.rootEl.$(selectos[name.toLowerCase()])
    }
}
module.exports = ResultComponent;


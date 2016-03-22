import Component from 'vue-class-component';

import components from '../../../components';

var template = require('./home-page.html');

@Component({
    components: components,
    template: template,
})
export default class HomePage {
}
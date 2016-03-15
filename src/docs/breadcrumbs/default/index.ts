import Component from 'vue-class-component';

var template = require('./default.html');

import mdNavbar from '../../../components/navbar';

@Component({
    template: template,
    components: {
        mdNavbar
    }
})
export default class DefaultBreadcrumbs {
}


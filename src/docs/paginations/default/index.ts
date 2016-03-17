import Component from 'vue-class-component';

var template = require('./default.html');

import mdPagination from '../../../components/pagination';

@Component({
    template: template,
    components: {
        mdPagination
    }
})
export default class DefaultPagination {
}


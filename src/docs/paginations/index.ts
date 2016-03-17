import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docDefaultPagination from './default';

import events from '../../mixins/events';

var template = require('./paginations.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docDefaultPagination
    },
    mixins: [
        events
    ]
})
export default class Paginations {
    data() {
        return {
            defaultPaginationSnippet: require('./default/default.snippet.html')
        }
    }
}
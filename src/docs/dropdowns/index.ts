import Component from 'vue-class-component';
import snippet from '../snippet';
import defaultDropdown from './default';

import events from '../../mixins/events';

var template = require('./dropdowns.html');

@Component({
    template: template,
    components: {
        defaultDropdown,
        snippet
    },
    mixins: [
        events
    ]
})
export default class Modals {
    data() {
        return {
            defaultDropdownSnippet: require('./default/default.snippet.html')
        }
    }
}
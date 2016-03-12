import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docDefaultDropdown from './default';

import events from '../../mixins/events';

var template = require('./dropdowns.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docDefaultDropdown
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
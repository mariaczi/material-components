import Component from 'vue-class-component';

var template = require('./default.html');

import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';

@Component({
    template: template,
    components: {
        mdDropdown,
        mdDropdownItem
    }
})
export default class DefaultDropdown {
}


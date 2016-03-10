import Component from 'vue-class-component';

var template = require('./default.html');

import dropdown from '../../../components/dropdown';
import dropdownItem from '../../../components/dropdown-item';

@Component({
    template: template,
    components: {
        dropdown,
        dropdownItem
    }
})
export default class DefaultDropdown {
}


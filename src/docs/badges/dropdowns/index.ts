import Component from 'vue-class-component';

import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';
import mdBadge from '../../../components/badge';

var template = require('./dropdowns.html');

@Component({
    template: template,
    components: {
        mdDropdown,
        mdDropdownItem,
        mdBadge
    }
})
export default class Dropdowns {

    closeDropdown() {
        var self: any = this;
        self.$broadcast('dropdown-list::close');
    }
}
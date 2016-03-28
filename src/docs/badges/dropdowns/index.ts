import Component from 'vue-class-component';

import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';
import mdBadge from '../../../components/badge';

@Component({
    components: {
        mdDropdown,
        mdDropdownItem,
        mdBadge
    },
    template: require('./dropdowns.html')
})
export default class Dropdowns {

    closeDropdown() {
        var self: any = this;
        self.$broadcast('dropdown-list::close');
    }
}
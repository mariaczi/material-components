import Component from 'vue-class-component';
import dropdown from '../../../components/dropdown';
import dropdownItem from '../../../components/dropdown-item';
import mdBadge from '../../../components/badge';

var template = require('./dropdowns.html');

@Component({
    template: template,
    components: {
        dropdown,
        dropdownItem,
        mdBadge
    }
})
export default class Dropdowns {

    closeDropdown() {
        var self: any = this;
        self.$broadcast('dropdown::close');
    }
}
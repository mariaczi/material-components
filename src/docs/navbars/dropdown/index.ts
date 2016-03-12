import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';
import mdDropdown from '../../../components/dropdown';
import mdDropdownItem from '../../../components/dropdown-item';
import mdDropdownList from '../../../components/dropdown-list';
import mdIcon from '../../../components/icon';

import events from '../../../mixins/events';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdNavbar,
        mdNavbarItem,
        mdDropdown,
        mdDropdownItem,
        mdDropdownList,
        mdIcon
    },
    mixins: [
        events
    ]
})
export default class DropdownNavbar {
}
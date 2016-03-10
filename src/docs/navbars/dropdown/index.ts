import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import dropdown from '../../../components/dropdown';
import dropdownItem from '../../../components/dropdown-item';
import dropdownList from '../../../components/dropdown-list';
import icon from '../../../components/icon';

import events from '../../../mixins/events';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        navbar,
        navbarItem,
        dropdown,
        dropdownItem,
        dropdownList,
        icon
    },
    mixins: [
        events
    ]
})
export default class DropdownNavbar {
}
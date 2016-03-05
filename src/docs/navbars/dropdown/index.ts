import Component from 'vue-class-component';
import badge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import dropdown from '../../../components/dropdown';
import dropdownItem from '../../../components/dropdown-item';
import dropdownList from '../../../components/dropdown-list';
import icon from '../../../components/icon';
import eventWrapper from '../../../components/event-wrapper';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
        navbar,
        navbarItem,
        dropdown,
        dropdownItem,
        dropdownList,
        icon,
        eventWrapper
    }
})
export default class DropdownNavbar {
    data() {
        return {
        }
    }

    broadcast(event, $event) {
        var self: any = this;
        self.$broadcast(event, $event);
    }
}
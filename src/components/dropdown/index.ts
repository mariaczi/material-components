import Component from 'vue-class-component';
import btn from '../button';
import dropdownList from '../dropdown-list';
import dropdownItem from '../dropdown-item';
import onClickAway from '../../directives/click-away';

var template = require('./dropdown.html');

@Component({
    props: {
        /**
         * Label of button
         */
        title: {
            type: String,
            required: false,
            "default": ""
        }
    },
    components: {
        btn,
        dropdownList,
        dropdownItem
    },
    template: template
})
export default class Dropdown {
    show(e) {
        var self: any = this;
        self.$broadcast("dropdown::show", e);
    }

    close() {
        var self: any = this;
        self.$broadcast("dropdown::close");
    }
}
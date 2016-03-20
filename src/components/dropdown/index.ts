import Component from 'vue-class-component';
import mdButton from '../button';
import mdDropdownList from '../dropdown-list';
import mdDropdownItem from '../dropdown-item';

import onClickAway from '../../directives/click-away';

var template = require('./dropdown.html');

/**
 * Todo: open to top on bootom of page
 */
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
    directives: {
        onClickAway
    },
    components: {
        mdButton,
        mdDropdownList,
        mdDropdownItem
    },
    events: {
        "dropdown::close": function () {
            // propagate event to children
            this.$broadcast("dropdown::close");
        }
    },
    template: template
})
export default class Dropdown {
    open(e) {
        var self: any = this;
        self.$broadcast("dropdown::open", e);
    }

    close() {
        var self: any = this;
        self.$broadcast("dropdown::close");
    }
}
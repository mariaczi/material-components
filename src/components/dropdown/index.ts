import Component from 'vue-class-component';
import mdButton from '../button';
import mdDropdownList from '../dropdown-list';
import mdDropdownItem from '../dropdown-item';
// todo props
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
import Component from 'vue-class-component';
import btn from '../button';
import dropdownList from '../dropdown-list';
import dropdownItem from '../dropdown-item';
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
        btn,
        dropdownList,
        dropdownItem
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
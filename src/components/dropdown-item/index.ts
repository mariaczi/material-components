import Component from 'vue-class-component';

var template = require('./dropdown-item.html');

@Component({
    props: {
        closing: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    template: template
})
export default class DropdownItem {
    private closing: boolean;

    data() {
        return {
        }
    }

    closeIfNecessary() {
        if (this.closing) {
            var self: any = this;
            self.$dispatch('dropdown::close');
        }
    }
}
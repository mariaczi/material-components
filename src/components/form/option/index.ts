import Component from 'vue-class-component';

import booleanAttribute from '../../../directives/boolean-attribute';

import input from '../../../mixins/input';

var template = require('./option.html');

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        },
        value: {
            required: true
        }
    },
    events: {
        'option::select': function (value, values) {
            this.setSelected(value, values);
        },
        'option::unselect': function (value) {
            this.unsetSelected(value);
        }
    },
    directives: {
        booleanAttribute
    },
    mixins: [
        input
    ],
    template: template
})
export default class SelectOption {
    private $dispatch: any;
    private $parent: any;

    private active: boolean;
    private disabled: boolean;
    private value: any;

    data() {
        return {
            active: false
        }
    }

    get multiple() {
        return this.$parent.$data.multiple;
    }

    get computedClasses() {
        return {
            disabled: this.disabled,
            active: this.active && !this.disabled,
            selected: this.active && !this.disabled
        };
    }

    toggle() {
        if (!this.active) {
            this.select();
        }
        else {
            this.unselect();
        }
    }

    select() {
        if (!this.active && !this.disabled) {
            this.active = true;
            this.$dispatch('select::select', this.value);
        }
    }

    setSelected(value, values) {
        if (!this.multiple) {
            this.active = this.value == value;
        }
        else if (values) { // all selected values
            this.active = values.indexOf(this.value) >= 0;
        }
    }

    unselect() {
        if (this.active && !this.disabled && this.multiple) { // only multiple could be unselected
            this.active = false;
            this.$dispatch('select::unselect', this.value, this);
        }
    }

    unsetSelected(value) {
        if (this.multiple && this.value == value) {
            this.active = false;
        }
    }
}
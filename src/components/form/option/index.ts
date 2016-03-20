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
        selected: {
            type: Boolean,
            required: false,
            'default': false
        },
        value: {
            required: true
        }
    },
    events: {
        'select::select': function (value) {
            this.setSelected(value);
        },
        'select::unselect': function (value) {
            this.unsetSelected(value);
        }
    },
    /*
    watch: {
        active: function (newVal, oldVal) {
            if (newVal != oldVal) {
                this.fireEvent(this.$els.field, 'change');
            }
        }
    },
    */
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
            active: this.active,
            selected: this.active
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
            this.$dispatch('select::select', this.value, this);
        }
    }

    setSelected(value) {
        if (!this.multiple) {
            this.active = this.value == value;
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
import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

var template = require('./input.html');

@Component({
    props: {
        value: {
            type: String,
            required: false,
            'default': null
        },
        placeholder: {
            type: String,
            required: false,
            'default': null
        },
        disabled: {
            type: Boolean,
            required: false,
            'default': null
        },
        type: {
            type: String,
            required: false,
            'default': 'text'
        }
    },
    mixins: [
        inputMixin
    ],
    template: template
})
export default class InputField {
    private value: string;
    private placeholder: string;
    private disabled: boolean;
    private active: boolean;

    data() {
        return {
            active: false
        }
    }

    ready() {
        this.setupDisabled();
    }

    get field(): HTMLElement {
        var self: any = this;
        return self.$els.field;
    }

    get slot() {
        var self: any = this;
        return 'default' in self._slotContents;
    }

   get labelClasses() {
       return {
           active: this.placeholder || this.active || this.value,
           disabled: this.disabled
       }
   }

    setActive(val) {
        this.active = val;
    }

    activateField() {
        this.active = true;
    }
    
    deactivateField() {
        this.active = false;
    }

    setupDisabled() {
        if (!this.disabled) {
            this.field.addEventListener('focus', this.activateField);
            this.field.addEventListener('blur', this.deactivateField);

            this.field.removeAttribute('disabled');
        }
        else {
            this.field.removeEventListener('focus', this.activateField);
            this.field.removeEventListener('blur', this.deactivateField);

            this.field.setAttribute('disabled', 'disabled');
        }
    }

}
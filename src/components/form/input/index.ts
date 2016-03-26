import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

@Component({
    props: {
        value: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        placeholder: {
            type: String,
            required: false,
            'default': null,
            twoWay: false
        },
        disabled: {
            type: Boolean,
            required: false,
            'default': null,
            twoWay: false
        },
        type: {
            type: String,
            required: false,
            'default': 'text',
            twoWay: false
        }
    },
    mixins: [
        inputMixin
    ],
    template: require('./input.html')
})
export default class InputField {
    private $els: any;
    private _slotContents: any;

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
        this.refreshValue()
    }

    get field(): HTMLInputElement {
        return this.$els.field;
    }

    get slot() {
        return 'default' in this._slotContents;
    }

    get slotIcon() {
        return 'icon-name' in this._slotContents;
    }

   get labelClasses() {
       return {
           active: this.placeholder || this.active || this.value,
           disabled: this.disabled
       }
   }

    refreshValue() {
        this.value = this.field.value;
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
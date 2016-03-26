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
    private $nextTick: any;
    private $watch: any;
    private fireEvent: any;
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

    compiled() {
        this.setupDisabled();
        if (!this.value) { // setted as prop
            this.refreshInput();
        }
        else {
            this.refreshValue();
        }
    }

    ready() {
        this.$watch('value', (value) => {
            this.field.value = value;
            this.$nextTick(() => {
                this.fireEvent(this.field, 'change');
            });
        })
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

    refreshInput() {
        this.value = this.field.value;
    }

    refreshValue() {
        this.field.value = this.value;
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
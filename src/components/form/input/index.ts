import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

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
        },
        lazy: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        number: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        debounce: {
            "type": Number,
            "required": false,
            "default": 0,
            "twoWay": false
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
    
   get labelClasses() {
       return {
           active: this.placeholder || this.active || this.value,
           disabled: this.disabled
       }
   }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }
    
    activateField() {
        this.active = true;
    }
    
    deactivateField() {
        this.active = false;
    }
}
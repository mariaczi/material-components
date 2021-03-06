import Component from 'vue-class-component';

import bindBoolean from '../../../directives/bind-boolean';
import bindRaw from '../../../directives/bind-raw';

import inputMixin from '../../../mixins/input';

@Component({
    props: {
        value: {
            type: String,
            required: false,
            'default': null
        },
        radioValue: {
            required: true
        },
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    directives: {
        bindBoolean,
        bindRaw
    },
    mixins: [
        inputMixin
    ],
    template: require('./radio.html')
})
export default class Radio {
    private _slotContents: any;
    private $parent: any;
    private $els: any;
    
    get field() {
        return this.$els.field;
    }

    get group() {
        return this.$parent.group;
    }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }
}
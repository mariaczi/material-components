import Component from 'vue-class-component';

import bindBoolean from '../../../directives/bind-boolean';
import bindRaw from '../../../directives/bind-raw';

import inputMixin from '../../../mixins/input';

var template = require('./radio.html');

@Component({
    props: {
        value: {
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
    template: template
})
export default class Radio {
    private _slotContents: any;
    private $parent: any;
    private $els: any;

    private value: string;

    get checked() {
        return this.radiosValue == this.value;
    }

    get radiosValue() {
        if (this.field.__v_model) {
            return this.field.__v_model._watcher.value;
        }
        else {
            console.log("Error. Missing field or model directive");
            return null;
        }
    }
    
    get field() {
        return this.$els.field;
    }

    get slot() {
        return 'default' in this._slotContents;
    }

    get group() {
        return this.$parent.$data.group;
    }
}
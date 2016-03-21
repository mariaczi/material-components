import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

import bindBoolean from '../../../directives/bind-boolean';

var template = require('./switch.html');

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    directives: {
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: template
})
export default class Switch {
    private _slotContents: any;

    get slotOn() {
        return 'on' in this._slotContents;
    }

    get slotOff() {
        return 'off' in this._slotContents;
    }
}
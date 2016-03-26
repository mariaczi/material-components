import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';
import bindBoolean from '../../../directives/bind-boolean';

@Component({
    props: {
        name: {
            type: String,
            required: false,
            'default': null
        },
        disabled: {
            type: Boolean,
            required: false,
            'default': null
        }
    },
    directives: {
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: require('./checkbox.html')
})
export default class CheckboxField {
    private _slotContents: any;
    private $parent: any;

    private name: string;

    get slot() {
        return 'default' in this._slotContents;
    }

    get group() {
        return this.$parent.$data.group;
    }

    get resolvedName() {
        return this.name || this.group;
    }
}
import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

import bindBoolean from '../../../directives/bind-boolean';
import bindRaw from '../../../directives/bind-raw';

var template = require('./file-input.html');

@Component({
    props: {
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            'default': ''
        },
        multiple: {
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
export default class FileInputField {
    private $els: any;
    private $nextTick: any;
    private fireEvent: any;

    private fileName: string;

    data() {
        return {
            fileName: ''
        }
    }

    get field() {
        return this.$els.field;
    }

    selectFile(e) {
        this.fileName = Array.prototype.slice.call(e.target.files)
            .map((f) => f.name)
            .join(', ');
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }
}
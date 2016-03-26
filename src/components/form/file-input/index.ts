import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';
import bindBoolean from '../../../directives/bind-boolean';
import bindRaw from '../../../directives/bind-raw';

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
    template: require('./file-input.html')
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
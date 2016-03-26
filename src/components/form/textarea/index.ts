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
        disabled: {
            type: Boolean,
            required: false,
            'default': null,
            twoWay: false
        },
        autoresize: {
            type: Boolean,
            required: false,
            'default': true,
            twoWay: false
        }
    },
    watch: {
        disabled: function () {
            this.setupDisabled();
        },
        value: function (lines, oldLines) {
            this.delayedResize(lines, oldLines);
        }
    },
    mixins: [
        inputMixin
    ],
    template: require('./textarea.html')
})
export default class TextArea {
    private $els: any;
    private $watch: any;
    private $nextTick: any;
    private fireEvent: any;
    private watchField: any;
    private _slotContents: any;

    private value: string;
    private disabled: boolean;
    private active: boolean;

    data() {
        return {
            active: false
        }
    }

    compiled() {
        this.setupDisabled;
        if (!this.value) { // set as prop
            this.refreshValue();
        }
        else {
            this.refreshTextarea();
        }
    }

    ready() {
        this.watchField((value) => {
            this.value = value;
        });
        this.$watch('value', (value) => {
            this.field.value = value;
            this.$nextTick(() => {
                this.fireEvent(this.field, 'change');
            });
        });
    }

    get labelClasses() {
        return {
            active: this.active || this.value,
            disabled: this.disabled
        }
    }

    get lines() {
        return this.value ? this.value.split('\n').length : 0;
    }

    get field(): HTMLTextAreaElement {
        return this.$els.field;
    }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }

    resize(lines, oldLines) {
        var styles = window.getComputedStyle(this.field);
        var paddingVertical = parseInt(styles.getPropertyValue('padding-bottom')) + parseInt(styles.getPropertyValue('padding-top'));
        if (lines < oldLines) {
            this.field.style.height = 'auto';
        }
        this.field.style.height = (this.field.scrollHeight - paddingVertical) + 'px';
        // Velocity(this.field, {height: this.field.scrollHeight - paddingVertical}, {
        //     duration: 10
        // });
    }

    delayedResize(lines, oldLines) {
        window.setTimeout(() => {
            this.resize(lines, oldLines)
        }, 0);
    }

    activateField() {
        this.active = true;
    }

    deactivateField() {
        this.active = false;
    }

    get setupDisabled() { // get has dependency tracking
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
        return null;
    }

    refreshTextarea() {
        this.field.value = this.value;
    }

    refreshValue() {
        this.value = this.field.value;
    }
}
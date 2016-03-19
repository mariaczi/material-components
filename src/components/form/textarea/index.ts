import Component from 'vue-class-component';

import inputMixin from '../../../mixins/input';

var Velocity = require('velocity-animate');
require('./textarea.scss')
var template = require('./textarea.html');

@Component({
    props: {
        value: {
            type: String,
            required: false,
            'default': null
        },
        disabled: {
            type: Boolean,
            required: false,
            'default': null
        },
        autoresize: {
            type: Boolean,
            required: false,
            'default': true
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
    template: template
})
export default class TextArea {
    private value:string;
    private disabled:boolean;
    private active:boolean;
    private autoresize:boolean;

    data() {
        return {
            active: false
        }
    }

    ready() {
        this.setupDisabled();
    }

    get slot() {
        var self: any = this;
        return 'default' in self._slotContents;
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

    get field() {
        var self:any = this;
        return self.$el.querySelector('.field');
    }

    setActive(val) {
        this.active = val;
    }

    resize(lines, oldLines) {
        var styles = window.getComputedStyle(this.field);
        var paddingVertical = parseInt(styles.getPropertyValue('padding-bottom')) + parseInt(styles.getPropertyValue('padding-top'));
        if (lines < oldLines) {
            this.field.style.height = 'auto';
        }
        Velocity(this.field, {height: this.field.scrollHeight - paddingVertical}, {
            duration: 10
        });
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
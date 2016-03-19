import Component from 'vue-class-component';

var template = require('./option.html');

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        },
        selected: {
            type: Boolean,
            required: false,
            'default': false
        },
        value: {
            required: true
        }
    },
    template: template
})
export default class SelectOption {
    private $dispatch: any;
    
    private active: boolean;
    private disabled: boolean;
    private value: any;

    data() {
        return {
            active: false
        }
    }

    get computedClasses() {
        return {
            disabled: this.disabled
        };
    }

    select() {
        if (!this.disabled) {
            this.$dispatch('select::select', this.value, this);
        }
    }
}
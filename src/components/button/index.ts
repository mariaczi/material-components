import Component from 'vue-class-component';
import icon from '../icon';

var template = require('./btn.html');

@Component({
    props: {
        type: {
            type: String,
            required: false,
            "default": ""
        },
        classes: {
            type: Array,
            required: false,
            "default": function () {
                return [];
            }
        },
        icon: {
            type: String,
            required: false,
            "default": null
        },
        iconAlignRight: {
            type: Boolean,
            required: false,
            "default": false
        },
        large: {
            type: Boolean,
            required: false,
            "default": false
        },
        disabled: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    components: {
        icon
    },
    template: template
})
export default class Btn {
    private type: string;
    private classes: string[];
    private icon: string;
    private iconAlignRight: boolean;
    private large: boolean;
    private disabled: boolean;

    get computedClasses() {
        var classes = [];
        // type
        classes.push(this.type ? "btn-" + this.type : "btn");
        // classes
        if (this.classes) {
            classes.concat(this.classes);
        }

        // large
        if (this.large) {
            classes.push("btn-large");
        }
        // disabled
        if (this.disabled) {
            classes.push("disabled")
        }
        return classes;
    }
}
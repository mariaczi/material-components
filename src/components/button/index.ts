import Component from 'vue-class-component';

var template = require('./btn.html');

@Component({
    props: {
        type: {
            type: String,
            required: false,
            "default": ""
        },
        classes: {
            type: String,
            required: false,
            "default": ""
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
    template: template
})
export default class Btn {
    private type: string;
    private classes: string;
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
            classes.push(this.classes);
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
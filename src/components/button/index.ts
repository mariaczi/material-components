import Component from 'vue-class-component';
import Effect from '../../materialize/effect';
import mdIcon from '../icon';
import toast from '../../mixins/toast';
import tooltip from '../../mixins/tooltip';

var template = require('./btn.html');

// todo  classes array ws string
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
        },
        floating: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    components: {
        mdIcon
    },
    mixins: [
        toast,
        tooltip
    ],
    template: template
})
export default class Button {
    private type: string;
    private classes: string[];
    private icon: string;
    private iconAlignRight: boolean;
    private large: boolean;
    private disabled: boolean;
    private floating: boolean;

    // TODO mixin
    showEffect(e) {
        var self: any = this;
        Effect.show(e, self.$el);
    }

    hideEffect(e) {
        var self: any = this;
        Effect.hide(e, self.$el);
    }

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

        if (this.floating) {
            classes.push("btn-floating")
        }
        return classes;
    }
}
import {DirectiveOption} from 'vue-class-component';

// v-bind-boolean.disabled="disabled"
var bindBoolean: DirectiveOption = {

    priority: 850,

    update: function (value) {
        var arg = this.arg;
        if (value) {
            this.el.setAttribute(arg, arg);
        }
        else {
            this.el.removeAttribute(arg);
        }
    }
    
};

export default bindBoolean;
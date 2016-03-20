import {DirectiveOption} from 'vue-class-component';

import VueModule = require('vue');
var Vue: any = VueModule;

// v-boolean-attrbute.disabled="disabled"
var booleanAttribute: DirectiveOption = {

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

export default booleanAttribute;
import {DirectiveOption} from 'vue-class-component';

import VueModule = require('vue');
var Vue: any = VueModule;

var handler = Vue.options.directives.model;

var field: DirectiveOption = {

    priority: 800,
    twoWay: true,
    params: ['lazy', 'number', 'debounce'],

    bind: function() {
        this.field = this.el.__vue__.$els.field || this.el.querySelector('.field');
        if (this.field) {
            if (this.arg) {
                this.field.setAttribute(this.arg, this.arg);
            }
            this.checkFilters = Vue.options.directives.model.checkFilters;

            this.__el__= this.el;
            this.el = this.field;
            handler.bind.call(this);
        }
        else {
            console.log('Error: No "field" on component');
        }
    },

    unbind: function() {
        if (this.field) {
            handler.unbind.call(this);
            this.el = this.__el__;
        }
    },
    
};

export default field;
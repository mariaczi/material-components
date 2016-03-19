import {DirectiveOption} from 'vue-class-component';

import VueModule = require('vue');
var Vue: any = VueModule;

var handler = Vue.options.directives.model;

var field: DirectiveOption = {

    twoWay: true,
    params: ['lazy', 'number', 'debounce'],

    bind: function() {
        var field = this.el.__vue__.$els.field || this.el.querySelector('.field');
        if (field) {
            this.checkFilters = Vue.options.directives.model.checkFilters;

            this.el = field;
            this.el.__v_model = this;
            handler.bind.call(this);
        }
        else {
            console.log('Error: No "field" on component');
        }
    },

    unbind: function() {
        handler.unbind.call(this);
        this.el = this.__el__;
    },
    
};

export default field;
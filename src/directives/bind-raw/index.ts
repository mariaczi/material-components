import {DirectiveOption} from 'vue-class-component';

var bindRaw: DirectiveOption = {

    priority: 750,

    bind: function () {
        this.attribute = this.arg;
    },

    update: function (value) {
        var el = this.el;
        el.setAttribute(this.attribute, value);
    }
    
};

export default bindRaw;
import {DirectiveOption} from 'vue-class-component';
import VueModule = require('vue')
var vue: any = VueModule;

var onClickAway: DirectiveOption = {
    
    acceptStatement: true,

    update: function(handler) {
        this.reset();

        var self = this;
        var scope = this._scope || this.vm;

        this.handler = function(ev) {
            if (!self.el.contains(ev.target)) {
                scope.$event = ev;
                var res = handler(ev);
                scope.$event = null;
                return res;
            }
        };

        vue.util.on(document.documentElement, 'click', this.handler);
    },

    reset: function() {
        vue.util.off(document.documentElement, 'click', this.handler);
    },

    unbind: function() {
        this.reset();
    },
    
};

export default onClickAway;
import {DirectiveOption} from 'vue-class-component';
import Effect from '../../materialize/effect';

var waveEffect: DirectiveOption = {

    show: function (e) {
        Effect.show(e, this.el);
    },

    hide: function (e) {
        Effect.hide(e, this.el)
    },

    bind: function() {
        this.el.addEventListener("mousedown", this.show);
        this.el.addEventListener("mouseleave", this.hide);
        this.el.addEventListener("mouseup", this.hide);
    },

    unbind: function() {
        this.el.removeEventListener("mousedown", this.show);
        this.el.removeEventListener("mouseleave", this.hide);
        this.el.removeEventListener("mouseup", this.hide);
    },
    
};

export default waveEffect;
import {DirectiveOption} from 'vue-class-component';
import Effect from '../../materialize/effect';

var waveEffect: DirectiveOption = {

    bind: function() {
        this.el.addEventListener("mousedown", (e) => {
           Effect.show(e, this.el);
        });
        this.el.addEventListener("mouseleave", (e) => {
           Effect.hide(e, this.el);
        });
        this.el.addEventListener("mouseup", (e) => {
           Effect.hide(e, this.el);
        });
    },

    unbind: function() {
        this.el.removeEventListener("mousedown");
        this.el.removeEventListener("mouseleave");
        this.el.removeEventListener("mouseup");
    },
    
};

export default waveEffect;
import Component from 'vue-class-component';

import VueModule = require('vue')
var vue: any = VueModule;
var template = require('./slide.html');

@Component({
    props: {
        img: {
            type: String,
            required: true
        },
        align: {
            type: String,
            "default": ''
        }
    },
    events: {
        'slider::activate': function (index) {
            this.setActive(index);
        }
    },
    watch: {
        active: function(val) {
            this._setClasses(val);
        }
    },
    template: template
})
export default class Slide {
    private img: string;
    private position: number;
    private active: boolean;
    private classes: any;

    compiled() {
        var self: any = this;
        // todo: remove hack webpack img src loading
        self.$els.img.setAttribute('src', this.img);
    }

    ready () {
        this._setClasses(this.active);
    }

    data() {
        var self: any = this;
        var position = self.$parent.$children.indexOf(this);
        return {
            active: false,
            position: position,
            classes: {}
        }
    }

    get computedClasses() {
        return this.classes;
    }

    setActive(index) {
        this.active = this.position == index;
    }

    _setClasses (val) {
        vue.set(this.classes, 'active', val);
        vue.set(this.classes, 'fadeIn', val);
        vue.set(this.classes, 'fadeOut', !val);
    }

}
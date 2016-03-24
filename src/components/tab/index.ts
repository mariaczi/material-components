import Component from 'vue-class-component';

var template = require('./tab.html');

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            "default": false
        },
        name: {
            type: String,
            required: false,
            "default": null
        }
    },
    events: {
        'tab::select': function (id) {
            this.select(id);
        }
    },
    template: template
})
export default class Tab {
    private disabled: boolean;
    private name: string;

    get computedClasses() {
        return this.disabled ? ['disabled'] : [];
    }

    get index() {
        var self: any = this;
        return self.$parent.$children.indexOf(this);
    }

    get id() {
        if (this.name) {
            return this.name;
        }
        else {
            return this.index;
        }
    }

    ready() {
        var self: any = this;
        var hash = window.location.hash;
        var el: HTMLElement = self.$el;
        var anchors = el.getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
            var a = anchors[i];
            if (hash == a.getAttribute("href")) {
                this.setAsSelected();
            }
        }
    }

    setAsSelected() {
        if (!this.disabled) {
            var self: any = this;
            self.$dispatch('tabs::on-select', this);
        }
    }

    select(id) {
        if (this.id == id) {
            this.setAsSelected();
        }
    }
}
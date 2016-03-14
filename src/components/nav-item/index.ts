import Component from 'vue-class-component';

var template = require('./nav-item.html');

@Component({
    props: {
        href: {
            type: String,
            required: false,
            'default': ''
        },
        active: {
            type: Boolean,
            required: false,
            'default': false
        },
    },
    template: template
})
export default class NavItem {
    click() {
        var self: any = this;
        self.$dispatch('nav-item::clicked');
    }
}
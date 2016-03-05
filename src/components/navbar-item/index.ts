import Component from 'vue-class-component';

var template = require('./navbar-item.html');

@Component({
    props: {
        href: {
            type: String,
            required: false,
            "default": "javascript:void(0)"
        },
        active: {
            type: Boolean,
            required: false,
            "default": false
        },
    },
    template: template
})
export default class NavbarItem {

}
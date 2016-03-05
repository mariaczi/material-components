import Component from 'vue-class-component';

var template = require('./icon.html');

@Component({
    props: {
        right: {
            type: Boolean,
            required: false,
            "default": false
        },
        left: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    template: template
})
export default class Icon {
}
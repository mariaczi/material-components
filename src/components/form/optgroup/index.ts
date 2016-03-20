import Component from 'vue-class-component';

var template = require('./optgroup.html');

@Component({
    props: {
        label: {
            type: String,
            required: false,
            'default': false
        }
    },
    template: template
})
export default class Optgroup {
}
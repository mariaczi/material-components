import Component from 'vue-class-component';

var template = require('./radio-group.html');

@Component({
    props: {
        group: {
            type: String,
            required: true,
            'default': 'text'
        }
    },
    template: template
})
export default class RadioGroup {
}
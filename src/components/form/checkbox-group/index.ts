import Component from 'vue-class-component';

var template = require('./checkbox-group.html');

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
export default class CheckboxGroup {
}
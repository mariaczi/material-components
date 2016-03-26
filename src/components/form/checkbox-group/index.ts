import Component from 'vue-class-component';

@Component({
    props: {
        group: {
            type: String,
            required: true,
            'default': 'text'
        }
    },
    template: require('./checkbox-group.html')
})
export default class CheckboxGroup {
}
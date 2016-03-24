import Component from 'vue-class-component';

@Component({
    props: {
        api: {
            required: true
        }
    },
    template: require('./doc-api.html')
})
export default class ApiDoc {
}
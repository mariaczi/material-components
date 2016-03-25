import Component from 'vue-class-component';

import mixins from '../../mixins';
import components from '../../components';

@Component({
    props: {
        api: {
            required: true
        }
    },
    components,
    mixins,
    template: require('./doc-api.html')
})
export default class ApiDoc {
}
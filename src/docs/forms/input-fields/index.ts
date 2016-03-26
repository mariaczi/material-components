import Component from 'vue-class-component';

import mdInput from '../../../components/form/input';

@Component({
    components: {
        mdInput
    },
    template: require('./input.html')
})
export default class InputFileds {

    data() {
        return {
            firstName: 'Martin',
            lastName: ''
        }
    }
}


import Component from 'vue-class-component';

import mdSelect from '../../../components/form/select';
import mdOption from '../../../components/form/option';

import field from '../../../directives/field';

var template = require('./selects.html');

@Component({
    components: {
        mdSelect,
        mdOption
    },
    directives: {
        field
    },
    template: template
})
export default class Selects {

    data() {
        return {
            value: '',
        }
    }
}


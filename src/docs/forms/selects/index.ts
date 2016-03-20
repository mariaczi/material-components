import Component from 'vue-class-component';

import mdSelect from '../../../components/form/select';
import mdOption from '../../../components/form/option';
import mdOptgroup from '../../../components/form/optgroup';

import field from '../../../directives/field';

var template = require('./selects.html');

@Component({
    components: {
        mdSelect,
        mdOption,
        mdOptgroup
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
            multipleValue: [],
            groupsValue: '1',
        }
    }
}


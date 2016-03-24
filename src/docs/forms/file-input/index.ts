import Component from 'vue-class-component';

import mdRadioGroup from '../../../components/form/radio-group';
import mdRadio from '../../../components/form/radio';

import field from '../../../directives/field';

var template = require('./radios.html');

@Component({
    components: {
        mdRadioGroup,
        mdRadio
    },
    directives: {
        field
    },
    template: template
})
export default class Radios {

    data() {
        return {
            value: 'green'
        }
    }
}


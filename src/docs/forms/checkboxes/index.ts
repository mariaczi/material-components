import Component from 'vue-class-component';

import mdCheckbox from '../../../components/form/checkbox';
import mdCheckboxGroup from '../../../components/form/checkbox-group';

import field from '../../../directives/field';

var template = require('./checkboxes.html');

@Component({
    components: {
        mdCheckbox,
        mdCheckboxGroup
    },
    directives: {
        field
    },
    template: template
})
export default class Radios {

    data() {
        return {
            checkbox: {
                red: false,
                yellow: true,
                filled: true,
                green: true,
                brown: false
            }
        }
    }
}


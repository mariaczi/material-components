import Component from 'vue-class-component';

import mdCheckbox from '../../../components/form/checkbox';
import mdCheckboxGroup from '../../../components/form/checkbox-group';

@Component({
    components: {
        mdCheckbox,
        mdCheckboxGroup
    },
    template: require('./checkboxes.html')
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


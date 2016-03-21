import Component from 'vue-class-component';

import mdSwitch from '../../../components/form/swich';

import field from '../../../directives/field';

var template = require('./swiches.html');

@Component({
    components: {
        mdSwitch
    },
    directives: {
        field
    },
    template: template
})
export default class Switches {

    data() {
        return {
            switches: [
                true,
                false,
                true
            ]
        }
    }
}


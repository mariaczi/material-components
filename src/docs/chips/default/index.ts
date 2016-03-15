import Component from 'vue-class-component';

var template = require('./default.html');

import mdChip from '../../../components/chip';

@Component({
    template: template,
    components: {
        mdChip
    }
})
export default class DefaultChip {
}


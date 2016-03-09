import Component from 'vue-class-component';

var template = require('./tooltips.html');

import tooltip from '../../../mixins/tooltip';
import btn from '../../../components/button';

@Component({
    template: template,
    components: {
        btn
    },
    mixins: [
        tooltip
    ]
})
export default class Tooltips {
}


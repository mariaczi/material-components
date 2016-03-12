import Component from 'vue-class-component';

var template = require('./tooltips.html');

import tooltip from '../../../mixins/tooltip';

import mdButton from '../../../components/button';

@Component({
    template: template,
    components: {
        mdButton
    },
    mixins: [
        tooltip
    ]
})
export default class Tooltips {
}


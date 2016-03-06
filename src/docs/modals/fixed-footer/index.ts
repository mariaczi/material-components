import Component from 'vue-class-component';

var template = require('./fixed-footer.html');

import btn from '../../../components/button';
import modal from '../../../components/modal';

import events from '../../../mixins/events';

@Component({
    template: template,
    components: {
        btn,
        modal
    },
    mixins: [
        events
    ]
})
export default class FifexFooterModal {
}


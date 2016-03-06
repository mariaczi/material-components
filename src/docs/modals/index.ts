import Component from 'vue-class-component';
import snippet from '../snippet';
import defaultModal from './default';
import fixedFooterModal from './fixed-footer';
import bottomModal from './bottom';

import events from '../../mixins/events';

var template = require('./modals.html');

@Component({
    template: template,
    components: {
        defaultModal,
        fixedFooterModal,
        bottomModal,
        snippet
    },
    mixins: [
        events
    ]
})
export default class Modals {
    data() {
        return {
            defaultModalSnippet: require('./default/default.snippet.html'),
            fixedFooterModalSnippet: require('./fixed-footer/fixed-footer.snippet.html'),
            bottomModalSnippet: require('./bottom/bottom.snippet.html')
        }
    }
}
import Component from 'vue-class-component';
import docSnippet from '../snippet';
import docDefaultModal from './default';
import docFixedFooterModal from './fixed-footer';
import docBottomModal from './bottom';

import events from '../../mixins/events';

var template = require('./modals.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docDefaultModal,
        docFixedFooterModal,
        docBottomModal
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
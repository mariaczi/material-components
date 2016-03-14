import Component from 'vue-class-component';

var template = require('./scrollable.html');

import mdTabs from '../../../components/tabs';
import mdTab from '../../../components/tab';

@Component({
    template: template,
    components: {
        mdTabs,
        mdTab,
    }
})
export default class ScrollableTabs {
}


import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docDefaultTabs from './default';
import docScrollableTabs from './scrollable';

var template = require('./tabs.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docDefaultTabs,
        docScrollableTabs
    }
})
export default class Tabs {
    data() {
        return {
            defaultTabsSnippet: require('./default/default.snippet.html'),
            docScrollableTabsSnippet: require('./scrollable/scrollable.snippet.html')
        }
    }
}
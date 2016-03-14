import Component from 'vue-class-component';

var template = require('./default.html');

import mdTabs from '../../../components/tabs';
import mdTab from '../../../components/tab';
import mdButton from '../../../components/button';

import events from '../../../mixins/events';

@Component({
    template: template,
    events: {
        'tabs::on-select': function (tab) {
            this.selected(tab);
        }  
    },
    components: {
        mdTabs,
        mdTab,
        mdButton
    },
    mixins: [
        events
    ]
})
export default class DefaultTabs {
    private tab: any;

    data() {
        return {
            tab: {
                id: null,
                text: null
            }
        }
    }

    selected(tab) {
        this.tab.id = tab.id;
        this.tab.text = tab.$el.textContent.trim();
    }
}


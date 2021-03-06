import Component from 'vue-class-component';

import components from '../../../components';

import events from '../../../mixins/events';

@Component({
    components,
    mixins: [
        events
    ],
    template: require('./default.html')
})
export default class DefaultTabs {
    data() {
        return {
            tab: 0
        }
    }
}


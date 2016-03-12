import Component from 'vue-class-component';

var template = require('./defaultCollapsible.html');

import mdCollapsible from '../../../components/collapsible';
import mdCollapsibleItem from '../../../components/collapsible-item';
import mdIcon from '../../../components/icon';

@Component({
    template: template,
    components: {
        mdCollapsible,
        mdCollapsibleItem,
        mdIcon,
    }
})
export default class DefaultCollapsible {
}


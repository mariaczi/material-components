import Component from 'vue-class-component';

var template = require('./popoutCollapsible.html');

import mdCollapsible from '../../../components/collapsible';
import mdCollapsibleItem from '../../../components/collapsible-item';
import mdIcon from '../../../components/icon';

@Component({
    template: template,
    components: {
        mdIcon,
        mdCollapsible,
        mdCollapsibleItem,
    }
})
export default class PopoutCollapsible {
}


import Component from 'vue-class-component';

var template = require('./defaultCollapsible.html');

import collapsible from '../../../components/collapsible';
import collapsibleItem from '../../../components/collapsible-item';
import icon from '../../../components/icon';

@Component({
    template: template,
    components: {
        icon,
        collapsible,
        collapsibleItem,
    }
})
export default class DefaultCollapsible {
}


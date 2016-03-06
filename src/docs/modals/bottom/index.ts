import Component from 'vue-class-component';

require('./bottom.scss');
var template = require('./bottom.html');

import collection from '../../../components/collection';
import collectionItem from '../../../components/collection-item';
import btn from '../../../components/button';
import modal from '../../../components/modal';
import icon from '../../../components/icon';

import events from '../../../mixins/events';

@Component({
    template: template,
    components: {
        collection,
        collectionItem,
        btn,
        modal,
        icon
    },
    mixins: [
        events
    ]
})
export default class BottomModal {
}


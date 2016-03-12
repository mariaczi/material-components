import Component from 'vue-class-component';

require('./bottom.scss');
var template = require('./bottom.html');

import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';
import mdButton from '../../../components/button';
import mdModal from '../../../components/modal';
import mdIcon from '../../../components/icon';

import events from '../../../mixins/events';

@Component({
    template: template,
    components: {
        mdCollection,
        mdCollectionItem,
        mdButton,
        mdModal,
        mdIcon
    },
    mixins: [
        events
    ]
})
export default class BottomModal {
}


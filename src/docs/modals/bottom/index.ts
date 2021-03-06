import Component from 'vue-class-component';

import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';
import mdButton from '../../../components/button';
import mdModal from '../../../components/modal';
import mdIcon from '../../../components/icon';

import events from '../../../mixins/events';

@Component({
    components: {
        mdCollection,
        mdCollectionItem,
        mdButton,
        mdModal,
        mdIcon
    },
    mixins: [
        events
    ],
    template: require('./bottom.html')
})
export default class BottomModal {
}


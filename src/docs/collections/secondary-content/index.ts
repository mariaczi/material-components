import Component from 'vue-class-component';

var template = require('./secondary-content.html');

import mdIcon from '../../../components/icon';
import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';

@Component({
    template: template,
    components: {
        mdIcon,
        mdCollection,
        mdCollectionItem
    }
})
export default class SecondaryContentCollection {
    get items() {
        return {
            'Alvin1': 'javascript:void(0)',
            'Alvin2': 'javascript:void(0)',
            'Alvin3': 'javascript:void(0)',
            'Alvin4': 'javascript:void(0)'
        }
    }
}


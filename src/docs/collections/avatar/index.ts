import Component from 'vue-class-component';

var template = require('./avatar.html');

import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';
import mdIcon from '../../../components/icon';

@Component({
    template: template,
    components: {
        mdCollection,
        mdCollectionItem,
        mdIcon
    }
})
export default class AvatarCollection {
}


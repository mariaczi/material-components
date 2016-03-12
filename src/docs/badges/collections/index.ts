import Component from 'vue-class-component';

var template = require('./collections.html');

import mdBadge from '../../../components/badge';
import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';

@Component({
    template: template,
    components: {
        mdCollection,
        mdCollectionItem,
        mdBadge
    }
})
export default class Collections {
}


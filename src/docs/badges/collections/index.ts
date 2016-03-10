import Component from 'vue-class-component';

var template = require('./collections.html');

import mdBadge from '../../../components/badge';
import collection from '../../../components/collection';
import collectionItem from '../../../components/collection-item';

@Component({
    template: template,
    components: {
        collection,
        collectionItem,
        mdBadge
    }
})
export default class Collections {
}


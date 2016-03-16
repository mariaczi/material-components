import Component from 'vue-class-component';

var template = require('./header.html');

import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';

@Component({
    template: template,
    components: {
        mdCollection,
        mdCollectionItem
    }
})
export default class HeaderCollection {
}


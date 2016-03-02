import Component from 'vue-class-component';

var template = require('./collections.html');

import collection from 'src/components/collection';
import collectionItem from 'src/components/collection-item';

@Component({
    template: template,
    components: {
        collection,
        collectionItem
    }
})
export default class Collections {

}
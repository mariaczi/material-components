import Component from 'vue-class-component';

var template = require('./collection.html');
var mdCollectionItem = require('../collection-item');

@Component({
    template: template,
    components: {
        mdCollectionItem
    }
})
export default class Collection {

    get headerSlot() {
        var self: any = this;
        return 'header' in self._slotContents;
    }
}
import Component from 'vue-class-component';

var template = require('./collection-list-item.html');

@Component({
    props: {
        active: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    template: template
})
export default class CollectionListItem {

    get secondaryContentSlot() {
        var self: any = this;
        return 'secondary-content' in self._slotContents;
    }
}
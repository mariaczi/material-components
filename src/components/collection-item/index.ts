import Component from 'vue-class-component';

require('./collection-item.scss');
var template = require('./collection-item.html');

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
export default class CollectionItem {

    get secondaryContentSlot() {
        var self: any = this;
        return 'secondary-content' in self._slotContents;
    }
}
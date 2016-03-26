import Component from 'vue-class-component';

@Component({
    props: {
        active: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        }
    },
    template: require('./collection-list-item.html')
})
export default class CollectionListItem {

    get secondaryContentSlot() {
        var self: any = this;
        return 'secondary-content' in self._slotContents;
    }
}
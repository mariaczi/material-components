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
    template: require('./collection-item.html')
})
export default class CollectionItem {

    get secondaryContentSlot() {
        var self: any = this;
        return 'secondary-content' in self._slotContents;
    }
}
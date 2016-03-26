import Component from 'vue-class-component';

@Component({
    template: require('./collection-list.html')
})
export default class CollectionList {

    get headerSlot() {
        var self: any = this;
        return 'header' in self._slotContents;
    }
}
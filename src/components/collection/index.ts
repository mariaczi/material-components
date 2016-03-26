import Component from 'vue-class-component';

@Component({
    template: require('./collection.html')
})
export default class Collection {

    get headerSlot() {
        var self: any = this;
        return 'header' in self._slotContents;
    }
}
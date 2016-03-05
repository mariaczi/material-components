import Component from 'vue-class-component';

var template = require('./collection.html');
var collectionItem = require('../collection-item');

@Component({
    template: template,
    components: {
        collectionItem
    }
})
export default class Collection {
}
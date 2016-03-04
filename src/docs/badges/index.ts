import Component from 'vue-class-component';
import collections from './collections';
import snippet from '../snippet';

var template = require('./badges.html');

@Component({
    template: template,
    components: {
        collections,
        snippet
    }
})
export default class Badges {
    data() {
        return {
            collectionsSnippet: require('./collections/collections.snippet.html')
        }
    }
}
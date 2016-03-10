import Component from 'vue-class-component';
import collections from './collections';
import dropdowns from  './dropdowns';
import navbars from  './navbars';
import snippet from '../snippet';

var template = require('./badges.html');

@Component({
    template: template,
    components: {
        collections,
        dropdowns,
        navbars,
        snippet
    }
})
export default class MdBadges {
    data() {
        return {
            collectionsSnippet: require('./collections/collections.snippet.html'),
            dropdownsSnippet: require('./dropdowns/dropdowns.snippet.html'),
            navbarsSnippet: require('./navbars/navbars.snippet.html')
        }
    }
}
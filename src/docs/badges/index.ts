import Component from 'vue-class-component';
import docCollections from './collections';
import docDropdowns from  './dropdowns';
import docNavbars from  './navbars';
import docSnippet from '../snippet';

var template = require('./badges.html');

@Component({
    template: template,
    components: {
        docCollections,
        docDropdowns,
        docNavbars,
        docSnippet
    }
})
export default class Badges {
    data() {
        return {
            collectionsSnippet: require('./collections/collections.snippet.html'),
            dropdownsSnippet: require('./dropdowns/dropdowns.snippet.html'),
            navbarsSnippet: require('./navbars/navbars.snippet.html')
        }
    }
}
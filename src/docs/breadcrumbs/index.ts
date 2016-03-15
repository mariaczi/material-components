import Component from 'vue-class-component';
import docBreadcrumbs from './default';
import docSnippet from '../snippet';

var template = require('./badges.html');

@Component({
    template: template,
    components: {
        docBreadcrumbs,
        docSnippet
    }
})
export default class Breadcrumbs {
    data() {
        return {
            breadcrumbsSnippet: require('./default/default.snippet.html')
        }
    }
}
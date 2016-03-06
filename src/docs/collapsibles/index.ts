import Component from 'vue-class-component';
import defaultCollapsible from './defaultCollapsible';
import snippet from '../snippet';

var template = require('./collapsibles.html');

@Component({
    template: template,
    components: {
        defaultCollapsible,
        snippet
    }
})
export default class Collapsibles {
    data() {
        return {
            defaultCollapsibleSnippet: require('./defaultCollapsible/defaultCollapsible.snippet.html')
        }
    }
}
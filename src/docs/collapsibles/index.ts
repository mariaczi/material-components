import Component from 'vue-class-component';
import defaultCollapsible from './defaultCollapsible';
import popoutCollapsible from './popoutCollapsible';
import expendableCollapsible from './expendableCollapsible';
import snippet from '../snippet';

var template = require('./collapsibles.html');

@Component({
    template: template,
    components: {
        defaultCollapsible,
        popoutCollapsible,
        expendableCollapsible,
        snippet
    }
})
export default class Collapsibles {
    data() {
        return {
            defaultCollapsibleSnippet: require('./defaultCollapsible/defaultCollapsible.snippet.html'),
            popoutCollapsibleSnippet: require('./popoutCollapsible/poppoutCollapsible.snippet.html'),
            expendableCollapsibleSnippet: require('./expendableCollapsible/expendableCollapsible.snippet.html')
        }
    }
}
import Component from 'vue-class-component';
import docDefaultCollapsible from './defaultCollapsible';
import docPopoutCollapsible from './popoutCollapsible';
import docExpendableCollapsible from './expendableCollapsible';
import docSnippet from '../snippet';

var template = require('./collapsibles.html');

@Component({
    template: template,
    components: {
        docDefaultCollapsible,
        docPopoutCollapsible,
        docExpendableCollapsible,
        docSnippet
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
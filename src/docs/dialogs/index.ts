import Component from 'vue-class-component';
import docToasts from './toasts';
import docTooltips from './tooltips';
import docSnippet from '../snippet';

var template = require('./dialogs.html');

@Component({
    template: template,
    components: {
        docToasts,
        docTooltips,
        docSnippet
    }
})
export default class Dialogs {
    data() {
        return {
            toastsSnippet: require('./toasts/toasts.snippet.html'),
            tooltipsSnippet: require('./tooltips/tooltips.snippet.html')
        }
    }
}
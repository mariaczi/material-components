import Component from 'vue-class-component';
import toasts from './toasts';
import tooltips from './tooltips';
import snippet from '../snippet';

var template = require('./dialogs.html');

@Component({
    template: template,
    components: {
        toasts,
        tooltips,
        snippet
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
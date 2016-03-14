import Component from 'vue-class-component';
import docRaisedButtons from './raised';
import docFloatingButtons from './floating';
import docFabButtons from './fab';
import docFabHorizontalButtons from './fab-horizontal';
import docFabClickButtons from './fab-click';
import docSnippet from '../snippet';

var template = require('./buttons.html');

@Component({
    template: template,
    components: {
        docRaisedButtons,
        docFloatingButtons,
        docFabButtons,
        docFabHorizontalButtons,
        docFabClickButtons,
        docSnippet
    }
})
export default class Butons {
    data() {
        return {
            raisedButtonsSnippet: require('./raised/raised.snippet.html'),
            floatingButtonsSnippet: require('./floating/floating.snippet.html'),
            fabButtonsSnippet: require('./fab/fab.snippet.html'),
            fabHorizontalButtonsSnippet: require('./fab-horizontal/fab.snippet.html'),
            fabClickButtonsSnippet: require('./fab-click/fab.snippet.html')
        }
    }
}
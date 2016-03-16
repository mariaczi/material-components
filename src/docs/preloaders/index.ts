import Component from 'vue-class-component';
import docLinearDeterminate from './linear-determinate';
import docLinearIndeterminate from './linear-indeterminate';
import docCircular from './circular';
import docFlashing from './flashing';
import docSnippet from '../snippet';

var template = require('./preloaders.html');

@Component({
    template: template,
    components: {
        docLinearDeterminate,
        docLinearIndeterminate,
        docCircular,
        docFlashing,
        docSnippet
    }
})
export default class Preloaders {
    data() {
        return {
            linearDeterminateSnippet: require('./linear-determinate/linear-determinate.snippet.html'),
            linearIndeterminateSnippet: require('./linear-indeterminate/linear-indeterminate.snippet.html'),
            circularSnippet: require('./circular/circular.snippet.html'),
            flashingSnippet: require('./flashing/flashing.snippet.html')
        }
    }
}
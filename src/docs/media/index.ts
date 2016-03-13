import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docImage from './image';

var template = require('./media.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docImage
    }
})
export default class Media {
    data() {
        return {
            imageSnippet: require('./image/image.snippet.html')
        }
    }
}
import Component from 'vue-class-component';

import docSnippet from '../snippet';
import docImages from './images';
import docSliders from './sliders';

var template = require('./media.html');

@Component({
    template: template,
    components: {
        docSnippet,
        docImages,
        docSliders
    }
})
export default class Media {
    data() {
        return {
            imagesSnippet: require('./images/image.snippet.html'),
            slidesSnippet: require('./sliders/sliders.snippet.html')
        }
    }
}
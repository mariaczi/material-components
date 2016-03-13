import Component from 'vue-class-component';

var template = require('./image.html');

import mdImage from '../../../components/image';

@Component({
    template: template,
    components: {
        mdImage
    }
})
export default class Image {
}


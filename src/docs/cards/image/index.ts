import Component from 'vue-class-component';

var template = require('./image.html');

import mdCard from '../../../components/card';

@Component({
    template: template,
    components: {
        mdCard
    }
})
export default class ImageCard {
}


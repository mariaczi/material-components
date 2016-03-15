import Component from 'vue-class-component';

var template = require('./reveal.html');

import mdCard from '../../../components/card';
import mdIcon from '../../../components/icon';

@Component({
    template: template,
    components: {
        mdCard,
        mdIcon
    }
})
export default class RevealCard {
}


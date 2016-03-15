import Component from 'vue-class-component';

import mdCard from '../../../components/card';
import mdIcon from '../../../components/icon';

import waveEffect from '../../../directives/wave-effect';

var template = require('./reveal.html');

@Component({
    template: template,
    directives: {
        waveEffect
    },
    components: {
        mdCard,
        mdIcon
    }
})
export default class RevealCard {
}


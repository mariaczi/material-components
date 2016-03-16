import Component from 'vue-class-component';

var template = require('./flashing.html');

import mdCircularPreloader from '../../../components/circural-preloader';

@Component({
    template: template,
    components: {
        mdCircularPreloader
    }
})
export default class FlashingPreloader {
}


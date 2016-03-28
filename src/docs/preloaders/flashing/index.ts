import Component from 'vue-class-component';

import mdCircularPreloader from '../../../components/circural-preloader';

@Component({
    components: {
        mdCircularPreloader
    },
    template: require('./flashing.html')
})
export default class FlashingPreloader {
}


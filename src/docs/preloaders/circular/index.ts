import Component from 'vue-class-component';

import mdCircularPreloader from '../../../components/circural-preloader';

@Component({
    components: {
        mdCircularPreloader
    },
    template: require('./circular.html')
})
export default class CircularPreloader {
}


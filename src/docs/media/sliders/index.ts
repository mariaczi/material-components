import Component from 'vue-class-component';

var template = require('./sliders.html');

import mdSlider from '../../../components/slider';
import mdSlide from '../../../components/slide';

@Component({
    template: template,
    components: {
        mdSlider,
        mdSlide
    }
})
export default class Slides {
}


import Component from 'vue-class-component';

var template = require('./linear-determinate.html');

import mdLinearPreloader from '../../../components/linear-preloader';

@Component({
    template: template,
    components: {
        mdLinearPreloader
    }
})
export default class LinearDeterminatePreloader {
    data() {
        return {
            value: 70
        }
    }
}


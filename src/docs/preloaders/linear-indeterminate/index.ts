import Component from 'vue-class-component';

var template = require('./linear-indeterminate.html');

import mdLinearPreloader from '../../../components/linear-preloader';

@Component({
    template: template,
    components: {
        mdLinearPreloader
    }
})
export default class LinearIndeterminatePreloader {
}


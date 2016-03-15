import Component from 'vue-class-component';

var template = require('./default.html');

import mdCard from '../../../components/card';

@Component({
    template: template,
    components: {
        mdCard
    }
})
export default class DefaultCard {
}


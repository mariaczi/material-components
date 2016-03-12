import Component from 'vue-class-component';

import mdNavbar from '../../../components/navbar';
import mdIcon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdNavbar,
        mdIcon
    }
})
export default class SearchNavbar {
    data() {
        return {
        }
    }
}
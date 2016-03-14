import Component from 'vue-class-component';

import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdIcon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdNavbar,
        mdNavItem,
        mdIcon
    }
})
export default class MobileCollase {
    data() {
        return {
        }
    }
}
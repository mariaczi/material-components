import Component from 'vue-class-component';

import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';
import mdIcon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdNavbar,
        mdNavbarItem,
        mdIcon
    }
})
export default class MobileCollase {
    data() {
        return {
        }
    }
}
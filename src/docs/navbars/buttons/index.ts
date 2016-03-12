import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdButton from '../../../components/button';
import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';
import mdIcon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdButton,
        mdNavbar,
        mdNavbarItem,
        mdIcon
    }
})
export default class ButtonsNavbar {
}
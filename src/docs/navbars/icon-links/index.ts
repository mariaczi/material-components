import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';
import mdIcon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdNavbar,
        mdNavbarItem,
        mdIcon
    }
})
export default class IconLinksNavbar {
    data() {
        return {
        }
    }
}
import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdNavbar,
        mdNavbarItem
    }
})
export default class ActiveItemNavbar {
}
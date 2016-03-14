import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdNavbar,
        mdNavItem
    }
})
export default class LeftAlignNavbars {
    data() {
        return {
        }
    }
}
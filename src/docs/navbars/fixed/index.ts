import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdButton from '../../../components/button';
import mdNavbar from '../../../components/navbar';
import mdNavItem from '../../../components/nav-item';
import mdSnippet from '../../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdButton,
        mdNavbar,
        mdNavItem,
        mdSnippet
    }
})
export default class FixedNavbars {
    private showFixed: boolean;

    data() {
        return {
            showFixed: false
        }
    }

    toggleFixed() {
        this.showFixed = !this.showFixed;
    }
}
import Component from 'vue-class-component';

import mdBadge from '../../../components/badge';
import mdButton from '../../../components/button';
import mdNavbar from '../../../components/navbar';
import mdNavbarItem from '../../../components/navbar-item';
import mdSnippet from '../../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        mdButton,
        mdNavbar,
        mdNavbarItem,
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
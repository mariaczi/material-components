import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import snippet from '../../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        navbar,
        navbarItem,
        snippet
    }
})
export default class CenterAlignNavbar {
    data() {
        return {
        }
    }
}
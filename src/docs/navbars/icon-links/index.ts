import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        navbar,
        navbarItem,
        icon
    }
})
export default class IconLinksNavbar {
    data() {
        return {
        }
    }
}
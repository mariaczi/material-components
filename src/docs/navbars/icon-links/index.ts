import Component from 'vue-class-component';
import badge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
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
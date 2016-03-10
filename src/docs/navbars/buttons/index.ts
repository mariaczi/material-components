import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import btn from '../../../components/button';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
        btn,
        navbar,
        navbarItem,
        icon
    }
})
export default class ButtonsNavbar {
    data() {
        return {
        }
    }
}
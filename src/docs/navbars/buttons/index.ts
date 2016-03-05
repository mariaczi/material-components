import Component from 'vue-class-component';
import badge from '../../../components/badge';
import btn from '../../../components/button';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
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
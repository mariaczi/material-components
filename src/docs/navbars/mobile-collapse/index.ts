import Component from 'vue-class-component';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        navbar,
        navbarItem,
        icon
    }
})
export default class MobileCollase {
    data() {
        return {
        }
    }
}
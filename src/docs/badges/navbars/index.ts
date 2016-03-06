import Component from 'vue-class-component';
import badge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
        navbar,
        navbarItem
    }
})
export default class Navbars {
    data() {
        return {
        }
    }
}
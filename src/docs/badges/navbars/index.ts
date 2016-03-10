import Component from 'vue-class-component';
import mdBadge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        mdBadge,
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
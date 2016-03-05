import Component from 'vue-class-component';
import badge from '../../../components/badge';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import snippet from '../../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
        navbar,
        navbarItem,
        snippet
    }
})
export default class LeftAlignNavbars {
    data() {
        return {
        }
    }
}
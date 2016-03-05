import Component from 'vue-class-component';
import badge from '../../../components/badge';
import btn from '../../../components/button';
import navbar from '../../../components/navbar';
import navbarItem from '../../../components/navbar-item';
import snippet from '../../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        badge,
        btn,
        navbar,
        navbarItem,
        snippet
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
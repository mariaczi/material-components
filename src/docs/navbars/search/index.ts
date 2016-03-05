import Component from 'vue-class-component';
import navbar from '../../../components/navbar';
import icon from '../../../components/icon';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        navbar,
        icon
    }
})
export default class SearchNavbar {
    data() {
        return {
        }
    }
}
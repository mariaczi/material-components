import Component from 'vue-class-component';
import mdFab from '../../../components/fab';
import mdButton from '../../../components/button';
import mdIcon from '../../../components/icon';

var template = require('./fab.html');

@Component({
    template: template,
    components: {
        mdFab,
        mdButton,
        mdIcon
    }
})
export default class FabButtons {
}


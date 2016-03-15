import Component from 'vue-class-component';

import docDefaultChip from './default';
import docSnippet from '../snippet';

var template = require('./chips.html');

@Component({
    template: template,
    components: {
        docDefaultChip,
        docSnippet
    }
})
export default class Chips {
    data() {
        return {
            defaultChipSnippet: require('./default/default.snippet.html')
        }
    }
}
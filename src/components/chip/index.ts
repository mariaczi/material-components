import Component from 'vue-class-component';

require('./chip.scss');
var template = require('./chip.html');

@Component({
    props: {
        closeable: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    template: template
})
export default class Chip {
    
    data() {
        return {
            closed: false
        }
    }
}
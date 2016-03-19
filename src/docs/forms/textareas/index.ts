import Component from 'vue-class-component';

import mdTextarea from '../../../components/form/textarea';

import field from '../../../directives/field';

var template = require('./textarea.html');

var eolToBr = function (input) {
    return input.replace(/\n/g, '<br>');
};

@Component({
    template: template,
    directives: {
        field
    },
    components: {
        mdTextarea
    },
    filters: {
        eolToBr
    }
})
export default class Textarea {

    data() {
        return {
            value: '',
        }
    }
}


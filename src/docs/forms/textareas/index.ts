import Component from 'vue-class-component';

import mdTextarea from '../../../components/form/textarea';

import field from '../../../directives/field';

var eolToBr = function (input) {
    return input.replace(/\n/g, '<br>');
};

@Component({
    directives: {
        field
    },
    components: {
        mdTextarea
    },
    filters: {
        eolToBr
    },
    template: require('./textarea.html')
})
export default class Textareas {

    data() {
        return {
            value: 'Text',
        }
    }
}


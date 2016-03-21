import Component from 'vue-class-component';

import mdFileInput from '../../../components/form/file-input';

import field from '../../../directives/field';

var template = require('./file-inputs.html');

@Component({
    components: {
        mdFileInput
    },
    directives: {
        field
    },
    template: template
})
export default class FileInputs {

    data() {
        return {
            fileName: '',
            fileNames: '',
        }
    }
}


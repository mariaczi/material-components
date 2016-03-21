import Component from 'vue-class-component';
import docInputFields from './input-fields';
import docInputIconFields from './input-icon-fields';
import docTextareas from './textareas';
import docSelects from './selects';
import docRadios from './radios';
import docCheckboxes from './checkboxes';
import docSnippet from '../snippet';

var template = require('./forms.html');

@Component({
    template: template,
    components: {
        docInputFields,
        docInputIconFields,
        docTextareas,
        docSelects,
        docRadios,
        docCheckboxes,
        docSnippet
    }
})
export default class Forms {
    data() {
        return {
            inputFieldsSnippet: require('./input-fields/input.snippet.html'),
            inputIconFieldsSnippet: require('./input-icon-fields/input-icon.snippet.html'),
            textareasSnippet: require('./textareas/textarea.snippet.html'),
            selectsSnippet: require('./selects/selects.snippet.html'),
            radiosSnippet: require('./radios/radios.snippet.html'),
            checkboxesSnippet: require('./checkboxes/checkboxes.snippet.html')
        }
    }
}
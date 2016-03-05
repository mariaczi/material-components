import Component from 'vue-class-component';
import navbarLeft from './left-align';
import navbarRight from './right-align';
import navbarCenter from './center-align';
import navbarActiveItems from './active-items';
import navbarFixed from './fixed';
import navbarDropdown from './dropdown';
import snippet from '../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        navbarLeft,
        navbarRight,
        navbarCenter,
        navbarActiveItems,
        navbarFixed,
        navbarDropdown,
        snippet
    }
})
export default class Navbars {
    data() {
        return {
            navbarRightSnippet: require('./right-align/navbars.snippet.html'),
            navbarLeftSnippet: require('./left-align/navbars.snippet.html'),
            navbarCenterSnippet: require('./center-align/navbars.snippet.html'),
            navbarActiveItemsSnippet: require('./active-items/navbars.snippet.html'),
            navbarFixedSnippet: require('./fixed/navbars.snippet.html'),
            navbarDropdownSnippet: require('./dropdown/navbars.snippet.html')
        }
    }
}
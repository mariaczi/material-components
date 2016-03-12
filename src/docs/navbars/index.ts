import Component from 'vue-class-component';

import docNavbarLeft from './left-align';
import docNavbarRight from './right-align';
import docNavbarCenter from './center-align';
import docNavbarActiveItems from './active-items';
import docNavbarFixed from './fixed';
import docNavbarDropdown from './dropdown';
import docNavbarIconLinks from './icon-links';
import docNavbarButtons from './buttons';
import docNavbarSearch from './search';
import docNavbarMobileCollapse from './mobile-collapse';
import docSnippet from '../snippet';

var template = require('./navbars.html');

@Component({
    template: template,
    components: {
        docNavbarLeft,
        docNavbarRight,
        docNavbarCenter,
        docNavbarActiveItems,
        docNavbarFixed,
        docNavbarDropdown,
        docNavbarIconLinks,
        docNavbarButtons,
        docNavbarSearch,
        docNavbarMobileCollapse,
        docSnippet
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
            navbarDropdownSnippet: require('./dropdown/navbars.snippet.html'),
            navbarIconLinksSnippet: require('./icon-links/navbars.snippet.html'),
            navbarButtonsSnippet: require('./icon-links/navbars.snippet.html'),
            navbarSearchSnippet: require('./search/navbars.snippet.html'),
            navbarMobileCollapseSnippet: require('./search/navbars.snippet.html')
        }
    }
}
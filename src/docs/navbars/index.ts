import Component from 'vue-class-component';
import navbarLeft from './left-align';
import navbarRight from './right-align';
import navbarCenter from './center-align';
import navbarActiveItems from './active-items';
import navbarFixed from './fixed';
import navbarDropdown from './dropdown';
import navbarIconLinks from './icon-links';
import navbarButtons from './buttons';
import navbarSearch from './search';
import navbarMobileCollapse from './mobile-collapse';
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
        navbarIconLinks,
        navbarButtons,
        navbarSearch,
        navbarMobileCollapse,
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
            navbarDropdownSnippet: require('./dropdown/navbars.snippet.html'),
            navbarIconLinksSnippet: require('./icon-links/navbars.snippet.html'),
            navbarButtonsSnippet: require('./icon-links/navbars.snippet.html'),
            navbarSearchSnippet: require('./search/navbars.snippet.html'),
            navbarMobileCollapseSnippet: require('./search/navbars.snippet.html')
        }
    }
}
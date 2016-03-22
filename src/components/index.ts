import ComponentOption = vuejs.ComponentOption;
import VueModule = require('vue');
var Vue: any = VueModule;

import directives from '../directives';
import mixins from '../mixins';

require('./transitions.scss');

import mdBadge from './badge';
import mdButton from './button';
import mdCard from './card';
import mdChip from './chip';
import mdCircuralPreloader from './circural-preloader';
import mdCollapsible from './collapsible';
import mdCollapsibleItem from './collapsible-item';
import mdCollection from './collection';
import mdCollectionList from './collection-list';
import mdCollectionItem from './collection-item';
import mdCollectionListItem from './collection-list-item';
import mdDropdown from './dropdown';
import mdDropdownItem from './dropdown-item';
import mdDropdownList from './dropdown-list';
import mdEventWrapper from './event-wrapper';
import mdFab from './fab';
import mdInput from './form/input';
import mdOption from './form/option';
import mdSelect from './form/select';
import mdTextarea from './form/textarea';
import mdIcon from './icon';
import mdImage from './image';
import mdLeanOverlay from './lean-overlay';
import mdLinearPreloader from './linear-preloader';
import mdModal from './modal';
import mdNavItem from './nav-item';
import mdNavbar from './navbar';
import mdPagination from './pagination';
import mdSidenav from './sidenav';
import mdSidenavOverlay from './sidenav-overlay';
import mdSlide from './slide';
import mdSlider from './slider';
import mdTab from './tab';
import mdTabs from './tabs';

const VueMaterializeComponents = {
    mdBadge,
    mdButton,
    mdCard,
    mdChip,
    mdCircuralPreloader,
    mdCollapsible,
    mdCollapsibleItem,
    mdCollection,
    mdCollectionList,
    mdCollectionItem,
    mdCollectionListItem,
    mdDropdown,
    mdDropdownItem,
    mdDropdownList,
    mdEventWrapper,
    mdFab,
    mdInput,
    mdOption,
    mdSelect,
    mdTextarea,
    mdIcon,
    mdImage,
    mdLeanOverlay,
    mdLinearPreloader,
    mdModal,
    mdNavItem,
    mdNavbar,
    mdPagination,
    mdSidenav,
    mdSidenavOverlay,
    mdSlide,
    mdSlider,
    mdTab,
    mdTabs
};

export default VueMaterializeComponents;

var baseComponent: any = {
    components: VueMaterializeComponents,
    directives: directives,
    mixins: mixins
};

export const BaseComponent = Vue.extend(baseComponent);
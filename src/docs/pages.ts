import docsHomePage from './home-page';
import docsBadges from './badges';
import docsBreadcrumbs from './breadcrumbs';
import docsButtons from './buttons';
import docsCards from './cards';
import docsChips from './chips';
import docsCollapsibles from './collapsibles';
import docsCollections from './collections';
import docsDropdowns from './dropdowns';
import docsForms from './forms';
import docsNavbars from './navbars';
import docsModals from './modals';
import docsDialogs from './dialogs';
import docsMedia from './media';
import docsTabs from './tabs';
import docPagination from './paginations';
import docsPreloaders from './preloaders';

const docsPages: [Route] = [
    {
        url: '/',
        link: '/',
        title: 'Home',
        component: docsHomePage
    },
    {
        url: "/badges",
        link: "/badges",
        title: "Badges",
        component: docsBadges
    },
    {
        url: "/breadcrumbs",
        link: "/breadcrumbs",
        title: "Breadcrumbs",
        component: docsBreadcrumbs
    },
    {
        url: "/buttons",
        link: "/buttons",
        title: "Buttons",
        component: docsButtons
    },
    {
        url: "/cards",
        link: "/cards",
        title: "Cards",
        component: docsCards
    },
    {
        url: "/collapsibles",
        link: "/collapsibles",
        title: "Collapsibles",
        component: docsCollapsibles
    },
    {
        url: "/collections",
        link: "/collections",
        title: "Collections",
        component: docsCollections
    },
    {
        url: "/chips",
        link: "/chips",
        title: "Chips",
        component: docsChips
    },
    {
        url: "/dialogs",
        link: "/dialogs",
        title: "Dialogs",
        component: docsDialogs
    },
    {
        url: "/dropdowns",
        link: "/dropdowns",
        title: "Dropdowns",
        component: docsDropdowns
    },
    {
        url: "/forms",
        link: "/forms",
        title: "Forms",
        component: docsForms
    },
    {
        url: "/modals",
        link: "/modals",
        title: "Modals",
        component: docsModals
    },
    {
        url: "/media",
        link: "/media",
        title: "Media",
        component: docsMedia
    },
    {
        url: "/navbars",
        link: "/navbars",
        title: "Navbars",
        component: docsNavbars
    },
    {
        url: "/tabs/:tab",
        link: "/tabs/4",
        title: "Tabs",
        component: docsTabs
    },
    {
        url: "/pagination",
        link: "/pagination",
        title: "Pagination",
        component: docPagination
    },
    {
        url: "/preloaders",
        link: "/preloaders",
        title: "Preloaders",
        component: docsPreloaders
    }
];

export = docsPages;
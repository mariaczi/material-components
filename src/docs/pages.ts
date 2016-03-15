import docsBadges from './badges';
import docsBreadcrumbs from './breadcrumbs';
import docsButtons from './buttons';
import docsCards from './cards';
import docsChips from './chips';
import docsCollapsibles from './collapsibles';
import docsDropdowns from './dropdowns';
import docsNavbars from './navbars';
import docsModals from './modals';
import docsDialogs from './dialogs';
import docsMedia from './media';
import docsTabs from './tabs';

const docsPages: [Route] = [
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
        url: "/chips",
        link: "/chips",
        title: "Chips",
        component: docsChips
    },
    {
        url: "/dropdowns",
        link: "/dropdowns",
        title: "Dropdowns",
        component: docsDropdowns
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
        url: "/dialogs",
        link: "/dialogs",
        title: "Dialogs",
        component: docsDialogs
    },
    {
        url: "/tabs/:tab",
        link: "/tabs/4",
        title: "Tabs",
        component: docsTabs
    }
];

export = docsPages;
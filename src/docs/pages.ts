import docsBadges from './badges';
import docsCollapsibles from './collapsibles';
import docsDropdowns from './dropdowns';
import docsNavbars from './navbars';
import docsModals from './modals';
import docsDialogs from './dialogs';
import docsMedia from './media';

const docsPages: [Route] = [
    {
        url: "/badges",
        title: "Badges",
        component: docsBadges
    },
    {
        url: "/collapsibles",
        title: "Collapsibles",
        component: docsCollapsibles
    },
    {
        url: "/dropdowns",
        title: "Dropdowns",
        component: docsDropdowns
    },
    {
        url: "/modals",
        title: "Modals",
        component: docsModals
    },
    {
        url: "/media",
        title: "Media",
        component: docsMedia
    },
    {
        url: "/navbars",
        title: "Navbars",
        component: docsNavbars
    },
    {
        url: "/dialogs",
        title: "Dialogs",
        component: docsDialogs
    }
];

export = docsPages;
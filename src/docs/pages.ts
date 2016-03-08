import badges from './badges';
import collapsibles from './collapsibles';
import navbars from './navbars';
import modals from './modals';
import dialogs from './dialogs';

const docsPages: [Route] = [
    {
        url: "/badges",
        title: "Badges",
        component: badges
    },
    {
        url: "/collapsibles",
        title: "Collapsibles",
        component: collapsibles
    },
    {
        url: "/modals",
        title: "Modals",
        component: modals
    },
    {
        url: "/navbars",
        title: "Navbars",
        component: navbars
    },
    {
        url: "/dialogs",
        title: "Dialogs",
        component: dialogs
    }
];

export = docsPages;
import mdBadges from './badges';
import collapsibles from './collapsibles';
import dropdowns from './dropdowns';
import navbars from './navbars';
import modals from './modals';
import dialogs from './dialogs';

const docsPages: [Route] = [
    {
        url: "/badges",
        title: "Badges",
        component: mdBadges
    },
    {
        url: "/collapsibles",
        title: "Collapsibles",
        component: collapsibles
    },
    {
        url: "/dropdowns",
        title: "Dropdowns",
        component: dropdowns
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
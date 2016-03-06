import badges from './badges';
import navbars from './navbars';
import modals from './modals';

const docsPages: [Route] = [
    {
        url: "/badges",
        title: "Badges",
        component: badges
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
    }
];

export = docsPages;
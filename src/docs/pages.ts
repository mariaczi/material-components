import badges from './badges';
import navbars from './navbars';

const docsPages: [Route] = [
    {
        url: "/badges",
        title: "Badges",
        component: badges
    },
    {
        url: "/navbars",
        title: "Navbars",
        component: navbars
    }
];

export = docsPages;
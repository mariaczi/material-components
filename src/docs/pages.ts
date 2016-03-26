import docsHomePage from './pages/home-page';
import docsAboutPage from './pages/about-page';
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
        urls: ['/'],
        link: '/',
        title: 'Home',
        component: docsHomePage
    },
    {
        urls: ['/about'],
        link: '/about',
        title: 'About',
        component: docsAboutPage
    },
    {
        urls: ['/badges', '/badges/:tab'],
        link: '/badges',
        title: 'Badges',
        component: docsBadges
    },
    {
        urls: ['/breadcrumbs', '/breadcrumbs/:tab'],
        link: '/breadcrumbs',
        title: 'Breadcrumbs',
        component: docsBreadcrumbs
    },
    {
        urls: ['/buttons', '/buttons/:tab'],
        link: '/buttons/showcase',
        title: 'Buttons',
        component: docsButtons
    },
    {
        urls: ['/cards', '/cards/:tab'],
        link: '/cards',
        title: 'Cards',
        component: docsCards
    },
    {
        urls: ['/chips', '/chips/:tab'],
        link: '/chips',
        title: 'Chips',
        component: docsChips
    },
    {
        urls: ['/collapsibles', '/collapsibles/:tab'],
        link: '/collapsibles',
        title: 'Collapsibles',
        component: docsCollapsibles
    },
    {
        urls: ['/collections', '/collections/:tab'],
        link: '/collections',
        title: 'Collections',
        component: docsCollections
    },
    {
        urls: ['/dialogs', '/dialogs/:tab'],
        link: '/dialogs',
        title: 'Dialogs',
        component: docsDialogs
    },
    {
        urls: ['/dropdowns', '/dropdowns/:tab'],
        link: '/dropdowns',
        title: 'Dropdowns',
        component: docsDropdowns
    },
    {
        urls: ['/forms', '/forms/:tab'],
        link: '/forms',
        title: 'Forms',
        component: docsForms
    },
    {
        urls: ['/modals', '/modals/:tab'],
        link: '/modals',
        title: 'Modals',
        component: docsModals
    },
    {
        urls: ['/media', '/media/:tab'],
        link: '/media',
        title: 'Media',
        component: docsMedia
    },
    {
        urls: ['/navbars'],
        link: '/navbars',
        title: 'Navbars',
        component: docsNavbars
    },
    {
        urls: ['/tabs/:tab'],
        link: '/tabs/4',
        title: 'Tabs',
        component: docsTabs
    },
    {
        urls: ['/pagination'],
        link: '/pagination',
        title: 'Pagination',
        component: docPagination
    },
    {
        urls: ['/preloaders'],
        link: '/preloaders',
        title: 'Preloaders',
        component: docsPreloaders
    }
];

export = docsPages;
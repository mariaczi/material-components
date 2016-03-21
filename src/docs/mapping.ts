import docsPages = require('./pages');

var mapping = {};
mapping['*'] = {
    component: {
        template: '<h1>Not Found</h1>'
    }
};

docsPages.forEach(function (page: Route) {
    mapping[page.url] = {
        component: page.component,
        title: page.title
    };
});

export = mapping;
import components from '../components';
import directives from '../directives';
import mixins from '../mixins';

var Vue = require('vue');

export = {
    registerAll: function () {
        this.registerComponents();
        this.registerDirectives();
    },
    registerComponents: function () {
        for (var componentName in components) {
            Vue.component(componentName, components[componentName]);
        }
    },
    registerDirectives: function () {
        for (var directiveName in directives) {
            Vue.directive(directiveName, components[directiveName]);
        }
    },
    components,
    directives,
    mixins,
    vue: Vue,
    Vue: Vue
}
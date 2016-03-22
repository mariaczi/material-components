/// <reference path="../typings/vue/vue.d.ts"/>
/// <reference path="../typings/ts.d.ts"/>

import VueModule = require('vue');
var Vue: any = VueModule;

import VueRouterModule = require('vue-router')
var VueRouter: any = VueRouterModule;

import mapping = require('./mapping');
import App = require('./doc-app');

import components from '../components';
import directives from '../directives';
import mixins from '../mixins';
import {BaseComponent} from '../components';

import vueLogo from './logo/vue'
import materializeLogo from './logo/materialize';

export = {
    run: function (app) {

        Vue.config.debug = true;
        Vue.use(VueRouter);
        Vue.component('vue-logo', vueLogo);
        Vue.component('materialize-logo', materializeLogo);

        var router = new VueRouter({
            history: false,
            root: '/'
        });

        router.map(mapping);

        router.start(App, app);
    },
    registerAll: function () {
        this.registerComponents()
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
    registerMixins: function () {
        for (var i = 0; i < mixins.length; i++) {
            Vue.mixin(mixins[i]);
        }
    },
    BaseComponent,
    components,
    directives,
    mixins,
}


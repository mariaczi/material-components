/// <reference path="../typings/vue/vue.d.ts"/>
/// <reference path="../typings/ts.d.ts"/>

import VueModule = require('vue');
var Vue: any = VueModule;

import VueRouterModule = require('vue-router')
var VueRouter: any = VueRouterModule;

import mapping = require('./mapping');
import App = require('./doc-app');

export = {
    run: function (app) {

        Vue.config.debug = true;
        Vue.use(VueRouter);

        var router = new VueRouter({
            history: false,
            root: '/'
        });

        router.map(mapping);

        router.start(App, app);
    }
}


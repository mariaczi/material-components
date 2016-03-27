/// <reference path="../typings/ts.d.ts"/>

import VueModule = require('vue')
var Vue: any = VueModule;

import pages = require('./pages');
import components from '../components';
import directives from '../directives';

// because vue router not work with TS @Component
export = Vue.extend({
    components: components,
    directives: directives,
    data: function () {
        return {
            navs: pages
        };
    },
    computed: {
        title: function () {
            return this.$route.title;
        },
        '$currentRoute': function () {
            return this.$router._currentRoute;
        }
    }
})
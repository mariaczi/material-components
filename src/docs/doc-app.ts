/// <reference path="../typings/ts.d.ts"/>

import VueModule = require('vue')
var Vue: any = VueModule;

import pages = require('./pages');
import components from '../components';

// because vue router not work with TS @Component
export = Vue.extend({
    components: components,
    data: function () {
        return {
            navs: pages
        };
    }
})
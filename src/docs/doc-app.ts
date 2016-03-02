/// <reference path="../typings/ts.d.ts"/>

import VueModule = require('vue')
var Vue: any = VueModule;

import pages = require('./pages');

export = Vue.extend({
    data: function () {
        return {
            navs: pages
        };
    }
})
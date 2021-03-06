(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"), require("VueRouter"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue", "VueRouter"], factory);
	else if(typeof exports === 'object')
		exports["VueMaterialComponentsDocs"] = factory(require("Vue"), require("VueRouter"));
	else
		root["VueMaterialComponentsDocs"] = factory(root["Vue"], root["VueRouter"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/vue/vue.d.ts"/>
	/// <reference path="../typings/ts.d.ts"/>
	/// <reference path="../typings/doc.d.ts"/>
	"use strict";
	var Vue = __webpack_require__(1);
	var VueRouter = __webpack_require__(2);
	var mapping = __webpack_require__(3);
	var App = __webpack_require__(444);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var mixins_1 = __webpack_require__(15);
	var components_2 = __webpack_require__(7);
	var vue_1 = __webpack_require__(445);
	var materialize_1 = __webpack_require__(447);
	var doc_api_1 = __webpack_require__(449);
	var doc_sources_1 = __webpack_require__(451);
	var snippet_1 = __webpack_require__(127);
	var doc_tabs_1 = __webpack_require__(453);
	__webpack_require__(455);
	module.exports = {
	    run: function (app) {
	        Vue.config.debug = true;
	        Vue.config.async = false;
	        Vue.use(VueRouter);
	        Vue.component('vue-logo', vue_1.default);
	        Vue.component('materialize-logo', materialize_1.default);
	        Vue.component('doc-api', doc_api_1.default);
	        Vue.component('doc-sources', doc_sources_1.default);
	        Vue.component('doc-snippet', snippet_1.default);
	        Vue.component('doc-tabs', doc_tabs_1.default);
	        var router = new VueRouter({
	            history: false,
	            root: '/'
	        });
	        router.map(mapping);
	        router.start(App, app);
	    },
	    registerAll: function () {
	        this.registerComponents();
	        this.registerDirectives();
	    },
	    registerComponents: function () {
	        for (var componentName in components_1.default) {
	            Vue.component(componentName, components_1.default[componentName]);
	        }
	    },
	    registerDirectives: function () {
	        for (var directiveName in directives_1.default) {
	            Vue.directive(directiveName, components_1.default[directiveName]);
	        }
	    },
	    registerMixins: function () {
	        for (var i = 0; i < mixins_1.default.length; i++) {
	            Vue.mixin(mixins_1.default[i]);
	        }
	    },
	    BaseComponent: components_2.BaseComponent,
	    components: components_1.default,
	    directives: directives_1.default,
	    mixins: mixins_1.default,
	    Vue: Vue
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var docsPages = __webpack_require__(4);
	var mapping = {};
	mapping['*'] = {
	    component: {
	        template: '<h1>Not Found</h1>'
	    }
	};
	docsPages.forEach(function (page) {
	    page.urls.forEach(function (url) {
	        mapping[url] = {
	            component: page.component,
	            title: page.title
	        };
	    });
	});
	module.exports = mapping;
	//# sourceMappingURL=mapping.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_page_1 = __webpack_require__(5);
	var about_page_1 = __webpack_require__(114);
	var get_started_page_1 = __webpack_require__(116);
	var badges_1 = __webpack_require__(120);
	var breadcrumbs_1 = __webpack_require__(137);
	var buttons_1 = __webpack_require__(148);
	var cards_1 = __webpack_require__(168);
	var chips_1 = __webpack_require__(183);
	var collapsibles_1 = __webpack_require__(192);
	var collections_1 = __webpack_require__(209);
	var dropdowns_1 = __webpack_require__(235);
	var forms_1 = __webpack_require__(249);
	var navbars_1 = __webpack_require__(309);
	var modals_1 = __webpack_require__(351);
	var dialogs_1 = __webpack_require__(366);
	var media_1 = __webpack_require__(378);
	var tabs_1 = __webpack_require__(397);
	var paginations_1 = __webpack_require__(411);
	var preloaders_1 = __webpack_require__(419);
	var waves_1 = __webpack_require__(439);
	var docsPages = [{
	    urls: ['/'],
	    link: '/',
	    title: 'Home',
	    component: home_page_1['default']
	}, {
	    urls: ['/about'],
	    link: '/about',
	    title: 'About',
	    component: about_page_1['default']
	}, {
	    urls: ['/get-started'],
	    link: '/get-started',
	    title: 'Get started',
	    component: get_started_page_1['default']
	}, {
	    urls: ['/badges', '/badges/:tab'],
	    link: '/badges/showcase',
	    title: 'Badges',
	    component: badges_1['default']
	}, {
	    urls: ['/breadcrumbs', '/breadcrumbs/:tab'],
	    link: '/breadcrumbs/showcase',
	    title: 'Breadcrumbs',
	    component: breadcrumbs_1['default']
	}, {
	    urls: ['/buttons', '/buttons/:tab'],
	    link: '/buttons/showcase',
	    title: 'Buttons',
	    component: buttons_1['default']
	}, {
	    urls: ['/cards', '/cards/:tab'],
	    link: '/cards/showcase',
	    title: 'Cards',
	    component: cards_1['default']
	}, {
	    urls: ['/chips', '/chips/:tab'],
	    link: '/chips/showcase',
	    title: 'Chips',
	    component: chips_1['default']
	}, {
	    urls: ['/collapsibles', '/collapsibles/:tab'],
	    link: '/collapsibles/showcase',
	    title: 'Collapsibles',
	    component: collapsibles_1['default']
	}, {
	    urls: ['/collections', '/collections/:tab'],
	    link: '/collections/showcase',
	    title: 'Collections',
	    component: collections_1['default']
	}, {
	    urls: ['/dialogs', '/dialogs/:tab'],
	    link: '/dialogs/showcase',
	    title: 'Dialogs',
	    component: dialogs_1['default']
	}, {
	    urls: ['/dropdowns', '/dropdowns/:tab'],
	    link: '/dropdowns/showcase',
	    title: 'Dropdowns',
	    component: dropdowns_1['default']
	}, {
	    urls: ['/forms', '/forms/:tab'],
	    link: '/forms/showcase',
	    title: 'Forms',
	    component: forms_1['default']
	}, {
	    urls: ['/modals', '/modals/:tab'],
	    link: '/modals/showcase',
	    title: 'Modals',
	    component: modals_1['default']
	}, {
	    urls: ['/media', '/media/:tab'],
	    link: '/media/showcase',
	    title: 'Media',
	    component: media_1['default']
	}, {
	    urls: ['/navbars', '/navbars/:tab'],
	    link: '/navbars/showcase',
	    title: 'Navbars',
	    component: navbars_1['default']
	}, {
	    urls: ['/tabs/:tab'],
	    link: '/tabs/showcase',
	    title: 'Tabs',
	    component: tabs_1['default']
	}, {
	    urls: ['/pagination', '/pagination/:tab'],
	    link: '/pagination/showcase',
	    title: 'Pagination',
	    component: paginations_1['default']
	}, {
	    urls: ['/preloaders', '/preloaders/:tab'],
	    link: '/preloaders/showcase',
	    title: 'Preloaders',
	    component: preloaders_1['default']
	}, {
	    urls: ['/waves'],
	    link: '/waves',
	    title: 'Waves',
	    component: waves_1['default']
	}];
	module.exports = docsPages;
	//# sourceMappingURL=pages.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var HomePage = (function () {
	    function HomePage() {}
	    HomePage = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(113)
	    })], HomePage);
	    return HomePage;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = HomePage;
	//# sourceMappingURL=index.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var Vue = __webpack_require__(1);
	
	var internalHooks = ['data', 'el', 'init', 'created', 'ready', 'beforeCompile', 'compiled', 'beforeDestroy', 'destroyed', 'attached', 'detached', 'activate'];
	
	function componentFactory(Component, options) {
	  if (!options) {
	    options = {};
	  }
	  options.name = options.name || Component.name;
	  // prototype props.
	  var proto = Component.prototype;
	  Object.getOwnPropertyNames(proto).forEach(function (key) {
	    if (key === 'constructor') {
	      return;
	    }
	    // hooks
	    if (internalHooks.indexOf(key) > -1) {
	      options[key] = proto[key];
	      return;
	    }
	    var descriptor = Object.getOwnPropertyDescriptor(proto, key);
	    if (typeof descriptor.value === 'function') {
	      // methods
	      (options.methods || (options.methods = {}))[key] = descriptor.value;
	    } else if (descriptor.get || descriptor.set) {
	      // computed properties
	      (options.computed || (options.computed = {}))[key] = {
	        get: descriptor.get,
	        set: descriptor.set
	      };
	    }
	  });
	  // find super
	  var superProto = Object.getPrototypeOf(Component.prototype);
	  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
	  return Super.extend(options);
	}
	
	function decorator(options) {
	  if (typeof options === 'function') {
	    return componentFactory(options);
	  }
	  return function (Component) {
	    return componentFactory(Component, options);
	  };
	}
	
	exports['default'] = decorator;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var VueModule = __webpack_require__(1);
	var Vue = VueModule;
	var directives_1 = __webpack_require__(8);
	var mixins_1 = __webpack_require__(15);
	var badge_1 = __webpack_require__(23);
	var button_1 = __webpack_require__(25);
	var breadcrumbs_1 = __webpack_require__(29);
	var card_1 = __webpack_require__(37);
	var checkbox_1 = __webpack_require__(39);
	var checkbox_group_1 = __webpack_require__(41);
	var chip_1 = __webpack_require__(43);
	var circural_preloader_1 = __webpack_require__(45);
	var collapsible_1 = __webpack_require__(47);
	var collapsible_item_1 = __webpack_require__(49);
	var collection_1 = __webpack_require__(51);
	var collection_list_1 = __webpack_require__(53);
	var collection_item_1 = __webpack_require__(55);
	var collection_list_item_1 = __webpack_require__(57);
	var dropdown_1 = __webpack_require__(59);
	var dropdown_item_1 = __webpack_require__(61);
	var dropdown_list_1 = __webpack_require__(60);
	var event_wrapper_1 = __webpack_require__(66);
	var fab_1 = __webpack_require__(68);
	var file_input_1 = __webpack_require__(70);
	var input_1 = __webpack_require__(72);
	var optgroup_1 = __webpack_require__(74);
	var option_1 = __webpack_require__(76);
	var radio_1 = __webpack_require__(78);
	var radio_group_1 = __webpack_require__(80);
	var select_1 = __webpack_require__(82);
	var textarea_1 = __webpack_require__(84);
	var icon_1 = __webpack_require__(26);
	var image_1 = __webpack_require__(86);
	var lean_overlay_1 = __webpack_require__(88);
	var linear_preloader_1 = __webpack_require__(91);
	var modal_1 = __webpack_require__(93);
	var nav_item_1 = __webpack_require__(95);
	var navbar_1 = __webpack_require__(30);
	var pagination_1 = __webpack_require__(97);
	var sidenav_1 = __webpack_require__(31);
	var sidenav_overlay_1 = __webpack_require__(32);
	var slide_1 = __webpack_require__(99);
	var slider_1 = __webpack_require__(101);
	var swich_1 = __webpack_require__(103);
	var tab_1 = __webpack_require__(105);
	var tabs_1 = __webpack_require__(107);
	__webpack_require__(109);
	var VueMaterializeComponents = {
	    mdBadge: badge_1['default'],
	    mdButton: button_1['default'],
	    mdBreadcrumbs: breadcrumbs_1['default'],
	    mdCard: card_1['default'],
	    mdCheckbox: checkbox_1['default'],
	    mdCheckboxGroup: checkbox_group_1['default'],
	    mdChip: chip_1['default'],
	    mdCircuralPreloader: circural_preloader_1['default'],
	    mdCollapsible: collapsible_1['default'],
	    mdCollapsibleItem: collapsible_item_1['default'],
	    mdCollection: collection_1['default'],
	    mdCollectionList: collection_list_1['default'],
	    mdCollectionItem: collection_item_1['default'],
	    mdCollectionListItem: collection_list_item_1['default'],
	    mdDropdown: dropdown_1['default'],
	    mdDropdownItem: dropdown_item_1['default'],
	    mdDropdownList: dropdown_list_1['default'],
	    mdEventWrapper: event_wrapper_1['default'],
	    mdFab: fab_1['default'],
	    mdFileInput: file_input_1['default'],
	    mdInput: input_1['default'],
	    mdOptgroup: optgroup_1['default'],
	    mdOption: option_1['default'],
	    mdRadio: radio_1['default'],
	    mdRadioGroup: radio_group_1['default'],
	    mdSelect: select_1['default'],
	    mdTextarea: textarea_1['default'],
	    mdIcon: icon_1['default'],
	    mdImage: image_1['default'],
	    mdLeanOverlay: lean_overlay_1['default'],
	    mdLinearPreloader: linear_preloader_1['default'],
	    mdModal: modal_1['default'],
	    mdNavItem: nav_item_1['default'],
	    mdNavbar: navbar_1['default'],
	    mdPagination: pagination_1['default'],
	    mdSidenav: sidenav_1['default'],
	    mdSidenavOverlay: sidenav_overlay_1['default'],
	    mdSlide: slide_1['default'],
	    mdSlider: slider_1['default'],
	    mdSwitch: swich_1['default'],
	    mdTab: tab_1['default'],
	    mdTabs: tabs_1['default']
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = VueMaterializeComponents;
	var baseComponent = {
	    components: VueMaterializeComponents,
	    directives: directives_1['default'],
	    mixins: mixins_1['default']
	};
	exports.BaseComponent = Vue.extend(baseComponent);
	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var bind_boolean_1 = __webpack_require__(9);
	var bind_raw_1 = __webpack_require__(10);
	var click_away_1 = __webpack_require__(11);
	var slot_1 = __webpack_require__(12);
	var wave_effect_1 = __webpack_require__(13);
	var directives = {
	    bindBoolean: bind_boolean_1['default'],
	    bindRaw: bind_raw_1['default'],
	    bindClickAway: click_away_1['default'],
	    slot: slot_1['default'],
	    waveEffect: wave_effect_1['default']
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = directives;
	//# sourceMappingURL=index.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	// removed DirectiveOption because priority is not boolean
	var bindBoolean = {
	    priority: 850,
	    update: function update(value) {
	        var arg = this.arg;
	        if (value) {
	            this.el.setAttribute(arg, arg);
	        } else {
	            this.el.removeAttribute(arg);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = bindBoolean;
	//# sourceMappingURL=index.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	// removed DirectiveOption because priority is not boolean
	var bindRaw = {
	    priority: 750,
	    bind: function bind() {
	        this.attribute = this.arg;
	    },
	    update: function update(value) {
	        var el = this.el;
	        if (this.attribute == 'value') {
	            el.value = value;
	        } else {
	            el.setAttribute(this.attribute, value);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = bindRaw;
	//# sourceMappingURL=index.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var VueModule = __webpack_require__(1);
	var vue = VueModule;
	var onClickAway = {
	    acceptStatement: true,
	    update: function update(handler) {
	        this.reset();
	        var self = this;
	        var scope = this._scope || this.vm;
	        this.handler = function (ev) {
	            if (!self.el.contains(ev.target)) {
	                scope.$event = ev;
	                var res = handler(ev);
	                scope.$event = null;
	                return res;
	            }
	        };
	        vue.util.on(document.documentElement, 'click', this.handler);
	    },
	    reset: function reset() {
	        vue.util.off(document.documentElement, 'click', this.handler);
	    },
	    unbind: function unbind() {
	        this.reset();
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = onClickAway;
	//# sourceMappingURL=index.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var slot = {
	    bind: function bind() {
	        var host = this.vm;
	        var root = host.$root;
	        var raw = host.$options._content;
	        // TODO: Insert your custom logic to decide what element goes here
	        for (var i = 0; i < raw.children.length; i++) {
	            var node = raw.children[i].cloneNode(true);
	            this.el.appendChild(node);
	            root.$compile(node, host, this._scope);
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = slot;
	//# sourceMappingURL=index.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var effect_1 = __webpack_require__(14);
	var waveEffect = {
	    bind: function bind() {
	        var _this = this;
	        this.hide = function (e) {
	            effect_1["default"].hide(e, _this.el);
	        };
	        this.show = function (e) {
	            effect_1["default"].show(e, _this.el);
	        };
	        this.el.addEventListener("mousedown", this.show, false);
	        this.el.addEventListener("mouseleave", this.hide, false);
	        this.el.addEventListener("mouseup", this.hide, false);
	    },
	    unbind: function unbind() {
	        this.el.removeEventListener("mousedown", this.show);
	        this.el.removeEventListener("mouseleave", this.hide);
	        this.el.removeEventListener("mouseup", this.hide);
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = waveEffect;
	//# sourceMappingURL=index.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	/*!
	 * Materialize v0.97.5 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	/**
	 * Disable mousedown event for 500ms during and after touch
	 */
	var TouchHandler = {
	    /* uses an integer rather than bool so there's no issues with
	     * needing to clear timeouts if another touch event occurred
	     * within the 500ms. Cannot mouseup between touchstart and
	     * touchend, nor in the 500ms after touchend. */
	    touches: 0,
	    allowEvent: function allowEvent(e) {
	        var allow = true;
	        if (e.type === 'touchstart') {
	            TouchHandler.touches += 1; //push
	        } else if (e.type === 'touchend' || e.type === 'touchcancel') {
	                setTimeout(function () {
	                    if (TouchHandler.touches > 0) {
	                        TouchHandler.touches -= 1; //pop after 500ms
	                    }
	                }, 500);
	            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
	                allow = false;
	            }
	        return allow;
	    },
	    touchup: function touchup(e) {
	        TouchHandler.allowEvent(e);
	    }
	};
	// Find exact position of element
	function isWindow(obj) {
	    return obj !== null && obj === obj.window;
	}
	function getWindow(elem) {
	    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	function offset(elem) {
	    var docElem,
	        win,
	        box = { top: 0, left: 0 },
	        doc = elem && elem.ownerDocument;
	    docElem = doc.documentElement;
	    if (typeof elem.getBoundingClientRect !== typeof undefined) {
	        box = elem.getBoundingClientRect();
	    }
	    win = getWindow(doc);
	    return {
	        top: box.top + win.pageYOffset - docElem.clientTop,
	        left: box.left + win.pageXOffset - docElem.clientLeft
	    };
	}
	function convertStyle(obj) {
	    var style = '';
	    for (var a in obj) {
	        if (obj.hasOwnProperty(a)) {
	            style += a + ':' + obj[a] + ';';
	        }
	    }
	    return style;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = {
	    // Effect delay
	    duration: 750,
	    show: function show(e, element) {
	        // Disable right click
	        if (e.button === 2) {
	            return false;
	        }
	        var el = element || this;
	        // Create ripple
	        var ripple = document.createElement('div');
	        ripple.className = 'waves-ripple';
	        el.appendChild(ripple);
	        // Get click coordinate and element witdh
	        var pos = offset(el);
	        var relativeY = e.pageY - pos.top;
	        var relativeX = e.pageX - pos.left;
	        var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';
	        // Support for touch devices
	        if ('touches' in e) {
	            relativeY = e.touches[0].pageY - pos.top;
	            relativeX = e.touches[0].pageX - pos.left;
	        }
	        // Attach data to element
	        ripple.setAttribute('data-hold', Date.now().toString());
	        ripple.setAttribute('data-scale', scale);
	        ripple.setAttribute('data-x', relativeX.toString());
	        ripple.setAttribute('data-y', relativeY.toString());
	        // Set ripple position
	        var rippleStyle = {
	            'top': relativeY + 'px',
	            'left': relativeX + 'px'
	        };
	        ripple.className = ripple.className + ' waves-notransition';
	        ripple.setAttribute('style', convertStyle(rippleStyle));
	        ripple.className = ripple.className.replace('waves-notransition', '');
	        // Scale the ripple
	        rippleStyle['-webkit-transform'] = scale;
	        rippleStyle['-moz-transform'] = scale;
	        rippleStyle['-ms-transform'] = scale;
	        rippleStyle['-o-transform'] = scale;
	        rippleStyle.transform = scale;
	        rippleStyle.opacity = '1';
	        rippleStyle['-webkit-transition-duration'] = this.duration + 'ms';
	        rippleStyle['-moz-transition-duration'] = this.duration + 'ms';
	        rippleStyle['-o-transition-duration'] = this.duration + 'ms';
	        rippleStyle['transition-duration'] = this.duration + 'ms';
	        rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	        ripple.setAttribute('style', convertStyle(rippleStyle));
	    },
	    hide: function hide(e, el) {
	        var _this = this;
	        TouchHandler.touchup(e);
	        var width = el.clientWidth * 1.4;
	        // Get first ripple
	        var ripple = null;
	        var ripples = el.getElementsByClassName('waves-ripple');
	        if (ripples.length > 0) {
	            ripple = ripples[ripples.length - 1];
	        } else {
	            return false;
	        }
	        var relativeX = ripple.getAttribute('data-x');
	        var relativeY = ripple.getAttribute('data-y');
	        var scale = ripple.getAttribute('data-scale');
	        // Get delay beetween mousedown and mouse leave
	        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	        var delay = 350 - diff;
	        if (delay < 0) {
	            delay = 0;
	        }
	        // Fade out ripple after delay
	        setTimeout(function () {
	            var style = {
	                'top': relativeY + 'px',
	                'left': relativeX + 'px',
	                'opacity': '0',
	                // Duration
	                '-webkit-transition-duration': _this.duration + 'ms',
	                '-moz-transition-duration': _this.duration + 'ms',
	                '-o-transition-duration': _this.duration + 'ms',
	                'transition-duration': _this.duration + 'ms',
	                '-webkit-transform': scale,
	                '-moz-transform': scale,
	                '-ms-transform': scale,
	                '-o-transform': scale,
	                'transform': scale
	            };
	            ripple.setAttribute('style', convertStyle(style));
	            setTimeout(function () {
	                try {
	                    el.removeChild(ripple);
	                } catch (e) {
	                    return false;
	                }
	            }, _this.duration);
	        }, delay);
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var events_1 = __webpack_require__(16);
	var input_1 = __webpack_require__(17);
	var toast_1 = __webpack_require__(18);
	var tooltip_1 = __webpack_require__(21);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = [events_1['default'], input_1['default'], toast_1['default'], tooltip_1['default']];
	//# sourceMappingURL=index.js.map

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        broadcast: function broadcast() {
	            var args = Array.prototype.slice.call(arguments);
	            this.$broadcast.apply(this, args);
	        },
	        dispatch: function dispatch() {
	            var args = Array.prototype.slice.call(arguments);
	            this.$dispatch.apply(this, args);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    computed: {
	        id: function id() {
	            return this.$options.name.toLowerCase() + '_' + this._uid;
	        }
	    },
	    methods: {
	        $getAllChildren: function $getAllChildren() {
	            return this._getChildren(this);
	        },
	        _getChildren: function _getChildren(component) {
	            var children = [];
	            children = children.concat(component.$children);
	            for (var i = 0; i < component.$children.length; i++) {
	                children = children.concat(this._getChildren(component.$children[i]));
	            }
	            return children;
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var toast_1 = __webpack_require__(19);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        toast: function toast(message, displayLength, className, completeCallback) {
	            return toast_1.toast(message, displayLength, className, completeCallback);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vel = __webpack_require__(20);
	/*!
	 * Materialize v0.97.5 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	exports.toast = function (message, displayLength, className, completeCallback) {
	    className = className || "";
	    var container = document.getElementById('toast-container');
	    // Create toast container if it does not exist
	    if (container === null) {
	        // create notification container
	        container = document.createElement('div');
	        container.id = 'toast-container';
	        document.body.appendChild(container);
	    }
	    // Select and append toast
	    var newToast = createToast(message);
	    // only append toast if message is not undefined
	    if (message) {
	        container.appendChild(newToast);
	    }
	    newToast.style.top = '35px';
	    newToast.style.opacity = '0';
	    // Animate toast in
	    Vel(newToast, { "top": "0px", opacity: 1 }, { duration: 300,
	        easing: 'easeOutCubic',
	        queue: false });
	    // Allows timer to be pause while being panned
	    var timeLeft = displayLength;
	    var counterInterval = setInterval(function () {
	        if (newToast.parentNode === null) window.clearInterval(counterInterval);
	        // If toast is not being dragged, decrease its time remaining
	        if (!newToast.classList.contains('panning')) {
	            timeLeft -= 20;
	        }
	        if (timeLeft <= 0) {
	            // Animate toast out
	            Vel(newToast, { "opacity": 0, marginTop: '-40px' }, { duration: 375,
	                easing: 'easeOutExpo',
	                queue: false,
	                complete: function complete() {
	                    // Call the optional callback
	                    if (typeof completeCallback === "function") completeCallback();
	                    // Remove toast after it times out
	                    this[0].parentNode.removeChild(this[0]);
	                }
	            });
	            window.clearInterval(counterInterval);
	        }
	    }, 20);
	    function createToast(html) {
	        // Create toast
	        var toast = document.createElement('div');
	        toast.classList.add('toast');
	        if (className) {
	            var classes = className.split(' ');
	            for (var i = 0, count = classes.length; i < count; i++) {
	                toast.classList.add(classes[i]);
	            }
	        }
	        // If type of parameter is HTML Element
	        if (typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName === "string") {
	            toast.appendChild(html);
	        } else {
	            // Insert as text;
	            toast.innerHTML = html;
	        }
	        // Bind hammer
	        /* todo
	         var hammerHandler = new Hammer(toast, {prevent_default: false});
	         hammerHandler.on('pan', function(e) {
	         var deltaX = e.deltaX;
	         var activationDistance = 80;
	           // Change toast state
	         if (!toast.classList.contains('panning')){
	         toast.classList.add('panning');
	         }
	           var opacityPercent = 1-Math.abs(deltaX / activationDistance);
	         if (opacityPercent < 0)
	         opacityPercent = 0;
	           Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	           });
	           hammerHandler.on('panend', function(e) {
	         var deltaX = e.deltaX;
	         var activationDistance = 80;
	           // If toast dragged past activation point
	         if (Math.abs(deltaX) > activationDistance) {
	         Vel(toast, {marginTop: '-40px'}, { duration: 375,
	         easing: 'easeOutExpo',
	         queue: false,
	         complete: function(){
	         if(typeof(completeCallback) === "function") {
	         completeCallback();
	         }
	         toast.parentNode.removeChild(toast);
	         }
	         });
	           } else {
	         toast.classList.remove('panning');
	         // Put toast back into original position
	         Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
	         easing: 'easeOutExpo',
	         queue: false
	         });
	           }
	         });
	         */
	        return toast;
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */ /*************************
	   Velocity jQuery Shim
	*************************/ /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */ /* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */ /* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */ /* Browser support: Using this shim instead of jQuery proper removes support for IE8. */"use strict";;(function(window){ /***************
	         Setup
	    ***************/ /* If jQuery is already loaded, there's no point in loading this shim. */if(window.jQuery){return;} /* jQuery base. */var $=function $(selector,context){return new $.fn.init(selector,context);}; /********************
	       Private Methods
	    ********************/ /* jQuery */$.isWindow = function(obj){ /* jshint eqeqeq: false */return obj != null && obj == obj.window;}; /* jQuery */$.type = function(obj){if(obj == null){return obj + "";}return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}; /* jQuery */$.isArray = Array.isArray || function(obj){return $.type(obj) === "array";}; /* jQuery */function isArraylike(obj){var length=obj.length,type=$.type(obj);if(type === "function" || $.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;} /***************
	       $ Methods
	    ***************/ /* jQuery: Support removed for IE<9. */$.isPlainObject = function(obj){var key;if(!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)){return false;}try{if(obj.constructor && !hasOwn.call(obj,"constructor") && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e) {return false;}for(key in obj) {}return key === undefined || hasOwn.call(obj,key);}; /* jQuery */$.each = function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i < length;i++) {value = callback.apply(obj[i],args);if(value === false){break;}}}else {for(i in obj) {value = callback.apply(obj[i],args);if(value === false){break;}}}}else {if(isArray){for(;i < length;i++) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}else {for(i in obj) {value = callback.call(obj[i],i,obj[i]);if(value === false){break;}}}}return obj;}; /* Custom */$.data = function(node,key,value){ /* $.getData() */if(value === undefined){var id=node[$.expando],store=id && cache[id];if(key === undefined){return store;}else if(store){if(key in store){return store[key];}} /* $.setData() */}else if(key !== undefined){var id=node[$.expando] || (node[$.expando] = ++$.uuid);cache[id] = cache[id] || {};cache[id][key] = value;return value;}}; /* Custom */$.removeData = function(node,keys){var id=node[$.expando],store=id && cache[id];if(store){$.each(keys,function(_,key){delete store[key];});}}; /* jQuery */$.extend = function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0] || {},i=1,length=arguments.length,deep=false;if(typeof target === "boolean"){deep = target;target = arguments[i] || {};i++;}if(typeof target !== "object" && $.type(target) !== "function"){target = {};}if(i === length){target = this;i--;}for(;i < length;i++) {if((options = arguments[i]) != null){for(name in options) {src = target[name];copy = options[name];if(target === copy){continue;}if(deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && $.isArray(src)?src:[];}else {clone = src && $.isPlainObject(src)?src:{};}target[name] = $.extend(deep,clone,copy);}else if(copy !== undefined){target[name] = copy;}}}}return target;}; /* jQuery 1.4.3 */$.queue = function(elem,type,data){function $makeArray(arr,results){var ret=results || [];if(arr != null){if(isArraylike(Object(arr))){ /* $.merge */(function(first,second){var len=+second.length,j=0,i=first.length;while(j < len) {first[i++] = second[j++];}if(len !== len){while(second[j] !== undefined) {first[i++] = second[j++];}}first.length = i;return first;})(ret,typeof arr === "string"?[arr]:arr);}else {[].push.call(ret,arr);}}return ret;}if(!elem){return;}type = (type || "fx") + "queue";var q=$.data(elem,type);if(!data){return q || [];}if(!q || $.isArray(data)){q = $.data(elem,type,$makeArray(data));}else {q.push(data);}return q;}; /* jQuery 1.4.3 */$.dequeue = function(elems,type){ /* Custom: Embed element iteration. */$.each(elems.nodeType?[elems]:elems,function(i,elem){type = type || "fx";var queue=$.queue(elem,type),fn=queue.shift();if(fn === "inprogress"){fn = queue.shift();}if(fn){if(type === "fx"){queue.unshift("inprogress");}fn.call(elem,function(){$.dequeue(elem,type);});}});}; /******************
	       $.fn Methods
	    ******************/ /* jQuery */$.fn = $.prototype = {init:function init(selector){ /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */if(selector.nodeType){this[0] = selector;return this;}else {throw new Error("Not a DOM node.");}},offset:function offset(){ /* jQuery altered code: Dropped disconnected DOM node checking. */var box=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return {top:box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),left:box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)};},position:function position(){ /* jQuery */function offsetParent(){var offsetParent=this.offsetParent || document;while(offsetParent && !offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static") {offsetParent = offsetParent.offsetParent;}return offsetParent || document;} /* Zepto */var elem=this[0],offsetParent=offsetParent.apply(elem),offset=this.offset(),parentOffset=/^(?:body|html)$/i.test(offsetParent.nodeName)?{top:0,left:0}:$(offsetParent).offset();offset.top -= parseFloat(elem.style.marginTop) || 0;offset.left -= parseFloat(elem.style.marginLeft) || 0;if(offsetParent.style){parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;}return {top:offset.top - parentOffset.top,left:offset.left - parentOffset.left};}}; /**********************
	       Private Variables
	    **********************/ /* For $.data() */var cache={};$.expando = "velocity" + new Date().getTime();$.uuid = 0; /* For $.queue() */var class2type={},hasOwn=class2type.hasOwnProperty,toString=class2type.toString;var types="Boolean Number String Function Array Date RegExp Object Error".split(" ");for(var i=0;i < types.length;i++) {class2type["[object " + types[i] + "]"] = types[i].toLowerCase();} /* Makes $(node) possible, without having to call init. */$.fn.init.prototype = $.fn; /* Globalize Velocity onto the window, and assign its Utilities property. */window.Velocity = {Utilities:$};})(window); /******************
	    Velocity.js
	******************/;(function(factory){ /* CommonJS module. */if(typeof module === "object" && typeof module.exports === "object"){module.exports = factory(); /* AMD module. */}else if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); /* Browser globals. */}else {factory();}})(function(){return (function(global,window,document,undefined){ /***************
	        Summary
	    ***************/ /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */ /*********************
	       Helper Functions
	    *********************/ /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */var IE=(function(){if(document.documentMode){return document.documentMode;}else {for(var i=7;i > 4;i--) {var div=document.createElement("div");div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";if(div.getElementsByTagName("span").length){div = null;return i;}}}return undefined;})(); /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */var rAFShim=(function(){var timeLast=0;return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){var timeCurrent=new Date().getTime(),timeDelta; /* Dynamically set delay on a per-tick basis to match 60fps. */ /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */timeDelta = Math.max(0,16 - (timeCurrent - timeLast));timeLast = timeCurrent + timeDelta;return setTimeout(function(){callback(timeCurrent + timeDelta);},timeDelta);};})(); /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */function compactSparseArray(array){var index=-1,length=array?array.length:0,result=[];while(++index < length) {var value=array[index];if(value){result.push(value);}}return result;}function sanitizeElements(elements){ /* Unwrap jQuery/Zepto objects. */if(Type.isWrapped(elements)){elements = [].slice.call(elements); /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */}else if(Type.isNode(elements)){elements = [elements];}return elements;}var Type={isString:function isString(variable){return typeof variable === "string";},isArray:Array.isArray || function(variable){return Object.prototype.toString.call(variable) === "[object Array]";},isFunction:function isFunction(variable){return Object.prototype.toString.call(variable) === "[object Function]";},isNode:function isNode(variable){return variable && variable.nodeType;}, /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */isNodeList:function isNodeList(variable){return typeof variable === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) && variable.length !== undefined && (variable.length === 0 || typeof variable[0] === "object" && variable[0].nodeType > 0);}, /* Determine if variable is a wrapped jQuery or Zepto element. */isWrapped:function isWrapped(variable){return variable && (variable.jquery || window.Zepto && window.Zepto.zepto.isZ(variable));},isSVG:function isSVG(variable){return window.SVGElement && variable instanceof window.SVGElement;},isEmptyObject:function isEmptyObject(variable){for(var name in variable) {return false;}return true;}}; /*****************
	       Dependencies
	    *****************/var $,isJQuery=false;if(global.fn && global.fn.jquery){$ = global;isJQuery = true;}else {$ = window.Velocity.Utilities;}if(IE <= 8 && !isJQuery){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");}else if(IE <= 7){ /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */jQuery.fn.velocity = jQuery.fn.animate; /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */return;} /*****************
	        Constants
	    *****************/var DURATION_DEFAULT=400,EASING_DEFAULT="swing"; /*************
	        State
	    *************/var Velocity={ /* Container for page-wide Velocity state data. */State:{ /* Detect mobile devices to determine if mobileHA should be turned on. */isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:window.chrome,isFirefox:/Firefox/i.test(navigator.userAgent), /* Create a cached element for re-use when checking for CSS property prefixes. */prefixElement:document.createElement("div"), /* Cache every prefix match to avoid repeating lookups. */prefixMatches:{}, /* Cache the anchor used for animating window scrolling. */scrollAnchor:null, /* Cache the browser-specific property names associated with the scroll anchor. */scrollPropertyLeft:null,scrollPropertyTop:null, /* Keep track of whether our RAF tick is running. */isTicking:false, /* Container for every in-progress call to Velocity. */calls:[]}, /* Velocity's custom CSS stack. Made global for unit testing. */CSS:{ /* Defined below. */}, /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */Utilities:$, /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */Redirects:{ /* Manually registered by the user. */},Easings:{ /* Defined below. */}, /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */Promise:window.Promise, /* Velocity option defaults, which can be overriden by the user. */defaults:{queue:"",duration:DURATION_DEFAULT,easing:EASING_DEFAULT,begin:undefined,complete:undefined,progress:undefined,display:undefined,visibility:undefined,loop:false,delay:false,mobileHA:true, /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */_cacheValues:true}, /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */init:function init(element){$.data(element,"velocity",{ /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */isSVG:Type.isSVG(element), /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */isAnimating:false, /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */computedStyle:null, /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */tweensContainer:null, /* The full root property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
	                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */rootPropertyValueCache:{}, /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */transformCache:{}});}, /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */hook:null, /* Defined below. */ /* Velocity-wide animation time remapping for testing purposes. */mock:false,version:{major:1,minor:2,patch:2}, /* Set to 1 or 2 (most verbose) to output debug info to console. */debug:false}; /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */if(window.pageYOffset !== undefined){Velocity.State.scrollAnchor = window;Velocity.State.scrollPropertyLeft = "pageXOffset";Velocity.State.scrollPropertyTop = "pageYOffset";}else {Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;Velocity.State.scrollPropertyLeft = "scrollLeft";Velocity.State.scrollPropertyTop = "scrollTop";} /* Shorthand alias for jQuery's $.data() utility. */function Data(element){ /* Hardcode a reference to the plugin name. */var response=$.data(element,"velocity"); /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */return response === null?undefined:response;}; /**************
	        Easing
	    **************/ /* Step easing generator. */function generateStep(steps){return function(p){return Math.round(p * steps) * (1 / steps);};} /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */function generateBezier(mX1,mY1,mX2,mY2){var NEWTON_ITERATIONS=4,NEWTON_MIN_SLOPE=0.001,SUBDIVISION_PRECISION=0.0000001,SUBDIVISION_MAX_ITERATIONS=10,kSplineTableSize=11,kSampleStepSize=1.0 / (kSplineTableSize - 1.0),float32ArraySupported=("Float32Array" in window); /* Must contain four arguments. */if(arguments.length !== 4){return false;} /* Arguments must be numbers. */for(var i=0;i < 4;++i) {if(typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])){return false;}} /* X values must be in the [0, 1] range. */mX1 = Math.min(mX1,1);mX2 = Math.min(mX2,1);mX1 = Math.max(mX1,0);mX2 = Math.max(mX2,0);var mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);function A(aA1,aA2){return 1.0 - 3.0 * aA2 + 3.0 * aA1;}function B(aA1,aA2){return 3.0 * aA2 - 6.0 * aA1;}function C(aA1){return 3.0 * aA1;}function calcBezier(aT,aA1,aA2){return ((A(aA1,aA2) * aT + B(aA1,aA2)) * aT + C(aA1)) * aT;}function getSlope(aT,aA1,aA2){return 3.0 * A(aA1,aA2) * aT * aT + 2.0 * B(aA1,aA2) * aT + C(aA1);}function newtonRaphsonIterate(aX,aGuessT){for(var i=0;i < NEWTON_ITERATIONS;++i) {var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope === 0.0)return aGuessT;var currentX=calcBezier(aGuessT,mX1,mX2) - aX;aGuessT -= currentX / currentSlope;}return aGuessT;}function calcSampleValues(){for(var i=0;i < kSplineTableSize;++i) {mSampleValues[i] = calcBezier(i * kSampleStepSize,mX1,mX2);}}function binarySubdivide(aX,aA,aB){var currentX,currentT,i=0;do {currentT = aA + (aB - aA) / 2.0;currentX = calcBezier(currentT,mX1,mX2) - aX;if(currentX > 0.0){aB = currentT;}else {aA = currentT;}}while(Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);return currentT;}function getTForX(aX){var intervalStart=0.0,currentSample=1,lastSample=kSplineTableSize - 1;for(;currentSample != lastSample && mSampleValues[currentSample] <= aX;++currentSample) {intervalStart += kSampleStepSize;}--currentSample;var dist=(aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),guessForT=intervalStart + dist * kSampleStepSize,initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope >= NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT);}else if(initialSlope == 0.0){return guessForT;}else {return binarySubdivide(aX,intervalStart,intervalStart + kSampleStepSize);}}var _precomputed=false;function precompute(){_precomputed = true;if(mX1 != mY1 || mX2 != mY2)calcSampleValues();}var f=function f(aX){if(!_precomputed)precompute();if(mX1 === mY1 && mX2 === mY2)return aX;if(aX === 0)return 0;if(aX === 1)return 1;return calcBezier(getTForX(aX),mY1,mY2);};f.getControlPoints = function(){return [{x:mX1,y:mY1},{x:mX2,y:mY2}];};var str="generateBezier(" + [mX1,mY1,mX2,mY2] + ")";f.toString = function(){return str;};return f;} /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */ /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */var generateSpringRK4=(function(){function springAccelerationForState(state){return -state.tension * state.x - state.friction * state.v;}function springEvaluateStateWithDerivative(initialState,dt,derivative){var state={x:initialState.x + derivative.dx * dt,v:initialState.v + derivative.dv * dt,tension:initialState.tension,friction:initialState.friction};return {dx:state.v,dv:springAccelerationForState(state)};}function springIntegrateState(state,dt){var a={dx:state.v,dv:springAccelerationForState(state)},b=springEvaluateStateWithDerivative(state,dt * 0.5,a),c=springEvaluateStateWithDerivative(state,dt * 0.5,b),d=springEvaluateStateWithDerivative(state,dt,c),dxdt=1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),dvdt=1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);state.x = state.x + dxdt * dt;state.v = state.v + dvdt * dt;return state;}return function springRK4Factory(tension,friction,duration){var initState={x:-1,v:0,tension:null,friction:null},path=[0],time_lapsed=0,tolerance=1 / 10000,DT=16 / 1000,have_duration,dt,last_state;tension = parseFloat(tension) || 500;friction = parseFloat(friction) || 20;duration = duration || null;initState.tension = tension;initState.friction = friction;have_duration = duration !== null; /* Calculate the actual time it takes for this animation to complete with the provided conditions. */if(have_duration){ /* Run the simulation without a duration. */time_lapsed = springRK4Factory(tension,friction); /* Compute the adjusted time delta. */dt = time_lapsed / duration * DT;}else {dt = DT;}while(true) { /* Next/step function .*/last_state = springIntegrateState(last_state || initState,dt); /* Store the position. */path.push(1 + last_state.x);time_lapsed += 16; /* If the change threshold is reached, break. */if(!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)){break;}} /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */return !have_duration?time_lapsed:function(percentComplete){return path[percentComplete * (path.length - 1) | 0];};};})(); /* jQuery easings. */Velocity.Easings = {linear:function linear(p){return p;},swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}, /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */spring:function spring(p){return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);}}; /* CSS3 and Robert Penner easings. */$.each([["ease",[0.25,0.1,0.25,1.0]],["ease-in",[0.42,0.0,1.00,1.0]],["ease-out",[0.00,0.0,0.58,1.0]],["ease-in-out",[0.42,0.0,0.58,1.0]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(i,easingArray){Velocity.Easings[easingArray[0]] = generateBezier.apply(null,easingArray[1]);}); /* Determine the appropriate easing type given an easing input. */function getEasing(value,duration){var easing=value; /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */if(Type.isString(value)){ /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */if(!Velocity.Easings[value]){easing = false;}}else if(Type.isArray(value) && value.length === 1){easing = generateStep.apply(null,value);}else if(Type.isArray(value) && value.length === 2){ /* springRK4 must be passed the animation's duration. */ /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */easing = generateSpringRK4.apply(null,value.concat([duration]));}else if(Type.isArray(value) && value.length === 4){ /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */easing = generateBezier.apply(null,value);}else {easing = false;} /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */if(easing === false){if(Velocity.Easings[Velocity.defaults.easing]){easing = Velocity.defaults.easing;}else {easing = EASING_DEFAULT;}}return easing;} /*****************
	        CSS Stack
	    *****************/ /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */ /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */var CSS=Velocity.CSS = { /*************
	            RegEx
	        *************/RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i, /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig}, /************
	            Lists
	        ************/Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]}, /************
	            Hooks
	        ************/ /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */ /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */Hooks:{ /********************
	                Registration
	            ********************/ /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */ /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */templates:{"textShadow":["Color X Y Blur","black 0px 0px 0px"],"boxShadow":["Color X Y Blur Spread","black 0px 0px 0px 0px"],"clip":["Top Right Bottom Left","0px 0px 0px 0px"],"backgroundPosition":["X Y","0% 0%"],"transformOrigin":["X Y Z","50% 50% 0px"],"perspectiveOrigin":["X Y","50% 50%"]}, /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its root property. */registered:{ /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated root property's name,
	                   and the subproperty's position in the root's value. */}, /* Convert the templates into individual hooks then append them to the registered object above. */register:function register(){ /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */for(var i=0;i < CSS.Lists.colors.length;i++) {var rgbComponents=CSS.Lists.colors[i] === "color"?"0 0 0 1":"255 255 255 1";CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha",rgbComponents];}var rootProperty,hookTemplate,hookNames; /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */if(IE){for(rootProperty in CSS.Hooks.templates) {hookTemplate = CSS.Hooks.templates[rootProperty];hookNames = hookTemplate[0].split(" ");var defaultValues=hookTemplate[1].match(CSS.RegEx.valueSplit);if(hookNames[0] === "Color"){ /* Reposition both the hook's name and its default value to the end of their respective strings. */hookNames.push(hookNames.shift());defaultValues.push(defaultValues.shift()); /* Replace the existing template for the hook's root property. */CSS.Hooks.templates[rootProperty] = [hookNames.join(" "),defaultValues.join(" ")];}}} /* Hook registration. */for(rootProperty in CSS.Hooks.templates) {hookTemplate = CSS.Hooks.templates[rootProperty];hookNames = hookTemplate[0].split(" ");for(var i in hookNames) {var fullHookName=rootProperty + hookNames[i],hookPosition=i; /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */CSS.Hooks.registered[fullHookName] = [rootProperty,hookPosition];}}}, /*****************************
	               Injection and Extraction
	            *****************************/ /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */ /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */getRoot:function getRoot(property){var hookData=CSS.Hooks.registered[property];if(hookData){return hookData[0];}else { /* If there was no hook match, return the property name untouched. */return property;}}, /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */cleanRootPropertyValue:function cleanRootPropertyValue(rootProperty,rootPropertyValue){ /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */if(CSS.RegEx.valueUnwrap.test(rootPropertyValue)){rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];} /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the root's default value as defined in CSS.Hooks.templates. */ /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */if(CSS.Values.isCSSNullValue(rootPropertyValue)){rootPropertyValue = CSS.Hooks.templates[rootProperty][1];}return rootPropertyValue;}, /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */extractValue:function extractValue(fullHookName,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1];rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue); /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];}else { /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */return rootPropertyValue;}}, /* Inject the hook's value into its root property's value. This is used to piece back together the root property
	               once Velocity has updated one of its individually hooked values through tweening. */injectValue:function injectValue(fullHookName,hookValue,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1],rootPropertyValueParts,rootPropertyValueUpdated;rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue); /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the rootPropertyValue string. */rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);rootPropertyValueParts[hookPosition] = hookValue;rootPropertyValueUpdated = rootPropertyValueParts.join(" ");return rootPropertyValueUpdated;}else { /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */return rootPropertyValue;}}}, /*******************
	           Normalizations
	        *******************/ /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */Normalizations:{ /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */registered:{clip:function clip(type,element,propertyValue){switch(type){case "name":return "clip"; /* Clip needs to be unwrapped and stripped of its commas during extraction. */case "extract":var extracted; /* If Velocity also extracted this value, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else { /* Remove the "rect()" wrapper. */extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap); /* Strip off commas. */extracted = extracted?extracted[1].replace(/,(\s+)?/g," "):propertyValue;}return extracted; /* Clip needs to be re-wrapped during injection. */case "inject":return "rect(" + propertyValue + ")";}},blur:function blur(type,element,propertyValue){switch(type){case "name":return Velocity.State.isFirefox?"filter":"-webkit-filter";case "extract":var extracted=parseFloat(propertyValue); /* If extracted is NaN, meaning the value isn't already extracted. */if(!(extracted || extracted === 0)){var blurComponent=propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i); /* If the filter string had a blur component, return just the blur value and unit type. */if(blurComponent){extracted = blurComponent[1]; /* If the component doesn't exist, default blur to 0. */}else {extracted = 0;}}return extracted; /* Blur needs to be re-wrapped during injection. */case "inject": /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */if(!parseFloat(propertyValue)){return "none";}else {return "blur(" + propertyValue + ")";}}}, /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */opacity:function opacity(type,element,propertyValue){if(IE <= 8){switch(type){case "name":return "filter";case "extract": /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */var extracted=propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);if(extracted){ /* Convert to decimal value. */propertyValue = extracted[1] / 100;}else { /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */propertyValue = 1;}return propertyValue;case "inject": /* Opacified elements are required to have their zoom property set to a non-zero value. */element.style.zoom = 1; /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */if(parseFloat(propertyValue) >= 1){return "";}else { /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100,10) + ")";}} /* With all other browsers, normalization is not required; return the same values that were passed in. */}else {switch(type){case "name":return "opacity";case "extract":return propertyValue;case "inject":return propertyValue;}}}}, /*****************************
	                Batched Registrations
	            *****************************/ /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */register:function register(){ /*****************
	                    Transforms
	                *****************/ /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */ /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */ /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */if(!(IE <= 9) && !Velocity.State.isGingerbread){ /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);}for(var i=0;i < CSS.Lists.transformsBase.length;i++) { /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */(function(){var transformName=CSS.Lists.transformsBase[i];CSS.Normalizations.registered[transformName] = function(type,element,propertyValue){switch(type){ /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */case "name":return "transform"; /* Transform values are cached onto a per-element transformCache object. */case "extract": /* If this transform has yet to be assigned a value, return its null value. */if(Data(element) === undefined || Data(element).transformCache[transformName] === undefined){ /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */return (/^scale/i.test(transformName)?1:0); /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */}else {return Data(element).transformCache[transformName].replace(/[()]/g,"");}case "inject":var invalid=false; /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */ /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */switch(transformName.substr(0,transformName.length - 1)){ /* Whitelist unit types for each transform. */case "translate":invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);break; /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */case "scal":case "scale": /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */if(Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1){propertyValue = 1;}invalid = !/(\d)$/i.test(propertyValue);break;case "skew":invalid = !/(deg|\d)$/i.test(propertyValue);break;case "rotate":invalid = !/(deg|\d)$/i.test(propertyValue);break;}if(!invalid){ /* As per the CSS spec, wrap the value in parentheses. */Data(element).transformCache[transformName] = "(" + propertyValue + ")";} /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */return Data(element).transformCache[transformName];}};})();} /*************
	                    Colors
	                *************/ /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */for(var i=0;i < CSS.Lists.colors.length;i++) { /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */(function(){var colorName=CSS.Lists.colors[i]; /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */CSS.Normalizations.registered[colorName] = function(type,element,propertyValue){switch(type){case "name":return colorName; /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */case "extract":var extracted; /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted = propertyValue;}else {var converted,colorNames={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"}; /* Convert color names to rgb. */if(/^[A-z]+$/i.test(propertyValue)){if(colorNames[propertyValue] !== undefined){converted = colorNames[propertyValue];}else { /* If an unmatched color name is provided, default to black. */converted = colorNames.black;} /* Convert hex values to rgb. */}else if(CSS.RegEx.isHex.test(propertyValue)){converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")"; /* If the provided color doesn't match any of the accepted color formats, default to black. */}else if(!/^rgba?\(/i.test(propertyValue)){converted = colorNames.black;} /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ");} /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */if(!(IE <= 8) && extracted.split(" ").length === 3){extracted += " 1";}return extracted;case "inject": /* If this is IE<=8 and an alpha component exists, strip it off. */if(IE <= 8){if(propertyValue.split(" ").length === 4){propertyValue = propertyValue.split(/\s+/).slice(0,3).join(" ");} /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */}else if(propertyValue.split(" ").length === 3){propertyValue += " 1";} /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */return (IE <= 8?"rgb":"rgba") + "(" + propertyValue.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"") + ")";}};})();}}}, /************************
	           CSS Property Names
	        ************************/Names:{ /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */camelCase:function camelCase(property){return property.replace(/-(\w)/g,function(match,subMatch){return subMatch.toUpperCase();});}, /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */SVGAttribute:function SVGAttribute(property){var SVGAttributes="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2"; /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */if(IE || Velocity.State.isAndroid && !Velocity.State.isChrome){SVGAttributes += "|transform";}return new RegExp("^(" + SVGAttributes + ")$","i").test(property);}, /* Determine whether a property should be set with a vendor prefix. */ /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */prefixCheck:function prefixCheck(property){ /* If this property has already been checked, return the cached value. */if(Velocity.State.prefixMatches[property]){return [Velocity.State.prefixMatches[property],true];}else {var vendors=["","Webkit","Moz","ms","O"];for(var i=0,vendorsLength=vendors.length;i < vendorsLength;i++) {var propertyPrefixed;if(i === 0){propertyPrefixed = property;}else { /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */propertyPrefixed = vendors[i] + property.replace(/^\w/,function(match){return match.toUpperCase();});} /* Check if the browser supports this property as prefixed. */if(Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])){ /* Cache the match. */Velocity.State.prefixMatches[property] = propertyPrefixed;return [propertyPrefixed,true];}} /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */return [property,false];}}}, /************************
	           CSS Property Values
	        ************************/Values:{ /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */hexToRgb:function hexToRgb(hex){var shortformRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,longformRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgbParts;hex = hex.replace(shortformRegex,function(m,r,g,b){return r + r + g + g + b + b;});rgbParts = longformRegex.exec(hex);return rgbParts?[parseInt(rgbParts[1],16),parseInt(rgbParts[2],16),parseInt(rgbParts[3],16)]:[0,0,0];},isCSSNullValue:function isCSSNullValue(value){ /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */ /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */ /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */return value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);}, /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */getUnitType:function getUnitType(property){if(/^(rotate|skew)/i.test(property)){return "deg";}else if(/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)){ /* The above properties are unitless. */return "";}else { /* Default to px for all other properties. */return "px";}}, /* HTML elements default to an associated display type when they're not set to display:none. */ /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */getDisplayType:function getDisplayType(element){var tagName=element && element.tagName.toString().toLowerCase();if(/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)){return "inline";}else if(/^(li)$/i.test(tagName)){return "list-item";}else if(/^(tr)$/i.test(tagName)){return "table-row";}else if(/^(table)$/i.test(tagName)){return "table";}else if(/^(tbody)$/i.test(tagName)){return "table-row-group"; /* Default to "block" when no match is found. */}else {return "block";}}, /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */addClass:function addClass(element,className){if(element.classList){element.classList.add(className);}else {element.className += (element.className.length?" ":"") + className;}},removeClass:function removeClass(element,className){if(element.classList){element.classList.remove(className);}else {element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)","gi")," ");}}}, /****************************
	           Style Getting & Setting
	        ****************************/ /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */getPropertyValue:function getPropertyValue(element,property,rootPropertyValue,forceStyleLookup){ /* Get an element's computed property value. */ /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */function computePropertyValue(element,property){ /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */var computedValue=0; /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */if(IE <= 8){computedValue = $.css(element,property); /* GET */ /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */}else {var revertDisplay=function revertDisplay(){if(toggleDisplay){CSS.setPropertyValue(element,"display","none");}}; /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */var toggleDisplay=false;if(/^(width|height)$/.test(property) && CSS.getPropertyValue(element,"display") === 0){toggleDisplay = true;CSS.setPropertyValue(element,"display",CSS.Values.getDisplayType(element));}if(!forceStyleLookup){if(property === "height" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxHeight=element.offsetHeight - (parseFloat(CSS.getPropertyValue(element,"borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingBottom")) || 0);revertDisplay();return contentBoxHeight;}else if(property === "width" && CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase() !== "border-box"){var contentBoxWidth=element.offsetWidth - (parseFloat(CSS.getPropertyValue(element,"borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element,"paddingRight")) || 0);revertDisplay();return contentBoxWidth;}}var computedStyle; /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */if(Data(element) === undefined){computedStyle = window.getComputedStyle(element,null); /* GET */ /* If the computedStyle object has yet to be cached, do so now. */}else if(!Data(element).computedStyle){computedStyle = Data(element).computedStyle = window.getComputedStyle(element,null); /* GET */ /* If computedStyle is cached, use it. */}else {computedStyle = Data(element).computedStyle;} /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */if(property === "borderColor"){property = "borderTopColor";} /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */if(IE === 9 && property === "filter"){computedValue = computedStyle.getPropertyValue(property); /* GET */}else {computedValue = computedStyle[property];} /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */if(computedValue === "" || computedValue === null){computedValue = element.style[property];}revertDisplay();} /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */ /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */if(computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)){var position=computePropertyValue(element,"position"); /* GET */ /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */ /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */if(position === "fixed" || position === "absolute" && /top|left/i.test(property)){ /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */computedValue = $(element).position()[property] + "px"; /* GET */}}return computedValue;}var propertyValue; /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
	               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */if(CSS.Hooks.registered[property]){var hook=property,hookRoot=CSS.Hooks.getRoot(hook); /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the root property's value. */if(rootPropertyValue === undefined){ /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */rootPropertyValue = CSS.getPropertyValue(element,CSS.Names.prefixCheck(hookRoot)[0]); /* GET */} /* If this root has a normalization registered, peform the associated normalization extraction. */if(CSS.Normalizations.registered[hookRoot]){rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract",element,rootPropertyValue);} /* Extract the hook's value. */propertyValue = CSS.Hooks.extractValue(hook,rootPropertyValue); /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */ /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */}else if(CSS.Normalizations.registered[property]){var normalizedPropertyName,normalizedPropertyValue;normalizedPropertyName = CSS.Normalizations.registered[property]("name",element); /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */if(normalizedPropertyName !== "transform"){normalizedPropertyValue = computePropertyValue(element,CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */ /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */if(CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]){normalizedPropertyValue = CSS.Hooks.templates[property][1];}}propertyValue = CSS.Normalizations.registered[property]("extract",element,normalizedPropertyValue);} /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */if(!/^[\d-]/.test(propertyValue)){ /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */if(Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)){ /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */if(/^(height|width)$/i.test(property)){ /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */try{propertyValue = element.getBBox()[property];}catch(error) {propertyValue = 0;} /* Otherwise, access the attribute value directly. */}else {propertyValue = element.getAttribute(property);}}else {propertyValue = computePropertyValue(element,CSS.Names.prefixCheck(property)[0]); /* GET */}} /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */if(CSS.Values.isCSSNullValue(propertyValue)){propertyValue = 0;}if(Velocity.debug >= 2)console.log("Get " + property + ": " + propertyValue);return propertyValue;}, /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */setPropertyValue:function setPropertyValue(element,property,propertyValue,rootPropertyValue,scrollData){var propertyName=property; /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */if(property === "scroll"){ /* If a container option is present, scroll the container instead of the browser window. */if(scrollData.container){scrollData.container["scroll" + scrollData.direction] = propertyValue; /* Otherwise, Velocity defaults to scrolling the browser window. */}else {if(scrollData.direction === "Left"){window.scrollTo(propertyValue,scrollData.alternateValue);}else {window.scrollTo(scrollData.alternateValue,propertyValue);}}}else { /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */if(CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name",element) === "transform"){ /* Perform a normalization injection. */ /* Note: The normalization logic handles the transformCache updating. */CSS.Normalizations.registered[property]("inject",element,propertyValue);propertyName = "transform";propertyValue = Data(element).transformCache[property];}else { /* Inject hooks. */if(CSS.Hooks.registered[property]){var hookName=property,hookRoot=CSS.Hooks.getRoot(property); /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element,hookRoot); /* GET */propertyValue = CSS.Hooks.injectValue(hookName,propertyValue,rootPropertyValue);property = hookRoot;} /* Normalize names and values. */if(CSS.Normalizations.registered[property]){propertyValue = CSS.Normalizations.registered[property]("inject",element,propertyValue);property = CSS.Normalizations.registered[property]("name",element);} /* Assign the appropriate vendor prefix before performing an official style update. */propertyName = CSS.Names.prefixCheck(property)[0]; /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */if(IE <= 8){try{element.style[propertyName] = propertyValue;}catch(error) {if(Velocity.debug)console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");} /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */ /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */}else if(Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)){ /* Note: For SVG attributes, vendor-prefixed property names are never used. */ /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */element.setAttribute(property,propertyValue);}else {element.style[propertyName] = propertyValue;}if(Velocity.debug >= 2)console.log("Set " + property + " (" + propertyName + "): " + propertyValue);}} /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */return [propertyName,propertyValue];}, /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */ /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */flushTransformCache:function flushTransformCache(element){var transformString=""; /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */if((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && Data(element).isSVG){ /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */var getTransformFloat=function getTransformFloat(transformProperty){return parseFloat(CSS.getPropertyValue(element,transformProperty));} /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */;var SVGTransforms={translate:[getTransformFloat("translateX"),getTransformFloat("translateY")],skewX:[getTransformFloat("skewX")],skewY:[getTransformFloat("skewY")], /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */scale:getTransformFloat("scale") !== 1?[getTransformFloat("scale"),getTransformFloat("scale")]:[getTransformFloat("scaleX"),getTransformFloat("scaleY")], /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */rotate:[getTransformFloat("rotateZ"),0,0]}; /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */$.each(Data(element).transformCache,function(transformName){ /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */if(/^translate/i.test(transformName)){transformName = "translate";}else if(/^scale/i.test(transformName)){transformName = "scale";}else if(/^rotate/i.test(transformName)){transformName = "rotate";} /* Check that we haven't yet deleted the property from the SVGTransforms container. */if(SVGTransforms[transformName]){ /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " "; /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */delete SVGTransforms[transformName];}});}else {var transformValue,perspective; /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */$.each(Data(element).transformCache,function(transformName){transformValue = Data(element).transformCache[transformName]; /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */if(transformName === "transformPerspective"){perspective = transformValue;return true;} /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */if(IE === 9 && transformName === "rotateZ"){transformName = "rotate";}transformString += transformName + transformValue + " ";}); /* If present, set the perspective subproperty first. */if(perspective){transformString = "perspective" + perspective + " " + transformString;}}CSS.setPropertyValue(element,"transform",transformString);}}; /* Register hooks and normalizations. */CSS.Hooks.register();CSS.Normalizations.register(); /* Allow hook setting in the same fashion as jQuery's $.css(). */Velocity.hook = function(elements,arg2,arg3){var value=undefined;elements = sanitizeElements(elements);$.each(elements,function(i,element){ /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */if(Data(element) === undefined){Velocity.init(element);} /* Get property value. If an element set was passed in, only return the value for the first element. */if(arg3 === undefined){if(value === undefined){value = Velocity.CSS.getPropertyValue(element,arg2);} /* Set property value. */}else { /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */var adjustedSet=Velocity.CSS.setPropertyValue(element,arg2,arg3); /* Transform properties don't automatically set. They have to be flushed to the DOM. */if(adjustedSet[0] === "transform"){Velocity.CSS.flushTransformCache(element);}value = adjustedSet;}});return value;}; /*****************
	        Animation
	    *****************/var animate=function animate(){ /******************
	            Call Chain
	        ******************/ /* Logic for determining what to return to the call stack when exiting out of Velocity. */function getChain(){ /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */if(isUtility){return promiseData.promise || null; /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */}else {return elementsWrapped;}} /*************************
	           Arguments Assignment
	        *************************/ /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */ /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */var syntacticSugar=arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)), /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */isUtility, /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */elementsWrapped,argumentIndex;var elements,propertiesMap,options; /* Detect jQuery/Zepto elements being animated via the $.fn method. */if(Type.isWrapped(this)){isUtility = false;argumentIndex = 0;elements = this;elementsWrapped = this; /* Otherwise, raw elements are being animated via the utility function. */}else {isUtility = true;argumentIndex = 1;elements = syntacticSugar?arguments[0].elements || arguments[0].e:arguments[0];}elements = sanitizeElements(elements);if(!elements){return;}if(syntacticSugar){propertiesMap = arguments[0].properties || arguments[0].p;options = arguments[0].options || arguments[0].o;}else {propertiesMap = arguments[argumentIndex];options = arguments[argumentIndex + 1];} /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */var elementsLength=elements.length,elementsIndex=0; /***************************
	            Argument Overloading
	        ***************************/ /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */ /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */if(!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)){ /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */var startingArgumentPosition=argumentIndex + 1;options = {}; /* Iterate through all options arguments */for(var i=startingArgumentPosition;i < arguments.length;i++) { /* Treat a number as a duration. Parse it out. */ /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */if(!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))){options.duration = arguments[i]; /* Treat strings and arrays as easings. */}else if(Type.isString(arguments[i]) || Type.isArray(arguments[i])){options.easing = arguments[i]; /* Treat a function as a complete callback. */}else if(Type.isFunction(arguments[i])){options.complete = arguments[i];}}} /***************
	            Promises
	        ***************/var promiseData={promise:null,resolver:null,rejecter:null}; /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */ /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */if(isUtility && Velocity.Promise){promiseData.promise = new Velocity.Promise(function(resolve,reject){promiseData.resolver = resolve;promiseData.rejecter = reject;});} /*********************
	           Action Detection
	        *********************/ /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */var action;switch(propertiesMap){case "scroll":action = "scroll";break;case "reverse":action = "reverse";break;case "finish":case "finishAll":case "stop": /*******************
	                    Action: Stop
	                *******************/ /* Clear the currently-active delay on each targeted element. */$.each(elements,function(i,element){if(Data(element) && Data(element).delayTimer){ /* Stop the timer from triggering its cached next() function. */clearTimeout(Data(element).delayTimer.setTimeout); /* Manually call the next() function so that the subsequent queue items can progress. */if(Data(element).delayTimer.next){Data(element).delayTimer.next();}delete Data(element).delayTimer;} /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */if(propertiesMap === "finishAll" && (options === true || Type.isString(options))){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){item();}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}});var callsToStop=[]; /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */ /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */ /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */ /* Iterate through every active call. */$.each(Velocity.State.calls,function(i,activeCall){ /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */if(activeCall){ /* Iterate through the active call's targeted elements. */$.each(activeCall[1],function(k,activeElement){ /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */ /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */var queueName=options === undefined?"":options;if(queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)){return true;} /* Iterate through the calls targeted by the stop command. */$.each(elements,function(l,element){ /* Check that this call was applied to the target element. */if(element === activeElement){ /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */if(options === true || Type.isString(options)){ /* Iterate through the items in the element's queue. */$.each($.queue(element,Type.isString(options)?options:""),function(_,item){ /* The queue array can contain an "inprogress" string, which we skip. */if(Type.isFunction(item)){ /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */item(null,true);}}); /* Clearing the $.queue() array is achieved by resetting it to []. */$.queue(element,Type.isString(options)?options:"",[]);}if(propertiesMap === "stop"){ /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */ /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */if(Data(element) && Data(element).tweensContainer && queueName !== false){$.each(Data(element).tweensContainer,function(m,activeTween){activeTween.endValue = activeTween.currentValue;});}callsToStop.push(i);}else if(propertiesMap === "finish" || propertiesMap === "finishAll"){ /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */activeCall[2].duration = 1;}}});});}}); /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */if(propertiesMap === "stop"){$.each(callsToStop,function(i,j){completeCall(j,true);});if(promiseData.promise){ /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */promiseData.resolver(elements);}} /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */return getChain();default: /* Treat a non-empty plain object as a literal properties map. */if($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)){action = "start"; /****************
	                    Redirects
	                ****************/ /* Check if a string matches a registered redirect (see Redirects above). */}else if(Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]){var opts=$.extend({},options),durationOriginal=opts.duration,delayOriginal=opts.delay || 0; /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */if(opts.backwards === true){elements = $.extend(true,[],elements).reverse();} /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */$.each(elements,function(elementIndex,element){ /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */if(parseFloat(opts.stagger)){opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;}else if(Type.isFunction(opts.stagger)){opts.delay = delayOriginal + opts.stagger.call(element,elementIndex,elementsLength);} /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */if(opts.drag){ /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap)?1000:DURATION_DEFAULT); /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */opts.duration = Math.max(opts.duration * (opts.backwards?1 - elementIndex / elementsLength:(elementIndex + 1) / elementsLength),opts.duration * 0.75,200);} /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */Velocity.Redirects[propertiesMap].call(element,element,opts || {},elementIndex,elementsLength,elements,promiseData.promise?promiseData:undefined);}); /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */ /* Note: The jQuery call chain is kept intact by returning the complete element set. */return getChain();}else {var abortError="Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";if(promiseData.promise){promiseData.rejecter(new Error(abortError));}else {console.log(abortError);}return getChain();}} /**************************
	            Call-Wide Variables
	        **************************/ /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */var callUnitConversionData={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null}; /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */var call=[]; /************************
	           Element Processing
	        ************************/ /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */function processElement(){ /*************************
	               Part I: Pre-Queueing
	            *************************/ /***************************
	               Element-Wide Variables
	            ***************************/var element=this, /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */opts=$.extend({},Velocity.defaults,options), /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */tweensContainer={},elementUnitConversionData; /******************
	               Element Init
	            ******************/if(Data(element) === undefined){Velocity.init(element);} /******************
	               Option: Delay
	            ******************/ /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */ /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */if(parseFloat(opts.delay) && opts.queue !== false){$.queue(element,opts.queue,function(next){ /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true; /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */Data(element).delayTimer = {setTimeout:setTimeout(next,parseFloat(opts.delay)),next:next};});} /*********************
	               Option: Duration
	            *********************/ /* Support for jQuery's named durations. */switch(opts.duration.toString().toLowerCase()){case "fast":opts.duration = 200;break;case "normal":opts.duration = DURATION_DEFAULT;break;case "slow":opts.duration = 600;break;default: /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */opts.duration = parseFloat(opts.duration) || 1;} /************************
	               Global Option: Mock
	            ************************/if(Velocity.mock !== false){ /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */if(Velocity.mock === true){opts.duration = opts.delay = 1;}else {opts.duration *= parseFloat(Velocity.mock) || 1;opts.delay *= parseFloat(Velocity.mock) || 1;}} /*******************
	               Option: Easing
	            *******************/opts.easing = getEasing(opts.easing,opts.duration); /**********************
	               Option: Callbacks
	            **********************/ /* Callbacks must functions. Otherwise, default to null. */if(opts.begin && !Type.isFunction(opts.begin)){opts.begin = null;}if(opts.progress && !Type.isFunction(opts.progress)){opts.progress = null;}if(opts.complete && !Type.isFunction(opts.complete)){opts.complete = null;} /*********************************
	               Option: Display & Visibility
	            *********************************/ /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */ /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */if(opts.display !== undefined && opts.display !== null){opts.display = opts.display.toString().toLowerCase(); /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */if(opts.display === "auto"){opts.display = Velocity.CSS.Values.getDisplayType(element);}}if(opts.visibility !== undefined && opts.visibility !== null){opts.visibility = opts.visibility.toString().toLowerCase();} /**********************
	               Option: mobileHA
	            **********************/ /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */ /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */ /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread; /***********************
	               Part II: Queueing
	            ***********************/ /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */ /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */function buildQueue(next){ /*******************
	                   Option: Begin
	                *******************/ /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */if(opts.begin && elementsIndex === 0){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.begin.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/ /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */if(action === "scroll"){ /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */var scrollDirection=/^x$/i.test(opts.axis)?"Left":"Top",scrollOffset=parseFloat(opts.offset) || 0,scrollPositionCurrent,scrollPositionCurrentAlternate,scrollPositionEnd; /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */if(opts.container){ /* Ensure that either a jQuery object or a raw DOM element was passed in. */if(Type.isWrapped(opts.container) || Type.isNode(opts.container)){ /* Extract the raw DOM element from the jQuery wrapper. */opts.container = opts.container[0] || opts.container; /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */ /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */ /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */}else {opts.container = null;}}else { /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */ /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left"?"Top":"Left")]]; /* GET */ /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */} /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */tweensContainer = {scroll:{rootPropertyValue:false,startValue:scrollPositionCurrent,currentValue:scrollPositionCurrent,endValue:scrollPositionEnd,unitType:"",easing:opts.easing,scrollData:{container:opts.container,direction:scrollDirection,alternateValue:scrollPositionCurrentAlternate}},element:element};if(Velocity.debug)console.log("tweensContainer (scroll): ",tweensContainer.scroll,element); /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/ /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */ /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */ /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */}else if(action === "reverse"){ /* Abort if there is no prior animation data to reverse to. */if(!Data(element).tweensContainer){ /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */$.dequeue(element,opts.queue);return;}else { /*********************
	                           Options Parsing
	                        *********************/ /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */if(Data(element).opts.display === "none"){Data(element).opts.display = "auto";}if(Data(element).opts.visibility === "hidden"){Data(element).opts.visibility = "visible";} /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */Data(element).opts.loop = false;Data(element).opts.begin = null;Data(element).opts.complete = null; /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */if(!options.easing){delete opts.easing;}if(!options.duration){delete opts.duration;} /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */opts = $.extend({},Data(element).opts,opts); /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/ /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */var lastTweensContainer=$.extend(true,{},Data(element).tweensContainer); /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */for(var lastTween in lastTweensContainer) { /* In addition to tween data, tweensContainers contain an element property that we ignore here. */if(lastTween !== "element"){var lastStartValue=lastTweensContainer[lastTween].startValue;lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;lastTweensContainer[lastTween].endValue = lastStartValue; /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */if(!Type.isEmptyObject(options)){lastTweensContainer[lastTween].easing = opts.easing;}if(Velocity.debug)console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]),element);}}tweensContainer = lastTweensContainer;} /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/}else if(action === "start"){var lastTweensContainer;var property;var valueData,endValue,easing,startValue;var rootProperty,rootPropertyValue;var separatedValue,endValueUnitType,startValueUnitType,operator;var axis;(function(){ /***************************
	                       Tween Data Calculation
	                    ***************************/ /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */ /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */var parsePropertyValue=function parsePropertyValue(valueData,skipResolvingEasing){var endValue=undefined,easing=undefined,startValue=undefined; /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */if(Type.isArray(valueData)){ /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */endValue = valueData[0]; /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */if(!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])){startValue = valueData[1]; /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */}else if(Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) || Type.isArray(valueData[1])){easing = skipResolvingEasing?valueData[1]:getEasing(valueData[1],opts.duration); /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */if(valueData[2] !== undefined){startValue = valueData[2];}} /* Handle the single-value format. */}else {endValue = valueData;} /* Default to the call's easing if a per-property easing type was not defined. */if(!skipResolvingEasing){easing = easing || opts.easing;} /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */if(Type.isFunction(endValue)){endValue = endValue.call(element,elementsIndex,elementsLength);}if(Type.isFunction(startValue)){startValue = startValue.call(element,elementsIndex,elementsLength);} /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */return [endValue || 0,easing,startValue];} /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */; /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */if(Data(element).tweensContainer && Data(element).isAnimating === true){lastTweensContainer = Data(element).tweensContainer;}$.each(propertiesMap,function(property,value){ /* Find shorthand color properties that have been passed a hex string. */if(RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)){ /* Parse the value data for each shorthand. */var valueData=parsePropertyValue(value,true),endValue=valueData[0],easing=valueData[1],startValue=valueData[2];if(CSS.RegEx.isHex.test(endValue)){ /* Convert the hex strings into their RGB component arrays. */var colorComponents=["Red","Green","Blue"],endValueRGB=CSS.Values.hexToRgb(endValue),startValueRGB=startValue?CSS.Values.hexToRgb(startValue):undefined; /* Inject the RGB component tweens into propertiesMap. */for(var i=0;i < colorComponents.length;i++) {var dataArray=[endValueRGB[i]];if(easing){dataArray.push(easing);}if(startValueRGB !== undefined){dataArray.push(startValueRGB[i]);}propertiesMap[property + colorComponents[i]] = dataArray;} /* Remove the intermediary shorthand property entry now that we've processed it. */delete propertiesMap[property];}}}); /* Create a tween out of each property, and append its associated data to tweensContainer. */for(property in propertiesMap) { /* Separates a property value into its numeric value and its unit type. */var separateValue=function separateValue(property,value){var unitType,numericValue;numericValue = (value || "0").toString().toLowerCase() /* Match the unit type at the end of the value. */.replace(/[%A-z]+$/,function(match){ /* Grab the unit type. */unitType = match; /* Strip the unit type off of value. */return "";}); /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */if(!unitType){unitType = CSS.Values.getUnitType(property);}return [numericValue,unitType];} /* Separate startValue. */; /***************************
	                           Unit Ratio Calculation
	                        ***************************/ /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */ /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */ /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */ /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */var calculateUnitRatios=function calculateUnitRatios(){ /************************
	                                Same Ratio Checks
	                            ************************/ /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */var sameRatioIndicators={myParent:element.parentNode || document.body, /* GET */position:CSS.getPropertyValue(element,"position"), /* GET */fontSize:CSS.getPropertyValue(element,"fontSize") /* GET */}, /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */samePercentRatio=sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent, /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */sameEmRatio=sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize; /* Store these ratio indicators call-wide for the next element to compare against. */callUnitConversionData.lastParent = sameRatioIndicators.myParent;callUnitConversionData.lastPosition = sameRatioIndicators.position;callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize; /***************************
	                               Element-Specific Units
	                            ***************************/ /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */var measurement=100,unitRatios={};if(!sameEmRatio || !samePercentRatio){var dummy=Data(element).isSVG?document.createElementNS("http://www.w3.org/2000/svg","rect"):document.createElement("div");Velocity.init(dummy);sameRatioIndicators.myParent.appendChild(dummy); /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */ /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */$.each(["overflow","overflowX","overflowY"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,"hidden");});Velocity.CSS.setPropertyValue(dummy,"position",sameRatioIndicators.position);Velocity.CSS.setPropertyValue(dummy,"fontSize",sameRatioIndicators.fontSize);Velocity.CSS.setPropertyValue(dummy,"boxSizing","content-box"); /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,measurement + "%");}); /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */Velocity.CSS.setPropertyValue(dummy,"paddingLeft",measurement + "em"); /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy,"width",null,true)) || 1) / measurement; /* GET */unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy,"height",null,true)) || 1) / measurement; /* GET */unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy,"paddingLeft")) || 1) / measurement; /* GET */sameRatioIndicators.myParent.removeChild(dummy);}else {unitRatios.emToPx = callUnitConversionData.lastEmToPx;unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;} /***************************
	                               Element-Agnostic Units
	                            ***************************/ /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */if(callUnitConversionData.remToPx === null){ /* Default to browsers' default fontSize of 16px in the case of 0. */callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body,"fontSize")) || 16; /* GET */} /* Similarly, viewport units are %-relative to the window's inner dimensions. */if(callUnitConversionData.vwToPx === null){callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */}unitRatios.remToPx = callUnitConversionData.remToPx;unitRatios.vwToPx = callUnitConversionData.vwToPx;unitRatios.vhToPx = callUnitConversionData.vhToPx;if(Velocity.debug >= 1)console.log("Unit ratios: " + JSON.stringify(unitRatios),element);return unitRatios;} /********************
	                           Unit Conversion
	                        ********************/ /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */; /**************************
	                           Start Value Sourcing
	                        **************************/ /* Parse out endValue, easing, and startValue from the property's data. */valueData = parsePropertyValue(propertiesMap[property]);endValue = valueData[0];easing = valueData[1];startValue = valueData[2]; /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */property = CSS.Names.camelCase(property); /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */rootProperty = CSS.Hooks.getRoot(property);rootPropertyValue = false; /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */ /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */if(!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined){if(Velocity.debug)console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");continue;} /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */if((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0){startValue = 0;} /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */ /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */if(opts._cacheValues && lastTweensContainer && lastTweensContainer[property]){if(startValue === undefined){startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;} /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
	                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty]; /* If values were not transferred from a previous Velocity call, query the DOM as needed. */}else { /* Handle hooked properties. */if(CSS.Hooks.registered[property]){if(startValue === undefined){rootPropertyValue = CSS.getPropertyValue(element,rootProperty); /* GET */ /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from rootPropertyValue. */startValue = CSS.getPropertyValue(element,property,rootPropertyValue); /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
	                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */}else { /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */rootPropertyValue = CSS.Hooks.templates[rootProperty][1];} /* Handle non-hooked properties that haven't already been defined via forcefeeding. */}else if(startValue === undefined){startValue = CSS.getPropertyValue(element,property); /* GET */}} /**************************
	                           Value Data Extraction
	                        **************************/operator = false;separatedValue = separateValue(property,startValue);startValue = separatedValue[0];startValueUnitType = separatedValue[1]; /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */separatedValue = separateValue(property,endValue);endValue = separatedValue[0].replace(/^([+-\/*])=/,function(match,subMatch){operator = subMatch; /* Strip the operator off of the value. */return "";});endValueUnitType = separatedValue[1]; /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */startValue = parseFloat(startValue) || 0;endValue = parseFloat(endValue) || 0; /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/ /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */if(endValueUnitType === "%"){ /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */if(/^(fontSize|lineHeight)$/.test(property)){ /* Convert % into an em decimal value. */endValue = endValue / 100;endValueUnitType = "em"; /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */}else if(/^scale/.test(property)){endValue = endValue / 100;endValueUnitType = ""; /* For RGB components, take the defined percentage of 255 and strip off the unit type. */}else if(/(Red|Green|Blue)$/i.test(property)){endValue = endValue / 100 * 255;endValueUnitType = "";}}if(/[\/*]/.test(operator)){endValueUnitType = startValueUnitType; /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */ /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */}else if(startValueUnitType !== endValueUnitType && startValue !== 0){ /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */ /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */if(endValue === 0){endValueUnitType = startValueUnitType;}else { /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */elementUnitConversionData = elementUnitConversionData || calculateUnitRatios(); /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */ /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x"?"x":"y"; /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */switch(startValueUnitType){case "%": /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */startValue *= axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight;break;case "px": /* px acts as our midpoint in the unit conversion process; do nothing. */break;default:startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];} /* Invert the px ratios to convert into to the target unit. */switch(endValueUnitType){case "%":startValue *= 1 / (axis === "x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px": /* startValue is already in px, do nothing; we're done. */break;default:startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];}}} /*********************
	                           Relative Values
	                        *********************/ /* Operator logic must be performed last since it requires unit-normalized start and end values. */ /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */switch(operator){case "+":endValue = startValue + endValue;break;case "-":endValue = startValue - endValue;break;case "*":endValue = startValue * endValue;break;case "/":endValue = startValue / endValue;break;} /**************************
	                           tweensContainer Push
	                        **************************/ /* Construct the per-property tween object, and push it to the element's tweensContainer. */tweensContainer[property] = {rootPropertyValue:rootPropertyValue,startValue:startValue,currentValue:startValue,endValue:endValue,unitType:endValueUnitType,easing:easing};if(Velocity.debug)console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]),element);} /* Along with its property data, store a reference to the element itself onto tweensContainer. */tweensContainer.element = element;})();} /*****************
	                    Call Push
	                *****************/ /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */if(tweensContainer.element){ /* Apply the "velocity-animating" indicator class. */CSS.Values.addClass(element,"velocity-animating"); /* The call array houses the tweensContainers for each element being animated in the current call. */call.push(tweensContainer); /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */if(opts.queue === ""){Data(element).tweensContainer = tweensContainer;Data(element).opts = opts;} /* Switch on the element's animating flag. */Data(element).isAnimating = true; /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */if(elementsIndex === elementsLength - 1){ /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */Velocity.State.calls.push([call,elements,opts,null,promiseData.resolver]); /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */if(Velocity.State.isTicking === false){Velocity.State.isTicking = true; /* Start the tick loop. */tick();}}else {elementsIndex++;}}} /* When the queue option is set to false, the call skips the element's queue and fires immediately. */if(opts.queue === false){ /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */if(opts.delay){setTimeout(buildQueue,opts.delay);}else {buildQueue();} /* Otherwise, the call undergoes element queueing as normal. */ /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */}else {$.queue(element,opts.queue,function(next,clearQueue){ /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */if(clearQueue === true){if(promiseData.promise){promiseData.resolver(elements);} /* Do not continue with animation queueing. */return true;} /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */Velocity.velocityQueueEntryFlag = true;buildQueue(next);});} /*********************
	                Auto-Dequeuing
	            *********************/ /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */ /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */ /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */if((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress"){$.dequeue(element);}} /**************************
	           Element Set Iteration
	        **************************/ /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */$.each(elements,function(i,element){ /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */if(Type.isNode(element)){processElement.call(element);}}); /******************
	           Option: Loop
	        ******************/ /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */ /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */var opts=$.extend({},Velocity.defaults,options),reverseCallsCount;opts.loop = parseInt(opts.loop);reverseCallsCount = opts.loop * 2 - 1;if(opts.loop){ /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */for(var x=0;x < reverseCallsCount;x++) { /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */var reverseOptions={delay:opts.delay,progress:opts.progress}; /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */if(x === reverseCallsCount - 1){reverseOptions.display = opts.display;reverseOptions.visibility = opts.visibility;reverseOptions.complete = opts.complete;}animate(elements,"reverse",reverseOptions);}} /***************
	            Chaining
	        ***************/ /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */return getChain();}; /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */Velocity = $.extend(animate,Velocity); /* For legacy support, also expose the literal animate method. */Velocity.animate = animate; /**************
	        Timing
	    **************/ /* Ticker function. */var ticker=window.requestAnimationFrame || rAFShim; /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */ /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */if(!Velocity.State.isMobile && document.hidden !== undefined){document.addEventListener("visibilitychange",function(){ /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */if(document.hidden){ticker = function(callback){ /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */return setTimeout(function(){callback(true);},16);}; /* The rAF loop has been paused by the browser, so we manually restart the tick. */tick();}else {ticker = window.requestAnimationFrame || rAFShim;}});} /************
	        Tick
	    ************/ /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */function tick(timestamp){ /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */if(timestamp){ /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */var timeCurrent=new Date().getTime(); /********************
	               Call Iteration
	            ********************/var callsLength=Velocity.State.calls.length; /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */if(callsLength > 10000){Velocity.State.calls = compactSparseArray(Velocity.State.calls);} /* Iterate through each active call. */for(var i=0;i < callsLength;i++) { /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */if(!Velocity.State.calls[i]){continue;} /************************
	                   Call-Wide Variables
	                ************************/var callContainer=Velocity.State.calls[i],call=callContainer[0],opts=callContainer[2],timeStart=callContainer[3],firstTick=!!timeStart,tweenDummyValue=null; /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */ /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */if(!timeStart){timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;} /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */var percentComplete=Math.min((timeCurrent - timeStart) / opts.duration,1); /**********************
	                   Element Iteration
	                **********************/ /* For every call, iterate through each of the elements in its set. */for(var j=0,callLength=call.length;j < callLength;j++) {var tweensContainer=call[j],element=tweensContainer.element; /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */if(!Data(element)){continue;}var transformPropertyExists=false; /**********************************
	                       Display & Visibility Toggling
	                    **********************************/ /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */if(opts.display !== undefined && opts.display !== null && opts.display !== "none"){if(opts.display === "flex"){var flexValues=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(flexValues,function(i,flexValue){CSS.setPropertyValue(element,"display",flexValue);});}CSS.setPropertyValue(element,"display",opts.display);} /* Same goes with the visibility option, but its "none" equivalent is "hidden". */if(opts.visibility !== undefined && opts.visibility !== "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);} /************************
	                       Property Iteration
	                    ************************/ /* For every element, iterate through each property. */for(var property in tweensContainer) { /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */if(property !== "element"){var tween=tweensContainer[property],currentValue, /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */easing=Type.isString(tween.easing)?Velocity.Easings[tween.easing]:tween.easing; /******************************
	                               Current Value Calculation
	                            ******************************/ /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */if(percentComplete === 1){currentValue = tween.endValue; /* Otherwise, calculate currentValue based on the current delta from startValue. */}else {var tweenDelta=tween.endValue - tween.startValue;currentValue = tween.startValue + tweenDelta * easing(percentComplete,opts,tweenDelta); /* If no value change is occurring, don't proceed with DOM updating. */if(!firstTick && currentValue === tween.currentValue){continue;}}tween.currentValue = currentValue; /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */if(property === "tween"){tweenDummyValue = currentValue;}else { /******************
	                                   Hooks: Part I
	                                ******************/ /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
	                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
	                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
	                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */if(CSS.Hooks.registered[property]){var hookRoot=CSS.Hooks.getRoot(property),rootPropertyValueCache=Data(element).rootPropertyValueCache[hookRoot];if(rootPropertyValueCache){tween.rootPropertyValue = rootPropertyValueCache;}} /*****************
	                                    DOM Update
	                                *****************/ /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */ /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */var adjustedSetData=CSS.setPropertyValue(element, /* SET */property,tween.currentValue + (parseFloat(currentValue) === 0?"":tween.unitType),tween.rootPropertyValue,tween.scrollData); /*******************
	                                   Hooks: Part II
	                                *******************/ /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */if(CSS.Hooks.registered[property]){ /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */if(CSS.Normalizations.registered[hookRoot]){Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract",null,adjustedSetData[1]);}else {Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];}} /***************
	                                   Transforms
	                                ***************/ /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */if(adjustedSetData[0] === "transform"){transformPropertyExists = true;}}}} /****************
	                        mobileHA
	                    ****************/ /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */if(opts.mobileHA){ /* Don't set the null transform hack if we've already done so. */if(Data(element).transformCache.translate3d === undefined){ /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */Data(element).transformCache.translate3d = "(0px, 0px, 0px)";transformPropertyExists = true;}}if(transformPropertyExists){CSS.flushTransformCache(element);}} /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */if(opts.display !== undefined && opts.display !== "none"){Velocity.State.calls[i][2].display = false;}if(opts.visibility !== undefined && opts.visibility !== "hidden"){Velocity.State.calls[i][2].visibility = false;} /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */if(opts.progress){opts.progress.call(callContainer[1],callContainer[1],percentComplete,Math.max(0,timeStart + opts.duration - timeCurrent),timeStart,tweenDummyValue);} /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */if(percentComplete === 1){completeCall(i);}}} /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */if(Velocity.State.isTicking){ticker(tick);}} /**********************
	        Call Completion
	    **********************/ /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */function completeCall(callIndex,isStopped){ /* Ensure the call exists. */if(!Velocity.State.calls[callIndex]){return false;} /* Pull the metadata from the call. */var call=Velocity.State.calls[callIndex][0],elements=Velocity.State.calls[callIndex][1],opts=Velocity.State.calls[callIndex][2],resolver=Velocity.State.calls[callIndex][4];var remainingCallsExist=false; /*************************
	           Element Finalization
	        *************************/for(var i=0,callLength=call.length;i < callLength;i++) {var element=call[i].element; /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */ /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */ /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */if(!isStopped && !opts.loop){if(opts.display === "none"){CSS.setPropertyValue(element,"display",opts.display);}if(opts.visibility === "hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility);}} /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */if(opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))){ /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */if(Data(element)){Data(element).isAnimating = false; /* Clear the element's rootPropertyValueCache, which will become stale. */Data(element).rootPropertyValueCache = {};var transformHAPropertyExists=false; /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */$.each(CSS.Lists.transforms3D,function(i,transformName){var defaultValue=/^scale/.test(transformName)?1:0,currentValue=Data(element).transformCache[transformName];if(Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)){transformHAPropertyExists = true;delete Data(element).transformCache[transformName];}}); /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */if(opts.mobileHA){transformHAPropertyExists = true;delete Data(element).transformCache.translate3d;} /* Flush the subproperty removals to the DOM. */if(transformHAPropertyExists){CSS.flushTransformCache(element);} /* Remove the "velocity-animating" indicator class. */CSS.Values.removeClass(element,"velocity-animating");}} /*********************
	               Option: Complete
	            *********************/ /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */ /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */if(!isStopped && opts.complete && !opts.loop && i === callLength - 1){ /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */try{opts.complete.call(elements,elements);}catch(error) {setTimeout(function(){throw error;},1);}} /**********************
	               Promise Resolving
	            **********************/ /* Note: Infinite loops don't return promises. */if(resolver && opts.loop !== true){resolver(elements);} /****************************
	               Option: Loop (Infinite)
	            ****************************/if(Data(element) && opts.loop === true && !isStopped){ /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */$.each(Data(element).tweensContainer,function(propertyName,tweenContainer){if(/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360){tweenContainer.endValue = 0;tweenContainer.startValue = 360;}if(/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%"){tweenContainer.endValue = 0;tweenContainer.startValue = 100;}});Velocity(element,"reverse",{loop:true,delay:opts.delay});} /***************
	               Dequeueing
	            ***************/ /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */if(opts.queue !== false){$.dequeue(element,opts.queue);}} /************************
	           Calls Array Cleanup
	        ************************/ /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */Velocity.State.calls[callIndex] = false; /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */for(var j=0,callsLength=Velocity.State.calls.length;j < callsLength;j++) {if(Velocity.State.calls[j] !== false){remainingCallsExist = true;break;}}if(remainingCallsExist === false){ /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */Velocity.State.isTicking = false; /* Clear the calls array so that its length is reset. */delete Velocity.State.calls;Velocity.State.calls = [];}} /******************
	        Frameworks
	    ******************/ /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */global.Velocity = Velocity;if(global !== window){ /* Assign the element function to Velocity's core animate() method. */global.fn.velocity = animate; /* Assign the object function's defaults to Velocity's global defaults object. */global.fn.velocity.defaults = Velocity.defaults;} /***********************
	       Packaged Redirects
	    ***********************/ /* slideUp, slideDown */$.each(["Down","Up"],function(i,direction){Velocity.Redirects["slide" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),begin=opts.begin,complete=opts.complete,computedValues={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},inlineValues={};if(opts.display === undefined){ /* Show the element before slideDown begins and hide the element after slideUp completes. */ /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */opts.display = direction === "Down"?Velocity.CSS.Values.getDisplayType(element) === "inline"?"inline-block":"block":"none";}opts.begin = function(){ /* If the user passed in a begin callback, fire it now. */begin && begin.call(elements,elements); /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */for(var property in computedValues) {inlineValues[property] = element.style[property]; /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */var propertyValue=Velocity.CSS.getPropertyValue(element,property);computedValues[property] = direction === "Down"?[propertyValue,0]:[0,propertyValue];} /* Force vertical overflow content to clip so that sliding works as expected. */inlineValues.overflow = element.style.overflow;element.style.overflow = "hidden";};opts.complete = function(){ /* Reset element to its pre-slide inline values once its slide animation is complete. */for(var property in inlineValues) {element.style[property] = inlineValues[property];} /* If the user passed in a complete callback, fire it now. */complete && complete.call(elements,elements);promiseData && promiseData.resolver(elements);};Velocity(element,computedValues,opts);};}); /* fadeIn, fadeOut */$.each(["In","Out"],function(i,direction){Velocity.Redirects["fade" + direction] = function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),propertiesMap={opacity:direction === "In"?1:0},originalComplete=opts.complete; /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */if(elementsIndex !== elementsSize - 1){opts.complete = opts.begin = null;}else {opts.complete = function(){if(originalComplete){originalComplete.call(elements,elements);}promiseData && promiseData.resolver(elements);};} /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */ /* Note: We allow users to pass in "null" to skip display setting altogether. */if(opts.display === undefined){opts.display = direction === "In"?"auto":"none";}Velocity(this,propertiesMap,opts);};});return Velocity;})(window.jQuery || window.Zepto || window,window,document);}); /******************
	   Known Issues
	******************/ /* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */ /*************************
	                        Value Transferring
	                    *************************/ /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */ /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */ /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tooltip_1 = __webpack_require__(22);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    methods: {
	        tooltip: function tooltip(event, message, position, delay) {
	            var element = event.currentTarget;
	            return tooltip_1["default"](element, message, position, delay);
	        }
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Velocity = __webpack_require__(20);
	function getOffset(element) {
	    var top = 0,
	        left = 0;
	    do {
	        top += element.offsetTop || 0;
	        left += element.offsetLeft || 0;
	        element = element.offsetParent;
	    } while (element);
	    return {
	        top: top,
	        left: left
	    };
	}
	// todo swap tooltip if oversize window
	function default_1(element, message, position, delay) {
	    if (position === void 0) {
	        position = 'top';
	    }
	    if (delay === void 0) {
	        delay = 50;
	    }
	    var timeout = null,
	        margin = 10;
	    var origin = element;
	    if (!element._tooltip) {
	        // Create Text span
	        var tooltip_text = document.createElement("SPAN");
	        tooltip_text.textContent = message;
	        // Create tooltip
	        var newTooltip = document.createElement("DIV");
	        newTooltip.classList.add('material-tooltip');
	        newTooltip.appendChild(tooltip_text);
	        document.body.appendChild(newTooltip);
	        var newBackdrop = document.createElement("DIV");
	        newBackdrop.classList.add('backdrop');
	        newTooltip.appendChild(newBackdrop);
	        newBackdrop.style.top = '0';
	        newBackdrop.style.left = '0';
	        document.body.appendChild(newTooltip);
	        element._tooltip = newTooltip;
	        element._backdrop = newBackdrop;
	    }
	    var tooltip = element._tooltip;
	    var backdrop = element._backdrop;
	    var started;
	    var timeoutRef = setTimeout(function () {
	        started = true;
	        Velocity(tooltip, 'stop');
	        Velocity(backdrop, 'stop');
	        tooltip.style.display = 'block';
	        tooltip.style.left = '0px';
	        tooltip.style.top = '0px';
	        // Set Tooltip text
	        // tooltip.children('span').text(origin.attr('data-tooltip'));
	        // Tooltip positioning
	        var originWidth = origin.offsetWidth;
	        var originHeight = origin.offsetHeight;
	        var tooltipPosition = position;
	        var tooltipHeight = tooltip.offsetHeight;
	        var tooltipWidth = tooltip.offsetWidth;
	        var tooltipVerticalMovement = '0px';
	        var tooltipHorizontalMovement = '0px';
	        var scale_factor = 8;
	        var targetTop, targetLeft, newCoordinates;
	        if (tooltipPosition === "top") {
	            // Top Position
	            var pos = getOffset(element);
	            targetTop = pos.top - tooltipHeight - margin;
	            targetLeft = pos.left + originWidth / 2 - tooltipWidth / 2;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipVerticalMovement = '-10px';
	            backdrop.style.borderRadius = '14px 14px 0 0';
	            backdrop.style.transformOrigin = '50% 90%';
	            backdrop.style.marginTop = tooltipHeight.toString() + 'px';
	            backdrop.style.marginLeft = (tooltipWidth / 2 - backdrop.offsetWidth / 2).toString() + 'px';
	        } else if (tooltipPosition === "left") {
	            var pos = getOffset(element);
	            targetTop = pos.top + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = pos.left - tooltipWidth - margin;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipHorizontalMovement = '-10px';
	            backdrop.style.width = '14px';
	            backdrop.style.height = '14px';
	            backdrop.style.borderRadius = '14px 0 0 14px';
	            backdrop.style.transformOrigin = '95% 50%';
	            backdrop.style.marginTop = (tooltipHeight / 2).toString() + 'px';
	            backdrop.style.marginLeft = tooltipWidth.toString() + 'px';
	        } else if (tooltipPosition === "right") {
	            var pos = getOffset(element);
	            targetTop = pos.top + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = pos.left + originWidth + margin;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipHorizontalMovement = '+10px';
	            backdrop.style.width = '14px';
	            backdrop.style.height = '14px';
	            backdrop.style.borderRadius = '0 14px 14px 0';
	            backdrop.style.transformOrigin = '5% 50%';
	            backdrop.style.marginTop = (tooltipHeight / 2).toString() + 'px';
	            backdrop.style.marginLeft = '0px';
	        } else {
	            // Bottom Position
	            var pos = getOffset(element);
	            targetTop = pos.top + origin.offsetHeight + margin;
	            targetLeft = pos.left + originWidth / 2 - tooltipWidth / 2;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipVerticalMovement = '+10px';
	            backdrop.style.marginLeft = (tooltipWidth / 2 - backdrop.offsetWidth / 2).toString() + 'px';
	        }
	        // Set tooptip css placement
	        tooltip.style.top = newCoordinates.y + 'px';
	        tooltip.style.left = newCoordinates.x + 'px';
	        // Calculate Scale to fill
	        scale_factor = tooltipWidth / 8;
	        if (scale_factor < 8) {
	            scale_factor = 8;
	        }
	        if (tooltipPosition === "right" || tooltipPosition === "left") {
	            scale_factor = tooltipWidth / 10;
	            if (scale_factor < 6) scale_factor = 6;
	        }
	        Velocity(tooltip, { marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement }, { duration: 350, queue: false });
	        Velocity(tooltip, { opacity: 1 }, { duration: 300, delay: 50, queue: false });
	        backdrop.style.display = 'block';
	        Velocity(backdrop, { opacity: 1 }, { duration: 55, delay: 0, queue: false });
	        Velocity(backdrop, { scale: scale_factor }, { duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad' });
	    }, delay);
	    // todo obecne
	    element.addEventListener("mouseleave", function () {
	        started = false;
	        clearTimeout(timeoutRef);
	        // Animate back
	        setTimeout(function () {
	            if (started != true) {
	                Velocity(tooltip, { opacity: 0, marginTop: 0, marginLeft: 0 }, { duration: 225, queue: false });
	                Velocity(backdrop, { opacity: 0, scale: 1 }, {
	                    duration: 225,
	                    queue: false,
	                    complete: function complete() {
	                        backdrop.style.display = 'none';
	                        tooltip.style.display = 'none';
	                        started = false;
	                    }
	                });
	            }
	        }, 225);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = default_1;
	;
	var repositionWithinScreen = function repositionWithinScreen(x, y, width, height) {
	    var newX = x;
	    var newY = y;
	    if (newX < 0) {
	        newX = 4;
	    } else if (newX + width > window.innerWidth + window.scrollX) {
	        newX = window.document.documentElement.offsetWidth - width;
	    }
	    if (newY < 0) {
	        newY = 4;
	    } else if (newY + height > window.innerHeight + window.scrollY) {
	        newY = window.document.documentElement.offsetHeight - height;
	    }
	    return { x: newX, y: newY };
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Badge = (function () {
	    function Badge() {}
	    Badge = __decorate([vue_class_component_1["default"]({
	        props: {
	            alert: {
	                type: String,
	                required: false,
	                twoWay: false,
	                "default": null
	            }
	        },
	        template: __webpack_require__(24)
	    })], Badge);
	    return Badge;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badge;
	//# sourceMappingURL=index.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<span class=\"badge\" :class=\"{new: !!alert}\">\r\n    <slot></slot>\r\n\r\n    <span v-if=\"alert\" class=\"new\">{{alert}}</span>\r\n</span>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var icon_1 = __webpack_require__(26);
	var wave_effect_1 = __webpack_require__(13);
	var Button = (function () {
	    function Button() {}
	    Object.defineProperty(Button.prototype, "computedClasses", {
	        get: function get() {
	            var classes = {
	                'btn-large': this.large,
	                'disabled': this.disabled,
	                'btn-floating': this.floating
	            };
	            classes[this.type ? "btn-" + this.type : "btn"] = true;
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Button = __decorate([vue_class_component_1["default"]({
	        props: {
	            type: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            icon: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            iconAlignRight: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            floating: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"]
	        },
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        template: __webpack_require__(28)
	    })], Button);
	    return Button;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Button;
	//# sourceMappingURL=index.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Icon = (function () {
	    function Icon() {}
	    Icon = __decorate([vue_class_component_1["default"]({
	        props: {
	            right: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            left: {
	                type: Boolean,
	                required: false,
	                "default": false
	            }
	        },
	        template: __webpack_require__(27)
	    })], Icon);
	    return Icon;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Icon;
	//# sourceMappingURL=index.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<i class=\"material-icons\"\r\n   :class=\"{right: right, left: left}\">\r\n    <slot></slot>\r\n</i>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"computedClasses\" v-wave-effect class=\"md-button\">\r\n    <md-icon v-if=\"icon\" :right=\"iconAlignRight\" :left=\"!iconAlignRight\">\r\n        {{icon}}\r\n    </md-icon>\r\n    <slot></slot>\r\n</a>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var navbar_1 = __webpack_require__(30);
	var Breadcrumbs = (function () {
	    function Breadcrumbs() {}
	    Breadcrumbs = __decorate([vue_class_component_1["default"]({
	        props: {
	            list: {
	                type: Object,
	                required: false,
	                'default': {}
	            }
	        },
	        components: {
	            mdNavbar: navbar_1["default"]
	        },
	        template: __webpack_require__(36)
	    })], Breadcrumbs);
	    return Breadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Breadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var icon_1 = __webpack_require__(26);
	var sidenav_1 = __webpack_require__(31);
	var Navbar = (function () {
	    function Navbar() {}
	    Object.defineProperty(Navbar.prototype, "logoClasses", {
	        get: function get() {
	            return {
	                center: this.center,
	                right: !this.center && !this.right
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Navbar.prototype, "listClasses", {
	        get: function get() {
	            var classes = {
	                right: this.right,
	                left: this.left
	            };
	            if (this.mode) {
	                classes[this.mode] = true;
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Navbar.prototype.openSideMenu = function () {
	        this.$broadcast('sidenav::open');
	    };
	    Navbar.prototype.closeSideMenu = function () {
	        this.$broadcast('sidenav::close');
	    };
	    Navbar = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            showActive: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            title: {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            titleHref: {
	                type: String,
	                required: false,
	                'default': 'javascript:void(0)',
	                twoWay: false
	            },
	            right: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            left: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            center: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            fixed: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            navClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            hamburger: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            mode: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            closeOnClick: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            onlySideNav: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            wrapperClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"],
	            mdSidenav: sidenav_1["default"]
	        },
	        events: {
	            'nav-item::activated': function navItemActivated(id, content) {
	                // propagate event to children
	                this.$broadcast('nav-item::activated', id);
	                this.active = id;
	                if (this.closeOnClick) {
	                    this.$broadcast('sidenav::close');
	                }
	            }
	        },
	        template: __webpack_require__(35)
	    })], Navbar);
	    return Navbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var sidenav_overlay_1 = __webpack_require__(32);
	var ESC = 27;
	var SideNav = (function () {
	    function SideNav() {}
	    SideNav.prototype.ready = function () {
	        var _this = this;
	        this.active = this.fixed || this.active;
	        if (!this.fixed) {
	            window.document.addEventListener('keydown', function (evt) {
	                evt = evt || window.event;
	                if (evt.keyCode == ESC) {
	                    _this.close();
	                }
	            });
	        }
	    };
	    Object.defineProperty(SideNav.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return {
	                    left: 0
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SideNav.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	        }
	    };
	    SideNav.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	        }
	    };
	    SideNav.prototype.closeIfNecessary = function () {
	        if (this.closeOnClick) {
	            this.close();
	        }
	    };
	    SideNav = __decorate([vue_class_component_1["default"]({
	        props: {
	            closeOnClick: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            showActive: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            fixed: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'sidenav::open': function sidenavOpen() {
	                this.open();
	            },
	            'sidenav::close': function sidenavClose() {
	                this.$nextTick(this.close); // delay close due events
	            },
	            'nav-item::activated': function navItemActivated(id) {
	                this.$broadcast('nav-item::activated', id);
	            }
	        },
	        components: {
	            mdSidenavOverlay: sidenav_overlay_1["default"]
	        },
	        template: __webpack_require__(34)
	    })], SideNav);
	    return SideNav;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SideNav;
	//# sourceMappingURL=index.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var SidenavOverlay = (function () {
	    function SidenavOverlay() {}
	    SidenavOverlay = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(33)
	    })], SidenavOverlay);
	    return SidenavOverlay;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SidenavOverlay;
	//# sourceMappingURL=index.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div id=\"sidenav-overlay\"></div>";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-sidenav\">\r\n    <ul v-if=\"active\" transition=\"side-nav\" :style=\"computedStyle\" :class=\"{fixed: fixed}\" class=\"side-nav\">\r\n        <slot></slot>\r\n    </ul>\r\n\r\n    <div v-if=\"!fixed\" @click=\"close\">\r\n        <md-sidenav-overlay v-if=\"active\" transition=\"modal-overlay\"></md-sidenav-overlay>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'navbar-fixed': fixed}\"\r\n     :style=\"fixed ? {position: 'absolute', top: 0}: {}\"\r\n     class=\"md-navbar\">\r\n\r\n    <nav :class=\"navClass\">\r\n        <div class=\"nav-wrapper\" :class=\"wrapperClass\">\r\n            <slot name=\"content\">\r\n                <slot name=\"logo\">\r\n                    <a v-if=\"title\"\r\n                       :href=\"titleHref\" class=\"brand-logo\" :class=\"logoClasses\">\r\n                        {{title}}\r\n                    </a>\r\n                    <a v-if=\"hamburger\" href=\"javascript:void(0)\" class=\"button-collapse\"\r\n                       @click=\"openSideMenu\">\r\n                        <md-icon>menu</md-icon>\r\n                    </a>\r\n                </slot>\r\n\r\n                <slot name=\"navs\">\r\n                    <ul v-if=\"!onlySideNav\" :class=\"listClasses\">\r\n                        <slot></slot>\r\n                    </ul>\r\n                    <md-sidenav :close-on-click=\"closeOnClick\"> <!-- only if is active -->\r\n                        <slot></slot>\r\n                    </md-sidenav>\r\n                </slot>\r\n            </slot>\r\n        </div>\r\n    </nav>\r\n</div>\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<md-navbar class=\"md-breadcrumbs\">\r\n    <div slot=\"content\">\r\n        <a v-for=\"(label, url) in list\" :href=\"url\" class=\"breadcrumb\">\r\n            {{label}}\r\n        </a>\r\n    </div>\r\n</md-navbar>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Velocity = __webpack_require__(20);
	var Card = (function () {
	    function Card() {}
	    Card.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Card.prototype.compiled = function () {
	        var _this = this;
	        var activators = this.$el.querySelectorAll('.activator');
	        Array.prototype.slice.call(activators).forEach(function (activator) {
	            activator.addEventListener('click', _this.open);
	        });
	        var revealClose = this.$els.revealClose;
	        if (revealClose) {
	            revealClose.addEventListener('click', this.close);
	        }
	    };
	    Card.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	            var reveal = this.$els.reveal;
	            if (reveal) {
	                reveal.style.display = 'block';
	                Velocity(reveal, "stop", false);
	                Velocity(reveal, { translateY: '-100%' }, { duration: 300, queue: false, easing: 'easeInOutQuad' });
	            }
	        }
	    };
	    Card.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            var reveal = this.$els.reveal;
	            if (reveal) {
	                Velocity(reveal, { translateY: 0 }, {
	                    duration: 225,
	                    queue: false,
	                    easing: 'easeInOutQuad',
	                    complete: function complete() {
	                        reveal.style.display = 'none';
	                    }
	                });
	            }
	        }
	    };
	    Object.defineProperty(Card.prototype, "imageSlot", {
	        get: function get() {
	            return 'image' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "titleSlot", {
	        get: function get() {
	            return 'title' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "actionsSlot", {
	        get: function get() {
	            return 'actions' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "revealSlot", {
	        get: function get() {
	            return 'reveal' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Card = __decorate([vue_class_component_1["default"]({
	        props: {
	            contentClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            titleInImage: {
	                type: Boolean,
	                required: false,
	                twoWay: false,
	                'default': false
	            },
	            small: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            medium: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(38)
	    })], Card);
	    return Card;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Card;
	//# sourceMappingURL=index.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"{overflow: revealSlot ? 'hidden' : 'initial'}\"\r\n     :class=\"{small: small, medium: medium, large: large}\"\r\n     class=\"md-card card\">\r\n    <slot name=\"card-content\">\r\n        <slot name=\"card-image\">\r\n            <div v-if=\"imageSlot\" class=\"card-image\">\r\n                <slot name=\"image\"></slot>\r\n                <div v-if=\"titleSlot && titleInImage\" class=\"card-title\">\r\n                    <slot name=\"title\"></slot>\r\n                </div>\r\n            </div>\r\n        </slot>\r\n\r\n        <div class=\"card-content\" :class=\"contentClass\">\r\n            <div v-if=\"titleSlot && !titleInImage\" class=\"card-title\">\r\n                <slot name=\"title\"></slot>\r\n            </div>\r\n            <slot></slot>\r\n        </div>\r\n\r\n        <slot name=\"card-action\">\r\n            <div v-if=\"actionsSlot\" class=\"card-action\">\r\n                <slot name=\"actions\"></slot>\r\n            </div>\r\n        </slot>\r\n\r\n        <div v-if=\"revealSlot\" v-el:reveal class=\"card-reveal\">\r\n            <i v-el:reveal-close class=\"material-icons right close\">close</i>\r\n            <slot name=\"reveal\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(17);
	var bind_boolean_1 = __webpack_require__(9);
	var CheckboxField = (function () {
	    function CheckboxField() {}
	    CheckboxField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    Object.defineProperty(CheckboxField.prototype, "group", {
	        get: function get() {
	            return this.$parent.$data.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CheckboxField.prototype, "resolvedName", {
	        get: function get() {
	            return this.name || this.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CheckboxField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Boolean,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(40)
	    })], CheckboxField);
	    return CheckboxField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-checkbox input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-model=\"value\"\r\n           :id=\"id\"\r\n           :name=\"resolvedName\"\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           type=\"checkbox\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var CheckboxGroup = (function () {
	    function CheckboxGroup() {}
	    CheckboxGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true
	            }
	        },
	        template: __webpack_require__(42)
	    })], CheckboxGroup);
	    return CheckboxGroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Chip = (function () {
	    function Chip() {}
	    Chip = __decorate([vue_class_component_1["default"]({
	        props: {
	            closeable: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            closed: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: __webpack_require__(44)
	    })], Chip);
	    return Chip;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Chip;
	//# sourceMappingURL=index.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"!closed\" class=\"chip md-chip\" transition=\"chip\">\r\n    <slot></slot>\r\n    <i v-if=\"closeable\"\r\n       @click=\"closed = true\" class=\"material-icons\">close</i>\r\n</div>";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var CircularPreloader = (function () {
	    function CircularPreloader() {}
	    CircularPreloader = __decorate([vue_class_component_1["default"]({
	        props: {
	            size: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            color: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            flashing: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(46)
	    })], CircularPreloader);
	    return CircularPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CircularPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"preloader-wrapper active\" :class=\"size\">\r\n    <div v-if=\"!flashing\" class=\"spinner-layer\" :class=\"'spinner-' + color + '-only'\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- flashing -->\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-blue\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-red\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-yellow\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-green\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Collapsible = (function () {
	    function Collapsible() {}
	    Collapsible.prototype.ready = function () {
	        var _this = this;
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.forEach(function (id) {
	                    return _this.$broadcast('collapsible::open', id, _this.expendable);
	                });
	            } else {
	                this.$broadcast('collapsible::open', this.opened, this.expendable);
	            }
	        }
	    };
	    Collapsible.prototype.open = function (id) {
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.push(id);
	            } else {
	                this.opened = id;
	            }
	        }
	        // propagate event to children
	        this.$broadcast('collapsible::open', id, this.expendable);
	        return true;
	    };
	    Collapsible.prototype.close = function (id) {
	        if (typeof this.opened != "undefined") {
	            if (this.expendable) {
	                this.opened.$remove(id);
	            } else {
	                this.opened = '';
	            }
	        }
	        // propagate event to children
	        this.$broadcast('collapsible::close', id);
	        return true;
	    };
	    Collapsible.prototype.openedChanged = function (value) {
	        var _this = this;
	        if (this.expendable) {
	            var ids = this.$children.filter(function (component) {
	                return component.$options.name == 'CollapsibleItem';
	            }).map(function (item) {
	                return item.id;
	            });
	            // close
	            ids.filter(function (val) {
	                return value.indexOf(val) < 0;
	            }).forEach(function (id) {
	                return _this.$broadcast('collapsible::close', id);
	            });
	            // open
	            this.opened = value;
	            this.opened.forEach(function (id) {
	                return _this.$broadcast('collapsible::open', id, _this.expendable);
	            });
	        } else {
	            this.$broadcast('collapsible::open', value, this.expendable);
	        }
	    };
	    Collapsible = __decorate([vue_class_component_1["default"]({
	        props: {
	            opened: {
	                required: false
	            },
	            popout: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            expendable: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        watch: {
	            expendable: function expendable() {
	                console.log('Error: can not change expandable');
	            },
	            opened: {
	                deep: true,
	                handler: function handler(newValue, oldValue) {
	                    this.openedChanged(newValue, oldValue);
	                }
	            }
	        },
	        events: {
	            'collapsible::open': function collapsibleOpen(id) {
	                return this.open(id);
	            },
	            'collapsible::close': function collapsibleClose(id) {
	                return this.close(id);
	            }
	        },
	        template: __webpack_require__(48)
	    })], Collapsible);
	    return Collapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"collapsible\" :class=\"{popout: popout}\">\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var events_1 = __webpack_require__(16);
	var Velocity = __webpack_require__(20);
	var CollapsibleItem = (function () {
	    function CollapsibleItem() {}
	    CollapsibleItem.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    CollapsibleItem.prototype.compiled = function () {
	        this.active = this.expanded;
	    };
	    Object.defineProperty(CollapsibleItem.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CollapsibleItem.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return {
	                    display: 'block'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.openThis = function (immediately) {
	        var _this = this;
	        if (immediately === void 0) {
	            immediately = false;
	        }
	        if (!this.active) {
	            this.active = true;
	            if (immediately) {
	                this.$els.body.style.height = '';
	            } else {
	                this.$nextTick(function () {
	                    Velocity(_this.$els.body, 'slideDown', _this._slideConfig);
	                });
	            }
	        }
	    };
	    Object.defineProperty(CollapsibleItem.prototype, "_slideConfig", {
	        get: function get() {
	            var _this = this;
	            return {
	                duration: 350,
	                easing: "easeOutQuart",
	                queue: false,
	                complete: function complete() {
	                    _this.$els.body.style.height = '';
	                }
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.open = function (id, expendable) {
	        if (id === null || typeof id == "undefined") {
	            this.openThis(true); // bulk open
	        } else {
	                if (id == this.id) {
	                    this.openThis();
	                } else {
	                    if (!expendable) {
	                        this.closeThis();
	                    }
	                }
	            }
	    };
	    CollapsibleItem.prototype.closeThis = function (immediately) {
	        var _this = this;
	        if (immediately === void 0) {
	            immediately = false;
	        }
	        if (this.active) {
	            this.active = false;
	            if (immediately) {
	                this.$els.body.style.height = '';
	            } else {
	                this.$nextTick(function () {
	                    _this.$els.body.style.display = 'block';
	                    Velocity(_this.$els.body, 'slideUp', _this._slideConfig);
	                });
	            }
	        }
	    };
	    CollapsibleItem.prototype.close = function (id) {
	        if (id === null || typeof id == "undefined") {
	            this.closeThis(true); // bulk close
	        } else {
	                if (id == this.id) {
	                    this.closeThis();
	                }
	            }
	    };
	    CollapsibleItem.prototype.toggle = function () {
	        if (this.active) {
	            this.$dispatch('collapsible::close', this.id);
	        } else {
	            this.$dispatch('collapsible::open', this.id);
	        }
	    };
	    CollapsibleItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            name: {
	                type: String,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            expanded: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        mixins: [events_1["default"]],
	        events: {
	            'collapsible::open': function collapsibleOpen(id, expendable) {
	                this.open(id, expendable);
	            },
	            'collapsible::close': function collapsibleClose(id) {
	                this.close(id);
	            }
	        },
	        template: __webpack_require__(50)
	    })], CollapsibleItem);
	    return CollapsibleItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollapsibleItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"{active: active}\">\r\n    <slot name=\"content\">\r\n        <div @click=\"toggle\" class=\"collapsible-header\">\r\n            <slot name=\"header\"></slot>\r\n        </div>\r\n        <div v-el:body class=\"collapsible-body\" :style=\"computedStyle\">\r\n            <slot name=\"body\"></slot>\r\n        </div>\r\n    </slot>\r\n</li>\r\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Collection = (function () {
	    function Collection() {}
	    Object.defineProperty(Collection.prototype, "headerSlot", {
	        get: function get() {
	            return 'header' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collection = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(52)
	    })], Collection);
	    return Collection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var CollectionList = (function () {
	    function CollectionList() {}
	    Object.defineProperty(CollectionList.prototype, "headerSlot", {
	        get: function get() {
	            return 'header' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionList = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(54)
	    })], CollectionList);
	    return CollectionList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var CollectionItem = (function () {
	    function CollectionItem() {}
	    Object.defineProperty(CollectionItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            return 'secondary-content' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(56)
	    })], CollectionItem);
	    return CollectionItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<a class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</a>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var CollectionListItem = (function () {
	    function CollectionListItem() {}
	    Object.defineProperty(CollectionListItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            return 'secondary-content' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionListItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(58)
	    })], CollectionListItem);
	    return CollectionListItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionListItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<li class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</li>";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var dropdown_list_1 = __webpack_require__(60);
	var dropdown_item_1 = __webpack_require__(61);
	var click_away_1 = __webpack_require__(11);
	var Dropdown = (function () {
	    function Dropdown() {}
	    Dropdown.prototype.open = function (e) {
	        this.$broadcast('dropdown-list::open', e);
	    };
	    Dropdown.prototype.close = function () {
	        this.$broadcast('dropdown-list::close');
	    };
	    Dropdown = __decorate([vue_class_component_1["default"]({
	        props: {
	            title: {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            value: {
	                type: String,
	                required: false,
	                'default': ''
	            }
	        },
	        directives: {
	            onClickAway: click_away_1["default"]
	        },
	        components: {
	            mdButton: button_1["default"],
	            mdDropdownList: dropdown_list_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        events: {
	            'dropdown-list::close': function dropdownListClose() {
	                // emitted by item -> propagated do list
	                this.$broadcast('dropdown-list::close');
	                this.$dispatch('dropdown::close');
	            },
	            'dropdown-item::selected': function dropdownItemSelected(id) {
	                this.value = id;
	                return true;
	            },
	            'dropdown::open': function dropdownOpen(e) {
	                this.$broadcast('dropdown-list::open', e);
	            }
	        },
	        template: __webpack_require__(65)
	    })], Dropdown);
	    return Dropdown;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdown;
	//# sourceMappingURL=index.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var dropdown_item_1 = __webpack_require__(61);
	var utils_1 = __webpack_require__(63);
	var DropdownList = (function () {
	    function DropdownList() {}
	    DropdownList.prototype.data = function () {
	        return {
	            active: false,
	            style: {}
	        };
	    };
	    DropdownList.prototype.toggle = function (e) {
	        (!this.active ? this.open : this.hide)(e);
	    };
	    DropdownList.prototype.open = function (e) {
	        if (!this.active) {
	            this.style = this.computeStyle(e.currentTarget);
	            this.active = true;
	        }
	    };
	    DropdownList.prototype.close = function () {
	        this.hide();
	    };
	    DropdownList.prototype.hide = function () {
	        if (this.active) {
	            this.style = {};
	            this.active = false;
	        }
	    };
	    DropdownList.prototype.computeStyle = function (element) {
	        var offset = utils_1["default"].getOffset(element);
	        var width = element.offsetWidth || 100;
	        var top = offset.top || 0;
	        var left = offset.left || 0;
	        return {
	            width: width + 'px',
	            position: 'absolute',
	            top: top + 'px',
	            left: left + 'px',
	            opacity: 1,
	            display: 'block'
	        };
	    };
	    DropdownList = __decorate([vue_class_component_1["default"]({
	        components: {
	            mbButton: button_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        events: {
	            "dropdown-list::close": function dropdownListClose() {
	                this.hide();
	            },
	            "dropdown-list::open": function dropdownListOpen(e) {
	                this.open(e);
	            }
	        },
	        template: __webpack_require__(64)
	    })], DropdownList);
	    return DropdownList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var DropdownItem = (function () {
	    function DropdownItem() {}
	    DropdownItem.prototype.select = function () {
	        if (this.closing) {
	            this.$dispatch('dropdown-list::close');
	        }
	        this.$dispatch('dropdown-item::selected', this.id);
	    };
	    Object.defineProperty(DropdownItem.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DropdownItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            closing: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(62)
	    })], DropdownItem);
	    return DropdownItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"select\">\r\n    <a href=\"javascript:void(0)\">\r\n        <slot></slot>\r\n    </a>\r\n</li>";

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	var Utils = (function () {
	    function Utils() {}
	    Utils.merge = function (objA, objB) {
	        var result = {};
	        Utils.addAll(result, objA);
	        Utils.addAll(result, objB);
	        return result;
	    };
	    ;
	    Utils.addAll = function (base, add) {
	        for (var key in add) {
	            base[key] = add[key];
	        }
	        return base;
	    };
	    Utils.getOffset = function (element) {
	        var top = 0,
	            left = 0;
	        do {
	            top += element.offsetTop || 0;
	            left += element.offsetLeft || 0;
	            element = element.offsetParent;
	        } while (element);
	        return {
	            top: top,
	            left: left
	        };
	    };
	    Utils.generatePagination = function (vm) {
	        var pager = [];
	        // generate window
	        var currentPage = vm.currentPage;
	        pager.push(currentPage);
	        var skip = 1;
	        while (pager.length < vm.displayPages && pager.length < vm.pages) {
	            var page = currentPage + skip;
	            if (page >= 0 && page < vm.pages) {
	                pager.push(page);
	            }
	            skip = skip > 0 ? skip * -1 : skip * -1 + 1;
	        }
	        pager = pager.sort(function (n1, n2) {
	            return n1 - n2;
	        });
	        return pager;
	    };
	    return Utils;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Utils;
	//# sourceMappingURL=index.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"dropdown-content\"\r\n    :class=\"{active: active}\" :style=\"style\">\r\n    <slot></slot>\r\n</ul>\r\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div v-on-click-away=\"close\">\r\n    <md-dropdown-list>\r\n        <slot></slot>\r\n    </md-dropdown-list>\r\n\r\n    <span @click=\"open\">\r\n        <slot name=\"button\">\r\n            <md-button href=\"javascript:void(0)\"\r\n                 :class=\"{active: active}\"\r\n                 class=\"dropdown-button\">\r\n                {{title}}\r\n                <i class=\"mdi-navigation-arrow-drop-down right\"></i>\r\n            </md-button>\r\n        </slot>\r\n    </span>\r\n</div>\r\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var EventWrapper = (function () {
	    function EventWrapper() {}
	    EventWrapper.prototype.ready = function () {
	        var self = this;
	        this.events.forEach(function (event) {
	            self.$on(event, function () {
	                var args = [event].concat(Array.prototype.slice.call(arguments));
	                self.$broadcast.apply(self, args);
	            });
	        });
	    };
	    EventWrapper = __decorate([vue_class_component_1["default"]({
	        props: {
	            events: {
	                type: Array,
	                required: true
	            }
	        },
	        template: __webpack_require__(67)
	    })], EventWrapper);
	    return EventWrapper;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = EventWrapper;
	//# sourceMappingURL=index.js.map

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<slot></slot>";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var icon_1 = __webpack_require__(26);
	var Velocity = __webpack_require__(20);
	var Fab = (function () {
	    function Fab() {}
	    Fab.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Fab.prototype.ready = function () {
	        if (this.event == 'hover') {
	            this.$els.fab.addEventListener('mouseenter', this.open);
	            this.$els.fab.addEventListener('mouseleave', this.close);
	        } else {
	            this.$els.fab.addEventListener(this.event, this.toggle);
	        }
	    };
	    Fab.prototype.toggle = function () {
	        if (!this.active) {
	            this.open();
	        } else {
	            this.close();
	        }
	    };
	    Fab.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(this.$el.querySelectorAll('ul .btn-floating'));
	            Velocity(items, { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 0 });
	            var time = 0;
	            items.reverse().forEach(function (item) {
	                Velocity(item, { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0' }, { duration: 80, delay: time });
	                time += 40;
	            });
	        }
	    };
	    Fab.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(this.$el.querySelectorAll('ul .btn-floating'));
	            Velocity(items, "stop", true);
	            Velocity(items, { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px' }, { duration: 80 });
	        }
	    };
	    Fab = __decorate([vue_class_component_1["default"]({
	        props: {
	            horizontal: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            event: {
	                type: String,
	                required: false,
	                'default': 'hover'
	            }
	        },
	        components: {
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(69)
	    })], Fab);
	    return Fab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Fab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div v-el:fab class=\"md-fab fixed-action-btn\" :class=\"{horizontal: horizontal}\">\r\n    <slot name=\"button\">\r\n        <md-button floating large class=\"red\">\r\n            <slot name=\"icon\">\r\n                <md-icon class=\"large\">\r\n                    <slot name=\"icon-name\">\r\n                        menu\r\n                    </slot>\r\n                </md-icon>\r\n            </slot>\r\n        </md-button>\r\n    </slot>\r\n    <ul :style=\"{visibility: active ? 'visible' : 'hidden'}\">\r\n        <slot></slot>\r\n    </ul>\r\n</div>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(17);
	var bind_boolean_1 = __webpack_require__(9);
	var FileInputField = (function () {
	    function FileInputField() {}
	    FileInputField.prototype.selectFile = function (e) {
	        this.value = Array.prototype.slice.call(e.target.files).map(function (f) {
	            return f.name;
	        }).join(', ');
	    };
	    FileInputField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            name: {
	                type: String,
	                required: true
	            },
	            placeholder: {
	                type: String,
	                required: false,
	                'default': ''
	            },
	            multiple: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(71)
	    })], FileInputField);
	    return FileInputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FileInputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-field input-field\">\r\n    <div class=\"btn\">\r\n        <slot>\r\n            <span>File</span>\r\n        </slot>\r\n        <input @change=\"selectFile\" :name=\"name\"\r\n               v-bind-boolean:multiple=\"multiple\" type=\"file\">\r\n    </div>\r\n    <div class=\"file-path-wrapper\">\r\n        <input v-model=\"value\"\r\n               :placeholder=\"placeholder\"\r\n               class=\"file-path field\" type=\"text\">\r\n    </div>\r\n</div>";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(17);
	var InputField = (function () {
	    function InputField() {}
	    InputField.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Object.defineProperty(InputField.prototype, "labelClasses", {
	        get: function get() {
	            return {
	                active: this.placeholder || this.active || this.value,
	                disabled: this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputField.prototype, "validationClass", {
	        get: function get() {
	            return {
	                invalid: this.errorMsg && this.valid == false,
	                valid: this.successMsg && this.valid == true
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InputField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    InputField.prototype.activateField = function () {
	        this.active = true;
	    };
	    InputField.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    InputField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            placeholder: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            type: {
	                type: String,
	                required: false,
	                'default': 'text',
	                twoWay: false
	            },
	            lazy: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            number: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            debounce: {
	                type: Number,
	                required: false,
	                'default': 0,
	                twoWay: false
	            },
	            errorMsg: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            successMsg: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            valid: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(73)
	    })], InputField);
	    return InputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-if=\"disabled\"\r\n           v-model=\"value\"\r\n           :placeholder=\"placeholder\" :id=\"id\"\r\n           :type=\"type\"\r\n           :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n           disabled=\"disabled\"/>\r\n    <input v-else\r\n           v-model=\"value\"\r\n           :placeholder=\"placeholder\" :id=\"id\"\r\n           :type=\"type\"\r\n           :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n           @focus=\"activateField\"\r\n           @blur=\"deactivateField\"\r\n           class=\"validate\"\r\n           :class=\"validationClass\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\" :class=\"labelClasses\"\r\n           :data-error=\"errorMsg\" :data-success=\"successMsg\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Optgroup = (function () {
	    function Optgroup() {}
	    Optgroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            label: {
	                type: String,
	                required: false,
	                'default': false
	            }
	        },
	        template: __webpack_require__(75)
	    })], Optgroup);
	    return Optgroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Optgroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<li class=\"optgroup\">\r\n    <span>\r\n        {{label}}\r\n    </span>\r\n</li>\r\n<slot></slot>";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var bind_boolean_1 = __webpack_require__(9);
	var input_1 = __webpack_require__(17);
	var SelectOption = (function () {
	    function SelectOption() {}
	    SelectOption.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Object.defineProperty(SelectOption.prototype, "multiple", {
	        get: function get() {
	            return this.$parent.multiple;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectOption.prototype, "computedClasses", {
	        get: function get() {
	            return {
	                disabled: this.disabled,
	                active: this.active && !this.disabled,
	                selected: this.active && !this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectOption.prototype.toggle = function () {
	        if (!this.active) {
	            this.select();
	        } else {
	            this.unselect();
	        }
	    };
	    SelectOption.prototype.select = function () {
	        if (!this.active && !this.disabled) {
	            this.active = true;
	            this.$dispatch('select::select', this.value);
	        }
	    };
	    SelectOption.prototype.unselect = function () {
	        if (this.active && this.multiple) {
	            this.active = false;
	            this.$dispatch('select::unselect', this.value, this);
	        }
	    };
	    SelectOption.prototype.optionSelect = function (value) {
	        if (this.multiple) {
	            if (!this.active && this.value == value) {
	                this.active = true;
	            }
	        } else {
	            if (this.value == value) {
	                this.active = true;
	            } else {
	                this.active = false;
	            }
	        }
	    };
	    SelectOption.prototype.optionUnselect = function (value) {
	        if (this.multiple) {
	            if (this.active && this.value == value) {
	                this.active = false;
	            }
	        } else {
	            if (this.value == value) {
	                this.active = false;
	            }
	        }
	    };
	    SelectOption = __decorate([vue_class_component_1["default"]({
	        props: {
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            value: {
	                type: String,
	                required: true
	            }
	        },
	        events: {
	            'option::select': function optionSelect(value) {
	                this.optionSelect(value);
	            },
	            'option::unselect': function optionUnselect(value) {
	                this.optionUnselect(value);
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(77)
	    })], SelectOption);
	    return SelectOption;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectOption;
	//# sourceMappingURL=index.js.map

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"toggle\" :class=\"computedClasses\">\r\n    <span>\r\n        <input v-show=\"multiple\" v-model=\"active\"\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               type=\"checkbox\">\r\n        <label v-if=\"multiple\"></label>\r\n        <slot></slot>\r\n    </span>\r\n</li>";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var bind_boolean_1 = __webpack_require__(9);
	var bind_raw_1 = __webpack_require__(10);
	var input_1 = __webpack_require__(17);
	var Radio = (function () {
	    function Radio() {}
	    Object.defineProperty(Radio.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "group", {
	        get: function get() {
	            return this.$parent.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Radio.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    Radio = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            radioValue: {
	                required: true
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"],
	            bindRaw: bind_raw_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(79)
	    })], Radio);
	    return Radio;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radio;
	//# sourceMappingURL=index.js.map

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<span class=\"md-radio\">\r\n    <input v-model=\"value\"\r\n           :value=\"radioValue\"\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           v-bind-boolean:checked=\"checked\"\r\n           :id=\"id\" :name=\"group\"\r\n           type=\"radio\"/>\r\n    <label v-if=\"hasSlot()\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</span>";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var RadioGroup = (function () {
	    function RadioGroup() {}
	    RadioGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true
	            }
	        },
	        template: __webpack_require__(81)
	    })], RadioGroup);
	    return RadioGroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RadioGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var dropdown_list_1 = __webpack_require__(60);
	var input_1 = __webpack_require__(17);
	var click_away_1 = __webpack_require__(11);
	var bind_boolean_1 = __webpack_require__(9);
	var Vue = __webpack_require__(1);
	var SelectField = (function () {
	    function SelectField() {}
	    SelectField.prototype.data = function () {
	        return {
	            active: false,
	            options: {}
	        };
	    };
	    SelectField.prototype.compiled = function () {
	        var options = this.$getAllChildren().filter(function (c) {
	            return 'SelectOption' == c.$options.name;
	        });
	        for (var i = 0; i < options.length; i++) {
	            var option = options[i];
	            var opt = this.createOption(option);
	            Vue.set(this.options, opt.value, opt);
	        }
	    };
	    SelectField.prototype.ready = function () {
	        this.refreshDropdownOptions();
	    };
	    SelectField.prototype.createOption = function (option) {
	        var content = option._slotContents ? option._slotContents["default"] : '';
	        var value = option.$data.value;
	        var disabled = option.$data.disabled;
	        return {
	            content: content.textContent,
	            value: value,
	            disabled: disabled
	        };
	    };
	    Object.defineProperty(SelectField.prototype, "multiple", {
	        get: function get() {
	            return Array.isArray(this.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContent", {
	        get: function get() {
	            return Array.isArray(this.value) ? this.valueContentMultiple : this.valueContentSingle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentSingle", {
	        get: function get() {
	            return this.options[this.value] ? this.options[this.value].content : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentMultiple", {
	        get: function get() {
	            var _this = this;
	            if (this.value.length) {
	                return this.value.map(function (value) {
	                    return _this.options[value] ? _this.options[value].content : '';
	                }).join(', ');
	            } else {
	                return this.options[this.defaultSelect] ? this.options[this.defaultSelect].content : '';
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectField.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    SelectField.prototype.refreshDropdownOptions = function () {
	        var _this = this;
	        var options = Array.prototype.slice.call(this.field.options);
	        options.forEach(function (o) {
	            if (o.selected) {
	                _this.$broadcast('option::select', o.value);
	            } else if (_this.multiple) {
	                _this.$broadcast('option::unselect', o.value);
	            }
	        });
	    };
	    SelectField.prototype.open = function (e) {
	        if (!this.active) {
	            this.active = true;
	            this.$broadcast('dropdown-list::open', e);
	        }
	    };
	    SelectField.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.$broadcast('dropdown-list::close');
	        }
	    };
	    SelectField = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                required: false,
	                'default': null
	            }
	        },
	        events: {
	            'select::select': function selectSelect(value) {
	                if (Array.isArray(this.value)) {
	                    this.value.push(value);
	                } else {
	                    this.value = value;
	                    this.close();
	                }
	                this.$broadcast('option::select', value);
	                return true;
	            },
	            'select::unselect': function selectUnselect(value) {
	                if (Array.isArray(this.value)) {
	                    this.value.$remove(value);
	                } else {
	                    this.value = value;
	                }
	                this.$broadcast('option::unselect', value);
	                return true;
	            }
	        },
	        watch: {
	            value: function value() {
	                this.$nextTick(this.refreshDropdownOptions);
	            }
	        },
	        components: {
	            mdDropdownList: dropdown_list_1["default"]
	        },
	        directives: {
	            clickAway: click_away_1["default"],
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(83)
	    })], SelectField);
	    return SelectField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-select input-field\" v-click-away=\"close\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <div class=\"select-wrapper\">\r\n        <span class=\"caret\">▼</span>\r\n        <input @click=\"open\" readonly=\"readonly\" :value=\"valueContent\"\r\n               type=\"text\" class=\"select-dropdown\">\r\n\r\n        <md-dropdown-list :active=\"active\" class=\"select-dropdown\">\r\n            <slot></slot>\r\n        </md-dropdown-list>\r\n\r\n        <select v-el:field\r\n                v-model=\"value\"\r\n                v-bind-boolean:multiple=\"multiple\"\r\n                :placeholder=\"placeholder\" :id=\"id\"\r\n                :type=\"type\">\r\n            <option v-for=\"opt in options\" :value=\"opt.value\" v-bind-boolean:disabled=\"opt.disabled\">{{opt.content}}</option>\r\n        </select>\r\n    </div>\r\n    <label v-if=\"hasSlot('label')\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot name=\"label\"></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(17);
	var TextArea = (function () {
	    function TextArea() {}
	    TextArea.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    TextArea.prototype.ready = function () {
	        this.chars = this.value ? this.value.length : 0;
	    };
	    Object.defineProperty(TextArea.prototype, "labelClasses", {
	        get: function get() {
	            return {
	                active: this.active || this.value,
	                disabled: this.disabled
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextArea.prototype, "lines", {
	        get: function get() {
	            return this.value ? this.value.split('\n').length : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextArea.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextArea.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    TextArea.prototype.resize = function (e) {
	        var chars = e.target.value ? e.target.value.length : 0;
	        var styles = window.getComputedStyle(this.field);
	        var paddingVertical = parseInt(styles.getPropertyValue('padding-bottom')) + parseInt(styles.getPropertyValue('padding-top'));
	        if (chars < this.chars) {
	            this.field.style.height = 'auto';
	        }
	        this.field.style.height = this.field.scrollHeight - paddingVertical + 'px';
	        // Velocity(this.field, {height: this.field.scrollHeight - paddingVertical}, {
	        //     duration: 10
	        // });
	        this.chars = chars;
	    };
	    TextArea.prototype.delayedResize = function (e) {
	        var _this = this;
	        window.setTimeout(function () {
	            _this.resize(e);
	        }, 0);
	    };
	    TextArea.prototype.activateField = function () {
	        this.active = true;
	    };
	    TextArea.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    TextArea = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            autoresize: {
	                type: Boolean,
	                required: false,
	                'default': true,
	                twoWay: false
	            },
	            lazy: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            number: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            },
	            debounce: {
	                "type": Number,
	                "required": false,
	                "default": 0,
	                "twoWay": false
	            }
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(85)
	    })], TextArea);
	    return TextArea;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = TextArea;
	//# sourceMappingURL=index.js.map

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-textarea input-field\">\r\n    <i v-if=\"hasSlot('icon-name')\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <textarea v-if=\"disabled\"\r\n              v-el:field\r\n              v-model=\"value\"\r\n              :id=\"id\" class=\r\n              :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n              disabled=\"disabled\">\r\n    </textarea>\r\n    <textarea v-else\r\n              v-el:field\r\n              v-model=\"value\"\r\n              :id=\"id\"\r\n              :lazy=\"lazy\" :number=\"number\" :debounce=\"debounce\"\r\n              @focus=\"activateField\"\r\n              @blur=\"deactivateField\"\r\n              @keyup=\"resize\"\r\n              class=\"materialize-textarea\">\r\n    </textarea>\r\n    <label v-if=\"hasSlot()\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var materialbox_1 = __webpack_require__(87);
	var lean_overlay_1 = __webpack_require__(88);
	var ESC = 27;
	var Image = (function () {
	    function Image() {}
	    Image.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Image.prototype.compiled = function () {
	        this.$els.img.setAttribute('src', this.src);
	    };
	    Image.prototype.ready = function () {
	        var _this = this;
	        var img = this.$els.img;
	        var placeholder = this.$els.placeholder;
	        this.materialBox = new materialbox_1["default"](img, placeholder);
	        // Return on ESC
	        window.addEventListener('keyup', function (e) {
	            if (e.keyCode === ESC) {
	                _this.close();
	            }
	        });
	        window.addEventListener("scroll", function () {
	            _this.close();
	        });
	    };
	    Image.prototype.toggle = function () {
	        if (this.active) {
	            this.close();
	        } else {
	            this.maximialize();
	        }
	    };
	    Image.prototype.maximialize = function () {
	        if (!this.active) {
	            this.active = true;
	            this.originalSizes = this.getSizes();
	            this.materialBox.maximalize(this.originalSizes);
	        }
	    };
	    Image.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.materialBox.close(this.originalSizes);
	        }
	    };
	    Image.prototype.getSizes = function () {
	        var el = this.$els.img;
	        return {
	            width: el.offsetWidth,
	            height: el.offsetHeight,
	            left: el.offsetLeft,
	            top: el.offsetTop
	        };
	    };
	    Image = __decorate([vue_class_component_1["default"]({
	        props: {
	            src: {
	                type: String,
	                required: true,
	                twoWay: false
	            },
	            caption: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            height: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            },
	            width: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        template: __webpack_require__(90)
	    })], Image);
	    return Image;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Image;
	//# sourceMappingURL=index.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Velocity = __webpack_require__(20);
	var inDuration = 275;
	var outDuration = 200;
	var MaterialBox = (function () {
	    function MaterialBox(img, placeholder) {
	        this.overlayActive = false;
	        this.img = img;
	        this.placeholder = placeholder;
	    }
	    MaterialBox.prototype.maximalize = function (sizes) {
	        var originalWidth = sizes.width;
	        var originalHeight = sizes.height;
	        var ancestorsChanged;
	        var ancestor;
	        var windowWidth = window.innerWidth;
	        var windowHeight = window.innerHeight;
	        // Set states
	        this.overlayActive = true;
	        // Set positioning for placeholder
	        this.placeholder.style.width = this.placeholder.offsetWidth + 'px';
	        this.placeholder.style.height = this.placeholder.offsetHeight + 'px';
	        this.placeholder.style.position = 'relative';
	        this.placeholder.style.top = 0 + 'px';
	        this.placeholder.style.left = 0 + 'px';
	        // Find ancestor with overflow: hidden; and remove it
	        ancestorsChanged = undefined;
	        ancestor = this.placeholder.parentElement;
	        var count = 0;
	        while (ancestor !== null && ancestor !== document) {
	            var curr = ancestor;
	            if (curr.style.overflow === 'hidden') {
	                curr.style.overflow = 'visible';
	                if (ancestorsChanged === undefined) {
	                    ancestorsChanged = curr;
	                } else {
	                    ancestorsChanged = ancestorsChanged.add(curr);
	                }
	            }
	            ancestor = ancestor.parentElement;
	        }
	        // Set css on origin
	        this.img.style.position = 'absolute';
	        this.img.style.zIndex = '1003';
	        // Resize Image
	        var ratio = 0;
	        var widthPercent = originalWidth / windowWidth;
	        var heightPercent = originalHeight / windowHeight;
	        var newWidth = 0;
	        var newHeight = 0;
	        if (widthPercent > heightPercent) {
	            ratio = originalHeight / originalWidth;
	            newWidth = windowWidth * 0.9;
	            newHeight = windowWidth * 0.9 * ratio;
	        } else {
	            ratio = originalWidth / originalHeight;
	            newWidth = windowHeight * 0.9 * ratio;
	            newHeight = windowHeight * 0.9;
	        }
	        // Animate image + set z-index
	        if (this.img.classList.contains('responsive-img')) {
	            Velocity(this.img, { 'max-width': newWidth, 'width': originalWidth }, { duration: 0, queue: false,
	                complete: function complete() {
	                    this.img.style.left = 0 + 'px';
	                    this.img.style.top = 0 + 'px';
	                    Velocity(this.img, {
	                        height: newHeight,
	                        width: newWidth,
	                        left: window.scrollX + windowWidth / 2 - this.placeholder.offsetLeft - newWidth / 2,
	                        top: window.scrollY + windowHeight / 2 - this.placeholder.offsetTop - newHeight / 2
	                    }, {
	                        duration: inDuration,
	                        queue: false,
	                        easing: 'easeOutQuad'
	                    });
	                } // End Complete
	            }); // End Velocity
	        } else {
	                this.img.style.left = 0 + 'px';
	                this.img.style.top = 0 + 'px';
	                Velocity(this.img, {
	                    height: newHeight,
	                    width: newWidth,
	                    left: window.scrollX + windowWidth / 2 - this.placeholder.offsetLeft - newWidth / 2,
	                    top: window.scrollY + windowHeight / 2 - this.placeholder.offsetTop - newHeight / 2
	                }, {
	                    duration: inDuration,
	                    queue: false,
	                    easing: 'easeOutQuad'
	                }); // End Velocity
	            }
	        // Return on scroll
	        window.addEventListener('scroll', function () {
	            if (this.overlayActive) {
	                this.returnToOriginal();
	            }
	        });
	    };
	    ;
	    MaterialBox.prototype.close = function (sizes) {
	        this.returnToOriginal(sizes);
	    };
	    MaterialBox.prototype.returnToOriginal = function (sizes) {
	        var windowWidth = window.innerWidth;
	        var windowHeight = window.innerHeight;
	        var originalWidth = sizes.width;
	        var originalHeight = sizes.height;
	        Velocity(this.img, "stop", true);
	        // Resize Image
	        Velocity(this.img, {
	            width: originalWidth,
	            height: originalHeight,
	            left: 0,
	            top: 0
	        }, {
	            duration: outDuration,
	            queue: false, easing: 'easeOutQuad'
	        });
	        this.img.style.height = '';
	        this.img.style.top = '';
	        this.img.style.left = '';
	        this.img.style.width = '';
	        this.img.style.maxWidth = '';
	        this.img.style.position = '';
	        this.img.style.zIndex = '';
	    };
	    ;
	    return MaterialBox;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = MaterialBox;
	//# sourceMappingURL=index.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var LeanOverlay = (function () {
	    function LeanOverlay() {}
	    LeanOverlay = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(89)
	    })], LeanOverlay);
	    return LeanOverlay;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LeanOverlay;
	//# sourceMappingURL=index.js.map

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<div class=\"lean-overlay\" style=\"z-index: 1002; display: block; opacity: 0.5;\"></div>";

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-image\">\r\n    <div v-el:placeholder class=\"material-placeholder\">\r\n        <img @click=\"toggle\" :height=\"height\" :width=\"width\"\r\n             v-el:img\r\n             class=\"materialboxed\"\r\n             :class=\"{active: active}\">\r\n    </div>\r\n\r\n    <md-lean-overlay v-if=\"active\" @click=\"toggle\" transition=\"modal-overlay\"></md-lean-overlay>\r\n    <div v-if=\"active && caption\" transition=\"fade\" class=\"caption-wrapper\">\r\n        <div class=\"materialbox-caption\" style=\"display: block\">\r\n            {{caption}}\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var LinearPreloader = (function () {
	    function LinearPreloader() {}
	    Object.defineProperty(LinearPreloader.prototype, "computedStyle", {
	        get: function get() {
	            if (this.value != null) {
	                return {
	                    width: this.value + '%'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LinearPreloader = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Number,
	                required: false,
	                'default': null,
	                twoWay: false
	            }
	        },
	        template: __webpack_require__(92)
	    })], LinearPreloader);
	    return LinearPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress\">\r\n    <div :class=\"{determinate: value != null, indeterminate: value == null}\" :style=\"computedStyle\"></div>\r\n</div>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var lean_overlay_1 = __webpack_require__(88);
	var ESC = 27;
	var Modal = (function () {
	    function Modal() {}
	    Modal.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Modal.prototype.ready = function () {
	        var _this = this;
	        window.document.addEventListener('keydown', function (evt) {
	            evt = evt || window.event;
	            if (evt.keyCode == ESC) {
	                _this.close();
	            }
	        });
	    };
	    Object.defineProperty(Modal.prototype, "computedStyle", {
	        get: function get() {
	            if (this.active) {
	                return this.bottom ? {
	                    'z-index': 1003,
	                    'display': 'block',
	                    'opacity': 1,
	                    'bottom': '0px'
	                } : {
	                    'z-index': 1003,
	                    'display': 'block',
	                    'top': '10%'
	                };
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "computedClasses", {
	        get: function get() {
	            var classes = '';
	            if (this["class"]) {
	                classes += this["class"];
	            }
	            if (this.bottom) {
	                classes += ' ';
	                classes += 'bottom-sheet';
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "transition", {
	        get: function get() {
	            return this.bottom ? 'modal-bottom' : 'modal';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Modal.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	        }
	    };
	    Modal.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.result = null;
	        }
	    };
	    Modal = __decorate([vue_class_component_1["default"]({
	        props: {
	            id: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            result: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            'class': {
	                type: String,
	                required: false,
	                'default': '',
	                twoWay: false
	            },
	            bottom: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        events: {
	            'modal::open': function modalOpen(id) {
	                if (this.id === null || typeof this.id === "undefined") {
	                    this.open();
	                } else if (this.id == id) {
	                    this.open();
	                }
	            },
	            'modal::close': function modalClose(result, id) {
	                if (this.id === null || typeof this.id === "undefined" || this.id == id) {
	                    this.close();
	                    this.result = result;
	                    return true;
	                }
	            }
	        },
	        watch: {
	            active: function active(_active) {
	                if (_active) {
	                    window.document.body.style.overflow = 'hidden';
	                } else {
	                    window.document.body.style.overflow = 'visible';
	                }
	            }
	        },
	        template: __webpack_require__(94)
	    })], Modal);
	    return Modal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"active\" :id=\"id\" :transition=\"transition\"\r\n     :style=\"computedStyle\" class=\"modal\" :class=\"computedClasses\">\r\n    <slot name=\"content\">\r\n        <div class=\"modal-content\">\r\n            <slot></slot>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <slot name=\"footer\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>\r\n\r\n<md-lean-overlay v-if=\"active\" transition=\"modal-overlay\"\r\n                 @click=\"close\">\r\n</md-lean-overlay>";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var NavItem = (function () {
	    function NavItem() {}
	    NavItem.prototype.ready = function () {
	        if (this.active == true) {
	            this.$dispatch('nav-item::activated', this.id);
	        }
	    };
	    Object.defineProperty(NavItem.prototype, "id", {
	        get: function get() {
	            if (this.name != null) {
	                return this.name;
	            }
	            return this._uid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NavItem.prototype, "content", {
	        get: function get() {
	            return this._slotContents ? this._slotContents["default"] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NavItem.prototype, "showActive", {
	        get: function get() {
	            return this.$parent.showActive;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NavItem.prototype.clicked = function () {
	        this.$dispatch('nav-item::activated', this.id);
	    };
	    NavItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            name: {
	                type: String,
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            href: {
	                type: String,
	                required: false,
	                'default': 'javascript:void(0)',
	                twoWay: false
	            },
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'nav-item::activated': function navItemActivated(id) {
	                if (this.showActive == true) {
	                    this.active = this.id == id;
	                }
	            }
	        },
	        template: __webpack_require__(96)
	    })], NavItem);
	    return NavItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = NavItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<li @click=\"clicked\" :class=\"{active: active}\">\r\n    <slot name=\"content\">\r\n        <a :href=\"href\">\r\n            <slot></slot>\r\n        </a>\r\n    </slot>\r\n</li>";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var icon_1 = __webpack_require__(26);
	var wave_effect_1 = __webpack_require__(13);
	var utils_1 = __webpack_require__(63);
	var Pagination = (function () {
	    function Pagination() {}
	    Object.defineProperty(Pagination.prototype, "pages", {
	        get: function get() {
	            return Math.max(Math.ceil(this.totalRecords / this.pageSize), 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "pager", {
	        get: function get() {
	            return utils_1["default"].generatePagination(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pagination.prototype.getSelected = function () {
	        return {
	            currentPage: this.currentPage,
	            pageSize: this.pageSize,
	            from: this.currentPage * this.pageSize,
	            to: (this.currentPage + 1) * this.pageSize,
	            size: this.pageSize
	        };
	    };
	    Pagination.prototype.getClasses = function (n) {
	        var classes = {};
	        if (this.itemClass instanceof Array) {
	            this.itemClass.forEach(function (value, index, array) {
	                classes[value] = true;
	            });
	        } else if (this.itemClass instanceof Object) {
	            for (var key in this.itemClass) {
	                classes[key] = this.itemClass[key];
	            }
	        } else {
	            classes[this.itemClass] = true;
	        }
	        classes['active'] = n == this.currentPage;
	        return classes;
	    };
	    Pagination.prototype.setCurrentPage = function (n) {
	        this.currentPage = n;
	    };
	    Pagination.prototype.previousPage = function () {
	        if (this.currentPage > 0) {
	            this.currentPage--;
	        }
	    };
	    Pagination.prototype.nextPage = function () {
	        if (this.currentPage < this.pages - 1) {
	            this.currentPage++;
	        }
	    };
	    Pagination = __decorate([vue_class_component_1["default"]({
	        props: {
	            currentPage: {
	                type: Number,
	                'default': 0
	            },
	            pageSize: {
	                type: Number,
	                required: true,
	                twoWay: false
	            },
	            totalRecords: {
	                type: Number,
	                required: true,
	                twoWay: false
	            },
	            displayPages: {
	                type: Number,
	                required: false,
	                'default': 5,
	                twoWay: false
	            },
	            itemClass: {
	                required: false,
	                'default': null,
	                twoWay: false
	            },
	            firstLast: {
	                type: Boolean,
	                required: false,
	                'default': false,
	                twoWay: false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"]
	        },
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        watch: {
	            currentPage: function currentPage() {
	                this.$dispatch('pagination::selected', this.pagesWindow);
	            },
	            pages: {
	                handler: function handler() {
	                    if (this.currentPage >= this.pages) {
	                        this.currentPage = this.pages - 1;
	                    }
	                }
	            }
	        },
	        template: __webpack_require__(98)
	    })], Pagination);
	    return Pagination;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Pagination;
	//# sourceMappingURL=index.js.map

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"pagination\">\r\n    <li :class=\"{disabled: currentPage == 0}\">\r\n        <a v-if=\"firstLast\" @click.prevent=\"currentPage = 0\" href=\"#\"><i class=\"material-icons\">chevron_left</i></a>\r\n        <a @click.prevent=\"previousPage\" href=\"#\"><i class=\"material-icons\">chevron_left</i></a>\r\n    </li>\r\n\r\n    <li v-for=\"n in pager\"\r\n        @click.prevent=\"setCurrentPage(n)\"\r\n        :class=\"getClasses(n)\" v-wave-effect>\r\n        <a @click.prevent href=\"#\">{{n + 1}}</a>\r\n    </li>\r\n\r\n    <li :class=\"{disabled: currentPage == pages - 1}\">\r\n        <a @click.prevent=\"nextPage\" href=\"#\"><i class=\"material-icons\">chevron_right</i></a>\r\n        <a v-if=\"firstLast\" @click.prevent=\"currentPage = pages - 1\" href=\"#\"><i class=\"material-icons\">chevron_right</i></a>\r\n    </li>\r\n</ul>\r\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Vue = __webpack_require__(1);
	var Slide = (function () {
	    function Slide() {}
	    Slide.prototype.compiled = function () {
	        // todo: remove hack webpack img src loading
	        this.$els.img.setAttribute('src', this.img);
	    };
	    Slide.prototype.ready = function () {
	        this._setClasses(this.active);
	    };
	    Slide.prototype.data = function () {
	        var position = this.$parent.$children.indexOf(this);
	        return {
	            active: false,
	            position: position,
	            classes: {}
	        };
	    };
	    Object.defineProperty(Slide.prototype, "src", {
	        get: function get() {
	            return this.img;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Slide.prototype, "computedClasses", {
	        get: function get() {
	            return this.classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Slide.prototype.setActive = function (index) {
	        this.active = this.position == index;
	    };
	    Slide.prototype._setClasses = function (val) {
	        Vue.set(this.classes, 'active', val);
	        Vue.set(this.classes, 'fadeIn', val);
	        Vue.set(this.classes, 'fadeOut', !val);
	    };
	    Slide = __decorate([vue_class_component_1["default"]({
	        props: {
	            img: {
	                type: String,
	                required: false,
	                'default': null
	            },
	            align: {
	                type: String,
	                required: false,
	                "default": ''
	            }
	        },
	        events: {
	            'slider::activate': function sliderActivate(index) {
	                this.setActive(index);
	            }
	        },
	        watch: {
	            active: function active(val) {
	                this._setClasses(val);
	            }
	        },
	        template: __webpack_require__(100)
	    })], Slide);
	    return Slide;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slide;
	//# sourceMappingURL=index.js.map

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"computedClasses\">\r\n    <img v-el:img>\r\n    <div class=\"caption\" :class=\"align + '-align'\">\r\n        <slot></slot>\r\n    </div>\r\n</li>";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Slider = (function () {
	    function Slider() {}
	    Slider.prototype.data = function () {
	        return {
	            activeItem: 0,
	            itemsCount: 0
	        };
	    };
	    Slider.prototype.ready = function () {
	        this.$broadcast('slider::activate', this.activeItem);
	        this.interval = this.interval ? this.interval : 4000;
	        this.itemsCount = this.$children.length;
	        this.setupInterval();
	    };
	    Slider.prototype.handler = function () {
	        if (this.$children) {
	            this.activeItem = (this.activeItem + 1) % this.itemsCount;
	            this.$broadcast('slider::activate', this.activeItem);
	        }
	    };
	    Slider.prototype.setupInterval = function () {
	        this.intervalHandler = setInterval(this.handler, this.interval);
	    };
	    Slider.prototype.clearInterval = function () {
	        if (this.intervalHandler) {
	            clearInterval(this.intervalHandler);
	            this.intervalHandler = null;
	        }
	    };
	    Slider.prototype.setActive = function (index) {
	        this.$broadcast('slider::activate', index);
	        this.activeItem = index;
	        this.clearInterval();
	    };
	    Slider = __decorate([vue_class_component_1["default"]({
	        interval: {
	            type: Number,
	            "default": 4000,
	            validator: function validator(value) {
	                return value > 1000;
	            }
	        },
	        template: __webpack_require__(102)
	    })], Slider);
	    return Slider;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slider;
	//# sourceMappingURL=index.js.map

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slider\">\r\n    <ul class=\"slides\">\r\n        <slot></slot>\r\n    </ul>\r\n    <ul class=\"indicators\">\r\n        <li v-for=\"index in itemsCount\"\r\n            @click=\"setActive(index)\"\r\n            @mouseover=\"activeItem == index && clearInterval(index)\"\r\n            @mouseout=\"setupInterval(index)\"\r\n            :class=\"{active: activeItem == index}\" class=\"indicator-item\"></li>\r\n    </ul>\r\n</div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(17);
	var bind_boolean_1 = __webpack_require__(9);
	var Switch = (function () {
	    function Switch() {}
	    Switch = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
	                type: Boolean,
	                required: false,
	                'default': null
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: __webpack_require__(104)
	    })], Switch);
	    return Switch;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Switch;
	//# sourceMappingURL=index.js.map

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\r\n    <label>\r\n        <slot name=\"off\">Off</slot>\r\n        <input v-model=\"value\"\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               type=\"checkbox\">\r\n        <span class=\"lever\"></span>\r\n        <slot name=\"on\">On</slot>\r\n    </label>\r\n</div>";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Tab = (function () {
	    function Tab() {}
	    Object.defineProperty(Tab.prototype, "computedClasses", {
	        get: function get() {
	            return this.disabled ? ['disabled'] : [];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Tab.prototype, "index", {
	        get: function get() {
	            return this.$parent.$children.indexOf(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Tab.prototype, "id", {
	        get: function get() {
	            if (this.name) {
	                return this.name;
	            } else {
	                return this.index;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tab.prototype.ready = function () {
	        var hash = window.location.hash;
	        var el = this.$el;
	        var anchors = el.getElementsByTagName("A");
	        for (var i = 0; i < anchors.length; i++) {
	            var a = anchors[i];
	            if (hash == a.getAttribute("href")) {
	                this.setAsSelected();
	            }
	        }
	    };
	    Tab.prototype.setAsSelected = function () {
	        if (!this.disabled) {
	            this.$dispatch('tabs::on-select', this);
	        }
	    };
	    Tab.prototype.select = function (id) {
	        if (this.id == id) {
	            this.setAsSelected();
	        }
	    };
	    Tab = __decorate([vue_class_component_1["default"]({
	        props: {
	            disabled: {
	                type: Boolean,
	                required: false,
	                "default": false,
	                twoWay: false
	            },
	            name: {
	                type: String,
	                required: false,
	                "default": null,
	                twoWay: false
	            }
	        },
	        events: {
	            'tab::select': function tabSelect(id) {
	                this.select(id);
	            }
	        },
	        template: __webpack_require__(106)
	    })], Tab);
	    return Tab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<li @click=\"setAsSelected\" class=\"tab col\" :class=\"computedClasses\">\r\n    <slot></slot>\r\n</li>";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Velocity = __webpack_require__(20);
	var Tabs = (function () {
	    function Tabs() {}
	    Tabs.prototype.data = function () {
	        return {
	            indicator: {
	                left: '0',
	                right: '0'
	            }
	        };
	    };
	    Tabs.prototype.select = function (tab) {
	        this.active = tab.id;
	        var target = tab.$el;
	        var parent = target.parentElement;
	        this.moveIndicator(this.indicator.left, target.offsetLeft, this.indicator.right, parent.offsetWidth - target.offsetLeft - target.offsetWidth);
	        return true;
	    };
	    Tabs.prototype.moveIndicator = function (left, newLeft, right, newRight) {
	        var indicator = this.$els.indicator;
	        // Update indicator
	        if (newLeft - left >= 0) {
	            Velocity(indicator, { right: newRight }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { left: newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        } else {
	            Velocity(indicator, { left: newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { right: newRight }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        }
	    };
	    Tabs = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                required: false,
	                'default': null
	            }
	        },
	        watch: {
	            active: function active(value) {
	                this.$broadcast('tab::select', value);
	            }
	        },
	        events: {
	            'tabs::on-select': function tabsOnSelect(tab) {
	                this.select(tab);
	            }
	        },
	        template: __webpack_require__(108)
	    })], Tabs);
	    return Tabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-tabs\">\r\n    <ul class=\"tabs\">\r\n        <slot></slot>\r\n        <div v-el:indicator class=\"indicator\"></div>\r\n    </ul>\r\n\r\n    <slot name=\"contents\"></slot>\r\n</div>\r\n";

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home-page\" v-cloak>\r\n    <div class=\"gh-banner\">\r\n        <iframe allowtransparency=\"true\" scrolling=\"no\" frameborder=\"0\" src=\"https://buttons.github.io/buttons.html#href%3Dhttps%3A%2F%2Fgithub.com%2Fappcomponents%2Fmaterial-components%26text%3DStar%26data.count.api%3D%26data.count.href%3Dhttps%3A%2F%2Fgithub.com%2Fappcomponents%2Fmaterial-components%26data.count.aria.label%3D%26data.style%3Dmega%26data.icon%3Docticon-star%26aria.label%3DStar%20appcomponents%2Fmaterial-components%20on%20GitHub\" style=\"width: 69px; height: 28px; border: none;\"></iframe>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col s10 m10 l10 offset-s1 offset-m1 offset-l1\">\r\n            <h2>Links</h2>\r\n            <div class=\"collection z-depth-1\">\r\n                <a class=\"collection-item\" href=\"https://github.com/appcomponents/material-components\">GitHub</a>\r\n                <a class=\"collection-item\" href=\"https://www.npmjs.com/package/vue-material-components\">npm</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col s10 m10 l10 offset-s1 offset-m1 offset-l1\">\r\n            <md-collapsible>\r\n                <md-collapsible-item>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>style</md-icon>\r\n                        CSS\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Color\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/color.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Grid\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/grid.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Helpers\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/helpers.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Media\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/media-css.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Sass\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/sass.html\"></>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Shadow\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/shadow.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Table\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/table.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Typography\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/typography.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n\r\n            <md-collapsible>\r\n                <md-collapsible-item expanded>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>code</md-icon>\r\n                        Components\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Badges\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/badges/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/badges.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Buttons\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/buttons/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/buttons.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Breadcrumbs\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/breadcrumbs/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/breadcrumbs.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Cards\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/cards/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/cards.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Chips\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/chips/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/chips.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Collections\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/collections/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/collections.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Footer\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/footer.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Forms\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/forms/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/forms.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Icons\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/icons.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Navbar\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/navbars/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/navbar.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Pagination\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/pagination/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/pagination.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Preloader\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/preloaders/showcase'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/preloader.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n            <md-collapsible>\r\n                <md-collapsible-item expanded>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>settings_ethernet</md-icon>\r\n                        Javascript\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Collapsible\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/collapsibles/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/collapsible.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Dialogs\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/dialogs/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/dialogs.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Dropdown\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/dropdowns/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/dropdown.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Media\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/media/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/media.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Modals\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/modals/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/modals.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Parallax\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/parallax.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Pushpin\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/pushpin.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                ScrollFire\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/scrollfire.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Scrollspy\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/scrollspy.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                SideNav\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/side-nav.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Tabs\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/tabs/showcase'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/tabs.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Transitions\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/transitions.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Waves\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/waves'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/waves.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var AboutPage = (function () {
	    function AboutPage() {}
	    AboutPage = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(115)
	    })], AboutPage);
	    return AboutPage;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = AboutPage;
	//# sourceMappingURL=index.js.map

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <div class=\"row\">\r\n        <h2 class=\"center\">Materialize Components</h2>\r\n        <p>\r\n            Materialize Components implements components with Vue.js + Materialize.css. There is no jQuery, only Vue as Javascript library.\r\n        </p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>flash_on</md-icon>\r\n                <p class=\"promo-caption\">Simple &<br>powerful</p>\r\n                <p class=\"light center\">\r\n                    Material Components provide quick and easy templating and creating of Material Design interface.\r\n                    They use minimum dependencies. <strong>No jQuery</strong>, only Vue and Velocity for advance animations.\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>web</md-icon>\r\n                <p class=\"promo-caption\">Components</p>\r\n                <p class=\"light center\">\r\n                    Component is primary way how to modularize your UI with Vue. There are many components witch implements Material design with materialize.css.\r\n                    All components have out of box dynamic behavior.\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>devices</md-icon>\r\n                <p class=\"promo-caption\">Material Design</p>\r\n                <p class=\"light center\">\r\n                    Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology.\r\n                    Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <h4>Materialize.css</h4>\r\n        <p>\r\n            Materialize.css is CSS framework implements Material Design designed in Google. It uses CSS (SASS) and jQuery.\r\n            For more info visit <a href=\"http://materializecss.com/\">materializecss.com</a>.\r\n        </p>\r\n        <h4>Vue.js</h4>\r\n        <p>\r\n            Vue.js (pronounced /vjuː/, like view) is Javascript library for building web user interfaces.\r\n            It provides simple and effective solution how to build your UI components by <em>data binding</em>.\r\n            For more info visit <a href=\"http://vuejs.org/\">vuejs.org</a>.\r\n        </p>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <h2>Change log</h2>\r\n        <ul class=\"changelog\">\r\n            <li>\r\n                Vue is now external dependency and must be linked before MaterialComponents\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var GetStartedPage = (function () {
	    function GetStartedPage() {}
	    GetStartedPage.prototype.data = function () {
	        return {
	            snippets: {
	                link: __webpack_require__(117),
	                bundle: __webpack_require__(118)
	            }
	        };
	    };
	    GetStartedPage.prototype.showInConsole = function () {
	        var w = window;
	        var vmc = window['VueMaterialComponentsDocs'];
	        w.console.log({
	            components: vmc.components,
	            directives: vmc.directives,
	            mixins: vmc.mixins,
	            registerComponents: vmc.registerComponents,
	            registerDirectives: vmc.registerDirectives,
	            registerAll: vmc.registerAll,
	            Vue: vmc.Vue
	        });
	    };
	    GetStartedPage = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(119)
	    })], GetStartedPage);
	    return GetStartedPage;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = GetStartedPage;
	//# sourceMappingURL=index.js.map

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"path/to/Vue 1.0.18+\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"dist/vue-material-components.min.js\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"actionscript\">\r\n    <span class=\"hljs-comment\">// is available as global after link</span>\r\n    <span class=\"hljs-keyword\">var</span> VueMaterialComponents;\r\n\r\n    <span class=\"hljs-comment\">// map of all components</span>\r\n    VueMaterialComponents.components;\r\n    <span class=\"hljs-comment\">// map of all directives</span>\r\n    VueMaterialComponents.directives;\r\n    <span class=\"hljs-comment\">// array of all mixins</span>\r\n    VueMaterialComponents.mixins;\r\n\r\n    <span class=\"hljs-comment\">// registration callbacks to Vue</span>\r\n    VueMaterialComponents.registerComponents();\r\n    VueMaterialComponents.registerDirectives();\r\n    VueMaterialComponents.registerAll();\r\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>";

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home-page\" v-cloak>\r\n    <div class=\"row\">\r\n        <h2>Download</h2>\r\n        <p class=\"col\">\r\n            <md-button href=\"https://github.com/appcomponents/material-components/tree/master/dist\" target=\"_blank\"\r\n                style=\"background-color: white; color: black\"\r\n                class=\"waves-effect\">\r\n                GitHub\r\n            </md-button>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h2>Link</h2>\r\n        <p class=\"col\">\r\n            <doc-snippet>{{{snippets.link}}}</doc-snippet>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h2>Use</h2>\r\n        <p class=\"col\">\r\n            Use global variable <strong>VueMaterialComponents</strong>\r\n            <br/>\r\n            <md-button @click.prevent=\"showInConsole\" target=\"_blank\"\r\n                       type=\"flat\"\r\n                       style=\"margin: 10px 0\"\r\n                       class=\"waves-effect\">\r\n                Show in console\r\n            </md-button>\r\n            <br/>\r\n            <doc-snippet>{{{snippets.bundle}}}</doc-snippet>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <h2>Style</h2>\r\n        <p>\r\n            <md-button href=\"http://materializecss.com/getting-started.html\" target=\"_blank\"\r\n                       style=\"background-color: #ee6e73; color: white\"\r\n                       class=\"waves-effect waves-light\">\r\n                materializecss\r\n            </md-button>\r\n        </p>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var collections_1 = __webpack_require__(121);
	var dropdowns_1 = __webpack_require__(123);
	var navbars_1 = __webpack_require__(125);
	var snippet_1 = __webpack_require__(127);
	var Badges = (function () {
	    function Badges() {}
	    Badges.prototype.data = function () {
	        return {
	            alert: 'new',
	            api: __webpack_require__(129),
	            snippets: {
	                collections: __webpack_require__(130),
	                dropdowns: __webpack_require__(131),
	                navbars: __webpack_require__(132)
	            },
	            src: {
	                script: __webpack_require__(133),
	                template: __webpack_require__(134),
	                style: __webpack_require__(135)
	            }
	        };
	    };
	    Badges = __decorate([vue_class_component_1["default"]({
	        components: {
	            docCollections: collections_1["default"],
	            docDropdowns: dropdowns_1["default"],
	            docNavbars: navbars_1["default"],
	            docSnippet: snippet_1["default"]
	        },
	        template: __webpack_require__(136)
	    })], Badges);
	    return Badges;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badges;
	//# sourceMappingURL=index.js.map

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var Collections = (function () {
	    function Collections() {}
	    Collections.prototype.data = function () {
	        return {
	            alert: 'new'
	        };
	    };
	    Collections = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(122)
	    })], Collections);
	    return Collections;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collections;
	//# sourceMappingURL=index.js.map

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <md-input :value.sync=\"alert\" class=\"col s6\">\r\n        Alert\r\n    </md-input>\r\n</div>\r\n\r\n<md-collection>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 1<md-badge>1</md-badge></md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 2<md-badge :alert=\"alert\">4</md-badge></md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 3</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 4<md-badge>14</md-badge></md-collection-item>\r\n</md-collection>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var dropdown_1 = __webpack_require__(59);
	var dropdown_item_1 = __webpack_require__(61);
	var badge_1 = __webpack_require__(23);
	var Dropdowns = (function () {
	    function Dropdowns() {}
	    Dropdowns.prototype.closeDropdown = function () {
	        this.$broadcast('dropdown-list::close');
	    };
	    Dropdowns = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"],
	            mdBadge: badge_1["default"]
	        },
	        template: __webpack_require__(124)
	    })], Dropdowns);
	    return Dropdowns;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdowns;
	//# sourceMappingURL=index.js.map

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<md-dropdown title=\"Dropdown\">\r\n    <md-dropdown-item :closing=\"false\">\r\n        one <md-badge>1</md-badge>\r\n    </md-dropdown-item>\r\n    <md-dropdown-item :closing=\"false\">\r\n        two <md-badge alert=\"new\">1</md-badge>\r\n    </md-dropdown-item>\r\n    <md-dropdown-item :closing=\"false\">\r\n        three\r\n    </md-dropdown-item>\r\n    <md-dropdown-item closing>\r\n        <md-badge alert=\"close\"></md-badge>\r\n    </md-dropdown-item>\r\n</md-dropdown>";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var Navbars = (function () {
	    function Navbars() {}
	    Navbars.prototype.data = function () {
	        return {};
	    };
	    Navbars = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        },
	        template: __webpack_require__(126)
	    })], Navbars);
	    return Navbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass <md-badge alert=\"new\">4</md-badge></md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Snippet = (function () {
	    function Snippet() {}
	    Snippet = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(128)
	    })], Snippet);
	    return Snippet;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Snippet;
	//# sourceMappingURL=index.js.map

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <pre><slot></slot></pre>\r\n</div>";

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-badge",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "alert",
				"type": "String",
				"required": false,
				"description": "String of badge represents new event, string is used as label",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Item 1<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Item 2<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">:alert</span>=<span class=\"hljs-value\">\"alert\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Item 4<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Dropdown\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        one <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        two <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        three\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown</span>&gt;</span>";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        sass\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        sass <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        sass\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n";

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        alert: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./badge.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Badge {\r\n}";

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"badge\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{new: !!alert}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"alert\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>{{alert}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>";

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">span</span><span class=\"hljs-class\">.badge</span><span class=\"hljs-class\">.new</span><span class=\"hljs-pseudo\">:after</span> {\r\n  <span class=\"hljs-attribute\">content</span><span class=\"hljs-value\">: <span class=\"hljs-string\">\"\"</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-tag\">nav</span> <span class=\"hljs-tag\">span</span><span class=\"hljs-class\">.badge</span><span class=\"hljs-class\">.new</span> <span class=\"hljs-class\">.new</span> {\r\n  <span class=\"hljs-attribute\">margin-right</span><span class=\"hljs-value\">: <span class=\"hljs-number\">8px</span>;</span>\r\n}";

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/badges\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Collections</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-collections></doc-collections>\r\n\r\n                <doc-snippet>{{{snippets.collections}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Badges in Dropdown</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-dropdowns></doc-dropdowns>\r\n\r\n                <doc-snippet>{{{snippets.dropdowns}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Badges in Navbar</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbars></doc-navbars>\r\n\r\n                <doc-snippet>{{{snippets.navbars}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var default_1 = __webpack_require__(138);
	var navbar_1 = __webpack_require__(140);
	var Breadcrumbs = (function () {
	    function Breadcrumbs() {}
	    Breadcrumbs.prototype.data = function () {
	        return {
	            api: __webpack_require__(142),
	            snippets: {
	                breadcrumbs: __webpack_require__(143),
	                navbarBreadcrumbs: __webpack_require__(144)
	            },
	            src: {
	                script: __webpack_require__(145),
	                template: __webpack_require__(146)
	            }
	        };
	    };
	    Breadcrumbs = __decorate([vue_class_component_1["default"]({
	        components: {
	            docBreadcrumbs: default_1["default"],
	            docNavbarBreadcrumbs: navbar_1["default"]
	        },
	        template: __webpack_require__(147)
	    })], Breadcrumbs);
	    return Breadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Breadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var VueModule = __webpack_require__(1);
	var vue = VueModule;
	var DefaultBreadcrumbs = (function () {
	    function DefaultBreadcrumbs() {}
	    DefaultBreadcrumbs.prototype.data = function () {
	        return {
	            label: 'Fourth',
	            url: '#!/breadcrumbs/showcase',
	            breadcrumbs: {
	                First: '#!/breadcrumbs/showcase',
	                Second: '#!/breadcrumbs/showcase',
	                Third: '#!/breadcrumbs/showcase'
	            }
	        };
	    };
	    DefaultBreadcrumbs.prototype.push = function () {
	        if (this.label && this.url) {
	            vue.set(this.breadcrumbs, this.label, this.url);
	            this.label = '';
	            this.url = '';
	        }
	    };
	    DefaultBreadcrumbs.prototype.pop = function () {
	        var keys = Object.keys(this.breadcrumbs);
	        if (keys.length) {
	            var last = keys[keys.length - 1];
	            vue["delete"](this.breadcrumbs, last);
	        }
	    };
	    DefaultBreadcrumbs = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(139)
	    })], DefaultBreadcrumbs);
	    return DefaultBreadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultBreadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <h4>Demo:</h4>\r\n    <div class=\"col s3\">\r\n        <md-input :value.sync=\"label\">\r\n            Label\r\n        </md-input>\r\n    </div>\r\n    <div class=\"col s3\">\r\n        <md-input :value.sync=\"url\">\r\n            Url\r\n        </md-input>\r\n    </div>\r\n    <div class=\"col s3\" style=\"margin-top: 20px;\">\r\n        <md-button @click=\"push\">\r\n            Push\r\n        </md-button>\r\n    </div>\r\n    <div class=\"col s3\" style=\"margin-top: 20px;\">\r\n        <md-button @click=\"pop\">\r\n            POP\r\n        </md-button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <pre>{{breadcrumbs | json}}</pre>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<md-breadcrumbs :list=\"breadcrumbs\">\r\n</md-breadcrumbs>";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var navbar_1 = __webpack_require__(30);
	var NavbarBreadcrumbs = (function () {
	    function NavbarBreadcrumbs() {}
	    NavbarBreadcrumbs = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(141),
	        components: {
	            mdNavbar: navbar_1["default"]
	        }
	    })], NavbarBreadcrumbs);
	    return NavbarBreadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = NavbarBreadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<md-navbar>\r\n    <div class=\"col s12\" slot=\"content\">\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">First</a>\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">Second</a>\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">Third</a>\r\n    </div>\r\n</md-navbar>";

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-breadcrumbs",
		"title": "Breadcrumbs",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "list",
				"type": "Object",
				"required": false,
				"description": "Pass Object where key is label and value is url",
				"twoWay": false,
				"default": {}
			}
		],
		"slots": [],
		"events": [],
		"uses": {
			"navbar": "#!/navbars"
		}
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-breadcrumbs</span> <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"{First: '#!', Second: '#!', Third: '#!'}\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-breadcrumbs</span>&gt;</span>";

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s12\"</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdNavbar from <span class=\"hljs-string\">'../navbar'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        list: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Object</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: {}\r\n        }\r\n    },\r\n    components: {\r\n        mdNavbar\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./breadcrumbs.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Breadcrumbs {\r\n}";

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-breadcrumbs\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"(label, url) in list\"</span> <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"url\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>\r\n            {{label}}\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n\r\n    <doc-tabs base-path=\"/breadcrumbs\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Breadcrumbs</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-breadcrumbs></doc-breadcrumbs>\r\n\r\n                <doc-snippet>{{{snippets.breadcrumbs}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Using navbar</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-breadcrumbs></doc-navbar-breadcrumbs>\r\n\r\n                <doc-snippet>{{{snippets.navbarBreadcrumbs}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var raised_1 = __webpack_require__(149);
	var floating_1 = __webpack_require__(151);
	var fab_1 = __webpack_require__(153);
	var fab_horizontal_1 = __webpack_require__(155);
	var fab_click_1 = __webpack_require__(157);
	var Butons = (function () {
	    function Butons() {}
	    Butons.prototype.data = function () {
	        return {
	            api: __webpack_require__(159),
	            snippets: {
	                raisedButtons: __webpack_require__(160),
	                floatingButtons: __webpack_require__(161),
	                fabButtons: __webpack_require__(162),
	                fabHorizontalButtons: __webpack_require__(163),
	                fabClickButtons: __webpack_require__(164)
	            },
	            src: {
	                script: __webpack_require__(165),
	                template: __webpack_require__(166)
	            }
	        };
	    };
	    Butons = __decorate([vue_class_component_1["default"]({
	        components: {
	            docRaisedButtons: raised_1["default"],
	            docFloatingButtons: floating_1["default"],
	            docFabButtons: fab_1["default"],
	            docFabHorizontalButtons: fab_horizontal_1["default"],
	            docFabClickButtons: fab_click_1["default"]
	        },
	        template: __webpack_require__(167)
	    })], Butons);
	    return Butons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Butons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var RaisedButtons = (function () {
	    function RaisedButtons() {}
	    RaisedButtons.prototype.data = function () {
	        return {
	            icon: '',
	            iconAlignRight: false,
	            large: false,
	            disabled: false
	        };
	    };
	    RaisedButtons = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(150)
	    })], RaisedButtons);
	    return RaisedButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RaisedButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <div class=\"col s3\">\r\n        <md-select :value.sync=\"icon\" class=\"col\">\r\n            <md-option value=\"cloud\"><md-icon>cloud</md-icon></md-option>\r\n            <md-option value=\"code\"><md-icon>code</md-icon></md-option>\r\n            <md-option value=\"delete\"><md-icon>delete</md-icon></md-option>\r\n            <md-option value=\"grade\"><md-icon>grade</md-icon></md-option>\r\n\r\n            <span slot=\"label\">Icon</span>\r\n        </md-select>\r\n    </div>\r\n    <div class=\"col s3\">\r\n        <md-checkbox :value.sync=\"iconAlignRight\" class=\"filled-in\">Icon right</md-checkbox>\r\n    </div>\r\n    <div class=\"col s3\">\r\n        <md-checkbox :value.sync=\"large\" class=\"filled-in\">Large</md-checkbox>\r\n    </div>\r\n    <div class=\"col s3\">\r\n        <md-checkbox :value.sync=\"disabled\" class=\"filled-in\">Disabled</md-checkbox>\r\n    </div>\r\n</div>\r\n\r\n<md-button :icon=\"icon\" :icon-align-right=\"iconAlignRight\" :large=\"large\" :disabled=\"disabled\"\r\n           class=\"waves-effect waves-light\">Stuff</md-button>\r\n<md-button class=\"waves-effect waves-light\"><md-icon left>cloud</md-icon>button</md-button>\r\n<md-button class=\"waves-effect waves-light\"><md-icon right>cloud</md-icon>button</md-button>\r\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var icon_1 = __webpack_require__(26);
	var FloatingButtons = (function () {
	    function FloatingButtons() {}
	    FloatingButtons = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(152)
	    })], FloatingButtons);
	    return FloatingButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FloatingButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<md-button class=\"waves-effect waves-light red\" floating large><md-icon>add</md-icon></md-button>\r\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var fab_1 = __webpack_require__(68);
	var button_1 = __webpack_require__(25);
	var icon_1 = __webpack_require__(26);
	var FabButtons = (function () {
	    function FabButtons() {}
	    FabButtons = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(154)
	    })], FabButtons);
	    return FabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab style=\"position: absolute\">\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var fab_1 = __webpack_require__(68);
	var button_1 = __webpack_require__(25);
	var icon_1 = __webpack_require__(26);
	var FabButtons = (function () {
	    function FabButtons() {}
	    FabButtons = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(156)
	    })], FabButtons);
	    return FabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab horizontal style=\"position: absolute\">\r\n        <template slot=\"icon-name\">edit</template>\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>\r\n";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var fab_1 = __webpack_require__(68);
	var button_1 = __webpack_require__(25);
	var icon_1 = __webpack_require__(26);
	var ClickFabButtons = (function () {
	    function ClickFabButtons() {}
	    ClickFabButtons = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(158)
	    })], ClickFabButtons);
	    return ClickFabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ClickFabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab horizontal event=\"click\" style=\"position: absolute\">\r\n        <template slot=\"icon-name\">add</template>\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>\r\n";

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-button",
		"title": "Button",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "type",
				"type": "String",
				"description": "Button type css class",
				"twoWay": false,
				"required": false,
				"default": null
			},
			{
				"name": "icon",
				"type": "String",
				"description": "Material icon name",
				"twoWay": false,
				"required": false,
				"default": null
			},
			{
				"name": "icon-align-right",
				"type": "Boolean",
				"description": "It switches icon to right side",
				"twoWay": false,
				"required": false,
				"default": false
			},
			{
				"name": "large",
				"type": "Boolean",
				"description": "Adds large button class if true",
				"twoWay": false,
				"required": false,
				"default": false
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"description": "Disables button (only css)",
				"twoWay": false,
				"required": false,
				"default": false
			},
			{
				"name": "floating",
				"type": "Boolean",
				"description": "Adds floating css class if true",
				"twoWay": false,
				"required": false,
				"default": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Button content (label)"
			}
		],
		"events": [],
		"uses": {
			"Wave effect": "#!/directives"
		}
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span>\r\n    Stuff\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">left</span>&gt;</span>cloud<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>button\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>cloud<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>button\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n";

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-large waves-effect waves-light red\"</span> <span class=\"hljs-attribute\">floating</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>add<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span> <span class=\"hljs-attribute\">horizontal</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>edit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span> <span class=\"hljs-attribute\">horizontal</span> <span class=\"hljs-attribute\">event</span>=<span class=\"hljs-value\">\"click\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>add<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdIcon from <span class=\"hljs-string\">'../icon'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> waveEffect from <span class=\"hljs-string\">'../../directives/wave-effect'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        <span class=\"hljs-keyword\">type</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        icon: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        iconAlignRight: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        large: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        floating: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdIcon\r\n    },\r\n    directives: {\r\n        waveEffect\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./btn.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Button {\r\n    <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> large: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> floating: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">var</span> classes = {\r\n            <span class=\"hljs-string\">'btn-large'</span>: <span class=\"hljs-keyword\">this</span>.large,\r\n            <span class=\"hljs-string\">'disabled'</span>: <span class=\"hljs-keyword\">this</span>.disabled,\r\n            <span class=\"hljs-string\">'btn-floating'</span>: <span class=\"hljs-keyword\">this</span>.floating\r\n        };\r\n        classes[<span class=\"hljs-keyword\">this</span>.type ? <span class=\"hljs-string\">\"btn-\"</span> + <span class=\"hljs-keyword\">this</span>.type : <span class=\"hljs-string\">\"btn\"</span>] = <span class=\"hljs-literal\">true</span>;\r\n        <span class=\"hljs-keyword\">return</span> classes;\r\n    }\r\n}";

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span> <span class=\"hljs-attribute\">v-wave-effect</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-button\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"icon\"</span> <span class=\"hljs-attribute\">:right</span>=<span class=\"hljs-value\">\"iconAlignRight\"</span> <span class=\"hljs-attribute\">:left</span>=<span class=\"hljs-value\">\"!iconAlignRight\"</span>&gt;</span>\r\n        {{icon}}\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>";

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/buttons\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Raised</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-raised-buttons></doc-raised-buttons>\r\n\r\n                <doc-snippet>{{{snippets.raisedButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Floating</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-floating-buttons></doc-floating-buttons>\r\n\r\n                <doc-snippet>{{{snippets.floatingButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">FAB</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-buttons></doc-fab-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">FAB horizontal</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-horizontal-buttons></doc-fab-horizontal-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabHorizontalButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Only click</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-click-buttons></doc-fab-click-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabClickButtons}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var default_1 = __webpack_require__(169);
	var image_1 = __webpack_require__(171);
	var reveal_1 = __webpack_require__(173);
	var snippet_1 = __webpack_require__(127);
	var Cards = (function () {
	    function Cards() {}
	    Cards.prototype.data = function () {
	        return {
	            api: __webpack_require__(175),
	            snippets: {
	                defaultCard: __webpack_require__(176),
	                imageCard: __webpack_require__(177),
	                revealCard: __webpack_require__(178)
	            },
	            src: {
	                script: __webpack_require__(179),
	                template: __webpack_require__(180),
	                style: __webpack_require__(181)
	            }
	        };
	    };
	    Cards = __decorate([vue_class_component_1["default"]({
	        components: {
	            docDefaultCard: default_1["default"],
	            docImageCard: image_1["default"],
	            docRevealCard: reveal_1["default"],
	            docSnippet: snippet_1["default"]
	        },
	        template: __webpack_require__(182)
	    })], Cards);
	    return Cards;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Cards;
	//# sourceMappingURL=index.js.map

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var DefaultCard = (function () {
	    function DefaultCard() {}
	    DefaultCard = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(170)
	    })], DefaultCard);
	    return DefaultCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m6\">\r\n        <md-card class=\"blue-grey darken-1\" content-class=\"white-text\">\r\n            <span slot=\"title\">\r\n                Card Title\r\n            </span>\r\n\r\n            <p>I am a very simple card. I am good at containing small bits of information.\r\n                    I am convenient because I require little markup to use effectively.</p>\r\n\r\n            <div slot=\"actions\">\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var ImageCard = (function () {
	    function ImageCard() {}
	    ImageCard.prototype.data = function () {
	        return {
	            size: 'medium',
	            titleInImage: true
	        };
	    };
	    ImageCard = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(172)
	    })], ImageCard);
	    return ImageCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ImageCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <div class=\"col s8\">\r\n        <md-radio-group group=\"size\">\r\n            <md-radio :value.sync=\"size\" radio-value=\"small\" class=\"with-gap\">\r\n                Small\r\n            </md-radio>\r\n            <md-radio :value.sync=\"size\" radio-value=\"medium\" class=\"with-gap\">\r\n                Medium\r\n            </md-radio>\r\n            <md-radio :value.sync=\"size\" radio-value=\"large\" class=\"with-gap\">\r\n                Large\r\n            </md-radio>\r\n        </md-radio-group>\r\n    </div>\r\n    <div class=\"col s4\">\r\n        <md-checkbox :value.sync=\"titleInImage\">\r\n            Title in image\r\n        </md-checkbox>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <md-card :small=\"size == 'small'\" :medium=\"size == 'medium'\" :large=\"size == 'large'\" :title-in-image=\"titleInImage\">\r\n            <span slot=\"title\">\r\n                Card Title\r\n            </span>\r\n            <div slot=\"image\">\r\n                <img src=\"http://materializecss.com/images/sample-1.jpg\">\r\n            </div>\r\n            <div>\r\n                <p>I am a very simple card. I am good at containing small bits of information.\r\n                    I am convenient because I require little markup to use effectively.</p>\r\n            </div>\r\n            <div slot=\"actions\">\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var card_1 = __webpack_require__(37);
	var icon_1 = __webpack_require__(26);
	var wave_effect_1 = __webpack_require__(13);
	var RevealCard = (function () {
	    function RevealCard() {}
	    RevealCard = __decorate([vue_class_component_1["default"]({
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        components: {
	            mdCard: card_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(174)
	    })], RevealCard);
	    return RevealCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RevealCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m8\">\r\n        <md-card>\r\n            <span slot=\"title\" class=\"activator\">\r\n                Card Title<md-icon right>more_vert</md-icon>\r\n            </span>\r\n            <div slot=\"image\" v-wave-effect class=\"waves-effect waves-block waves-light\">\r\n                <img class=\"activator\" src=\"http://materializecss.com/images/office.jpg\">\r\n            </div>\r\n            <p>\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </p>\r\n            <div slot=\"reveal\">\r\n                <span class=\"card-title grey-text text-darken-4\">Card Title</span>\r\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-card",
		"title": "Card",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "type",
				"type": "String",
				"description": "Button type css class",
				"twoWay": false,
				"required": false,
				"default": null
			},
			{
				"name": "content-class",
				"type": "any",
				"description": "Bind classes to content",
				"twoWay": false,
				"required": false,
				"default": null
			},
			{
				"name": "title-in-image",
				"type": "Boolean",
				"description": "Title is in image if true",
				"twoWay": false,
				"required": false,
				"default": false
			},
			{
				"name": "small",
				"type": "Boolean",
				"description": "Adds small class if true",
				"twoWay": false,
				"required": false,
				"default": false
			},
			{
				"name": "medium",
				"type": "Boolean",
				"required": false,
				"description": "Adds medium class if true",
				"twoWay": false,
				"default": false
			},
			{
				"name": "large",
				"type": "Boolean",
				"required": false,
				"description": "Adds large class if true",
				"twoWay": false,
				"default": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content part of card"
			},
			{
				"name": "card-content",
				"description": "Card whole content, it replaces all (wraps all slots)"
			},
			{
				"name": "card-image",
				"description": "Image part of card (wraps image slot)"
			},
			{
				"name": "image",
				"description": "Actual image of card"
			},
			{
				"name": "title",
				"description": "Title of card. Rendered in image or content"
			},
			{
				"name": "actions",
				"description": "Action part of card"
			},
			{
				"name": "reveal",
				"description": "Reveal part of card"
			}
		],
		"events": [],
		"uses": {}
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue-grey darken-1\"</span> <span class=\"hljs-attribute\">content-class</span>=<span class=\"hljs-value\">\"white-text\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>\r\n        Card Title\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>\r\n        Content\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"actions\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>";

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>\r\n        Card Title\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"image\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"images/sample-1.jpg\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>\r\n            Content\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"actions\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>";

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"activator\"</span>&gt;</span>\r\n        Card Title<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>more_vert<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-comment\">&lt;!-- wave effect directive --&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"image\"</span> <span class=\"hljs-attribute\">v-wave-effect</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-block waves-light\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"activator\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"images/office.jpg\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"reveal\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title grey-text text-darken-4\"</span>&gt;</span>\r\n            Card Title\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>\r\n            Here is some more information\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>";

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">var</span> Velocity = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'velocity-animate'</span>);\r\n\r\n@Component({\r\n    props: {\r\n        contentClass: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        titleInImage: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        small: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        medium: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        large: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./card.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Card {\r\n    <span class=\"hljs-keyword\">private</span> $el: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    compiled() {\r\n        <span class=\"hljs-keyword\">var</span> activators = <span class=\"hljs-keyword\">this</span>.$el.querySelectorAll(<span class=\"hljs-string\">'.activator'</span>);\r\n        <span class=\"hljs-built_in\">Array</span>.prototype.slice.call(activators).forEach((activator) =&gt; {\r\n            activator.addEventListener(<span class=\"hljs-string\">'click'</span>, <span class=\"hljs-keyword\">this</span>.open);\r\n        });\r\n\r\n        <span class=\"hljs-keyword\">var</span> revealClose = <span class=\"hljs-keyword\">this</span>.$els.revealClose;\r\n        <span class=\"hljs-keyword\">if</span> (revealClose) {\r\n            revealClose.addEventListener(<span class=\"hljs-string\">'click'</span>, <span class=\"hljs-keyword\">this</span>.close);\r\n        }\r\n    }\r\n\r\n    open() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            <span class=\"hljs-keyword\">var</span> reveal: HTMLElement = <span class=\"hljs-keyword\">this</span>.$els.reveal;\r\n            <span class=\"hljs-keyword\">if</span> (reveal) {\r\n                reveal.style.display = <span class=\"hljs-string\">'block'</span>;\r\n                Velocity(reveal, <span class=\"hljs-string\">\"stop\"</span>, <span class=\"hljs-literal\">false</span>);\r\n                Velocity(reveal, {translateY: <span class=\"hljs-string\">'-100%'</span>}, {duration: <span class=\"hljs-number\">300</span>, queue: <span class=\"hljs-literal\">false</span>, easing: <span class=\"hljs-string\">'easeInOutQuad'</span>});\r\n            }\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">var</span> reveal: HTMLElement = <span class=\"hljs-keyword\">this</span>.$els.reveal;\r\n            <span class=\"hljs-keyword\">if</span> (reveal) {\r\n                Velocity(reveal,\r\n                    {translateY: <span class=\"hljs-number\">0</span>}, {\r\n                        duration: <span class=\"hljs-number\">225</span>,\r\n                        queue: <span class=\"hljs-literal\">false</span>,\r\n                        easing: <span class=\"hljs-string\">'easeInOutQuad'</span>,\r\n                        complete: () =&gt; {\r\n                            reveal.style.display = <span class=\"hljs-string\">'none'</span>;\r\n                        }\r\n                    });\r\n            }\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> imageSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'image'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> titleSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'title'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> actionsSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'actions'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> revealSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'reveal'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"{overflow: revealSlot ? 'hidden' : 'initial'}\"</span>\r\n     <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{small: small, medium: medium, large: large}\"</span>\r\n     <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-card card\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"card-content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"card-image\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"imageSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-image\"</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"image\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"titleSlot &amp;&amp; titleInImage\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title\"</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-content\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"contentClass\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"titleSlot &amp;&amp; !titleInImage\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title\"</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"card-action\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"actionsSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-action\"</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"actions\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"revealSlot\"</span> <span class=\"hljs-attribute\">v-el:reveal</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-reveal\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-el:reveal-close</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons right close\"</span>&gt;</span>close<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"reveal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-card</span> {\r\n  <span class=\"hljs-class\">.activator</span>, <span class=\"hljs-class\">.close</span> {\r\n    <span class=\"hljs-attribute\">cursor</span><span class=\"hljs-value\">: pointer;</span>\r\n  }\r\n}";

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/cards\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Card with image</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-image-card></doc-image-card>\r\n\r\n                <doc-snippet>{{{snippets.imageCard}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Default card</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-card></doc-default-card>\r\n\r\n                <doc-snippet>{{{snippets.defaultCard}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Reveal card</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-reveal-card></doc-reveal-card>\r\n\r\n                <doc-snippet>{{{snippets.revealCard}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var default_1 = __webpack_require__(184);
	var Chips = (function () {
	    function Chips() {}
	    Chips.prototype.data = function () {
	        return {
	            api: __webpack_require__(186),
	            snippets: {
	                chip: __webpack_require__(187)
	            },
	            src: {
	                script: __webpack_require__(188),
	                template: __webpack_require__(189),
	                style: __webpack_require__(190)
	            }
	        };
	    };
	    Chips = __decorate([vue_class_component_1["default"]({
	        components: {
	            docDefaultChip: default_1["default"]
	        },
	        template: __webpack_require__(191)
	    })], Chips);
	    return Chips;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Chips;
	//# sourceMappingURL=index.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var DefaultChip = (function () {
	    function DefaultChip() {}
	    DefaultChip.prototype.data = function () {
	        return {
	            closed: false
	        };
	    };
	    DefaultChip = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(185)
	    })], DefaultChip);
	    return DefaultChip;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultChip;
	//# sourceMappingURL=index.js.map

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo valign-wrapper\">\r\n    <div class=\"col\">\r\n        <md-button @click=\"closed = false\">\r\n            Reopen\r\n        </md-button>\r\n    </div>\r\n    <div class=\"col\">\r\n        <span class=\"valigin\">\r\n            Closed: {{closed | json}}\r\n        </span>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <md-chip>\r\n        <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"Contact Person\">\r\n        Jane Doe\r\n    </md-chip>\r\n\r\n    <md-chip :closed.sync=\"closed\" closeable>\r\n        Tag\r\n    </md-chip>\r\n</div>\r\n\r\n";

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-chip",
		"title": "Chip",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "closeable",
				"type": "Boolean",
				"required": false,
				"description": "It can be closed if true",
				"twoWay": false,
				"default": false
			},
			{
				"name": "closed",
				"type": "Boolean",
				"required": false,
				"description": "State of closed",
				"twoWay": null,
				"default": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content of chip"
			}
		],
		"events": []
	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-chip</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Contact Person\"</span>&gt;</span>\r\n    Jane Doe\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-chip</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-chip</span> <span class=\"hljs-attribute\">closeable</span>&gt;</span>\r\n    Tag\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-chip</span>&gt;</span>";

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        closeable: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        closed: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./chip.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Chip {\r\n}";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"!closed\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"chip md-chip\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"chip\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"closeable\"</span>\r\n       @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"closed = true\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>close<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.chip-transition</span> {\r\n}\r\n\r\n<span class=\"hljs-class\">.chip-leave</span> {\r\n  <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.chip-leave</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.1s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.1s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut;</span>\r\n}";

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/chips\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Chips</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-chip></doc-default-chip>\r\n\r\n                <doc-snippet>{{{snippets.chip}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var defaultCollapsible_1 = __webpack_require__(193);
	var popoutCollapsible_1 = __webpack_require__(195);
	var expendableCollapsible_1 = __webpack_require__(197);
	var Collapsibles = (function () {
	    function Collapsibles() {}
	    Collapsibles.prototype.data = function () {
	        return {
	            api: [{
	                name: "Collapsible",
	                api: __webpack_require__(199)
	            }, {
	                name: "Collapsible item",
	                api: __webpack_require__(200)
	            }],
	            snippets: {
	                defaultCollapsible: __webpack_require__(201),
	                popoutCollapsible: __webpack_require__(202),
	                expendableCollapsible: __webpack_require__(203)
	            },
	            src: [{
	                name: 'Collapsible',
	                script: __webpack_require__(204),
	                template: __webpack_require__(205)
	            }, {
	                name: 'Collapsible item',
	                script: __webpack_require__(206),
	                template: __webpack_require__(207)
	            }]
	        };
	    };
	    Collapsibles = __decorate([vue_class_component_1["default"]({
	        components: {
	            docDefaultCollapsible: defaultCollapsible_1["default"],
	            docPopoutCollapsible: popoutCollapsible_1["default"],
	            docExpendableCollapsible: expendableCollapsible_1["default"]
	        },
	        template: __webpack_require__(208)
	    })], Collapsibles);
	    return Collapsibles;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collapsibles;
	//# sourceMappingURL=index.js.map

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var DefaultCollapsible = (function () {
	    function DefaultCollapsible() {}
	    DefaultCollapsible.prototype.data = function () {
	        return {
	            opened: 'one',
	            popout: false
	        };
	    };
	    DefaultCollapsible = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(194)
	    })], DefaultCollapsible);
	    return DefaultCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<div class=\"demo\">\r\n    <div class=\"row\">\r\n        <div class=\"col s\">\r\n            <md-select :value.sync=\"opened\" class=\"col\">\r\n                <span slot=\"label\">Opened</span>\r\n\r\n                <md-option value=\"\"></md-option>\r\n                <md-option value=\"one\">First</md-option>\r\n                <md-option value=\"two\">Second</md-option>\r\n                <md-option value=\"three\">Third</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        <div class=\"col s3\">\r\n            <md-checkbox :value.sync=\"popout\">\r\n                Popout\r\n            </md-checkbox>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"row\">\r\n        <pre>{{\r\n            {\r\n                opened: opened,\r\n                popout: popout,\r\n                expendable: expendable\r\n            } | json\r\n        }}</pre>\r\n    </div>-->\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <md-collapsible :opened.sync=\"opened\" :popout=\"popout\">\r\n        <md-collapsible-item name=\"one\">\r\n            <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item name=\"two\">\r\n            <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item name=\"three\">\r\n            <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n    </md-collapsible>\r\n</div>";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var collapsible_1 = __webpack_require__(47);
	var collapsible_item_1 = __webpack_require__(49);
	var icon_1 = __webpack_require__(26);
	var PopoutCollapsible = (function () {
	    function PopoutCollapsible() {}
	    PopoutCollapsible = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdIcon: icon_1["default"],
	            mdCollapsible: collapsible_1["default"],
	            mdCollapsibleItem: collapsible_item_1["default"]
	        },
	        template: __webpack_require__(196)
	    })], PopoutCollapsible);
	    return PopoutCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = PopoutCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<md-collapsible popout>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n</md-collapsible>";

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var ExpendableCollapsible = (function () {
	    function ExpendableCollapsible() {}
	    ExpendableCollapsible.prototype.data = function () {
	        return {
	            opened: ['one'],
	            popout: false
	        };
	    };
	    ExpendableCollapsible = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(198)
	    })], ExpendableCollapsible);
	    return ExpendableCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ExpendableCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<div class=\"demo\">\r\n    <div class=\"row\">\r\n        <div class=\"col s6\">\r\n            <md-select :value.sync=\"opened\" class=\"col\" multiple>\r\n                <span slot=\"label\">Opened</span>\r\n\r\n                <md-option value=\"\" disabled></md-option>\r\n                <md-option value=\"one\">First</md-option>\r\n                <md-option value=\"two\">Second</md-option>\r\n                <md-option value=\"three\">Third</md-option>\r\n            </md-select>\r\n        </div>\r\n\r\n        <div class=\"col s6\">\r\n            <md-checkbox :value.sync=\"popout\">\r\n                Popout\r\n            </md-checkbox>\r\n        </div>\r\n    </div>\r\n    {{opened | json}}\r\n    <!--<div class=\"row\">\r\n        <pre>{{\r\n            {\r\n                opened: opened,\r\n                popout: popout,\r\n                expendable: expendable\r\n            } | json\r\n        }}</pre>\r\n    </div>-->\r\n</div>\r\n<div class=\"row\">\r\n    <md-collapsible :opened.sync=\"opened\" :popout=\"popout\" expendable>\r\n        <md-collapsible-item name=\"one\">\r\n            <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item name=\"two\">\r\n            <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item name=\"three\">\r\n            <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n            <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n        </md-collapsible-item>\r\n    </md-collapsible>\r\n</div>\r\n";

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collapsible",
		"title": "Collapsible",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "opened",
				"type": "Array | String",
				"required": false,
				"description": "Holds opened item ids (name if specified or uid)",
				"twoWay": null,
				"default": "[] | \"\""
			},
			{
				"name": "popout",
				"type": "Boolean",
				"required": false,
				"description": "Switches collapsible to popout mode",
				"twoWay": false,
				"default": false
			},
			{
				"name": "expendable",
				"type": "Boolean",
				"required": false,
				"description": "Switches collapsible to expendable mode",
				"twoWay": false,
				"default": false
			}
		],
		"slots": [],
		"events": [
			{
				"name": "collapsible::open",
				"description": "Events is fire when item is opened",
				"type": "in",
				"args": [
					{
						"name": "id",
						"description": "Id of opening item (name if specified or uid)"
					}
				]
			},
			{
				"name": "collapsible::close",
				"description": "Events is fire when item is closed",
				"type": "in",
				"args": [
					{
						"name": "id",
						"description": "Id of opening item (name if specified or uid)"
					}
				]
			}
		],
		"uses": {}
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collapsible-item",
		"title": "Collapsible item",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "name",
				"type": "String",
				"required": false,
				"description": "Param is used as id",
				"twoWay": false,
				"default": null
			},
			{
				"name": "expanded",
				"type": "Boolean",
				"required": false,
				"description": "Makes item opened, param is read only once after compilation",
				"default": false,
				"twoWay": false
			}
		],
		"slots": [],
		"events": [],
		"uses": {}
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"one\"</span> <span class=\"hljs-attribute\">expanded</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"two\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"three\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span> <span class=\"hljs-attribute\">popout</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span> <span class=\"hljs-attribute\">expendable</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        opened: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n        },\r\n        popout: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        expendable: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    watch: {\r\n        expendable: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Error: can not change expandable'</span>)\r\n        },\r\n        opened: {\r\n            deep: <span class=\"hljs-literal\">true</span>,\r\n            handler: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">newValue, oldValue</span>) </span>{\r\n                <span class=\"hljs-keyword\">this</span>.openedChanged(newValue, oldValue)\r\n            }\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'collapsible::open'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.open(id);\r\n        },\r\n        <span class=\"hljs-string\">'collapsible::close'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n           <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.close(id);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collapsible.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Collapsible {\r\n    <span class=\"hljs-keyword\">private</span> $children: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $broadcast: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> expendable: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> opened: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>.opened != <span class=\"hljs-string\">\"undefined\"</span>) {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.expendable) {\r\n                <span class=\"hljs-keyword\">this</span>.opened\r\n                    .forEach((id) =&gt; <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::open'</span>, id, <span class=\"hljs-keyword\">this</span>.expendable));\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::open'</span>, <span class=\"hljs-keyword\">this</span>.opened, <span class=\"hljs-keyword\">this</span>.expendable);\r\n            }\r\n        }\r\n    }\r\n\r\n    open(id: <span class=\"hljs-built_in\">string</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>.opened != <span class=\"hljs-string\">\"undefined\"</span>) {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.expendable) {\r\n                <span class=\"hljs-keyword\">this</span>.opened.push(id);\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.opened = id;\r\n            }\r\n        }\r\n        <span class=\"hljs-comment\">// propagate event to children</span>\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::open'</span>, id, <span class=\"hljs-keyword\">this</span>.expendable);\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n    }\r\n\r\n    close(id: <span class=\"hljs-built_in\">string</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>.opened != <span class=\"hljs-string\">\"undefined\"</span>) {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.expendable) {\r\n                <span class=\"hljs-keyword\">this</span>.opened.$remove(id);\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.opened = <span class=\"hljs-string\">''</span>;\r\n            }\r\n        }\r\n        <span class=\"hljs-comment\">// propagate event to children</span>\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::close'</span>, id);\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n    }\r\n\r\n    openedChanged(value) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.expendable) {\r\n            <span class=\"hljs-keyword\">var</span> ids = <span class=\"hljs-keyword\">this</span>.$children\r\n                .filter((component) =&gt; component.$options.name == <span class=\"hljs-string\">'CollapsibleItem'</span>)\r\n                .map((item) =&gt; item.id);\r\n            <span class=\"hljs-comment\">// close</span>\r\n            ids\r\n                .filter((val) =&gt; value.indexOf(val) &lt; <span class=\"hljs-number\">0</span>)\r\n                .forEach((id) =&gt; <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::close'</span>, id));\r\n            <span class=\"hljs-comment\">// open</span>\r\n            <span class=\"hljs-keyword\">this</span>.opened = value;\r\n            <span class=\"hljs-keyword\">this</span>.opened\r\n                .forEach((id) =&gt; <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::open'</span>, id, <span class=\"hljs-keyword\">this</span>.expendable));\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'collapsible::open'</span>, value, <span class=\"hljs-keyword\">this</span>.expendable);\r\n        }\r\n    }\r\n}";

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collapsible\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{popout: popout}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> events from <span class=\"hljs-string\">'../../mixins/events'</span>;\r\n\r\n<span class=\"hljs-keyword\">var</span> Velocity = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'velocity-animate'</span>);\r\n\r\n@Component({\r\n    props: {\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        expanded: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    mixins: [\r\n        events\r\n    ],\r\n    events: {\r\n        <span class=\"hljs-string\">'collapsible::open'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id, expendable</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.open(id, expendable);\r\n        },\r\n        <span class=\"hljs-string\">'collapsible::close'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.close(id);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collapsible-item.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CollapsibleItem {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $dispatch: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $nextTick: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> _uid: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> name: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> expanded: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    compiled() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-keyword\">this</span>.expanded;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> id(): <span class=\"hljs-built_in\">any</span> {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.name) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.name;\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._uid;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedStyle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">return</span> {\r\n                display: <span class=\"hljs-string\">'block'</span>\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\r\n    }\r\n\r\n    openThis(immediately = <span class=\"hljs-literal\">false</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            <span class=\"hljs-keyword\">if</span> (immediately) {\r\n                <span class=\"hljs-keyword\">this</span>.$els.body.style.height = <span class=\"hljs-string\">''</span>;\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.$nextTick(() =&gt; {\r\n                    Velocity(<span class=\"hljs-keyword\">this</span>.$els.body, <span class=\"hljs-string\">'slideDown'</span>, <span class=\"hljs-keyword\">this</span>._slideConfig);\r\n                });\r\n            }\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> _slideConfig() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            duration: <span class=\"hljs-number\">350</span>,\r\n            easing: <span class=\"hljs-string\">\"easeOutQuart\"</span>,\r\n            queue: <span class=\"hljs-literal\">false</span>,\r\n            complete: () =&gt; {\r\n                <span class=\"hljs-keyword\">this</span>.$els.body.style.height = <span class=\"hljs-string\">''</span>;\r\n            }\r\n        }\r\n    }\r\n\r\n    open(id, expendable: <span class=\"hljs-built_in\">boolean</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (id === <span class=\"hljs-literal\">null</span> || <span class=\"hljs-keyword\">typeof</span> id == <span class=\"hljs-string\">\"undefined\"</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.openThis(<span class=\"hljs-literal\">true</span>); <span class=\"hljs-comment\">// bulk open</span>\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">if</span> (id == <span class=\"hljs-keyword\">this</span>.id) {\r\n                <span class=\"hljs-keyword\">this</span>.openThis();\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">if</span> (!expendable) {\r\n                    <span class=\"hljs-keyword\">this</span>.closeThis();\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    closeThis(immediately = <span class=\"hljs-literal\">false</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">if</span> (immediately) {\r\n                <span class=\"hljs-keyword\">this</span>.$els.body.style.height = <span class=\"hljs-string\">''</span>;\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.$nextTick(() =&gt; {\r\n                    <span class=\"hljs-keyword\">this</span>.$els.body.style.display = <span class=\"hljs-string\">'block'</span>;\r\n                    Velocity(<span class=\"hljs-keyword\">this</span>.$els.body, <span class=\"hljs-string\">'slideUp'</span>, <span class=\"hljs-keyword\">this</span>._slideConfig);\r\n                })\r\n            }\r\n        }\r\n    }\r\n\r\n    close(id) {\r\n        <span class=\"hljs-keyword\">if</span> (id === <span class=\"hljs-literal\">null</span> || <span class=\"hljs-keyword\">typeof</span> id == <span class=\"hljs-string\">\"undefined\"</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.closeThis(<span class=\"hljs-literal\">true</span>); <span class=\"hljs-comment\">// bulk close</span>\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">if</span> (id == <span class=\"hljs-keyword\">this</span>.id) {\r\n                <span class=\"hljs-keyword\">this</span>.closeThis();\r\n            }\r\n        }\r\n    }\r\n\r\n    toggle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'collapsible::close'</span>, <span class=\"hljs-keyword\">this</span>.id);\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'collapsible::open'</span>, <span class=\"hljs-keyword\">this</span>.id);\r\n        }\r\n    }\r\n}";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toggle\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collapsible-header\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-el:body</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collapsible-body\"</span> <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"computedStyle\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/collapsibles\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Accordion</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-collapsible></doc-default-collapsible>\r\n\r\n                <doc-snippet>{{{snippets.defaultCollapsible}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Expandable</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-expendable-collapsible></doc-expendable-collapsible>\r\n\r\n                <doc-snippet>{{{snippets.expendableCollapsible}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Popout</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-popout-collapsible></doc-popout-collapsible>\r\n\r\n                <doc-snippet>{{{snippets.popoutCollapsible}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var links_1 = __webpack_require__(210);
	var header_1 = __webpack_require__(212);
	var secondary_content_1 = __webpack_require__(214);
	var avatar_1 = __webpack_require__(216);
	var Badges = (function () {
	    function Badges() {}
	    Badges.prototype.data = function () {
	        return {
	            api: [{
	                'name': 'Collection',
	                'api': __webpack_require__(218)
	            }, {
	                'name': 'Collection item',
	                'api': __webpack_require__(219)
	            }, {
	                'name': 'Collection list',
	                'api': __webpack_require__(220)
	            }, {
	                'name': 'Collection list item',
	                'api': __webpack_require__(221)
	            }],
	            snippets: {
	                collectionLinks: __webpack_require__(222),
	                collectionHeader: __webpack_require__(223),
	                collectionSecondaryContent: __webpack_require__(224),
	                collectionAvatar: __webpack_require__(225)
	            },
	            src: [{
	                name: 'Collection',
	                script: __webpack_require__(226),
	                template: __webpack_require__(227)
	            }, {
	                name: 'Collection item',
	                script: __webpack_require__(228),
	                template: __webpack_require__(229)
	            }, {
	                name: 'Collection list',
	                script: __webpack_require__(230),
	                template: __webpack_require__(231)
	            }, {
	                name: 'Collection list item',
	                script: __webpack_require__(232),
	                template: __webpack_require__(233)
	            }]
	        };
	    };
	    Badges = __decorate([vue_class_component_1["default"]({
	        components: {
	            docCollectionLinks: links_1["default"],
	            docCollectionHeader: header_1["default"],
	            docCollectionSecondaryContent: secondary_content_1["default"],
	            docAvatarContent: avatar_1["default"]
	        },
	        template: __webpack_require__(234)
	    })], Badges);
	    return Badges;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badges;
	//# sourceMappingURL=index.js.map

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var LinksCollection = (function () {
	    function LinksCollection() {}
	    LinksCollection.prototype.data = function () {
	        return {
	            active: 2
	        };
	    };
	    LinksCollection = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(211)
	    })], LinksCollection);
	    return LinksCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinksCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <div class=\"col\">\r\n        <md-button @click=\"active < 3 ? (active++) : active\">\r\n            +\r\n        </md-button>\r\n        <md-button @click=\"active > 0 ? (active--) : active\">\r\n            -\r\n        </md-button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <md-collection>\r\n        <md-collection-item href=\"javascript:void(0)\" :active=\"active == 0\">Alvin</md-collection-item>\r\n        <md-collection-item href=\"javascript:void(0)\" :active=\"active == 1\">Alvin</md-collection-item>\r\n        <md-collection-item href=\"javascript:void(0)\" :active=\"active == 2\">Alvin</md-collection-item>\r\n        <md-collection-item href=\"javascript:void(0)\" :active=\"active == 3\">Alvin</md-collection-item>\r\n    </md-collection>\r\n</div>\r\n";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var collection_1 = __webpack_require__(51);
	var collection_item_1 = __webpack_require__(55);
	var HeaderCollection = (function () {
	    function HeaderCollection() {}
	    HeaderCollection = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"]
	        },
	        template: __webpack_require__(213)
	    })], HeaderCollection);
	    return HeaderCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = HeaderCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <h4 slot=\"header\">First Names</h4>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n</md-collection>";

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var icon_1 = __webpack_require__(26);
	var collection_1 = __webpack_require__(51);
	var collection_item_1 = __webpack_require__(55);
	var SecondaryContentCollection = (function () {
	    function SecondaryContentCollection() {}
	    Object.defineProperty(SecondaryContentCollection.prototype, "items", {
	        get: function get() {
	            return {
	                'Alvin1': 'javascript:void(0)',
	                'Alvin2': 'javascript:void(0)',
	                'Alvin3': 'javascript:void(0)',
	                'Alvin4': 'javascript:void(0)'
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SecondaryContentCollection = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdIcon: icon_1["default"],
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"]
	        },
	        template: __webpack_require__(215)
	    })], SecondaryContentCollection);
	    return SecondaryContentCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SecondaryContentCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <h4 slot=\"header\">First Names</h4>\r\n    <md-collection-item v-for=\"item in items\" :href=\"item\">\r\n        {{$key}}\r\n        <md-icon slot=\"secondary-content\">send</md-icon>\r\n    </md-collection-item>\r\n </md-collection>";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var AvatarCollection = (function () {
	    function AvatarCollection() {}
	    AvatarCollection = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(217)
	    })], AvatarCollection);
	    return AvatarCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = AvatarCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<md-collection-list>\r\n    <md-collection-list-item class=\"avatar\">\r\n        <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-list-item>\r\n    <md-collection-list-item class=\"avatar\">\r\n        <md-icon class=\"circle\">folder</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-list-item>\r\n    <md-collection-list-item class=\"avatar\">\r\n        <md-icon class=\"circle green\">assessment</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-list-item>\r\n    <md-collection-list-item class=\"avatar\">\r\n        <md-icon class=\"circle red\">play_arrow</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-list-item>\r\n</md-collection-list>";

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collection",
		"title": "Collection",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "",
				"description": "Content of collection items"
			},
			{
				"name": "header",
				"description": "Header of collection"
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collection",
		"title": "Collection",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "active",
				"type": "Boolean",
				"required": false,
				"description": "Active class flag",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content of collection item"
			},
			{
				"name": "secondary-content",
				"description": "Secondary content of collection item"
			}
		],
		"events": []
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collection",
		"title": "Collection",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [],
		"slots": [
			{
				"name": "",
				"description": "Content of collection items"
			},
			{
				"name": "header",
				"description": "Header of collection"
			}
		],
		"events": []
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-collection",
		"title": "Collection",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "active",
				"type": "Boolean",
				"required": false,
				"description": "Active class flag",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content of collection item"
			},
			{
				"name": "secondary-content",
				"description": "Secondary content of collection item"
			}
		],
		"events": []
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Alvin\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>\r\n        Alvin\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Alvin\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n        Alvin\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>First Names<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "/*\r\n{\r\n    'Alvin1': 'javascript:void(0)',\r\n    'Alvin2': 'javascript:void(0)',\r\n    'Alvin3': 'javascript:void(0)',\r\n    'Alvin4': 'javascript:void(0)'\r\n}\r\n*/\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>First Names<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"item in items\"</span> <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"item\"</span>&gt;</span>\r\n        {{$key}}\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span>send<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-list-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-list-item</span>&gt;</span>\r\n    ...\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-list-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle green\"</span>&gt;</span>assessment<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-list-item</span>&gt;</span>\r\n    ...\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collection.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Collection {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n    \r\n    <span class=\"hljs-keyword\">get</span> headerSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'header'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collection\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{'with-header': headerSlot}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"headerSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collection-header\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        active: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collection-item.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CollectionItem {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n    \r\n    <span class=\"hljs-keyword\">get</span> secondaryContentSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'secondary-content'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-collection-item collection-item\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"secondaryContentSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>";

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collection-list.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CollectionList {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> headerSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'header'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collection\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{'with-header': headerSlot}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"headerSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"collection-header\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>";

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        active: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./collection-list-item.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CollectionListItem {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> secondaryContentSlot() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'secondary-content'</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-collection-item collection-item\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"secondaryContentSlot\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/collections\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Links</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-collection-links></doc-collection-links>\r\n\r\n                <doc-snippet>{{{snippets.collectionLinks}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Header</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-collection-header></doc-collection-header>\r\n\r\n                <doc-snippet>{{{snippets.collectionHeader}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Secondary content</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-collection-secondary-content></doc-collection-secondary-content>\r\n\r\n                <doc-snippet>{{{snippets.collectionSecondaryContent}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Secondary content</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-avatar-content></doc-avatar-content>\r\n\r\n                <doc-snippet>{{{snippets.collectionAvatar}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n\r\n</div>";

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var snippet_1 = __webpack_require__(127);
	var default_1 = __webpack_require__(236);
	var events_1 = __webpack_require__(16);
	var Dropdowns = (function () {
	    function Dropdowns() {}
	    Dropdowns.prototype.data = function () {
	        return {
	            api: [{
	                name: 'Dropdown',
	                api: __webpack_require__(238)
	            }, {
	                name: 'Dropdown list',
	                api: __webpack_require__(239)
	            }, {
	                name: 'Dropdown item',
	                api: __webpack_require__(240)
	            }],
	            snippets: {
	                defaultDropdown: __webpack_require__(241)
	            },
	            src: [{
	                name: 'Dropdown',
	                script: __webpack_require__(242),
	                template: __webpack_require__(243)
	            }, {
	                name: 'Dropdown list',
	                script: __webpack_require__(244),
	                template: __webpack_require__(245)
	            }, {
	                name: 'Dropdown item',
	                script: __webpack_require__(246),
	                template: __webpack_require__(247)
	            }]
	        };
	    };
	    Dropdowns = __decorate([vue_class_component_1["default"]({
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultDropdown: default_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(248)
	    })], Dropdowns);
	    return Dropdowns;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdowns;
	//# sourceMappingURL=index.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var dropdown_1 = __webpack_require__(59);
	var dropdown_item_1 = __webpack_require__(61);
	var DefaultDropdown = (function () {
	    function DefaultDropdown() {}
	    DefaultDropdown.prototype.data = function () {
	        return {
	            value: ''
	        };
	    };
	    DefaultDropdown = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        template: __webpack_require__(237)
	    })], DefaultDropdown);
	    return DefaultDropdown;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultDropdown;
	//# sourceMappingURL=index.js.map

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    Value: {{value}}\r\n</div>\r\n<div class=\"row\">\r\n    <md-dropdown :value.sync=\"value\" title=\"Drop me\">\r\n        <md-dropdown-item name=\"one\">\r\n            one\r\n        </md-dropdown-item>\r\n        <md-dropdown-item name=\"two\">\r\n            two\r\n        </md-dropdown-item>\r\n        <li class=\"divider\"></li>\r\n        <md-dropdown-item>\r\n            three\r\n        </md-dropdown-item>\r\n    </md-dropdown>\r\n</div>";

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-dropdown",
		"title": "Dropdown",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "title",
				"type": "String",
				"required": false,
				"description": "Title of dropdown button",
				"twoWay": false,
				"default": "\"\""
			},
			{
				"name": "Value",
				"type": "String",
				"required": false,
				"description": "Selected value",
				"twoWay": null,
				"default": "\"\""
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Dropdown items"
			},
			{
				"name": "button",
				"description": "Slot with button, button should fire 'dropdown::open'"
			}
		],
		"events": [
			{
				"name": "dropdown::open",
				"description": "Event opens dropdown",
				"type": "in"
			},
			{
				"name": "dropdown::close",
				"description": "Event closes dropdown",
				"type": "in-out"
			}
		]
	};

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-dropdown",
		"title": "Dropdown",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "title",
				"type": "String",
				"required": false,
				"description": "Title of dropdown button",
				"twoWay": false,
				"default": "\"\""
			},
			{
				"name": "Value",
				"type": "String",
				"required": false,
				"description": "Selected value",
				"twoWay": null,
				"default": "\"\""
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Dropdown items"
			}
		],
		"events": [
			{
				"name": "dropdown-list::open",
				"description": "Event opens dropdown",
				"type": "in"
			},
			{
				"name": "dropdown-list::close",
				"description": "Event closes dropdown",
				"type": "in"
			}
		]
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-dropdown",
		"title": "Dropdown",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "closing",
				"type": "Boolean",
				"required": false,
				"description": "Click on item automatically close dropdown",
				"twoWay": false,
				"default": true
			},
			{
				"name": "name",
				"type": "String",
				"required": false,
				"description": "Name of item used for identification (name or uid, if name is not present)",
				"twoWay": false,
				"default": "\"\""
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Item content"
			}
		],
		"events": [
			{
				"name": "dropdown-item::selected",
				"description": "Selected item id (name or uid)",
				"type": "out",
				"args": [
					{
						"name": "id",
						"description": "Selected item id"
					}
				]
			}
		]
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Drop me\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"one\"</span>&gt;</span>\r\n        one\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"two\"</span>&gt;</span>\r\n        two\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n        three\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown</span>&gt;</span>";

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdButton from <span class=\"hljs-string\">'../button'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdDropdownList from <span class=\"hljs-string\">'../dropdown-list'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdDropdownItem from <span class=\"hljs-string\">'../dropdown-item'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> onClickAway from <span class=\"hljs-string\">'../../directives/click-away'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        title: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">''</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">''</span>,\r\n        }\r\n    },\r\n    directives: {\r\n        onClickAway\r\n    },\r\n    components: {\r\n        mdButton,\r\n        mdDropdownList,\r\n        mdDropdownItem\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'dropdown-list::close'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-comment\">// emitted by item -&gt; propagated do list</span>\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::close'</span>);\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'dropdown::close'</span>)\r\n        },\r\n        <span class=\"hljs-string\">'dropdown-item::selected'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.value = id;\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n        },\r\n        <span class=\"hljs-string\">'dropdown::open'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">e</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::open'</span>, e);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./dropdown.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Dropdown {\r\n    <span class=\"hljs-keyword\">private</span> $broadcast: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    open(e) {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::open'</span>, e);\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::close'</span>);\r\n    }\r\n}";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-on-click-away</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"open\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"button\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n                 <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>\r\n                 <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-button\"</span>&gt;</span>\r\n                {{title}}\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"mdi-navigation-arrow-drop-down right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n";

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mbButton from <span class=\"hljs-string\">'../button'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdDropdownItem from <span class=\"hljs-string\">'../dropdown-item'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> Utils from <span class=\"hljs-string\">'../utils'</span>;\r\n\r\n@Component({\r\n    components: {\r\n        mbButton,\r\n        mdDropdownItem\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">\"dropdown-list::close\"</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.hide();\r\n        },\r\n        <span class=\"hljs-string\">\"dropdown-list::open\"</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">e</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.open(e);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./dropdown-list.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> DropdownList {\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> style: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>,\r\n            style: {}\r\n        }\r\n    }\r\n\r\n    toggle(e: <span class=\"hljs-built_in\">any</span>) {\r\n        (!<span class=\"hljs-keyword\">this</span>.active ? <span class=\"hljs-keyword\">this</span>.open : <span class=\"hljs-keyword\">this</span>.hide)(e);\r\n    }\r\n\r\n    open(e: <span class=\"hljs-built_in\">any</span>) {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.style = <span class=\"hljs-keyword\">this</span>.computeStyle(e.currentTarget);\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">this</span>.hide();\r\n    }\r\n\r\n    hide() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.style = {};\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n        }\r\n    }\r\n\r\n    computeStyle(element: HTMLElement) {\r\n        <span class=\"hljs-keyword\">var</span> offset = Utils.getOffset(element);\r\n        <span class=\"hljs-keyword\">var</span> width = element.offsetWidth || <span class=\"hljs-number\">100</span>;\r\n        <span class=\"hljs-keyword\">var</span> top = offset.top  || <span class=\"hljs-number\">0</span>;\r\n        <span class=\"hljs-keyword\">var</span> left = offset.left  || <span class=\"hljs-number\">0</span>;\r\n\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            width: width + <span class=\"hljs-string\">'px'</span>,\r\n            position: <span class=\"hljs-string\">'absolute'</span>,\r\n            top: top + <span class=\"hljs-string\">'px'</span>,\r\n            left: left + <span class=\"hljs-string\">'px'</span>,\r\n            opacity: <span class=\"hljs-number\">1</span>,\r\n            display: <span class=\"hljs-string\">'block'</span>\r\n        };\r\n    }\r\n\r\n}";

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-content\"</span>\r\n    <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span> <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"style\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n";

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        closing: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./dropdown-item.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> DropdownItem {\r\n    <span class=\"hljs-keyword\">private</span> $dispatch: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> closing: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> name: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> _uid: <span class=\"hljs-built_in\">string</span>;\r\n\r\n    select() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.closing) {\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'dropdown-list::close'</span>);\r\n        }\r\n        <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'dropdown-item::selected'</span>, <span class=\"hljs-keyword\">this</span>.id);\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> id() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.name) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.name;\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._uid;\r\n    }\r\n}";

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"select\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/dropdowns\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Dropdown</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-dropdown></doc-default-dropdown>\r\n\r\n                <doc-snippet>{{{snippets.defaultDropdown}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_fields_1 = __webpack_require__(250);
	var input_icon_fields_1 = __webpack_require__(252);
	var textareas_1 = __webpack_require__(254);
	var selects_1 = __webpack_require__(256);
	var radios_1 = __webpack_require__(258);
	var checkboxes_1 = __webpack_require__(260);
	var switches_1 = __webpack_require__(262);
	var file_inputs_1 = __webpack_require__(264);
	var Forms = (function () {
	    function Forms() {}
	    Forms.prototype.data = function () {
	        return {
	            api: [{
	                name: 'Input',
	                api: __webpack_require__(266)
	            }, {
	                name: 'Textarea',
	                api: __webpack_require__(267)
	            }, {
	                name: 'Select',
	                api: __webpack_require__(268)
	            }, {
	                name: 'Option',
	                api: __webpack_require__(269)
	            }, {
	                name: 'Radio group',
	                api: __webpack_require__(270)
	            }, {
	                name: 'Radio',
	                api: __webpack_require__(271)
	            }, {
	                name: 'Checkbox group',
	                api: __webpack_require__(272)
	            }, {
	                name: 'Checkbox',
	                api: __webpack_require__(273)
	            }, {
	                name: 'Switch',
	                api: __webpack_require__(274)
	            }, {
	                name: 'File input',
	                api: __webpack_require__(275)
	            }],
	            snippets: {
	                inputFields: __webpack_require__(276),
	                inputIconFields: __webpack_require__(277),
	                textareas: __webpack_require__(278),
	                selects: __webpack_require__(279),
	                radios: __webpack_require__(280),
	                checkboxes: __webpack_require__(281),
	                switches: __webpack_require__(282),
	                fileInputs: __webpack_require__(283)
	            },
	            src: [{
	                name: 'Input field',
	                script: __webpack_require__(284),
	                template: __webpack_require__(285)
	            }, {
	                name: 'Textarea',
	                script: __webpack_require__(286),
	                template: __webpack_require__(287),
	                style: __webpack_require__(288)
	            }, {
	                name: 'Select',
	                script: __webpack_require__(289),
	                template: __webpack_require__(290),
	                style: __webpack_require__(291)
	            }, {
	                name: 'Option',
	                script: __webpack_require__(292),
	                template: __webpack_require__(293)
	            }, {
	                name: 'Radio group',
	                script: __webpack_require__(294),
	                template: __webpack_require__(295)
	            }, {
	                name: 'Radio',
	                script: __webpack_require__(296),
	                template: __webpack_require__(297),
	                style: __webpack_require__(298)
	            }, {
	                name: 'Checkbox group',
	                script: __webpack_require__(299),
	                template: __webpack_require__(300)
	            }, {
	                name: 'Checkbox',
	                script: __webpack_require__(301),
	                template: __webpack_require__(302),
	                style: __webpack_require__(303)
	            }, {
	                name: 'Switch',
	                script: __webpack_require__(304),
	                template: __webpack_require__(305)
	            }, {
	                name: 'File input',
	                script: __webpack_require__(306),
	                template: __webpack_require__(307)
	            }]
	        };
	    };
	    Forms = __decorate([vue_class_component_1["default"]({
	        components: {
	            docInputFields: input_fields_1["default"],
	            docInputIconFields: input_icon_fields_1["default"],
	            docTextareas: textareas_1["default"],
	            docSelects: selects_1["default"],
	            docRadios: radios_1["default"],
	            docCheckboxes: checkboxes_1["default"],
	            docSwitches: switches_1["default"],
	            docFileInputs: file_inputs_1["default"]
	        },
	        template: __webpack_require__(308)
	    })], Forms);
	    return Forms;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Forms;
	//# sourceMappingURL=index.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var InputFileds = (function () {
	    function InputFileds() {}
	    InputFileds.prototype.data = function () {
	        return {
	            firstName: 'Martin',
	            lastName: '',
	            successMsg: 'Success',
	            errorMsg: 'Error',
	            firstNameValid: "null",
	            lastNameValid: "null"
	        };
	    };
	    InputFileds.prototype.bool = function (val) {
	        if (val == 'true') {
	            return true;
	        } else if (val == 'false') {
	            return false;
	        }
	        return null;
	    };
	    InputFileds = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: __webpack_require__(251)
	    })], InputFileds);
	    return InputFileds;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputFileds;
	//# sourceMappingURL=index.js.map

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row demo\">\r\n            <md-input :value.sync=\"firstName\" placeholder=\"Placeholder\" :success-msg=\"successMsg\" :error-msg=\"errorMsg\"\r\n                      :valid=\"bool(firstNameValid)\" class=\"col s6\">\r\n                First Name\r\n            </md-input>\r\n            <md-input :value.sync=\"lastName\" :success-msg=\"successMsg\" :error-msg=\"errorMsg\"\r\n                      :valid=\"bool(lastNameValid)\" class=\"col s6\">\r\n                Last name\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row demo\">\r\n            <div class=\"output col s6\">\r\n                First name: {{firstName}}\r\n            </div>\r\n            <div class=\"output col s6\">\r\n                Last name: {{lastName}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row demo\">\r\n            <md-input :value.sync=\"successMsg\" class=\"col s6\">\r\n                Success message\r\n            </md-input>\r\n            <md-input :value.sync=\"errorMsg\" class=\"col s6\">\r\n                Error message\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row demo\">\r\n            <md-radio-group group=\"firstNameValid\" class=\"col s6\">\r\n                <md-radio :value.sync=\"firstNameValid\" radio-value=\"null\" class=\"with-gap\">\r\n                    Null\r\n                </md-radio>\r\n                <md-radio :value.sync=\"firstNameValid\" radio-value=\"true\" class=\"with-gap\">\r\n                    True\r\n                </md-radio>\r\n                <md-radio :value.sync=\"firstNameValid\" radio-value=\"false\" class=\"with-gap\">\r\n                    False\r\n                </md-radio>\r\n            </md-radio-group>\r\n            <md-radio-group group=\"lastNameValid\" class=\"col s6\">\r\n                <md-radio :value.sync=\"lastNameValid\" radio-value=\"null\" class=\"with-gap\">\r\n                    Null\r\n                </md-radio>\r\n                <md-radio :value.sync=\"lastNameValid\" radio-value=\"true\" class=\"with-gap\">\r\n                    True\r\n                </md-radio>\r\n                <md-radio :value.sync=\"lastNameValid\" radio-value=\"false\" class=\"with-gap\">\r\n                    False\r\n                </md-radio>\r\n            </md-radio-group>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input value=\"I am not editable\" disabled class=\"col s12\">\r\n                Disabled\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input type=\"password\" class=\"col s12\">\r\n                Password\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input type=\"email\" class=\"col s12\">\r\n                Email\r\n            </md-input>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var input_1 = __webpack_require__(72);
	var InputIconFileds = (function () {
	    function InputIconFileds() {}
	    InputIconFileds = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdInput: input_1["default"]
	        },
	        template: __webpack_require__(253)
	    })], InputIconFileds);
	    return InputIconFileds;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputIconFileds;
	//# sourceMappingURL=index.js.map

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <md-input :value=\"firstName\" class=\"col s6\">\r\n                First Name\r\n                <template slot=\"icon-name\">account_circle</template>\r\n            </md-input>\r\n            <md-input type=\"tel\" class=\"col s6\">\r\n                Telephone\r\n                <template slot=\"icon-name\">phone</template>\r\n            </md-input>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var textarea_1 = __webpack_require__(84);
	var eolToBr = function eolToBr(input) {
	    return input.replace(/\n/g, '<br>');
	};
	var Textareas = (function () {
	    function Textareas() {}
	    Textareas.prototype.data = function () {
	        return {
	            value: 'Text'
	        };
	    };
	    Textareas = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdTextarea: textarea_1["default"]
	        },
	        filters: {
	            eolToBr: eolToBr
	        },
	        template: __webpack_require__(255)
	    })], Textareas);
	    return Textareas;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Textareas;
	//# sourceMappingURL=index.js.map

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <md-textarea :value.sync=\"value\" :debounce=\"500\" class=\"col s6\">\r\n                Textarea:\r\n            </md-textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Textarea: {{{value | eolToBr}}}\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var select_1 = __webpack_require__(82);
	var option_1 = __webpack_require__(76);
	var optgroup_1 = __webpack_require__(74);
	var Selects = (function () {
	    function Selects() {}
	    Selects.prototype.data = function () {
	        return {
	            value: '',
	            multipleValue: ['1', '3'],
	            groupsValue: '1'
	        };
	    };
	    Selects = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdSelect: select_1["default"],
	            mdOption: option_1["default"],
	            mdOptgroup: optgroup_1["default"]
	        },
	        template: __webpack_require__(257)
	    })], Selects);
	    return Selects;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Selects;
	//# sourceMappingURL=index.js.map

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{value}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select :value.sync=\"value\" class=\"col s6\">\r\n                <md-option value=\"\" disabled>Choose your option</md-option>\r\n                <md-option value=\"1\">Option 1</md-option>\r\n                <md-option value=\"2\">Option 2</md-option>\r\n                <md-option value=\"3\">Option 3</md-option>\r\n\r\n                <span slot=\"label\">Materialize Select</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{multipleValue | json}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select :value.sync=\"multipleValue\" class=\"col s6\">\r\n                <md-option value=\"\" disabled>Choose your option</md-option>\r\n                <md-option value=\"1\">Option 1</md-option>\r\n                <md-option value=\"2\">Option 2</md-option>\r\n                <md-option value=\"3\">Option 3</md-option>\r\n\r\n                <span slot=\"label\">Materialize Select</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{groupsValue}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select :value.sync=\"groupsValue\" class=\"col s6\">\r\n                <md-optgroup label=\"team 1\">\r\n                    <md-option value=\"1\">Option 1</md-option>\r\n                    <md-option value=\"2\">Option 2</md-option>\r\n                </md-optgroup>\r\n                <md-optgroup label=\"team 2\">\r\n                    <md-option value=\"3\">Option 3</md-option>\r\n                    <md-option value=\"4\">Option 4</md-option>\r\n                </md-optgroup>\r\n                <span slot=\"label\">Optgroups</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- todo circles + browser default + disable -->";

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var radio_group_1 = __webpack_require__(80);
	var radio_1 = __webpack_require__(78);
	var Radios = (function () {
	    function Radios() {}
	    Radios.prototype.data = function () {
	        return {
	            value: 'green'
	        };
	    };
	    Radios = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdRadioGroup: radio_group_1["default"],
	            mdRadio: radio_1["default"]
	        },
	        template: __webpack_require__(259)
	    })], Radios);
	    return Radios;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radios;
	//# sourceMappingURL=index.js.map

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{value}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-radio-group group=\"group1\">\r\n                    <p>\r\n                        <md-radio :value.sync=\"value\" radio-value=\"red\">\r\n                            Red\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio :value.sync=\"value\" radio-value=\"yellow\">\r\n                            Yellow\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio :value.sync=\"value\" radio-value=\"green\" class=\"with-gap\">\r\n                            Green\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio :value.sync=\"value\" radio-value=\"brown\" disabled>\r\n                            Brown\r\n                        </md-radio>\r\n                    </p>\r\n                </md-radio-group>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var checkbox_1 = __webpack_require__(39);
	var checkbox_group_1 = __webpack_require__(41);
	var Radios = (function () {
	    function Radios() {}
	    Radios.prototype.data = function () {
	        return {
	            checkbox: {
	                red: false,
	                yellow: true,
	                filled: true,
	                green: true,
	                brown: false
	            }
	        };
	    };
	    Radios = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdCheckbox: checkbox_1["default"],
	            mdCheckboxGroup: checkbox_group_1["default"]
	        },
	        template: __webpack_require__(261)
	    })], Radios);
	    return Radios;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radios;
	//# sourceMappingURL=index.js.map

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: <pre>{{checkbox | json}}</pre>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-checkbox-group group=\"checkbox\">\r\n                    <p>\r\n                        <md-checkbox :value.sync=\"checkbox.red\" value=\"red\">\r\n                            Red\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox :value.sync=\"checkbox.yellow\" value=\"yellow\">\r\n                            Yellow\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox :value.sync=\"checkbox.filled\" value=\"filled\" class=\"filled-in\">\r\n                            Filled in\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox :value.sync=\"checkbox.green\" value=\"green\" disabled>\r\n                            Green\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox :value.sync=\"checkbox.brown\" value=\"brown\" disabled>\r\n                            Brown\r\n                        </md-checkbox>\r\n                    </p>\r\n                </md-checkbox-group>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var swich_1 = __webpack_require__(103);
	var Switches = (function () {
	    function Switches() {}
	    Switches.prototype.data = function () {
	        return {
	            switches: [true, false, true]
	        };
	    };
	    Switches = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdSwitch: swich_1["default"]
	        },
	        template: __webpack_require__(263)
	    })], Switches);
	    return Switches;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Switches;
	//# sourceMappingURL=index.js.map

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: <pre>{{switches | json}}</pre>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <p>\r\n                    <md-switch :value.sync=\"switches[0]\">\r\n                    </md-switch>\r\n                </p>\r\n                <p>\r\n                    <md-switch :value.sync=\"switches[1]\">\r\n                        <span slot=\"on\">True</span>\r\n                        <span slot=\"off\">False</span>\r\n                    </md-switch>\r\n                </p>\r\n                <p>\r\n                    <md-switch :value.sync=\"switches[2]\" disabled>\r\n                        <span slot=\"on\">On</span>\r\n                        <span slot=\"off\">Off</span>\r\n                    </md-switch>\r\n                </p>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var file_input_1 = __webpack_require__(70);
	var FileInputs = (function () {
	    function FileInputs() {}
	    FileInputs.prototype.data = function () {
	        return {
	            fileName: '',
	            fileNames: ''
	        };
	    };
	    FileInputs = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdFileInput: file_input_1["default"]
	        },
	        template: __webpack_require__(265)
	    })], FileInputs);
	    return FileInputs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FileInputs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                <p>\r\n                    Selected file: {{fileName}}\r\n                </p>\r\n                <p>\r\n                    Selected files: {{fileNames}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-file-input :value.sync=\"fileName\" name=\"file\"></md-file-input>\r\n                <md-file-input :value.sync=\"fileNames\" name=\"files\" multiple\r\n                               placeholder=\"Upload one or more files\"></md-file-input>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-badge",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": false,
				"description": "Initial value of input field",
				"twoWay": null,
				"default": null
			},
			{
				"name": "placeholder",
				"type": "String",
				"required": false,
				"description": "Placeholder value",
				"default": null,
				"twoWay": false
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			},
			{
				"name": "type",
				"type": "String",
				"required": false,
				"description": "Input type attribute",
				"default": "text",
				"twoWay": false
			},
			{
				"name": "lazy",
				"type": "Boolean",
				"required": false,
				"description": "Lazy of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "number",
				"type": "Boolean",
				"required": false,
				"description": "Number of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "debounce",
				"type": "Number",
				"required": false,
				"description": "Debounce of v-model",
				"default": 0,
				"twoWay": false
			},
			{
				"name": "error-msg",
				"type": "String",
				"required": false,
				"description": "Error message",
				"default": null,
				"twoWay`": false
			},
			{
				"name": "success-msg",
				"type": "String",
				"required": false,
				"description": "Success message",
				"default": null,
				"twoWay": false
			},
			{
				"name": "valid",
				"type": "Boolean",
				"required": false,
				"description": "Valid flag",
				"default": null,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Input label"
			},
			{
				"name": "icon-name",
				"description": "Input icon name"
			}
		],
		"events": []
	};

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-textarea",
		"title": "Textarea",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": false,
				"description": "Text of textarea",
				"twoWay": false,
				"default": null
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			},
			{
				"name": "autoresize",
				"type": "Boolean",
				"required": false,
				"description": "Textarea is automatically adjust to text height",
				"default": true,
				"twoWay": false
			},
			{
				"name": "lazy",
				"type": "Boolean",
				"required": false,
				"description": "Lazy of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "number",
				"type": "Boolean",
				"required": false,
				"description": "Number of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "debounce",
				"type": "Number",
				"required": false,
				"description": "Debounce of v-model",
				"default": 0,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Input label"
			},
			{
				"name": "icon-name",
				"description": "Input icon name"
			}
		],
		"events": []
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-select",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": false,
				"description": "Initial value of input field",
				"twoWay": null,
				"default": null
			},
			{
				"name": "placeholder",
				"type": "String",
				"required": false,
				"description": "Placeholder value",
				"default": null,
				"twoWay": false
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			},
			{
				"name": "type",
				"type": "String",
				"required": false,
				"description": "Input type attribute",
				"default": "text",
				"twoWay": false
			},
			{
				"name": "lazy",
				"type": "Boolean",
				"required": false,
				"description": "Lazy of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "number",
				"type": "Boolean",
				"required": false,
				"description": "Number of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "debounce",
				"type": "Number",
				"required": false,
				"description": "Debounce of v-model",
				"default": 0,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Select options"
			},
			{
				"name": "icon-name",
				"description": "Input icon name"
			},
			{
				"name": "label",
				"description": "Select label"
			}
		],
		"events": [
			{
				"name": "select::select",
				"descriptions": "When item is selected",
				"type": "in-out",
				"args": [
					{
						"name": "id",
						"description": "Item id"
					}
				]
			},
			{
				"name": "select::unselect",
				"description": "When multiple item is unselected",
				"type": "in-out",
				"args": [
					{
						"name": "id",
						"description": "Item id"
					}
				]
			}
		]
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-select",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": true,
				"description": "Option value",
				"twoWay": null,
				"default": null
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Option label"
			}
		],
		"events": [
			{
				"name": "option::select",
				"descriptions": "When item is selected",
				"type": "out",
				"args": [
					{
						"name": "id",
						"description": "Item id"
					}
				]
			},
			{
				"name": "option::unselect",
				"description": "When multiple item is unselected",
				"type": "out",
				"args": [
					{
						"name": "id",
						"description": "Item id"
					}
				]
			}
		]
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-radio-group",
		"title": "Radio group",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "group",
				"type": "String",
				"required": true,
				"description": "Radio group name"
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content"
			}
		],
		"events": []
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-radio",
		"title": "Radio",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": true,
				"description": "Radio biding value",
				"twoWay": null,
				"default": null
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			},
			{
				"name": "radio-value",
				"type": "String",
				"required": false,
				"description": "Radio field value (value attribute)",
				"default": null,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Radio label"
			}
		],
		"events": []
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-checkbox-group",
		"title": "Checkbox group",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "group",
				"type": "String",
				"required": true,
				"description": "Radio group name"
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content"
			}
		],
		"events": []
	};

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-checkbox",
		"title": "Checkbox",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": false,
				"description": "Bind value",
				"twoWay": false,
				"default": null
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			},
			{
				"name": "name",
				"type": "String",
				"required": false,
				"description": "Name of check box (name attribute)",
				"default": true,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Checkbox label"
			},
			{
				"name": "icon-name",
				"description": "Checkbox icon name"
			}
		],
		"events": []
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-switch",
		"title": "Switch",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "Boolean",
				"required": false,
				"description": "Bind value",
				"twoWay": false,
				"default": null
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Field is disabled if true",
				"default": null,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "off",
				"description": "Off label"
			},
			{
				"name": "on",
				"description": "On label"
			}
		],
		"events": []
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-badge",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "String",
				"required": false,
				"description": "Value of selected file names",
				"twoWay": null,
				"default": null
			},
			{
				"name": "placeholder",
				"type": "String",
				"required": false,
				"description": "Placeholder value",
				"default": null,
				"twoWay": false
			},
			{
				"name": "name",
				"type": "String",
				"required": false,
				"description": "Name of file input",
				"default": null,
				"twoWay": false
			},
			{
				"name": "multiple",
				"type": "Boolean",
				"required": false,
				"description": "Multiple file input",
				"default": false,
				"twoWay": false
			},
			{
				"name": "lazy",
				"type": "Boolean",
				"required": false,
				"description": "Lazy of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "number",
				"type": "Boolean",
				"required": false,
				"description": "Number of v-model",
				"default": false,
				"twoWay": false
			},
			{
				"name": "debounce",
				"type": "Number",
				"required": false,
				"description": "Debounce of v-model",
				"default": 0,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "File input label"
			}
		],
		"events": []
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"firstName\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Placeholder\"</span> <span class=\"hljs-attribute\">success-msg</span>=<span class=\"hljs-value\">\"Success\"</span> <span class=\"hljs-attribute\">error-msg</span>=<span class=\"hljs-value\">\"Error\"</span>\r\n          <span class=\"hljs-attribute\">:valid</span>=<span class=\"hljs-value\">\"bool(firstNameValid)\"</span>&gt;</span>\r\n    First Name\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"lastName\"</span> <span class=\"hljs-attribute\">success-msg</span>=<span class=\"hljs-value\">\"Success\"</span> <span class=\"hljs-attribute\">error-msg</span>=<span class=\"hljs-value\">\"Error\"</span>\r\n          <span class=\"hljs-attribute\">:valid</span>=<span class=\"hljs-value\">\"bool(lastNameValid)\"</span>&gt;</span>\r\n    Last name\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"password\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"password\"</span>&gt;</span>\r\n    Password\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span>&gt;</span>\r\n    Email\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>";

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"firstName\"</span>&gt;</span>\r\n    First Name\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>account_circle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"telephone\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"tel\"</span>&gt;</span>\r\n    Telephone\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>phone<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>";

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-textarea</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">:debounce</span>=<span class=\"hljs-value\">\"500\"</span>&gt;</span>\r\n    Textarea:\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-textarea</span>&gt;</span>";

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">value.sync</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Choose your option<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Materialize Select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"multipleValue\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Choose your option<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Materialize Select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"groupsValue\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s6\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-optgroup</span> <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"team 1\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-optgroup</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-optgroup</span> <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"team 2\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"4\"</span>&gt;</span>Option 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-optgroup</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Optgroups<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n";

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio-group</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n        Red\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"yellow\"</span>&gt;</span>\r\n        Yellow\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"green\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"with-gap\"</span>&gt;</span>\r\n        Green\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"brown\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Brown\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio-group</span>&gt;</span>";

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox-group</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"checkbox\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"checkbox.red\"</span>\r\n                 <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n        Red\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"checkbox.yellow\"</span>\r\n                 <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"yellow\"</span>&gt;</span>\r\n        Yellow\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"checkbox.filled\"</span>\r\n                 <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"filled\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"filled-in\"</span>&gt;</span>\r\n        Filled in\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"checkbox.green\"</span>\r\n                 <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"green\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Green\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"checkbox.brown\"</span>\r\n                 <span class=\"hljs-attribute\">radio-value</span>=<span class=\"hljs-value\">\"brown\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Brown\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox-group</span>&gt;</span>";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"switches[0]\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"switches[1]\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"on\"</span>&gt;</span>True<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"off\"</span>&gt;</span>False<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"switches[2]\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"on\"</span>&gt;</span>On<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"off\"</span>&gt;</span>Off<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>";

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-file-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"fileName\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"file\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-file-input</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-file-input</span> <span class=\"hljs-attribute\">:value.sync</span>=<span class=\"hljs-value\">\"fileNames\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"files\"</span> <span class=\"hljs-attribute\">multiple</span>\r\n               <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Upload one or more files\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-file-input</span>&gt;</span>";

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        placeholder: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        <span class=\"hljs-keyword\">type</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">'text'</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        lazy: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        <span class=\"hljs-built_in\">number</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        debounce: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-number\">0</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        errorMsg: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        successMsg: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        valid: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./input.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> InputField {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $nextTick: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $watch: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> fireEvent: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> placeholder: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> errorMsg: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> successMsg: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> valid: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n    \r\n   <span class=\"hljs-keyword\">get</span> labelClasses() {\r\n       <span class=\"hljs-keyword\">return</span> {\r\n           active: <span class=\"hljs-keyword\">this</span>.placeholder || <span class=\"hljs-keyword\">this</span>.active || <span class=\"hljs-keyword\">this</span>.value, <span class=\"hljs-comment\">// || this.valid != null,</span>\r\n           disabled: <span class=\"hljs-keyword\">this</span>.disabled\r\n       }\r\n   }\r\n\r\n    <span class=\"hljs-keyword\">get</span> validationClass(){\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            invalid: <span class=\"hljs-keyword\">this</span>.errorMsg &amp;&amp; <span class=\"hljs-keyword\">this</span>.valid == <span class=\"hljs-literal\">false</span>,\r\n            valid: <span class=\"hljs-keyword\">this</span>.successMsg &amp;&amp; <span class=\"hljs-keyword\">this</span>.valid == <span class=\"hljs-literal\">true</span>\r\n        }\r\n    }\r\n\r\n    hasSlot(name = <span class=\"hljs-string\">'default'</span>) {\r\n        <span class=\"hljs-keyword\">return</span> name <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n    \r\n    activateField() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n    }\r\n    \r\n    deactivateField() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n    }\r\n}";

/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot('icon-name')\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons prefix\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n           <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n           <span class=\"hljs-attribute\">:placeholder</span>=<span class=\"hljs-value\">\"placeholder\"</span> <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span>\r\n           <span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"type\"</span>\r\n           <span class=\"hljs-attribute\">:lazy</span>=<span class=\"hljs-value\">\"lazy\"</span> <span class=\"hljs-attribute\">:number</span>=<span class=\"hljs-value\">\"number\"</span> <span class=\"hljs-attribute\">:debounce</span>=<span class=\"hljs-value\">\"debounce\"</span>\r\n           <span class=\"hljs-attribute\">disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>/&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-else</span>\r\n           <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n           <span class=\"hljs-attribute\">:placeholder</span>=<span class=\"hljs-value\">\"placeholder\"</span> <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span>\r\n           <span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"type\"</span>\r\n           <span class=\"hljs-attribute\">:lazy</span>=<span class=\"hljs-value\">\"lazy\"</span> <span class=\"hljs-attribute\">:number</span>=<span class=\"hljs-value\">\"number\"</span> <span class=\"hljs-attribute\">:debounce</span>=<span class=\"hljs-value\">\"debounce\"</span>\r\n           @<span class=\"hljs-attribute\">focus</span>=<span class=\"hljs-value\">\"activateField\"</span>\r\n           @<span class=\"hljs-attribute\">blur</span>=<span class=\"hljs-value\">\"deactivateField\"</span>\r\n           <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"validate\"</span>\r\n           <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"validationClass\"</span>/&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot()\"</span> <span class=\"hljs-attribute\">:for</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"labelClasses\"</span>\r\n           <span class=\"hljs-attribute\">:data-error</span>=<span class=\"hljs-value\">\"errorMsg\"</span> <span class=\"hljs-attribute\">:data-success</span>=<span class=\"hljs-value\">\"successMsg\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        autoresize: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        lazy: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        <span class=\"hljs-built_in\">number</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        debounce: {\r\n            <span class=\"hljs-string\">\"type\"</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            <span class=\"hljs-string\">\"required\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-number\">0</span>,\r\n            <span class=\"hljs-string\">\"twoWay\"</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./textarea.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> TextArea {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> chars: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">this</span>.chars = <span class=\"hljs-keyword\">this</span>.value ? <span class=\"hljs-keyword\">this</span>.value.length : <span class=\"hljs-number\">0</span>;\r\n    }\r\n    \r\n    <span class=\"hljs-keyword\">get</span> labelClasses() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-keyword\">this</span>.active || <span class=\"hljs-keyword\">this</span>.value,\r\n            disabled: <span class=\"hljs-keyword\">this</span>.disabled\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> lines() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.value ? <span class=\"hljs-keyword\">this</span>.value.split(<span class=\"hljs-string\">'\\n'</span>).length : <span class=\"hljs-number\">0</span>;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> field(): HTMLTextAreaElement {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$els.field;\r\n    }\r\n\r\n    hasSlot(name = <span class=\"hljs-string\">'default'</span>) {\r\n        <span class=\"hljs-keyword\">return</span> name <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    resize(e) {\r\n        <span class=\"hljs-keyword\">var</span> chars = e.target.value ? e.target.value.length : <span class=\"hljs-number\">0</span>;\r\n        <span class=\"hljs-keyword\">var</span> styles = <span class=\"hljs-built_in\">window</span>.getComputedStyle(<span class=\"hljs-keyword\">this</span>.field);\r\n        <span class=\"hljs-keyword\">var</span> paddingVertical = <span class=\"hljs-built_in\">parseInt</span>(styles.getPropertyValue(<span class=\"hljs-string\">'padding-bottom'</span>)) + <span class=\"hljs-built_in\">parseInt</span>(styles.getPropertyValue(<span class=\"hljs-string\">'padding-top'</span>));\r\n        <span class=\"hljs-keyword\">if</span> (chars &lt; <span class=\"hljs-keyword\">this</span>.chars) {\r\n            <span class=\"hljs-keyword\">this</span>.field.style.height = <span class=\"hljs-string\">'auto'</span>;\r\n        }\r\n        <span class=\"hljs-keyword\">this</span>.field.style.height = (<span class=\"hljs-keyword\">this</span>.field.scrollHeight - paddingVertical) + <span class=\"hljs-string\">'px'</span>;\r\n        <span class=\"hljs-comment\">// Velocity(this.field, {height: this.field.scrollHeight - paddingVertical}, {</span>\r\n        <span class=\"hljs-comment\">//     duration: 10</span>\r\n        <span class=\"hljs-comment\">// });</span>\r\n        <span class=\"hljs-keyword\">this</span>.chars = chars;\r\n    }\r\n\r\n    delayedResize(e) {\r\n        <span class=\"hljs-built_in\">window</span>.setTimeout(() =&gt; {\r\n            <span class=\"hljs-keyword\">this</span>.resize(e)\r\n        }, <span class=\"hljs-number\">0</span>);\r\n    }\r\n\r\n    activateField() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n    }\r\n\r\n    deactivateField() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n    }\r\n}";

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-textarea input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot('icon-name')\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons prefix\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">textarea</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n              <span class=\"hljs-attribute\">v-el:field</span>\r\n              <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n              <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">class</span>=\r\n              <span class=\"hljs-attribute\">:lazy</span>=<span class=\"hljs-value\">\"lazy\"</span> <span class=\"hljs-attribute\">:number</span>=<span class=\"hljs-value\">\"number\"</span> <span class=\"hljs-attribute\">:debounce</span>=<span class=\"hljs-value\">\"debounce\"</span>\r\n              <span class=\"hljs-attribute\">disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">textarea</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">textarea</span> <span class=\"hljs-attribute\">v-else</span>\r\n              <span class=\"hljs-attribute\">v-el:field</span>\r\n              <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n              <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span>\r\n              <span class=\"hljs-attribute\">:lazy</span>=<span class=\"hljs-value\">\"lazy\"</span> <span class=\"hljs-attribute\">:number</span>=<span class=\"hljs-value\">\"number\"</span> <span class=\"hljs-attribute\">:debounce</span>=<span class=\"hljs-value\">\"debounce\"</span>\r\n              @<span class=\"hljs-attribute\">focus</span>=<span class=\"hljs-value\">\"activateField\"</span>\r\n              @<span class=\"hljs-attribute\">blur</span>=<span class=\"hljs-value\">\"deactivateField\"</span>\r\n              @<span class=\"hljs-attribute\">keyup</span>=<span class=\"hljs-value\">\"resize\"</span>\r\n              <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"materialize-textarea\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">textarea</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot()\"</span> <span class=\"hljs-attribute\">:for</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"labelClasses\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-textarea</span> {\r\n  <span class=\"hljs-tag\">textarea</span><span class=\"hljs-class\">.materialize-textarea</span> {\r\n    <span class=\"hljs-attribute\">overflow</span><span class=\"hljs-value\">: hidden;</span>\r\n    <span class=\"hljs-attribute\">margin-top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1.6rem</span>;</span>\r\n    <span class=\"hljs-attribute\">padding</span><span class=\"hljs-value\">: <span class=\"hljs-number\">22px</span> <span class=\"hljs-number\">0</span>;</span>\r\n    <span class=\"hljs-attribute\">outline</span><span class=\"hljs-value\">: none;</span>\r\n    <span class=\"hljs-attribute\">resize</span><span class=\"hljs-value\">: none;</span>\r\n  }\r\n}";

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdDropdownList from <span class=\"hljs-string\">'../../dropdown-list'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n<span class=\"hljs-keyword\">import</span> clickAway from <span class=\"hljs-string\">'../../../directives/click-away'</span>;\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n\r\n<span class=\"hljs-keyword\">var</span> Vue: <span class=\"hljs-built_in\">any</span> = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'vue'</span>);\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'select::select'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">Array</span>.isArray(<span class=\"hljs-keyword\">this</span>.value)) {\r\n                <span class=\"hljs-keyword\">this</span>.value.push(value);\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.value = value;\r\n                <span class=\"hljs-keyword\">this</span>.close();\r\n            }\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'option::select'</span>, value);\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n\r\n        },\r\n        <span class=\"hljs-string\">'select::unselect'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">Array</span>.isArray(<span class=\"hljs-keyword\">this</span>.value)) {\r\n                <span class=\"hljs-keyword\">this</span>.value.$remove(value);\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.value = value;\r\n            }\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'option::unselect'</span>, value);\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n        }\r\n    },\r\n    watch: {\r\n        value: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$nextTick(<span class=\"hljs-keyword\">this</span>.refreshDropdownOptions)\r\n        }\r\n    },\r\n    components: {\r\n        mdDropdownList\r\n    },\r\n    directives: {\r\n        clickAway,\r\n        bindBoolean\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./select.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> SelectField {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $getAllChildren: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $broadcast: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> options: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> defaultSelect: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>,\r\n            options: {}\r\n        }\r\n    }\r\n\r\n    compiled() {\r\n        <span class=\"hljs-keyword\">var</span> options = <span class=\"hljs-keyword\">this</span>.$getAllChildren().filter((c: <span class=\"hljs-built_in\">any</span>) =&gt; {<span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'SelectOption'</span> == c.$options.name});\r\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; options.length; i++) {\r\n            <span class=\"hljs-keyword\">var</span> option = options[i];\r\n            <span class=\"hljs-keyword\">var</span> opt: <span class=\"hljs-built_in\">any</span> = <span class=\"hljs-keyword\">this</span>.createOption(option);\r\n            Vue.set(<span class=\"hljs-keyword\">this</span>.options, opt.value, opt);\r\n        }\r\n    }\r\n\r\n    ready() {\r\n       <span class=\"hljs-keyword\">this</span>.refreshDropdownOptions()\r\n    }\r\n\r\n    createOption(option: <span class=\"hljs-built_in\">any</span>) {\r\n        <span class=\"hljs-keyword\">var</span> content = option._slotContents ? option._slotContents.default : <span class=\"hljs-string\">''</span>;\r\n        <span class=\"hljs-keyword\">var</span> value = option.$data.value;\r\n        <span class=\"hljs-keyword\">var</span> disabled = option.$data.disabled;\r\n\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            content: content.textContent,\r\n            value: value,\r\n            disabled: disabled\r\n        };\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> multiple() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Array</span>.isArray(<span class=\"hljs-keyword\">this</span>.value);\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> valueContent() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Array</span>.isArray(<span class=\"hljs-keyword\">this</span>.value) ? <span class=\"hljs-keyword\">this</span>.valueContentMultiple : <span class=\"hljs-keyword\">this</span>.valueContentSingle;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> valueContentSingle() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.options[<span class=\"hljs-keyword\">this</span>.value] ? <span class=\"hljs-keyword\">this</span>.options[<span class=\"hljs-keyword\">this</span>.value].content : <span class=\"hljs-string\">''</span>;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> valueContentMultiple() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.value.length) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.value.map((value) =&gt; {\r\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.options[value] ? <span class=\"hljs-keyword\">this</span>.options[value].content : <span class=\"hljs-string\">''</span>;\r\n            }).join(<span class=\"hljs-string\">', '</span>);\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.options[<span class=\"hljs-keyword\">this</span>.defaultSelect] ? <span class=\"hljs-keyword\">this</span>.options[<span class=\"hljs-keyword\">this</span>.defaultSelect].content : <span class=\"hljs-string\">''</span>\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> field() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$els.field;\r\n    }\r\n\r\n    hasSlot(name = <span class=\"hljs-string\">'default'</span>) {\r\n        <span class=\"hljs-keyword\">return</span> name <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    refreshDropdownOptions() {\r\n        <span class=\"hljs-keyword\">var</span> options = <span class=\"hljs-built_in\">Array</span>.prototype.slice.call(<span class=\"hljs-keyword\">this</span>.field.options);\r\n        options.forEach((o: HTMLOptionElement) =&gt; {\r\n            <span class=\"hljs-keyword\">if</span> (o.selected) {\r\n                <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'option::select'</span>, o.value)\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.multiple) {\r\n                <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'option::unselect'</span>, o.value)\r\n            }\r\n        });\r\n    }\r\n\r\n    open(e) {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::open'</span>, e);\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'dropdown-list::close'</span>);\r\n        }\r\n    }\r\n}";

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-select input-field\"</span> <span class=\"hljs-attribute\">v-click-away</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot('icon-name')\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons prefix\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"select-wrapper\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"caret\"</span>&gt;</span>▼<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"open\"</span> <span class=\"hljs-attribute\">readonly</span>=<span class=\"hljs-value\">\"readonly\"</span> <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"valueContent\"</span>\r\n               <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"select-dropdown\"</span>&gt;</span>\r\n\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-list</span> <span class=\"hljs-attribute\">:active</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"select-dropdown\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">select</span> <span class=\"hljs-attribute\">v-el:field</span>\r\n                <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n                <span class=\"hljs-attribute\">v-bind-boolean:multiple</span>=<span class=\"hljs-value\">\"multiple\"</span>\r\n                <span class=\"hljs-attribute\">:placeholder</span>=<span class=\"hljs-value\">\"placeholder\"</span> <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span>\r\n                <span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"type\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">option</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"opt in options\"</span> <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"opt.value\"</span> <span class=\"hljs-attribute\">v-bind-boolean:disabled</span>=<span class=\"hljs-value\">\"opt.disabled\"</span>&gt;</span>{{opt.content}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">option</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">select</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot('label')\"</span> <span class=\"hljs-attribute\">:for</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"labelClasses\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-select</span> {\r\n  <span class=\"hljs-tag\">input</span><span class=\"hljs-class\">.select-dropdown</span> {\r\n    <span class=\"hljs-attribute\">color</span><span class=\"hljs-value\">: black;</span>\r\n  }\r\n\r\n  <span class=\"hljs-class\">.select-wrapper</span> {\r\n    <span class=\"hljs-class\">.select-dropdown</span> {\r\n      <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span> <span class=\"hljs-important\">!important</span>;</span>\r\n      <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span> <span class=\"hljs-important\">!important</span>;</span>\r\n    }\r\n  }\r\n}";

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> input from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">true</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'option::select'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.optionSelect(value);\r\n        },\r\n        <span class=\"hljs-string\">'option::unselect'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.optionUnselect(value);\r\n        }\r\n    },\r\n    directives: {\r\n        bindBoolean\r\n    },\r\n    mixins: [\r\n        input\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./option.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> SelectOption {\r\n    <span class=\"hljs-keyword\">private</span> $dispatch: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> multiple() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$parent.multiple;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            disabled: <span class=\"hljs-keyword\">this</span>.disabled,\r\n            active: <span class=\"hljs-keyword\">this</span>.active &amp;&amp; !<span class=\"hljs-keyword\">this</span>.disabled,\r\n            selected: <span class=\"hljs-keyword\">this</span>.active &amp;&amp; !<span class=\"hljs-keyword\">this</span>.disabled\r\n        };\r\n    }\r\n\r\n    toggle() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.select();\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">this</span>.unselect();\r\n        }\r\n    }\r\n\r\n    select() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active &amp;&amp; !<span class=\"hljs-keyword\">this</span>.disabled) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'select::select'</span>, <span class=\"hljs-keyword\">this</span>.value);\r\n        }\r\n    }\r\n\r\n    unselect() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active &amp;&amp; <span class=\"hljs-keyword\">this</span>.multiple) { <span class=\"hljs-comment\">// only multiple could be unselected</span>\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'select::unselect'</span>, <span class=\"hljs-keyword\">this</span>.value, <span class=\"hljs-keyword\">this</span>);\r\n        }\r\n    }\r\n\r\n    optionSelect(value) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.multiple) {\r\n            <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active &amp;&amp; <span class=\"hljs-keyword\">this</span>.value == value) {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.value == value) {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            }\r\n        }\r\n    }\r\n\r\n    optionUnselect(value) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.multiple) {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active &amp;&amp; <span class=\"hljs-keyword\">this</span>.value == value) {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.value == value) {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            }\r\n        }\r\n    }\r\n}";

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"toggle\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-show</span>=<span class=\"hljs-value\">\"multiple\"</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"active\"</span>\r\n               <span class=\"hljs-attribute\">v-bind-boolean:disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n               <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"checkbox\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"multiple\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        group: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">true</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./radio-group.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> RadioGroup {\r\n}";

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 296 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n<span class=\"hljs-keyword\">import</span> bindRaw from <span class=\"hljs-string\">'../../../directives/bind-raw'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        radioValue: {\r\n            required: <span class=\"hljs-literal\">true</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    directives: {\r\n        bindBoolean,\r\n        bindRaw\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./radio.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Radio {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    \r\n    <span class=\"hljs-keyword\">get</span> field() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$els.field;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> group() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$parent.group;\r\n    }\r\n\r\n    hasSlot(name = <span class=\"hljs-string\">'default'</span>) {\r\n        <span class=\"hljs-keyword\">return</span> name <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n}";

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-radio\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n           <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"radioValue\"</span>\r\n           <span class=\"hljs-attribute\">v-bind-boolean:disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n           <span class=\"hljs-attribute\">v-bind-boolean:checked</span>=<span class=\"hljs-value\">\"checked\"</span>\r\n           <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">:name</span>=<span class=\"hljs-value\">\"group\"</span>\r\n           <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"radio\"</span>/&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot()\"</span> <span class=\"hljs-attribute\">:for</span>=<span class=\"hljs-value\">\"id\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>";

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-radio</span><span class=\"hljs-class\">.with-gap</span> <span class=\"hljs-attr_selector\">[type=\"radio\"]</span><span class=\"hljs-pseudo\">:checked</span>+<span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span> {\r\n  <span class=\"hljs-attribute\">border-radius</span><span class=\"hljs-value\">: <span class=\"hljs-number\">50%</span>;</span>\r\n  <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#26a69a</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.md-radio</span><span class=\"hljs-class\">.with-gap</span> <span class=\"hljs-attr_selector\">[type=\"radio\"]</span><span class=\"hljs-pseudo\">:checked</span>+<span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n  <span class=\"hljs-attribute\">border-radius</span><span class=\"hljs-value\">: <span class=\"hljs-number\">50%</span>;</span>\r\n  <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#26a69a</span>;</span>\r\n  <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#26a69a</span>;</span>\r\n  <span class=\"hljs-attribute\">z-index</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n  -webkit-<span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">scale</span>(<span class=\"hljs-number\">0.5</span>);</span>\r\n  <span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">scale</span>(<span class=\"hljs-number\">0.5</span>);</span>\r\n}\r\n\r\n<span class=\"hljs-comment\">// todo collors sass</span>";

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        group: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">true</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./checkbox-group.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CheckboxGroup {\r\n}";

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        }\r\n    },\r\n    directives: {\r\n        bindBoolean\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./checkbox.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CheckboxField {\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> name: <span class=\"hljs-built_in\">string</span>;\r\n\r\n    hasSlot(name = <span class=\"hljs-string\">'default'</span>) {\r\n        <span class=\"hljs-keyword\">return</span> name <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>._slotContents;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> group() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$parent.$data.group;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> resolvedName() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.name || <span class=\"hljs-keyword\">this</span>.group;\r\n    }\r\n}";

/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-checkbox input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot('icon-name')\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons prefix\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n           <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span>\r\n           <span class=\"hljs-attribute\">:name</span>=<span class=\"hljs-value\">\"resolvedName\"</span>\r\n           <span class=\"hljs-attribute\">v-bind-boolean:disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n           <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"checkbox\"</span>/&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hasSlot()\"</span> <span class=\"hljs-attribute\">:for</span>=<span class=\"hljs-value\">\"id\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-checkbox</span><span class=\"hljs-class\">.filled-in</span> {\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">border-radius</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span>,\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">content</span><span class=\"hljs-value\">: <span class=\"hljs-string\">''</span>;</span>\r\n    <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n    <span class=\"hljs-attribute\">position</span><span class=\"hljs-value\">: absolute;</span>\r\n    <span class=\"hljs-comment\">/* .1s delay is for check animation */</span>\r\n    <span class=\"hljs-attribute\">transition</span><span class=\"hljs-value\">: border .<span class=\"hljs-number\">25s</span>, background-color .<span class=\"hljs-number\">25s</span>, width .<span class=\"hljs-number\">20s</span> .<span class=\"hljs-number\">1s</span>, height .<span class=\"hljs-number\">20s</span> .<span class=\"hljs-number\">1s</span>, top .<span class=\"hljs-number\">20s</span> .<span class=\"hljs-number\">1s</span>, left .<span class=\"hljs-number\">20s</span> .<span class=\"hljs-number\">1s</span>;</span>\r\n    <span class=\"hljs-attribute\">z-index</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:not</span>(<span class=\"hljs-pseudo\">:checked</span>) + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span> {\r\n    <span class=\"hljs-attribute\">width</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n    <span class=\"hljs-attribute\">height</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n    <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">3px</span> solid transparent;</span>\r\n    <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">6px</span>;</span>\r\n    <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">10px</span>;</span>\r\n    -webkit-<span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">rotateZ</span>(<span class=\"hljs-number\">37deg</span>);</span>\r\n    <span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">rotateZ</span>(<span class=\"hljs-number\">37deg</span>);</span>\r\n    -webkit-<span class=\"hljs-attribute\">transform-origin</span><span class=\"hljs-value\">: <span class=\"hljs-number\">20%</span> <span class=\"hljs-number\">40%</span>;</span>\r\n    <span class=\"hljs-attribute\">transform-origin</span><span class=\"hljs-value\">: <span class=\"hljs-number\">100%</span> <span class=\"hljs-number\">100%</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:not</span>(<span class=\"hljs-pseudo\">:checked</span>) + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">height</span><span class=\"hljs-value\">: <span class=\"hljs-number\">20px</span>;</span>\r\n    <span class=\"hljs-attribute\">width</span><span class=\"hljs-value\">: <span class=\"hljs-number\">20px</span>;</span>\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: transparent;</span>\r\n    <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#5a5a5a</span>;</span>\r\n    <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0px</span>;</span>\r\n    <span class=\"hljs-attribute\">z-index</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:checked</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span> {\r\n    <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n    <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1px</span>;</span>\r\n    <span class=\"hljs-attribute\">width</span><span class=\"hljs-value\">: <span class=\"hljs-number\">8px</span>;</span>\r\n    <span class=\"hljs-attribute\">height</span><span class=\"hljs-value\">: <span class=\"hljs-number\">13px</span>;</span>\r\n    <span class=\"hljs-attribute\">border-top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid transparent;</span>\r\n    <span class=\"hljs-attribute\">border-left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid transparent;</span>\r\n    <span class=\"hljs-attribute\">border-right</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#fff</span>;</span>\r\n    <span class=\"hljs-attribute\">border-bottom</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#fff</span>;</span>\r\n    -webkit-<span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">rotateZ</span>(<span class=\"hljs-number\">37deg</span>);</span>\r\n    <span class=\"hljs-attribute\">transform</span><span class=\"hljs-value\">: <span class=\"hljs-function\">rotateZ</span>(<span class=\"hljs-number\">37deg</span>);</span>\r\n    -webkit-<span class=\"hljs-attribute\">transform-origin</span><span class=\"hljs-value\">: <span class=\"hljs-number\">100%</span> <span class=\"hljs-number\">100%</span>;</span>\r\n    <span class=\"hljs-attribute\">transform-origin</span><span class=\"hljs-value\">: <span class=\"hljs-number\">100%</span> <span class=\"hljs-number\">100%</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:checked</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0px</span>;</span>\r\n    <span class=\"hljs-attribute\">width</span><span class=\"hljs-value\">: <span class=\"hljs-number\">20px</span>;</span>\r\n    <span class=\"hljs-attribute\">height</span><span class=\"hljs-value\">: <span class=\"hljs-number\">20px</span>;</span>\r\n    <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid <span class=\"hljs-hexcolor\">#26a69a</span>;</span>\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#26a69a</span>;</span>\r\n    <span class=\"hljs-attribute\">z-index</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:disabled</span><span class=\"hljs-pseudo\">:not</span>(<span class=\"hljs-pseudo\">:checked</span>) + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span> {\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: transparent;</span>\r\n    <span class=\"hljs-attribute\">border</span><span class=\"hljs-value\">: <span class=\"hljs-number\">2px</span> solid transparent;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:disabled</span><span class=\"hljs-pseudo\">:not</span>(<span class=\"hljs-pseudo\">:checked</span>) + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">border-color</span><span class=\"hljs-value\">: transparent;</span>\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#BDBDBD</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:disabled</span><span class=\"hljs-pseudo\">:checked</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:before</span> {\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: transparent;</span>\r\n  }\r\n\r\n  <span class=\"hljs-attr_selector\">[type=\"checkbox\"]</span><span class=\"hljs-pseudo\">:disabled</span><span class=\"hljs-pseudo\">:checked</span> + <span class=\"hljs-tag\">label</span><span class=\"hljs-pseudo\">:after</span> {\r\n    <span class=\"hljs-attribute\">background-color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#BDBDBD</span>;</span>\r\n    <span class=\"hljs-attribute\">border-color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#BDBDBD</span>;</span>\r\n  }\r\n}\r\n\r\n<span class=\"hljs-comment\">// todo sass properties</span>";

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    directives: {\r\n        bindBoolean\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./switch.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Switch {\r\n}";

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"switch\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"off\"</span>&gt;</span>Off<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n               <span class=\"hljs-attribute\">v-bind-boolean:disabled</span>=<span class=\"hljs-value\">\"disabled\"</span>\r\n               <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"checkbox\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lever\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"on\"</span>&gt;</span>On<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> inputMixin from <span class=\"hljs-string\">'../../../mixins/input'</span>;\r\n<span class=\"hljs-keyword\">import</span> bindBoolean from <span class=\"hljs-string\">'../../../directives/bind-boolean'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">true</span>\r\n        },\r\n        placeholder: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">''</span>\r\n        },\r\n        multiple: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    directives: {\r\n        bindBoolean\r\n    },\r\n    mixins: [\r\n        inputMixin\r\n    ],\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./file-input.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> FileInputField {\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    selectFile(e) {\r\n        <span class=\"hljs-keyword\">this</span>.value = <span class=\"hljs-built_in\">Array</span>.prototype.slice.call(e.target.files)\r\n            .map((f) =&gt; f.name)\r\n            .join(<span class=\"hljs-string\">', '</span>);\r\n    }\r\n}";

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"file-field input-field\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span>&gt;</span>File<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> @<span class=\"hljs-attribute\">change</span>=<span class=\"hljs-value\">\"selectFile\"</span> <span class=\"hljs-attribute\">:name</span>=<span class=\"hljs-value\">\"name\"</span>\r\n               <span class=\"hljs-attribute\">v-bind-boolean:multiple</span>=<span class=\"hljs-value\">\"multiple\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"file\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"file-path-wrapper\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"value\"</span>\r\n               <span class=\"hljs-attribute\">:placeholder</span>=<span class=\"hljs-value\">\"placeholder\"</span>\r\n               <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"file-path field\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/forms\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Input fields</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-input-fields></doc-input-fields>\r\n\r\n                <doc-snippet>{{{snippets.inputFields}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Icon Prefixes</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-input-icon-fields></doc-input-icon-fields>\r\n\r\n                <doc-snippet>{{{snippets.inputIconFields}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Textarea</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-textareas></doc-textareas>\r\n\r\n                <doc-snippet>{{{snippets.textareas}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Select</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-selects></doc-selects>\r\n\r\n                <doc-snippet>{{{snippets.selects}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Checkbox</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-checkboxes></doc-checkboxes>\r\n\r\n                <doc-snippet>{{{snippets.checkboxes}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Radio</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-radios></doc-radios>\r\n\r\n                <doc-snippet>{{{snippets.radios}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Switches</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-switches></doc-switches>\r\n\r\n                <doc-snippet>{{{snippets.switches}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">File input</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-file-inputs></doc-file-inputs>\r\n\r\n                <doc-snippet>{{{snippets.fileInputs}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var left_align_1 = __webpack_require__(310);
	var right_align_1 = __webpack_require__(312);
	var center_align_1 = __webpack_require__(314);
	var active_items_1 = __webpack_require__(316);
	var fixed_1 = __webpack_require__(318);
	var dropdown_1 = __webpack_require__(320);
	var icon_links_1 = __webpack_require__(322);
	var buttons_1 = __webpack_require__(324);
	var search_1 = __webpack_require__(326);
	var mobile_collapse_1 = __webpack_require__(328);
	var Navbars = (function () {
	    function Navbars() {}
	    Navbars.prototype.data = function () {
	        return {
	            api: [{
	                name: "Navbar",
	                api: __webpack_require__(330)
	            }, {
	                name: "Nav item",
	                api: __webpack_require__(331)
	            }, {
	                name: "Side nav",
	                api: __webpack_require__(332)
	            }],
	            snippets: {
	                navbarRight: __webpack_require__(333),
	                navbarLeft: __webpack_require__(334),
	                navbarCenter: __webpack_require__(335),
	                navbarActiveItems: __webpack_require__(336),
	                navbarFixed: __webpack_require__(337),
	                navbarDropdown: __webpack_require__(338),
	                navbarIconLinks: __webpack_require__(339),
	                navbarButtons: __webpack_require__(339),
	                navbarSearch: __webpack_require__(340),
	                navbarMobileCollapse: __webpack_require__(341)
	            },
	            src: [{
	                name: "Navbar",
	                script: __webpack_require__(342),
	                template: __webpack_require__(343),
	                style: __webpack_require__(344)
	            }, {
	                name: "Navbar item",
	                script: __webpack_require__(345),
	                template: __webpack_require__(346)
	            }, {
	                name: "Side nav",
	                script: __webpack_require__(347),
	                template: __webpack_require__(348),
	                style: __webpack_require__(349)
	            }]
	        };
	    };
	    Navbars = __decorate([vue_class_component_1["default"]({
	        components: {
	            docNavbarLeft: left_align_1["default"],
	            docNavbarRight: right_align_1["default"],
	            docNavbarCenter: center_align_1["default"],
	            docNavbarActiveItems: active_items_1["default"],
	            docNavbarFixed: fixed_1["default"],
	            docNavbarDropdown: dropdown_1["default"],
	            docNavbarIconLinks: icon_links_1["default"],
	            docNavbarButtons: buttons_1["default"],
	            docNavbarSearch: search_1["default"],
	            docNavbarMobileCollapse: mobile_collapse_1["default"]
	        },
	        template: __webpack_require__(350)
	    })], Navbars);
	    return Navbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var LeftAlignNavbars = (function () {
	    function LeftAlignNavbars() {}
	    LeftAlignNavbars.prototype.data = function () {
	        return {};
	    };
	    LeftAlignNavbars = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        },
	        template: __webpack_require__(311)
	    })], LeftAlignNavbars);
	    return LeftAlignNavbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LeftAlignNavbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 311 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" left>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var RightAlignNavbar = (function () {
	    function RightAlignNavbar() {}
	    RightAlignNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        },
	        template: __webpack_require__(313)
	    })], RightAlignNavbar);
	    return RightAlignNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RightAlignNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Right align</h2>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var CenterAlignNavbar = (function () {
	    function CenterAlignNavbar() {}
	    CenterAlignNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        },
	        template: __webpack_require__(315)
	    })], CenterAlignNavbar);
	    return CenterAlignNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CenterAlignNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" center left>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var ActiveItemNavbar = (function () {
	    function ActiveItemNavbar() {}
	    ActiveItemNavbar.prototype.data = function () {
	        return {
	            active: null
	        };
	    };
	    ActiveItemNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        },
	        template: __webpack_require__(317)
	    })], ActiveItemNavbar);
	    return ActiveItemNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ActiveItemNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 317 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    Active: {{active}}\r\n</div>\r\n<div class=\"row\">\r\n    <md-navbar :active.sync=\"active\" title=\"Logo\" show-active left center>\r\n        <md-nav-item name=\"sass\">Sass</md-nav-item>\r\n        <md-nav-item name=\"components\">Components</md-nav-item>\r\n        <md-nav-item name=\"js\" active>JavaScript</md-nav-item>\r\n    </md-navbar>\r\n</div>";

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var button_1 = __webpack_require__(25);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var snippet_1 = __webpack_require__(127);
	var FixedNavbars = (function () {
	    function FixedNavbars() {}
	    FixedNavbars.prototype.data = function () {
	        return {
	            showFixed: false
	        };
	    };
	    FixedNavbars.prototype.toggleFixed = function () {
	        this.showFixed = !this.showFixed;
	    };
	    FixedNavbars = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdButton: button_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdSnippet: snippet_1["default"]
	        },
	        template: __webpack_require__(319)
	    })], FixedNavbars);
	    return FixedNavbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FixedNavbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 319 */
/***/ function(module, exports) {

	module.exports = "<md-button @click=\"toggleFixed\">\r\n    Toggle display fixed menu\r\n</md-button>\r\n\r\n<div style=\"position: fixed; left: 0; top: 0; z-index: 1005;\">\r\n    <md-navbar title=\"Logo\" left fixed v-if=\"showFixed\" nav-class=\"blue darken-4\">\r\n        <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n        <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n        <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n        <md-nav-item>\r\n            <md-button slot=\"content\" @click=\"toggleFixed\">\r\n                Close\r\n            </md-button>\r\n        </md-nav-item>\r\n    </md-navbar>\r\n</div>\r\n";

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var dropdown_1 = __webpack_require__(59);
	var dropdown_item_1 = __webpack_require__(61);
	var dropdown_list_1 = __webpack_require__(60);
	var icon_1 = __webpack_require__(26);
	var events_1 = __webpack_require__(16);
	var DropdownNavbar = (function () {
	    function DropdownNavbar() {}
	    DropdownNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"],
	            mdDropdownList: dropdown_list_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(321)
	    })], DropdownNavbar);
	    return DropdownNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "<md-dropdown-list>\r\n    <md-dropdown-item closing>one</md-dropdown-item>\r\n    <md-dropdown-item closing>two</md-dropdown-item>\r\n    <md-dropdown-item class=\"divider\"></md-dropdown-item>\r\n    <md-dropdown-item closing>three</md-dropdown-item>\r\n</md-dropdown-list>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\" @click=\"broadcast('dropdown-list::open', $event)\">\r\n        Dropdown<md-icon right>arrow_drop_down</md-icon>\r\n    </md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(26);
	var IconLinksNavbar = (function () {
	    function IconLinksNavbar() {}
	    IconLinksNavbar.prototype.data = function () {
	        return {};
	    };
	    IconLinksNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(323)
	    })], IconLinksNavbar);
	    return IconLinksNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = IconLinksNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 323 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>search</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>view_module</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>refresh</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>more_vert</md-icon></md-nav-item>\r\n</md-navbar>\r\n\r\n<hr/>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon left>search</md-icon>Link with Left Icon</md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon right>view_module</md-icon>Link with Right Icon</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var badge_1 = __webpack_require__(23);
	var button_1 = __webpack_require__(25);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(26);
	var ButtonsNavbar = (function () {
	    function ButtonsNavbar() {}
	    ButtonsNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdBadge: badge_1["default"],
	            mdButton: button_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(325)
	    })], ButtonsNavbar);
	    return ButtonsNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ButtonsNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 325 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\">A link</md-nav-item>\r\n    <md-nav-item>\r\n        <md-button slot=\"content\" class=\"waves-effect waves-light\">A button</md-button>\r\n    </md-nav-item>\r\n    <md-nav-item>\r\n        <md-button slot=\"content\" class=\"waves-effect waves-light\" large>A large button</md-button>\r\n    </md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var navbar_1 = __webpack_require__(30);
	var icon_1 = __webpack_require__(26);
	var SearchNavbar = (function () {
	    function SearchNavbar() {}
	    SearchNavbar.prototype.data = function () {
	        return {};
	    };
	    SearchNavbar = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdNavbar: navbar_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(327)
	    })], SearchNavbar);
	    return SearchNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SearchNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Search</h2>\r\n\r\n<md-navbar>\r\n    <form slot=\"content\">\r\n        <!-- todo input field -->\r\n        <div class=\"input-field\">\r\n            <input id=\"search\" type=\"search\" required>\r\n            <label for=\"search\"><md-icon>search</md-icon></label>\r\n            <i class=\"material-icons\">close</i>\r\n        </div>\r\n    </form>\r\n</md-navbar>";

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var navbar_1 = __webpack_require__(30);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(26);
	var MobileCollase = (function () {
	    function MobileCollase() {}
	    MobileCollase.prototype.data = function () {
	        return {};
	    };
	    MobileCollase = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        template: __webpack_require__(329)
	    })], MobileCollase);
	    return MobileCollase;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = MobileCollase;
	//# sourceMappingURL=index.js.map

/***/ },
/* 329 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Mobile Collapse</h2>\r\n\r\n<md-navbar title=\"Logo\" hamburger mode=\"hide-on-med-and-down\">\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">Javascript</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('mobile.html')\">Mobile</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 330 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-navbar",
		"title": "Navbar",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "active",
				"type": "String",
				"required": false,
				"description": "Id of active nav item",
				"twoWay": null,
				"default": null
			},
			{
				"name": "title",
				"type": "String",
				"description": "Navbar title",
				"required": false,
				"twoWay": false,
				"default": "\"\""
			},
			{
				"name": "title-href",
				"type": "String",
				"description": "Href on title",
				"required": false,
				"default": "javascript:void(0)",
				"twoWay": false
			},
			{
				"name": "wrapper-class",
				"type": "Array | Object",
				"description": "Class of wrapper",
				"required": false,
				"default": null,
				"twoWay": false
			},
			{
				"name": "nav-class",
				"type": "Array | Object",
				"description": "Class of nav",
				"required": false,
				"default": null,
				"twoWay": false
			},
			{
				"name": "right",
				"type": "Boolean",
				"description": "Renders menu on right, title on left",
				"required": false,
				"default": false,
				"twoWay": false
			},
			{
				"name": "left",
				"type": "Boolean",
				"description": "Renders menu on left, title on left",
				"required": false,
				"default": false,
				"twoWay": false
			},
			{
				"name": "center",
				"type": "Boolean",
				"description": "Renders title on center (menu depends on left or righr)",
				"required": false,
				"default": false,
				"twoWay": false
			},
			{
				"name": "fixed",
				"type": "Boolean",
				"description": "Fixed menu",
				"required": false,
				"twoWay": false,
				"default": false
			},
			{
				"name": "hamburger",
				"type": "Boolean",
				"description": "Activates 'hamburger' mode. Side menu is available with small width",
				"required": false,
				"twoWay": false,
				"default": false
			},
			{
				"name": "mode",
				"type": "String",
				"description": "Mode of nav bar for example 'hide-on-med-and-down'",
				"required": false,
				"twoWay": false,
				"default": false
			},
			{
				"name": "close-on-click",
				"type": "Boolean",
				"description": "Closes side nav on after click.",
				"required": false,
				"twoWay": false,
				"default": true
			},
			{
				"name": "only-side-nav",
				"type": "Boolean",
				"description": "Renders only side menu (no items in nav bar). Useful with 'hamburger' true",
				"required": false,
				"twoWay": false,
				"default": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Navbar items"
			},
			{
				"name": "content",
				"description": "Whole content of nav. Includes logo and navs"
			},
			{
				"name": "logo",
				"description": "Logo part of nav"
			},
			{
				"name": "navs",
				"description": "Navs part, by default includes side nav if is present and nav in bar"
			}
		],
		"events": []
	};

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-nav-item",
		"title": "Nav item",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "active",
				"type": "String",
				"required": false,
				"description": "True if item is active",
				"twoWay": null,
				"default": false
			},
			{
				"name": "href",
				"type": "String",
				"required": false,
				"description": "Href of inner anchor",
				"twoWay": false,
				"default": "javascript:void(0)"
			},
			{
				"name": "name",
				"type": "String",
				"description": "Item name used as id",
				"required": false,
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Anchor label"
			},
			{
				"name": "content",
				"description": "Whole content of item"
			}
		],
		"events": []
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-badge",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "active",
				"type": "String",
				"required": false,
				"description": "Id of active item",
				"twoWay": null,
				"default": null
			},
			{
				"name": "show-active",
				"type": "Boolean",
				"description": "Marks active (last clicked) item of nav",
				"required": false,
				"twoWay": false,
				"default": "\"\""
			},
			{
				"name": "close-on-click",
				"type": "Boolean",
				"description": "Closes side nav on after click.",
				"required": false,
				"twoWay": false,
				"default": true
			},
			{
				"name": "fixed",
				"type": "Boolean",
				"description": "Enables fixed mode (always opened)",
				"required": false,
				"default": false,
				"twoWay": false
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Sidenav items"
			}
		],
		"events": []
	};

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 334 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">left</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">center</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 336 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">:active.sync</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">show-active</span> <span class=\"hljs-attribute\">left</span> <span class=\"hljs-attribute\">center</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"sass\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"components\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"js\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 337 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">left</span> <span class=\"hljs-attribute\">fixed</span> <span class=\"hljs-attribute\">nav-class</span>=<span class=\"hljs-value\">\"blue darken-4\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 338 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>one<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>two<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>three<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>\r\n                 @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('dropdown-list::open')\"</span>&gt;</span>\r\n        Dropdown<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>arrow_drop_down<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"actionscript\">\r\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">broadcast</span><span class=\"hljs-params\">(event, $event)</span> </span>{\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(event, $event);\r\n    }\r\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>";

/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>view_module<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>refresh<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>more_vert<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">left</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Link with Left Icon\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>view_module<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Link with Right Icon\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n";

/***/ },
/* 340 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"input-field\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"search\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"search\"</span> <span class=\"hljs-attribute\">required</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">for</span>=<span class=\"hljs-value\">\"search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>close<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">hamburger</span> <span class=\"hljs-attribute\">mode</span>=<span class=\"hljs-value\">\"hide-on-med-and-down\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Javascript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Mobile<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n";

/***/ },
/* 342 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdIcon from <span class=\"hljs-string\">'../icon'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdSidenav from <span class=\"hljs-string\">'../sidenav'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        active: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        showActive: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        title: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">''</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        titleHref: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">'javascript:void(0)'</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        right: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        left: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        center: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        fixed: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        navClass: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        hamburger: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        mode: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        closeOnClick: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        onlySideNav: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        wrapperClass: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdIcon,\r\n        mdSidenav\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'nav-item::activated'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id, content</span>) </span>{\r\n            <span class=\"hljs-comment\">// propagate event to children</span>\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'nav-item::activated'</span>, id);\r\n            <span class=\"hljs-keyword\">this</span>.active = id;\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.closeOnClick) {\r\n                <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'sidenav::close'</span>);\r\n            }\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./navbar.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Navbar {\r\n    <span class=\"hljs-keyword\">private</span> $broadcast: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> mode: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> right: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> left: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> center: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> logoClasses() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            center: <span class=\"hljs-keyword\">this</span>.center,\r\n            right: !<span class=\"hljs-keyword\">this</span>.center &amp;&amp; !<span class=\"hljs-keyword\">this</span>.right,\r\n            <span class=\"hljs-comment\">// left: !this.center &amp;&amp; !this.left - left is default</span>\r\n        };\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> listClasses() {\r\n        <span class=\"hljs-keyword\">var</span> classes: <span class=\"hljs-built_in\">any</span> = {\r\n            right: <span class=\"hljs-keyword\">this</span>.right,\r\n            left: <span class=\"hljs-keyword\">this</span>.left,\r\n        };\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.mode) {\r\n            classes[<span class=\"hljs-keyword\">this</span>.mode] = <span class=\"hljs-literal\">true</span>;\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> classes;\r\n    }\r\n    \r\n    openSideMenu() {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'sidenav::open'</span>);\r\n    }\r\n\r\n    closeSideMenu() {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'sidenav::close'</span>);\r\n    }\r\n}";

/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{'navbar-fixed': fixed}\"</span>\r\n     <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"fixed ? {position: 'absolute', top: 0}: {}\"</span>\r\n     <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-navbar\"</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">nav</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"navClass\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-wrapper\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"wrapperClass\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"logo\"</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"title\"</span>\r\n                       <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"titleHref\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"brand-logo\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"logoClasses\"</span>&gt;</span>\r\n                        {{title}}\r\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"hamburger\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"button-collapse\"</span>\r\n                       @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"openSideMenu\"</span>&gt;</span>\r\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>menu<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"navs\"</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"!onlySideNav\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"listClasses\"</span>&gt;</span>\r\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-sidenav</span> <span class=\"hljs-attribute\">:close-on-click</span>=<span class=\"hljs-value\">\"closeOnClick\"</span>&gt;</span> <span class=\"hljs-comment\">&lt;!-- only if is active --&gt;</span>\r\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-sidenav</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">nav</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n";

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-navbar</span> {\r\n  <span class=\"hljs-class\">.navbar-fixed</span> {\r\n    <span class=\"hljs-attribute\">position</span><span class=\"hljs-value\">: absolute;</span>\r\n    <span class=\"hljs-attribute\">top</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n  }\r\n}";

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        href: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">'javascript:void(0)'</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        active: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'nav-item::activated'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.showActive == <span class=\"hljs-literal\">true</span>) {\r\n                <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-keyword\">this</span>.id == id;\r\n            }\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./nav-item.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> NavItem {\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $dispatch: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _slotContents: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> _uid: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> name: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active == <span class=\"hljs-literal\">true</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'nav-item::activated'</span>, <span class=\"hljs-keyword\">this</span>.id);\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> id() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.name != <span class=\"hljs-literal\">null</span>) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.name;\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._uid;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> content() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>._slotContents ? <span class=\"hljs-keyword\">this</span>._slotContents.default : <span class=\"hljs-string\">''</span>;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> showActive() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$parent.showActive;\r\n    }\r\n\r\n    clicked() {\r\n        <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'nav-item::activated'</span>, <span class=\"hljs-keyword\">this</span>.id);\r\n    }\r\n}";

/***/ },
/* 346 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"clicked\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"href\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 347 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdSidenavOverlay from <span class=\"hljs-string\">'../sidenav-overlay'</span>;\r\n\r\n<span class=\"hljs-keyword\">const</span> ESC = <span class=\"hljs-number\">27</span>;\r\n\r\n@Component({\r\n    props: {\r\n        closeOnClick: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        active: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        showActive: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        fixed: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'sidenav::open'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.open();\r\n        },\r\n        <span class=\"hljs-string\">'sidenav::close'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$nextTick(<span class=\"hljs-keyword\">this</span>.close); <span class=\"hljs-comment\">// delay close due events</span>\r\n        },\r\n        <span class=\"hljs-string\">'nav-item::activated'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'nav-item::activated'</span>, id);\r\n        }\r\n    },\r\n    components: {\r\n        mdSidenavOverlay\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./sidenav.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> SideNav {\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> fixed: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> closeOnClick: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-keyword\">this</span>.fixed || <span class=\"hljs-keyword\">this</span>.active;\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.fixed) {\r\n            <span class=\"hljs-built_in\">window</span>.document.addEventListener(<span class=\"hljs-string\">'keydown'</span>, (evt: <span class=\"hljs-built_in\">any</span>) =&gt; {\r\n                evt = evt || <span class=\"hljs-built_in\">window</span>.event;\r\n                <span class=\"hljs-keyword\">if</span> (evt.keyCode == ESC) {\r\n                    <span class=\"hljs-keyword\">this</span>.close();\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedStyle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">return</span> {\r\n                left: <span class=\"hljs-number\">0</span>\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\r\n    }\r\n\r\n    open() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n        }\r\n    }\r\n\r\n    closeIfNecessary() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.closeOnClick) {\r\n            <span class=\"hljs-keyword\">this</span>.close();\r\n        }\r\n    }\r\n}";

/***/ },
/* 348 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-sidenav\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"side-nav\"</span> <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"computedStyle\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{fixed: fixed}\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"side-nav\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"!fixed\"</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-sidenav-overlay</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"modal-overlay\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-sidenav-overlay</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n";

/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-sidenav</span> {\r\n  <span class=\"hljs-class\">.side-nav-transition</span> {\r\n    -webkit-<span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n    <span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n\r\n    -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.35s</span>;</span>\r\n    <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.35s</span>;</span>\r\n\r\n    -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInLeft;</span>\r\n    <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInLeft;</span>\r\n  }\r\n\r\n  <span class=\"hljs-class\">.side-nav-enter</span>, <span class=\"hljs-class\">.side-nav-leave</span> {\r\n    <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: -<span class=\"hljs-number\">105%</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-class\">.side-nav-leave</span> {\r\n    -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n    <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n\r\n    -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutLeft;</span>\r\n    <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutLeft;</span>\r\n  }\r\n\r\n  <span class=\"hljs-tag\">li</span><span class=\"hljs-class\">.active</span>, <span class=\"hljs-tag\">li</span> <span class=\"hljs-class\">.active</span> {\r\n    <span class=\"hljs-attribute\">color</span><span class=\"hljs-value\">: <span class=\"hljs-hexcolor\">#2bbbad</span>;</span>\r\n  }\r\n}";

/***/ },
/* 350 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/navbars\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Active items</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-active-items></doc-navbar-active-items>\r\n                <doc-snippet>{{{snippets.navbarActiveItems}}}</doc-snippet>\r\n            </div>\r\n\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-right></doc-navbar-right>\r\n                <doc-snippet>{{{snippets.navbarRight}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Left Aligned</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-left></doc-navbar-left>\r\n                <doc-snippet>{{{snippets.navbarLeft}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Center Aligned</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-center></doc-navbar-center>\r\n                <doc-snippet>{{{snippets.navbarCenter}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Fixes</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-fixed></doc-navbar-fixed>\r\n                <doc-snippet>{{{snippets.navbarFixed}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Dropdown Menu</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-dropdown></doc-navbar-dropdown>\r\n                <doc-snippet>{{{snippets.navbarDropdown}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Icon Links</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-icon-links></doc-navbar-icon-links>\r\n                <doc-snippet>{{{snippets.navbarIconLinks}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Buttons</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-buttons></doc-navbar-buttons>\r\n                <doc-snippet>{{{snippets.navbarButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-search></doc-navbar-search>\r\n                <doc-snippet>{{{snippets.navbarSearch}}}</doc-snippet>\r\n            </div>\r\n\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-mobile-collapse></doc-navbar-mobile-collapse>\r\n                <doc-snippet>{{{snippets.navbarMobileCollapse}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var snippet_1 = __webpack_require__(127);
	var default_1 = __webpack_require__(352);
	var fixed_footer_1 = __webpack_require__(354);
	var bottom_1 = __webpack_require__(356);
	var events_1 = __webpack_require__(16);
	var Modals = (function () {
	    function Modals() {}
	    Modals.prototype.data = function () {
	        return {
	            api: __webpack_require__(358),
	            snippets: {
	                defaultModal: __webpack_require__(359),
	                fixedFooterModal: __webpack_require__(360),
	                bottomModal: __webpack_require__(361)
	            },
	            src: {
	                script: __webpack_require__(362),
	                template: __webpack_require__(363),
	                style: __webpack_require__(364)
	            }
	        };
	    };
	    Modals = __decorate([vue_class_component_1["default"]({
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultModal: default_1["default"],
	            docFixedFooterModal: fixed_footer_1["default"],
	            docBottomModal: bottom_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(365)
	    })], Modals);
	    return Modals;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modals;
	//# sourceMappingURL=index.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var modal_1 = __webpack_require__(93);
	var events_1 = __webpack_require__(16);
	var DefaultModal = (function () {
	    function DefaultModal() {}
	    DefaultModal.prototype.data = function () {
	        return {
	            closeResult: ''
	        };
	    };
	    DefaultModal = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(353)
	    })], DefaultModal);
	    return DefaultModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 353 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <p>\r\n        Close result: {{closeResult}}\r\n    </p>\r\n    <md-modal :result.sync=\"closeResult\">\r\n        <h4>Modal Header</h4>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n\r\n        <span slot=\"footer\">\r\n            <md-button href=\"#\" class=\"waves-effect waves-green btn-flat\"\r\n                       @click.prevent=\"broadcast('modal::close', 'agree')\">\r\n                Agree\r\n            </md-button>\r\n            <md-button href=\"#\" class=\"waves-effect waves-green btn-flat\"\r\n                       @click.prevent=\"broadcast('modal::close', 'disagree')\">\r\n                Disagree\r\n            </md-button>\r\n        </span>\r\n    </md-modal>\r\n\r\n    <md-button href=\"#\"\r\n               @click.prevent=\"broadcast('modal::open')\">\r\n        Modal\r\n    </md-button>\r\n</div>";

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var button_1 = __webpack_require__(25);
	var modal_1 = __webpack_require__(93);
	var events_1 = __webpack_require__(16);
	var FifexFooterModal = (function () {
	    function FifexFooterModal() {}
	    FifexFooterModal = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(355)
	    })], FifexFooterModal);
	    return FifexFooterModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FifexFooterModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = "<md-modal class=\"modal-fixed-footer\">\r\n    <h4>Modal Header</h4>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n\r\n    <span slot=\"footer\">\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Agree\r\n        </md-button>\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Diagree\r\n        </md-button>\r\n    </span>\r\n</md-modal>\r\n\r\n<md-button href=\"javascript:void(0)\"\r\n     @click=\"broadcast('modal::open')\">\r\n    Modal - fixed footer\r\n</md-button>\r\n";

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var collection_1 = __webpack_require__(51);
	var collection_item_1 = __webpack_require__(55);
	var button_1 = __webpack_require__(25);
	var modal_1 = __webpack_require__(93);
	var icon_1 = __webpack_require__(26);
	var events_1 = __webpack_require__(16);
	var BottomModal = (function () {
	    function BottomModal() {}
	    BottomModal = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"],
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(357)
	    })], BottomModal);
	    return BottomModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = BottomModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 357 */
/***/ function(module, exports) {

	module.exports = "<md-modal bottom>\r\n    <md-collection>\r\n        <md-collection-item class=\"avatar\">\r\n            <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle\">folder</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle green\">assessment</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle red\">play_arrow</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n    </md-collection>\r\n</md-modal>\r\n\r\n<md-button href=\"javascript:void(0)\"\r\n     @click=\"broadcast('modal::open')\">\r\n    Modal - bottom style\r\n</md-button>";

/***/ },
/* 358 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-modal",
		"title": "Modal",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "id",
				"type": "String",
				"required": false,
				"description": "Id of modal",
				"twoWay": false,
				"default": null
			},
			{
				"name": "result",
				"type": "String",
				"required": false,
				"description": "Result of modal close",
				"twoWay": null,
				"default": null
			},
			{
				"name": "class",
				"type": "String",
				"required": false,
				"description": "Css class",
				"twoWay": false,
				"default": null
			},
			{
				"name": "bottom",
				"type": "Boolean",
				"required": false,
				"description": "Bottom dialog mode",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Modal content"
			},
			{
				"name": "footer",
				"description": "Modal footer content"
			},
			{
				"name": "content",
				"description": "Full content - modal body and footer"
			}
		],
		"events": [
			{
				"name": "modal::open",
				"description": "Event opens modal",
				"type": "in"
			},
			{
				"name": "modal::close",
				"description": "Event closes modal and is fired on close",
				"type": "in",
				"args": [
					{
						"name": "result",
						"description": "Result of close"
					},
					{
						"name": "id",
						"description": "Modal id to close"
					}
				]
			}
		]
	};

/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">:result.sync</span>=<span class=\"hljs-value\">\"result\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n                   @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::close', 'agree')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 360 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"modal-fixed-footer\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n                   @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::close')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - fixed footer\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n";

/***/ },
/* 361 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- Simple --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">bottom</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n                   @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::close')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>\r\n           @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - bottom style\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- Complex --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">bottom</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n        ...\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle red\"</span>&gt;</span>play_arrow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - bottom style\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 362 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdLeanOverlay from <span class=\"hljs-string\">'../lean-overlay'</span>;\r\n\r\n<span class=\"hljs-keyword\">const</span> ESC = <span class=\"hljs-number\">27</span>;\r\n\r\n@Component({\r\n    props: {\r\n        id: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        result: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        <span class=\"hljs-string\">'class'</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-string\">''</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        bottom: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdLeanOverlay\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'modal::open'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.id === <span class=\"hljs-literal\">null</span> || <span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>.id === <span class=\"hljs-string\">\"undefined\"</span>) {\r\n                <span class=\"hljs-keyword\">this</span>.open();\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.id == id) {\r\n                <span class=\"hljs-keyword\">this</span>.open();\r\n            }\r\n        },\r\n        <span class=\"hljs-string\">'modal::close'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">result, id</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> ((<span class=\"hljs-keyword\">this</span>.id === <span class=\"hljs-literal\">null</span> || <span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>.id === <span class=\"hljs-string\">\"undefined\"</span>) \r\n                || (<span class=\"hljs-keyword\">this</span>.id == id)) {\r\n                <span class=\"hljs-keyword\">this</span>.close();\r\n                <span class=\"hljs-keyword\">this</span>.result = result;\r\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n            }\r\n        }\r\n    },\r\n    watch: {\r\n        active: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">active</span>) </span>{\r\n            <span class=\"hljs-keyword\">if</span> (active) {\r\n                <span class=\"hljs-built_in\">window</span>.document.body.style.overflow = <span class=\"hljs-string\">'hidden'</span>;\r\n            }\r\n            <span class=\"hljs-keyword\">else</span> {\r\n                <span class=\"hljs-built_in\">window</span>.document.body.style.overflow = <span class=\"hljs-string\">'visible'</span>;\r\n            }\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./modal.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Modal {\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> bottom: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">class</span>: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> result: <span class=\"hljs-built_in\">string</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    ready() {\r\n        <span class=\"hljs-built_in\">window</span>.document.addEventListener(<span class=\"hljs-string\">'keydown'</span>, (evt: <span class=\"hljs-built_in\">any</span>) =&gt; {\r\n            evt = evt || <span class=\"hljs-built_in\">window</span>.event;\r\n            <span class=\"hljs-keyword\">if</span> (evt.keyCode == ESC) {\r\n                <span class=\"hljs-keyword\">this</span>.close();\r\n            }\r\n        });\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedStyle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.bottom ? {\r\n                <span class=\"hljs-string\">'z-index'</span>: <span class=\"hljs-number\">1003</span>,\r\n                <span class=\"hljs-string\">'display'</span>: <span class=\"hljs-string\">'block'</span>,\r\n                <span class=\"hljs-string\">'opacity'</span>: <span class=\"hljs-number\">1</span>,\r\n                <span class=\"hljs-string\">'bottom'</span>: <span class=\"hljs-string\">'0px'</span>\r\n            } : {\r\n                <span class=\"hljs-string\">'z-index'</span>: <span class=\"hljs-number\">1003</span>,\r\n                <span class=\"hljs-string\">'display'</span>: <span class=\"hljs-string\">'block'</span>,\r\n                <span class=\"hljs-string\">'top'</span>: <span class=\"hljs-string\">'10%'</span>\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">var</span> classes = <span class=\"hljs-string\">''</span>;\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.class) {\r\n            classes += <span class=\"hljs-keyword\">this</span>.class;\r\n        }\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.bottom) {\r\n            classes += <span class=\"hljs-string\">' '</span>;\r\n            classes += <span class=\"hljs-string\">'bottom-sheet'</span>;\r\n        }\r\n        <span class=\"hljs-keyword\">return</span> classes;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> transition() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.bottom ? <span class=\"hljs-string\">'modal-bottom'</span> : <span class=\"hljs-string\">'modal'</span>;\r\n    }\r\n\r\n    open() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">this</span>.result = <span class=\"hljs-literal\">null</span>;\r\n        }\r\n    }\r\n}";

/***/ },
/* 363 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">:id</span>=<span class=\"hljs-value\">\"id\"</span> <span class=\"hljs-attribute\">:transition</span>=<span class=\"hljs-value\">\"transition\"</span>\r\n     <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"computedStyle\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"modal\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"modal-content\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"modal-footer\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-lean-overlay</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"modal-overlay\"</span>\r\n                 @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-lean-overlay</span>&gt;</span>";

/***/ },
/* 364 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.modal-overlay-transition</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n  <span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeIn-<span class=\"hljs-number\">0</span>-<span class=\"hljs-number\">5</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeIn-<span class=\"hljs-number\">0</span>-<span class=\"hljs-number\">5</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-overlay-enter</span>, <span class=\"hljs-class\">.modal-overlay-leave</span> {\r\n  <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-overlay-leave</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut-<span class=\"hljs-number\">0</span>-<span class=\"hljs-number\">5</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut-<span class=\"hljs-number\">0</span>-<span class=\"hljs-number\">5</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-transition</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n  <span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: zoomIn;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: zoomIn;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-leave</span> {\r\n  <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-leave</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: fadeOut;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-bottom-transition</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n  <span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.3s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInUp;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInUp;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-bottom-leave</span> {\r\n  <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.modal-bottom-leave</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0.2s</span>;</span>\r\n\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutDown;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutDown;</span>\r\n}\r\n";

/***/ },
/* 365 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/modals\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Modal</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-modal></doc-default-modal>\r\n\r\n                <doc-snippet>{{{snippets.defaultModal}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Modal - fixed footer</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fixed-footer-modal></doc-fixed-footer-modal>\r\n\r\n                <doc-snippet>{{{snippets.fixedFooterModal}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Modal - bottom</h2>\r\n            <p>\r\n                <!--TODO: warn keep modals in different component due events-->\r\n            </p>\r\n            <div class=\"doc-example\">\r\n                <doc-bottom-modal></doc-bottom-modal>\r\n\r\n                <doc-snippet>{{{snippets.bottomModal}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var chip_1 = __webpack_require__(43);
	var toasts_1 = __webpack_require__(367);
	var tooltips_1 = __webpack_require__(369);
	var Dialogs = (function () {
	    function Dialogs() {}
	    Dialogs.prototype.data = function () {
	        return {
	            api: [{
	                name: 'Toast',
	                api: __webpack_require__(371)
	            }, {
	                name: 'Tooltip',
	                api: __webpack_require__(372)
	            }],
	            snippets: {
	                toasts: __webpack_require__(373),
	                tooltips: __webpack_require__(374)
	            },
	            src: [{
	                name: 'Toast',
	                script: __webpack_require__(375)
	            }, {
	                name: 'Tooltip',
	                script: __webpack_require__(376)
	            }]
	        };
	    };
	    Dialogs = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdChip: chip_1["default"],
	            docToasts: toasts_1["default"],
	            docTooltips: tooltips_1["default"]
	        },
	        template: __webpack_require__(377)
	    })], Dialogs);
	    return Dialogs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dialogs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var toast_1 = __webpack_require__(18);
	var button_1 = __webpack_require__(25);
	var Toasts = (function () {
	    function Toasts() {}
	    Toasts.prototype.makeAToast = function (msg) {
	        this.toast(msg, 4000, '', function () {
	            alert('Your toast was dismissed');
	        });
	    };
	    Toasts = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdButton: button_1["default"]
	        },
	        mixins: [toast_1["default"]],
	        template: __webpack_require__(368)
	    })], Toasts);
	    return Toasts;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Toasts;
	//# sourceMappingURL=index.js.map

/***/ },
/* 368 */
/***/ function(module, exports) {

	module.exports = "<p>\r\n    <md-button @click=\"toast('I am a toast!', 4000)\">\r\n        TOAST!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"toast('<span>I am toast content</span>', 5000)\">\r\n        TOAST with content!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"makeAToast('I am toast')\">\r\n        TOAST with callback!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"toast('I am a toast!', 3000, 'rounded')\">\r\n        Rounded TOAST\r\n    </md-button>\r\n</p>\r\n\r\n";

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var tooltip_1 = __webpack_require__(21);
	var button_1 = __webpack_require__(25);
	var Tooltips = (function () {
	    function Tooltips() {}
	    Tooltips = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdButton: button_1["default"]
	        },
	        mixins: [tooltip_1["default"]],
	        template: __webpack_require__(370)
	    })], Tooltips);
	    return Tooltips;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tooltips;
	//# sourceMappingURL=index.js.map

/***/ },
/* 370 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am bottom tooltip!', 'bottom')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            BOTTOM\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am top tooltip!', 'top')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            TOP\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am left tooltip!', 'left')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            LEFT\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am right tooltip!', 'right')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            RIGHT\r\n        </md-button>\r\n    </p>\r\n</div>\r\n";

/***/ },
/* 371 */
/***/ function(module, exports) {

	module.exports = {
		"name": "toast",
		"title": "Toast",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"tags": [
			"Mixin"
		],
		"properties": [
			{
				"name": "message",
				"type": "String",
				"required": true,
				"description": "Message of tooltip",
				"twoWay": false,
				"default": null
			},
			{
				"name": "displayLength",
				"type": "Number",
				"required": false,
				"description": "Duration how long is toast displayed in ms",
				"twoWay": false,
				"default": 4000
			},
			{
				"name": "className",
				"type": "String",
				"required": false,
				"description": "Classes passed to rendered toast",
				"twoWay": false,
				"default": null
			},
			{
				"name": "completeCallback",
				"type": "Function",
				"required": false,
				"description": "On complete call back",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 372 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tooltip",
		"title": "Tooltip",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"tags": [
			"Mixin"
		],
		"properties": [
			{
				"name": "event",
				"type": "Event",
				"required": true,
				"description": "Event passed to @mouseover",
				"twoWay": false,
				"default": null
			},
			{
				"name": "message",
				"type": "String",
				"required": true,
				"description": "String of tooltip",
				"twoWay": false,
				"default": null
			},
			{
				"name": "position",
				"type": "String",
				"required": false,
				"description": "Top, bottom, left or right value",
				"twoWay": false,
				"default": "bottom"
			},
			{
				"name": "delay",
				"type": "String",
				"required": false,
				"description": "Delay of tooltip popup in ms",
				"twoWay": false,
				"default": 50
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('I am a toast!', 4000)\"</span>&gt;</span>\r\n    TOAST!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('&lt;span&gt;I am toast content&lt;/span&gt;', 5000)\"</span>&gt;</span>\r\n    TOAST with content!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"makeAToast('I am toast')\"</span>&gt;</span>\r\n    // makeATast: function(msg) {\r\n    //   this.toast(msg, 4000, '', function() {\r\n    //     alert('Your toast was dismissed');\r\n    //   })\r\n    // }\r\n    TOAST with callback!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('I am a toast!', 3000, 'rounded')\"</span>&gt;</span>\r\n    Rounded TOAST\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n\r\n";

/***/ },
/* 374 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">mouseover</span>=<span class=\"hljs-value\">\"tooltip($event, 'I am right tooltip!', 'bottom')\"</span>&gt;</span>\r\n    BOTTOM\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 375 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> {toast as toastFn} from <span class=\"hljs-string\">'../../materialize/toast'</span>;\r\n\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\r\n    methods: {\r\n        toast: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">message, displayLength, className, completeCallback</span>) </span>{\r\n            <span class=\"hljs-keyword\">return</span> toastFn(message, displayLength, className, completeCallback);\r\n        }\r\n    }\r\n}";

/***/ },
/* 376 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> tooltip from <span class=\"hljs-string\">'../../materialize/tooltip'</span>;\r\n\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\r\n    methods: {\r\n        tooltip: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">event, message, position, delay</span>) </span>{\r\n            <span class=\"hljs-keyword\">var</span> element = event.currentTarget;\r\n            <span class=\"hljs-keyword\">return</span> tooltip(element, message, position, delay)\r\n        }\r\n    }\r\n}";

/***/ },
/* 377 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <md-chip>Mixin</md-chip>\r\n    <doc-tabs base-path=\"/dialogs\">\r\n        <div slot=\"showcase\">\r\n\r\n            <h2 class=\"header\">Toasts</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-toasts></doc-toasts>\r\n\r\n                <doc-snippet>{{{snippets.toasts}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Tooltips</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-tooltips></doc-tooltips>\r\n\r\n                <doc-snippet>{{{snippets.tooltips}}}</doc-snippet>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n</doc-tabs>\r\n</div>";

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var snippet_1 = __webpack_require__(127);
	var images_1 = __webpack_require__(379);
	var sliders_1 = __webpack_require__(381);
	var Media = (function () {
	    function Media() {}
	    Media.prototype.data = function () {
	        return {
	            api: [{
	                'name': 'Image',
	                'api': __webpack_require__(383)
	            }, {
	                'name': 'Slider',
	                'api': __webpack_require__(384)
	            }, {
	                'name': 'Slide',
	                'api': __webpack_require__(385)
	            }],
	            snippets: {
	                images: __webpack_require__(386),
	                slides: __webpack_require__(387)
	            },
	            src: [{
	                name: "Image",
	                script: __webpack_require__(388),
	                template: __webpack_require__(389),
	                style: __webpack_require__(390)
	            }, {
	                name: "Slider",
	                script: __webpack_require__(391),
	                template: __webpack_require__(392),
	                style: __webpack_require__(393)
	            }, {
	                name: "Slide",
	                script: __webpack_require__(394),
	                template: __webpack_require__(395)
	            }]
	        };
	    };
	    Media = __decorate([vue_class_component_1["default"]({
	        components: {
	            docSnippet: snippet_1["default"],
	            docImages: images_1["default"],
	            docSliders: sliders_1["default"]
	        },
	        template: __webpack_require__(396)
	    })], Media);
	    return Media;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Media;
	//# sourceMappingURL=index.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var image_1 = __webpack_require__(86);
	var Image = (function () {
	    function Image() {}
	    Image = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdImage: image_1["default"]
	        },
	        template: __webpack_require__(380)
	    })], Image);
	    return Image;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Image;
	//# sourceMappingURL=index.js.map

/***/ },
/* 380 */
/***/ function(module, exports) {

	module.exports = "<md-image src=\"assets/images/tiger.jpg\" width=\"512\" height=\"512\"></md-image>\r\n\r\n<md-image src=\"assets/images/tigers.jpg\"\r\n          caption=\"A picture ...\"\r\n          width=\"256\" height=\"512\"></md-image>\r\n";

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var slider_1 = __webpack_require__(101);
	var slide_1 = __webpack_require__(99);
	var Slides = (function () {
	    function Slides() {}
	    Slides = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdSlider: slider_1["default"],
	            mdSlide: slide_1["default"]
	        },
	        template: __webpack_require__(382)
	    })], Slides);
	    return Slides;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slides;
	//# sourceMappingURL=index.js.map

/***/ },
/* 382 */
/***/ function(module, exports) {

	module.exports = "<md-slider>\r\n    <md-slide img=\"assets/images/nature1.jpg\" align=\"left\">\r\n        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>\r\n    </md-slide>\r\n    <md-slide img=\"assets/images/nature2.jpg\" align=\"right\">\r\n        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h3>\r\n    </md-slide>\r\n    <md-slide img=\"assets/images/nature3.jpg\" align=\"center\">\r\n        <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h3>\r\n    </md-slide>\r\n    <md-slide img=\"assets/images/nature4.jpg\" align=\"left\">\r\n        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>\r\n    </md-slide>\r\n</md-slider>";

/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-image",
		"title": "Image",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "src",
				"type": "String",
				"required": true,
				"description": "Image source",
				"twoWay": false,
				"default": null
			},
			{
				"name": "caption",
				"type": "String",
				"description": "Image caption",
				"required": false,
				"twoWay": false,
				"default": null
			},
			{
				"name": "height",
				"type": "String",
				"description": "Image height",
				"required": false,
				"twoWay": false,
				"default": null
			},
			{
				"name": "width",
				"type": "String",
				"description": "Image width",
				"required": false,
				"twoWay": false,
				"default": null
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 384 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-slider",
		"title": "Slider",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "interval",
				"type": "Number",
				"required": false,
				"description": "Interval between slides",
				"twoWay": false,
				"default": 4000
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Slides"
			}
		],
		"events": []
	};

/***/ },
/* 385 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-slide",
		"title": "Slide",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "img",
				"type": "String",
				"required": false,
				"description": "Slide image",
				"twoWay": false,
				"default": null
			},
			{
				"name": "align",
				"type": "String",
				"required": false,
				"description": "Text align",
				"twoWay": false,
				"default": "\"\""
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Content of slide"
			}
		],
		"events": []
	};

/***/ },
/* 386 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-image</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lorempixel.com/512/512/\"</span>\r\n          <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">\"512\"</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">\"512\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-image</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-image</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lorempixel.com/512/1024/\"</span>\r\n          <span class=\"hljs-attribute\">caption</span>=<span class=\"hljs-value\">\"A picture ...\"</span>\r\n          <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">\"256\"</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">\"512\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-image</span>&gt;</span>\r\n";

/***/ },
/* 387 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slider</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"nature/1\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Lorem ipsum dolor sit ...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"nature/2\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"right\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Ut enim ad minim veniam ...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"nature/3\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"center\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Duis aute irure dolor in reprehenderit ...<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"nature/4\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Excepteur sint occaecat cupidatat .<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slider</span>&gt;</span>";

/***/ },
/* 388 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n<span class=\"hljs-keyword\">import</span> MaterialBox from <span class=\"hljs-string\">'../../materialize/materialbox'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdLeanOverlay from <span class=\"hljs-string\">'../lean-overlay'</span>;\r\n\r\n<span class=\"hljs-keyword\">const</span> ESC = <span class=\"hljs-number\">27</span>;\r\n\r\n@Component({\r\n    props: {\r\n        src: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        caption: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        height: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        width: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdLeanOverlay\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./image.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Image {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> src: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> materialBox: MaterialBox;\r\n    <span class=\"hljs-keyword\">private</span> originalSizes: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    }\r\n\r\n    compiled(){\r\n        <span class=\"hljs-keyword\">this</span>.$els.img.setAttribute(<span class=\"hljs-string\">'src'</span>, <span class=\"hljs-keyword\">this</span>.src);\r\n    }\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">var</span> img = <span class=\"hljs-keyword\">this</span>.$els.img;\r\n        <span class=\"hljs-keyword\">var</span> placeholder = <span class=\"hljs-keyword\">this</span>.$els.placeholder;\r\n        <span class=\"hljs-keyword\">this</span>.materialBox = <span class=\"hljs-keyword\">new</span> MaterialBox(img, placeholder);\r\n        <span class=\"hljs-comment\">// Return on ESC</span>\r\n        <span class=\"hljs-built_in\">window</span>.addEventListener(<span class=\"hljs-string\">'keyup'</span>, (e) =&gt; {\r\n            <span class=\"hljs-keyword\">if</span> (e.keyCode === ESC) {\r\n                <span class=\"hljs-keyword\">this</span>.close();\r\n            }\r\n        });\r\n        <span class=\"hljs-built_in\">window</span>.addEventListener(<span class=\"hljs-string\">\"scroll\"</span>, () =&gt; {\r\n            <span class=\"hljs-keyword\">this</span>.close();\r\n        });\r\n    }\r\n\r\n    toggle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.close()\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">this</span>.maximialize();\r\n        }\r\n    }\r\n\r\n    maximialize() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">true</span>;\r\n            <span class=\"hljs-keyword\">this</span>.originalSizes = <span class=\"hljs-keyword\">this</span>.getSizes();\r\n            <span class=\"hljs-keyword\">this</span>.materialBox.maximalize(<span class=\"hljs-keyword\">this</span>.originalSizes);\r\n        }\r\n    }\r\n\r\n    close() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.active) {\r\n            <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-literal\">false</span>;\r\n            <span class=\"hljs-keyword\">this</span>.materialBox.close(<span class=\"hljs-keyword\">this</span>.originalSizes);\r\n        }\r\n    }\r\n\r\n     getSizes() {\r\n        <span class=\"hljs-keyword\">var</span> el: HTMLElement = <span class=\"hljs-keyword\">this</span>.$els.img;\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            width: el.offsetWidth,\r\n            height: el.offsetHeight,\r\n            left: el.offsetLeft,\r\n            top: el.offsetTop\r\n        }\r\n    }\r\n}";

/***/ },
/* 389 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-image\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-el:placeholder</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-placeholder\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toggle\"</span> <span class=\"hljs-attribute\">:height</span>=<span class=\"hljs-value\">\"height\"</span> <span class=\"hljs-attribute\">:width</span>=<span class=\"hljs-value\">\"width\"</span>\r\n             <span class=\"hljs-attribute\">v-el:img</span>\r\n             <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"materialboxed\"</span>\r\n             <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: active}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-lean-overlay</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active\"</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toggle\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"modal-overlay\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-lean-overlay</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"active &amp;&amp; caption\"</span> <span class=\"hljs-attribute\">transition</span>=<span class=\"hljs-value\">\"fade\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"caption-wrapper\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"materialbox-caption\"</span> <span class=\"hljs-attribute\">style</span>=<span class=\"hljs-value\">\"display: block\"</span>&gt;</span>\r\n            {{caption}}\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n";

/***/ },
/* 390 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.md-image</span> {\r\n  <span class=\"hljs-class\">.materialbox-caption</span> {\r\n    <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1</span>;</span>\r\n    <span class=\"hljs-attribute\">z-index</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1003</span>;</span>\r\n  }\r\n\r\n  <span class=\"hljs-class\">.caption-wrapper</span> {\r\n    <span class=\"hljs-attribute\">position</span><span class=\"hljs-value\">: absolute;</span>\r\n    <span class=\"hljs-attribute\">left</span><span class=\"hljs-value\">: <span class=\"hljs-number\">0</span>;</span>\r\n  }\r\n}";

/***/ },
/* 391 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    interval: {\r\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n        <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-number\">4000</span>,\r\n        validator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">return</span> value &gt; <span class=\"hljs-number\">1000</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./slider.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Slider {\r\n    <span class=\"hljs-keyword\">private</span> $broadcast: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $children: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> activeItem: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> itemsCount: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> interval: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> intervalHandler: <span class=\"hljs-built_in\">number</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            activeItem: <span class=\"hljs-number\">0</span>,\r\n            itemsCount: <span class=\"hljs-number\">0</span>,\r\n        }\r\n    }\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'slider::activate'</span>, <span class=\"hljs-keyword\">this</span>.activeItem);\r\n\r\n        <span class=\"hljs-keyword\">this</span>.interval = <span class=\"hljs-keyword\">this</span>.interval ? <span class=\"hljs-keyword\">this</span>.interval : <span class=\"hljs-number\">4000</span>;\r\n        <span class=\"hljs-keyword\">this</span>.itemsCount = <span class=\"hljs-keyword\">this</span>.$children.length;\r\n        <span class=\"hljs-keyword\">this</span>.setupInterval();\r\n    }\r\n\r\n    handler() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.$children) {\r\n            <span class=\"hljs-keyword\">this</span>.activeItem = (<span class=\"hljs-keyword\">this</span>.activeItem + <span class=\"hljs-number\">1</span>) % <span class=\"hljs-keyword\">this</span>.itemsCount;\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'slider::activate'</span>, <span class=\"hljs-keyword\">this</span>.activeItem);\r\n        }\r\n    }\r\n\r\n    setupInterval() {\r\n        <span class=\"hljs-keyword\">this</span>.intervalHandler = setInterval(<span class=\"hljs-keyword\">this</span>.handler, <span class=\"hljs-keyword\">this</span>.interval);\r\n    }\r\n\r\n    clearInterval() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.intervalHandler) {\r\n            clearInterval(<span class=\"hljs-keyword\">this</span>.intervalHandler);\r\n            <span class=\"hljs-keyword\">this</span>.intervalHandler = <span class=\"hljs-literal\">null</span>;\r\n        }\r\n    }\r\n\r\n    setActive(index) {\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'slider::activate'</span>, index);\r\n        <span class=\"hljs-keyword\">this</span>.activeItem = index;\r\n        <span class=\"hljs-keyword\">this</span>.clearInterval();\r\n    }\r\n\r\n}";

/***/ },
/* 392 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"slider\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"slides\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"indicators\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"index in itemsCount\"</span>\r\n            @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"setActive(index)\"</span>\r\n            @<span class=\"hljs-attribute\">mouseover</span>=<span class=\"hljs-value\">\"activeItem == index &amp;&amp; clearInterval(index)\"</span>\r\n            @<span class=\"hljs-attribute\">mouseout</span>=<span class=\"hljs-value\">\"setupInterval(index)\"</span>\r\n            <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{active: activeItem == index}\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"indicator-item\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 393 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-class\">.slider</span> {\r\n  <span class=\"hljs-attribute\">height</span><span class=\"hljs-value\">: <span class=\"hljs-number\">440px</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.fadeIn</span>, <span class=\"hljs-class\">.fadeOut</span>, <span class=\"hljs-class\">.caption</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1s</span>;</span>\r\n  <span class=\"hljs-attribute\">animation-duration</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1s</span>;</span>\r\n  -webkit-<span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n  <span class=\"hljs-attribute\">animation-fill-mode</span><span class=\"hljs-value\">: both;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span><span class=\"hljs-class\">.active</span> <span class=\"hljs-class\">.caption</span> {\r\n  <span class=\"hljs-attribute\">opacity</span><span class=\"hljs-value\">: <span class=\"hljs-number\">1</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span><span class=\"hljs-class\">.active</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.center-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInDown;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInDown;</span>\r\n}\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span><span class=\"hljs-class\">.active</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.left-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInLeft;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInLeft;</span>\r\n}\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span><span class=\"hljs-class\">.active</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.right-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInRight;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideInRight;</span>\r\n}\r\n\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.center-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutUp;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutUp;</span>\r\n}\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.left-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutLeft;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutLeft;</span>\r\n}\r\n<span class=\"hljs-class\">.slider</span> <span class=\"hljs-class\">.slides</span> <span class=\"hljs-tag\">li</span> <span class=\"hljs-class\">.caption</span><span class=\"hljs-class\">.right-align</span> {\r\n  -webkit-<span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutRight;</span>\r\n  <span class=\"hljs-attribute\">animation-name</span><span class=\"hljs-value\">: slideOutRight;</span>\r\n}";

/***/ },
/* 394 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">var</span> Vue: <span class=\"hljs-built_in\">any</span> = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'vue'</span>);\r\n\r\n@Component({\r\n    props: {\r\n        img: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        },\r\n        align: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-string\">''</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'slider::activate'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">index</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.setActive(index);\r\n        }\r\n    },\r\n    watch: {\r\n        active: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">val</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>._setClasses(val);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./slide.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Slide {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> img: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> position: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> classes: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    compiled() {\r\n        <span class=\"hljs-comment\">// todo: remove hack webpack img src loading</span>\r\n        <span class=\"hljs-keyword\">this</span>.$els.img.setAttribute(<span class=\"hljs-string\">'src'</span>, <span class=\"hljs-keyword\">this</span>.img);\r\n    }\r\n\r\n    ready () {\r\n        <span class=\"hljs-keyword\">this</span>._setClasses(<span class=\"hljs-keyword\">this</span>.active);\r\n    }\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">var</span> position = <span class=\"hljs-keyword\">this</span>.$parent.$children.indexOf(<span class=\"hljs-keyword\">this</span>);\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            active: <span class=\"hljs-literal\">false</span>,\r\n            position: position,\r\n            classes: {}\r\n        }\r\n    }\r\n    \r\n    <span class=\"hljs-keyword\">get</span> src() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.img;\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.classes;\r\n    }\r\n\r\n    setActive(index) {\r\n        <span class=\"hljs-keyword\">this</span>.active = <span class=\"hljs-keyword\">this</span>.position == index;\r\n    }\r\n\r\n    _setClasses (val) {\r\n        Vue.set(<span class=\"hljs-keyword\">this</span>.classes, <span class=\"hljs-string\">'active'</span>, val);\r\n        Vue.set(<span class=\"hljs-keyword\">this</span>.classes, <span class=\"hljs-string\">'fadeIn'</span>, val);\r\n        Vue.set(<span class=\"hljs-keyword\">this</span>.classes, <span class=\"hljs-string\">'fadeOut'</span>, !val);\r\n    }\r\n\r\n}";

/***/ },
/* 395 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">v-el:img</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"caption\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"align + '-align'\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 396 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/media\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Material box</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-images></doc-images>\r\n\r\n                <doc-snippet>{{{snippets.images}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Slides</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-sliders></doc-sliders>\r\n\r\n                <doc-snippet>{{{snippets.slides}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var snippet_1 = __webpack_require__(127);
	var default_1 = __webpack_require__(398);
	var scrollable_1 = __webpack_require__(400);
	var Tabs = (function () {
	    function Tabs() {}
	    Tabs.prototype.data = function () {
	        return {
	            api: [{
	                name: 'Tabs',
	                api: __webpack_require__(402)
	            }, {
	                name: 'Tab',
	                api: __webpack_require__(403)
	            }],
	            snippets: {
	                defaultTabs: __webpack_require__(404),
	                docScrollableTabs: __webpack_require__(405)
	            },
	            src: [{
	                name: 'Tabs',
	                script: __webpack_require__(406),
	                template: __webpack_require__(407)
	            }, {
	                name: 'Tab',
	                script: __webpack_require__(408),
	                template: __webpack_require__(409)
	            }]
	        };
	    };
	    Tabs = __decorate([vue_class_component_1["default"]({
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultTabs: default_1["default"],
	            docScrollableTabs: scrollable_1["default"]
	        },
	        template: __webpack_require__(410)
	    })], Tabs);
	    return Tabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var events_1 = __webpack_require__(16);
	var DefaultTabs = (function () {
	    function DefaultTabs() {}
	    DefaultTabs.prototype.data = function () {
	        return {
	            tab: 0
	        };
	    };
	    DefaultTabs = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        mixins: [events_1["default"]],
	        template: __webpack_require__(399)
	    })], DefaultTabs);
	    return DefaultTabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultTabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 399 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <div class=\"row\">\r\n        Selected: {{tab}}\r\n    </div>\r\n    <div class=\"row\">\r\n        <md-select :value.sync=\"tab\">\r\n            <md-option value=\"0\">Tab 1</md-option>\r\n            <md-option value=\"second\">Tab 2</md-option>\r\n            <md-option value=\"forth\">Tab 4</md-option>\r\n            <md-option value=\"fifth\">Tab 5</md-option>\r\n        </md-select>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <md-tabs :active.sync=\"tab\" class=\"z-depth-1\">\r\n        <md-tab><a href=\"#!/tabs/1\">Test 1</a></md-tab>\r\n        <md-tab name=\"second\"><a href=\"#!/tabs/2\">Test 2</a></md-tab>\r\n        <md-tab disabled><a href=\"#!/tabs/3\">Disabled Tab</a></md-tab>\r\n        <md-tab name=\"forth\"><a href=\"#!/tabs/4\">Test 4</a></md-tab>\r\n        <md-tab name=\"fifth\"><a href=\"#!/tabs/5\">Test 5</a></md-tab>\r\n    </md-tabs>\r\n</div>";

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var tabs_1 = __webpack_require__(107);
	var tab_1 = __webpack_require__(105);
	var ScrollableTabs = (function () {
	    function ScrollableTabs() {}
	    ScrollableTabs = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdTabs: tabs_1["default"],
	            mdTab: tab_1["default"]
	        },
	        template: __webpack_require__(401)
	    })], ScrollableTabs);
	    return ScrollableTabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ScrollableTabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 401 */
/***/ function(module, exports) {

	module.exports = "<md-tabs class=\"z-depth-1\">\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\" disabled><a href=\"javascript:void(0)\">Disabled Tab</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\" disabled><a href=\"javascript:void(0)\">Disabled Tab</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n</md-tabs>\r\n";

/***/ },
/* 402 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-tabs",
		"title": "Tabs",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "alert",
				"type": "String",
				"required": false,
				"description": "String of badge represents new event, string is used as label",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Tabs"
			},
			{
				"name": "contents",
				"description": "Contents rendered in tabs wrapper"
			}
		],
		"events": []
	};

/***/ },
/* 403 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-tab",
		"title": "Tab",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"active": "name",
				"type": "String",
				"required": false,
				"description": "Name of tab used as id",
				"twoWay": false,
				"default": null
			},
			{
				"active": "disabled",
				"type": "Boolean",
				"required": false,
				"description": "Disable tab",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [
			{
				"name": "",
				"description": "Tab content"
			}
		],
		"events": []
	};

/***/ },
/* 404 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tabs</span> <span class=\"hljs-attribute\">:active.sync</span>=<span class=\"hljs-value\">\"tab\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"z-depth-1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/1\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"second\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/2\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/3\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"forth\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/4\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"fifth\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/5\"</span>&gt;</span>Test 5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tabs</span>&gt;</span>";

/***/ },
/* 405 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tabs</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"z-depth-1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tabs</span>&gt;</span>\r\n";

/***/ },
/* 406 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">var</span> Velocity = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'velocity-animate'</span>);\r\n\r\n@Component({\r\n    props: {\r\n        active: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>\r\n        }\r\n    },\r\n    watch: {\r\n        active: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$broadcast(<span class=\"hljs-string\">'tab::select'</span>, value);\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'tabs::on-select'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">tab</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.select(tab);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./tabs.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Tabs {\r\n    <span class=\"hljs-keyword\">private</span> $els: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> indicator: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    data() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            indicator: {\r\n                left: <span class=\"hljs-string\">'0'</span>,\r\n                right: <span class=\"hljs-string\">'0'</span>\r\n            }\r\n        }\r\n    }\r\n\r\n    select(tab) {\r\n        <span class=\"hljs-keyword\">this</span>.active = tab.id;\r\n        <span class=\"hljs-keyword\">var</span> target = tab.$el;\r\n        <span class=\"hljs-keyword\">var</span> parent = target.parentElement;\r\n        <span class=\"hljs-keyword\">this</span>.moveIndicator(\r\n            <span class=\"hljs-keyword\">this</span>.indicator.left, target.offsetLeft,\r\n            <span class=\"hljs-keyword\">this</span>.indicator.right, parent.offsetWidth - target.offsetLeft - target.offsetWidth);\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\r\n    }\r\n\r\n    moveIndicator(left, newLeft, right, newRight) {\r\n        <span class=\"hljs-keyword\">var</span> indicator = <span class=\"hljs-keyword\">this</span>.$els.indicator;\r\n        <span class=\"hljs-comment\">// Update indicator</span>\r\n        <span class=\"hljs-keyword\">if</span> ((newLeft - left) &gt;= <span class=\"hljs-number\">0</span>) {\r\n            Velocity(indicator, \r\n                {right: newRight}, \r\n                {duration: <span class=\"hljs-number\">300</span>, queue: <span class=\"hljs-literal\">false</span>, easing: <span class=\"hljs-string\">'easeOutQuad'</span>}\r\n            );\r\n            Velocity(indicator, \r\n                {left: newLeft}, \r\n                {duration: <span class=\"hljs-number\">300</span>, queue: <span class=\"hljs-literal\">false</span>, easing: <span class=\"hljs-string\">'easeOutQuad'</span>, delay: <span class=\"hljs-number\">90</span>}\r\n            );\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            Velocity(indicator, \r\n                {left: newLeft}, \r\n                {duration: <span class=\"hljs-number\">300</span>, queue: <span class=\"hljs-literal\">false</span>, easing: <span class=\"hljs-string\">'easeOutQuad'</span>});\r\n            Velocity(indicator, \r\n                {right: newRight}, \r\n                {duration: <span class=\"hljs-number\">300</span>, queue: <span class=\"hljs-literal\">false</span>, easing: <span class=\"hljs-string\">'easeOutQuad'</span>, delay: <span class=\"hljs-number\">90</span>});\r\n        }\r\n    }\r\n}";

/***/ },
/* 407 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"md-tabs\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"tabs\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-el:indicator</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"indicator\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"contents\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n";

/***/ },
/* 408 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        name: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    events: {\r\n        <span class=\"hljs-string\">'tab::select'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">id</span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.select(id);\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./tab.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Tab {\r\n    <span class=\"hljs-keyword\">private</span> $el: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $parent: <span class=\"hljs-built_in\">any</span>;\r\n    <span class=\"hljs-keyword\">private</span> $dispatch: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> name: <span class=\"hljs-built_in\">string</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.disabled ? [<span class=\"hljs-string\">'disabled'</span>] : [];\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> index() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.$parent.$children.indexOf(<span class=\"hljs-keyword\">this</span>);\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> id() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.name) {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.name;\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.index;\r\n        }\r\n    }\r\n\r\n    ready() {\r\n        <span class=\"hljs-keyword\">var</span> hash = <span class=\"hljs-built_in\">window</span>.location.hash;\r\n        <span class=\"hljs-keyword\">var</span> el: HTMLElement = <span class=\"hljs-keyword\">this</span>.$el;\r\n        <span class=\"hljs-keyword\">var</span> anchors = el.getElementsByTagName(<span class=\"hljs-string\">\"A\"</span>);\r\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; anchors.length; i++) {\r\n            <span class=\"hljs-keyword\">var</span> a = anchors[i];\r\n            <span class=\"hljs-keyword\">if</span> (hash == a.getAttribute(<span class=\"hljs-string\">\"href\"</span>)) {\r\n                <span class=\"hljs-keyword\">this</span>.setAsSelected();\r\n            }\r\n        }\r\n    }\r\n\r\n    setAsSelected() {\r\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">this</span>.disabled) {\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'tabs::on-select'</span>, <span class=\"hljs-keyword\">this</span>);\r\n        }\r\n    }\r\n\r\n    select(id) {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.id == id) {\r\n            <span class=\"hljs-keyword\">this</span>.setAsSelected();\r\n        }\r\n    }\r\n}";

/***/ },
/* 409 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"setAsSelected\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"tab col\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>";

/***/ },
/* 410 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/tabs\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Tabs</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-tabs></doc-default-tabs>\r\n\r\n                <doc-snippet>{{{snippets.defaultTabs}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Scrollable</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-scrollable-tabs></doc-scrollable-tabs>\r\n\r\n                <doc-snippet>{{{snippets.docScrollableTabs}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var snippet_1 = __webpack_require__(127);
	var default_1 = __webpack_require__(412);
	var events_1 = __webpack_require__(16);
	var Paginations = (function () {
	    function Paginations() {}
	    Paginations.prototype.data = function () {
	        return {
	            api: __webpack_require__(414),
	            snippets: {
	                defaultPagination: __webpack_require__(415)
	            },
	            src: {
	                script: __webpack_require__(416),
	                template: __webpack_require__(417)
	            }
	        };
	    };
	    Paginations = __decorate([vue_class_component_1["default"]({
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultPagination: default_1["default"]
	        },
	        mixins: [events_1["default"]],
	        template: __webpack_require__(418)
	    })], Paginations);
	    return Paginations;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Paginations;
	//# sourceMappingURL=index.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var pagination_1 = __webpack_require__(97);
	var DefaultPagination = (function () {
	    function DefaultPagination() {}
	    DefaultPagination.prototype.data = function () {
	        return {
	            page: 0
	        };
	    };
	    DefaultPagination = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdPagination: pagination_1["default"]
	        },
	        template: __webpack_require__(413)
	    })], DefaultPagination);
	    return DefaultPagination;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultPagination;
	//# sourceMappingURL=index.js.map

/***/ },
/* 413 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    Page: {{page}}\r\n</div>\r\n<div class=\"row\">\r\n    <md-pagination :current-page.sync=\"page\" :page-size=\"5\" :total-records=\"50\"></md-pagination>\r\n\r\n    <md-pagination :page-size=\"5\" :total-records=\"50\" :display-pages=\"10\" item-class=\"waves-effect\"></md-pagination>\r\n</div>";

/***/ },
/* 414 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-badge",
		"title": "Badge",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "current-page",
				"type": "Number",
				"required": false,
				"description": "Current selected page",
				"twoWay": false,
				"default": 0
			},
			{
				"name": "page-size",
				"type": "Number",
				"required": true,
				"description": "Page size",
				"twoWay": false
			},
			{
				"name": "total-records",
				"type": "Number",
				"description": "Total managed records",
				"required": true,
				"twoWay": false
			},
			{
				"name": "display-pages",
				"type": "Number",
				"required": false,
				"description": "Display pages count",
				"default": 5,
				"twoWay": false
			},
			{
				"name": "item-class",
				"type": "Object | Array",
				"required": false,
				"description": "Item classes object",
				"default": null,
				"twoWay": false
			},
			{
				"name": "first-last",
				"type": "Boolean",
				"required": false,
				"description": "Displays second pair of arrow for nagation to first or last page",
				"default": false,
				"twoWay": false
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 415 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-pagination</span> <span class=\"hljs-attribute\">:current-page.sync</span>=<span class=\"hljs-value\">\"page\"</span> <span class=\"hljs-attribute\">:page-size</span>=<span class=\"hljs-value\">\"5\"</span> <span class=\"hljs-attribute\">:total-records</span>=<span class=\"hljs-value\">\"50\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-pagination</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-pagination</span> <span class=\"hljs-attribute\">:page-size</span>=<span class=\"hljs-value\">\"5\"</span> <span class=\"hljs-attribute\">:total-records</span>=<span class=\"hljs-value\">\"50\"</span> <span class=\"hljs-attribute\">:display-pages</span>=<span class=\"hljs-value\">\"10\"</span> <span class=\"hljs-attribute\">item-class</span>=<span class=\"hljs-value\">\"waves-effect\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-pagination</span>&gt;</span>";

/***/ },
/* 416 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdIcon from <span class=\"hljs-string\">'../icon'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> waveEffect from <span class=\"hljs-string\">'../../directives/wave-effect'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> Utils from  <span class=\"hljs-string\">'../../components/utils'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        currentPage: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-number\">0</span>,\r\n        },\r\n        pageSize: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            required: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        totalRecords: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            required: <span class=\"hljs-literal\">true</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        displayPages: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-number\">5</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        itemClass: {\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        firstLast: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdIcon\r\n    },\r\n    directives: {\r\n        waveEffect  \r\n    },\r\n    watch: {\r\n        currentPage:  <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\r\n            <span class=\"hljs-keyword\">this</span>.$dispatch(<span class=\"hljs-string\">'pagination::selected'</span>, <span class=\"hljs-keyword\">this</span>.pagesWindow);\r\n        },\r\n        pages: {\r\n            handler: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\r\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.currentPage &gt;= <span class=\"hljs-keyword\">this</span>.pages) {\r\n                    <span class=\"hljs-keyword\">this</span>.currentPage = <span class=\"hljs-keyword\">this</span>.pages - <span class=\"hljs-number\">1</span>;\r\n                }\r\n            }\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./pagination.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Pagination {\r\n    <span class=\"hljs-keyword\">private</span> active: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> currentPage: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> pageSize: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> totalRecords: <span class=\"hljs-built_in\">number</span>;\r\n    <span class=\"hljs-keyword\">private</span> itemClass: <span class=\"hljs-built_in\">any</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> pages() {\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Math</span>.max(<span class=\"hljs-built_in\">Math</span>.ceil(<span class=\"hljs-keyword\">this</span>.totalRecords / <span class=\"hljs-keyword\">this</span>.pageSize), <span class=\"hljs-number\">1</span>);\r\n    }\r\n\r\n    <span class=\"hljs-keyword\">get</span> pager() {\r\n        <span class=\"hljs-keyword\">return</span> Utils.generatePagination(<span class=\"hljs-keyword\">this</span>);\r\n    }\r\n\r\n    getSelected() {\r\n        <span class=\"hljs-keyword\">return</span> {\r\n            currentPage: <span class=\"hljs-keyword\">this</span>.currentPage,\r\n            pageSize: <span class=\"hljs-keyword\">this</span>.pageSize,\r\n            from: <span class=\"hljs-keyword\">this</span>.currentPage * <span class=\"hljs-keyword\">this</span>.pageSize,\r\n            to: (<span class=\"hljs-keyword\">this</span>.currentPage + <span class=\"hljs-number\">1</span>) * <span class=\"hljs-keyword\">this</span>.pageSize,\r\n            size: <span class=\"hljs-keyword\">this</span>.pageSize\r\n        }\r\n    }\r\n\r\n    getClasses(n: <span class=\"hljs-built_in\">number</span>) {\r\n        <span class=\"hljs-keyword\">var</span> classes = {};\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.itemClass <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.itemClass.forEach((value, index, array) =&gt; {\r\n                classes[value] = <span class=\"hljs-literal\">true</span>;\r\n            });\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.itemClass <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Object</span>) {\r\n            <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>.itemClass) {\r\n                classes[key] = <span class=\"hljs-keyword\">this</span>.itemClass[key];\r\n            }\r\n        }\r\n        <span class=\"hljs-keyword\">else</span> {\r\n            classes[<span class=\"hljs-keyword\">this</span>.itemClass] = <span class=\"hljs-literal\">true</span>;\r\n        }\r\n\r\n        classes[<span class=\"hljs-string\">'active'</span>] = n == <span class=\"hljs-keyword\">this</span>.currentPage;\r\n\r\n        <span class=\"hljs-keyword\">return</span> classes;\r\n    }\r\n\r\n    setCurrentPage (n) {\r\n        <span class=\"hljs-keyword\">this</span>.currentPage = n;\r\n    }\r\n\r\n    previousPage () {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.currentPage &gt; <span class=\"hljs-number\">0</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.currentPage--;\r\n        }\r\n    }\r\n\r\n    nextPage() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.currentPage &lt; <span class=\"hljs-keyword\">this</span>.pages - <span class=\"hljs-number\">1</span>) {\r\n            <span class=\"hljs-keyword\">this</span>.currentPage++;\r\n        }\r\n    }\r\n}";

/***/ },
/* 417 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pagination\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{disabled: currentPage == 0}\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"firstLast\"</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"currentPage = 0\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>chevron_left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"previousPage\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>chevron_left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"n in pager\"</span>\r\n        @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"setCurrentPage(n)\"</span>\r\n        <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"getClasses(n)\"</span> <span class=\"hljs-attribute\">v-wave-effect</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> @<span class=\"hljs-attribute\">click.prevent</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>{{n + 1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{disabled: currentPage == pages - 1}\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"nextPage\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>chevron_right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"firstLast\"</span> @<span class=\"hljs-attribute\">click.prevent</span>=<span class=\"hljs-value\">\"currentPage = pages - 1\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>chevron_right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n";

/***/ },
/* 418 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/pagination\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Pagination</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-default-pagination></doc-default-pagination>\r\n\r\n                <doc-snippet>{{{snippets.defaultPagination}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var linear_determinate_1 = __webpack_require__(420);
	var linear_indeterminate_1 = __webpack_require__(422);
	var circular_1 = __webpack_require__(424);
	var flashing_1 = __webpack_require__(426);
	var Preloaders = (function () {
	    function Preloaders() {}
	    Preloaders.prototype.data = function () {
	        return {
	            api: [{
	                name: "Linear preloader",
	                api: __webpack_require__(428)
	            }, {
	                name: "Circular preloader",
	                api: __webpack_require__(429)
	            }],
	            snippets: {
	                linearDeterminate: __webpack_require__(430),
	                linearIndeterminate: __webpack_require__(431),
	                circular: __webpack_require__(432),
	                flashing: __webpack_require__(433)
	            },
	            src: [{
	                name: "Linear preloader",
	                script: __webpack_require__(434),
	                template: __webpack_require__(435)
	            }, {
	                name: "Circular preloader",
	                script: __webpack_require__(436),
	                template: __webpack_require__(437)
	            }]
	        };
	    };
	    Preloaders = __decorate([vue_class_component_1["default"]({
	        components: {
	            docLinearDeterminate: linear_determinate_1["default"],
	            docLinearIndeterminate: linear_indeterminate_1["default"],
	            docCircular: circular_1["default"],
	            docFlashing: flashing_1["default"]
	        },
	        template: __webpack_require__(438)
	    })], Preloaders);
	    return Preloaders;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Preloaders;
	//# sourceMappingURL=index.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var linear_preloader_1 = __webpack_require__(91);
	var LinearDeterminatePreloader = (function () {
	    function LinearDeterminatePreloader() {}
	    LinearDeterminatePreloader.prototype.data = function () {
	        return {
	            value: 70
	        };
	    };
	    LinearDeterminatePreloader = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdLinearPreloader: linear_preloader_1["default"]
	        },
	        template: __webpack_require__(421)
	    })], LinearDeterminatePreloader);
	    return LinearDeterminatePreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearDeterminatePreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 421 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    Value: {{value}}\r\n\r\n    <input v-model=\"value\" type=range min=0 max=100 step=1>\r\n</div>\r\n<div class=\"row\">\r\n\r\n    <md-linear-preloader :value=\"value\"></md-linear-preloader>\r\n</div>\r\n\r\n";

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var linear_preloader_1 = __webpack_require__(91);
	var LinearIndeterminatePreloader = (function () {
	    function LinearIndeterminatePreloader() {}
	    LinearIndeterminatePreloader = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdLinearPreloader: linear_preloader_1["default"]
	        },
	        template: __webpack_require__(423)
	    })], LinearIndeterminatePreloader);
	    return LinearIndeterminatePreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearIndeterminatePreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 423 */
/***/ function(module, exports) {

	module.exports = "<md-linear-preloader></md-linear-preloader>";

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var circural_preloader_1 = __webpack_require__(45);
	var CircularPreloader = (function () {
	    function CircularPreloader() {}
	    CircularPreloader = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdCircularPreloader: circural_preloader_1["default"]
	        },
	        template: __webpack_require__(425)
	    })], CircularPreloader);
	    return CircularPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CircularPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 425 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader size=\"large\" color=\"blue\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader color=\"red\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader size=\"small\" color=\"green\"></md-circular-preloader>\r\n    </div>\r\n</div>";

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var circural_preloader_1 = __webpack_require__(45);
	var FlashingPreloader = (function () {
	    function FlashingPreloader() {}
	    FlashingPreloader = __decorate([vue_class_component_1["default"]({
	        components: {
	            mdCircularPreloader: circural_preloader_1["default"]
	        },
	        template: __webpack_require__(427)
	    })], FlashingPreloader);
	    return FlashingPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FlashingPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 427 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing size=\"large\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing size=\"small\"></md-circular-preloader>\r\n    </div>\r\n</div>";

/***/ },
/* 428 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-linear-preloader",
		"title": "Linear preloader",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "value",
				"type": "Number",
				"required": false,
				"description": "Percents of progress. Default null is indeterminate",
				"twoWay": false,
				"default": null
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 429 */
/***/ function(module, exports) {

	module.exports = {
		"name": "md-circular-preloader",
		"title": "Circular preloader",
		"description": "",
		"browserSupport": {
			"browsers": []
		},
		"properties": [
			{
				"name": "size",
				"type": "String",
				"description": "Value small, medium or large for size setting",
				"required": false,
				"twoWay": false,
				"default": null
			},
			{
				"name": "color",
				"type": "String",
				"description": "Value red, blue or green for color setting",
				"required": false,
				"twoWay": false,
				"default": null
			},
			{
				"name": "flashing",
				"type": "Boolean",
				"description": "True for flashing mode",
				"required": false,
				"default": false,
				"twoWay": false
			}
		],
		"slots": [],
		"events": []
	};

/***/ },
/* 430 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-linear-preloader</span> <span class=\"hljs-attribute\">:value</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span>";

/***/ },
/* 431 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span>";

/***/ },
/* 432 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"large\"</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"small\"</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n";

/***/ },
/* 433 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>";

/***/ },
/* 434 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        value: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Number</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./linear-preloader.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> LinearPreloader {\r\n    <span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">number</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedStyle() {\r\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.value != <span class=\"hljs-literal\">null</span>) {\r\n            <span class=\"hljs-keyword\">return</span> {\r\n                width: <span class=\"hljs-keyword\">this</span>.value + <span class=\"hljs-string\">'%'</span>\r\n            }\r\n        }\r\n\r\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\r\n    }\r\n}";

/***/ },
/* 435 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"progress\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{determinate: value != null, indeterminate: value == null}\"</span> <span class=\"hljs-attribute\">:style</span>=<span class=\"hljs-value\">\"computedStyle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 436 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        size: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        color: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        flashing: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./circular-preloader.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> CircularPreloader {\r\n    \r\n}";

/***/ },
/* 437 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"preloader-wrapper active\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"size\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"!flashing\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"spinner-layer\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"'spinner-' + color + '-only'\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper left\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"gap-patch\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper right\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n    <span class=\"hljs-comment\">&lt;!-- flashing --&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"flashing\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"spinner-layer spinner-blue\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper left\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"gap-patch\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper right\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"flashing\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"spinner-layer spinner-red\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper left\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"gap-patch\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper right\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"flashing\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"spinner-layer spinner-yellow\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper left\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"gap-patch\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper right\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"flashing\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"spinner-layer spinner-green\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper left\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"gap-patch\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle-clipper right\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 438 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/preloaders\">\r\n        <div slot=\"showcase\">\r\n            <h1>Linear</h1>\r\n\r\n            <h2 class=\"header\">Determinate</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-linear-determinate></doc-linear-determinate>\r\n\r\n                <doc-snippet>{{{snippets.linearDeterminate}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Indeterminate</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-linear-indeterminate></doc-linear-indeterminate>\r\n\r\n                <doc-snippet>{{{snippets.linearIndeterminate}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Circular</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-circular></doc-circular>\r\n\r\n                <doc-snippet>{{{snippets.circular}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Flashing</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-flashing></doc-flashing>\r\n\r\n                <doc-snippet>{{{snippets.flashing}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var default_1 = __webpack_require__(440);
	var Waves = (function () {
	    function Waves() {}
	    Waves.prototype.data = function () {
	        return {
	            snippets: {
	                defaultWaves: __webpack_require__(442)
	            }
	        };
	    };
	    Waves = __decorate([vue_class_component_1["default"]({
	        components: {
	            docDefaultWaves: default_1["default"]
	        },
	        template: __webpack_require__(443)
	    })], Waves);
	    return Waves;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Waves;
	//# sourceMappingURL=index.js.map

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var DefaultWaves = (function () {
	    function DefaultWaves() {}
	    DefaultWaves = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        directives: directives_1["default"],
	        template: __webpack_require__(441)
	    })], DefaultWaves);
	    return DefaultWaves;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultWaves;
	//# sourceMappingURL=index.js.map

/***/ },
/* 441 */
/***/ function(module, exports) {

	module.exports = "<p>\r\n    To wave effect add wave classes and directive.\r\n    Button has directive by itself, just add classes.\r\n</p>\r\n<a href=\"javascript:void(0)\" v-wave-effect class=\"btn waves-effect waves-light\">\r\n    Directive\r\n</a>\r\n<md-button href=\"javascript:void(0)\" class=\"waves-effect waves-light\">\r\n    Button\r\n</md-button>\r\n<p>\r\n    <a href=\"http://materializecss.com/waves.htm\">\r\n        More about wave classes\r\n    </a>\r\n</p>";

/***/ },
/* 442 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">v-wave-effect</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn waves-effect waves-light\"</span>&gt;</span>\r\n    Directive\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span>\r\n    Button\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 443 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Waves</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-waves></doc-default-waves>\r\n\r\n        <doc-snippet>{{{snippets.defaultWaves}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/ts.d.ts"/>
	"use strict";
	var VueModule = __webpack_require__(1);
	var Vue = VueModule;
	var pages = __webpack_require__(4);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	module.exports = Vue.extend({
	    components: components_1['default'],
	    directives: directives_1['default'],
	    data: function data() {
	        return {
	            navs: pages
	        };
	    },
	    computed: {
	        title: function title() {
	            return this.$route.title;
	        },
	        '$currentRoute': function $currentRoute() {
	            return this.$router._currentRoute;
	        }
	    }
	});
	//# sourceMappingURL=doc-app.js.map

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var Forms = (function () {
	    function Forms() {}
	    Forms = __decorate([vue_class_component_1["default"]({
	        props: ['href'],
	        template: __webpack_require__(446)
	    })], Forms);
	    return Forms;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Forms;
	//# sourceMappingURL=index.js.map

/***/ },
/* 446 */
/***/ function(module, exports) {

	module.exports = "<a>\r\n    <img src=\"http://vuejs.org/images/logo.png\" height=\"28\" alt=\"vue\">\r\n</a>";

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var MaerializeLogo = (function () {
	    function MaerializeLogo() {}
	    MaerializeLogo = __decorate([vue_class_component_1["default"]({
	        props: ['href'],
	        template: __webpack_require__(448)
	    })], MaerializeLogo);
	    return MaerializeLogo;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = MaerializeLogo;
	//# sourceMappingURL=index.js.map

/***/ },
/* 448 */
/***/ function(module, exports) {

	module.exports = "<a :href=\"href\" target=\"_blank\">\r\n    <img src=\"http://materializecss.com/images/favicon/favicon-32x32.png\" height=\"32\" alt=\"materialize\"/>\r\n</a>";

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var directives_1 = __webpack_require__(8);
	var mixins_1 = __webpack_require__(15);
	var components_1 = __webpack_require__(7);
	var ApiDoc = (function () {
	    function ApiDoc() {}
	    Object.defineProperty(ApiDoc.prototype, "apis", {
	        get: function get() {
	            if (Array.isArray(this.api)) {
	                return this.api;
	            }
	            return [{
	                api: this.api
	            }];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ApiDoc = __decorate([vue_class_component_1["default"]({
	        props: {
	            api: {
	                required: true
	            }
	        },
	        directives: directives_1["default"],
	        components: components_1["default"],
	        mixins: mixins_1["default"],
	        template: __webpack_require__(450)
	    })], ApiDoc);
	    return ApiDoc;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ApiDoc;
	//# sourceMappingURL=index.js.map

/***/ },
/* 450 */
/***/ function(module, exports) {

	module.exports = "<div v-for=\"api in apis\">\r\n    <h2 v-if=\"api.name\">\r\n        {{api.name}}\r\n    </h2>\r\n    <div v-if=\"api.api.properties && api.api.properties.length\">\r\n        <h4>Properties</h4>\r\n        <table class=\"striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        Name\r\n                    </th>\r\n                    <th>\r\n                        Type\r\n                    </th>\r\n                    <th>\r\n                        Required\r\n                    </th>\r\n                    <!--<th>\r\n                        Two way\r\n                    </th>-->\r\n                    <th>\r\n                        Default\r\n                    </th>\r\n                    <th>\r\n                        Description\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr v-for=\"property in api.api.properties\" :style=\"property.type == 'Directive' ? {'color': '#1B5E20'} : {}\">\r\n                    <td>{{property.name}}</td>\r\n                    <td>{{property.type}}</td>\r\n                    <td>\r\n                        <span v-if=\"property.required\">\r\n                            <md-icon @mouseover=\"tooltip($event, 'True', 'bottom')\">check_box</md-icon>\r\n                        </span>\r\n                        <!--<span v-else>-->\r\n                            <!--<md-icon @mouseover=\"tooltip($event, 'False', 'bottom')\">check_box_outline_blank</md-icon>-->\r\n                        <!--</span>-->\r\n                    </td>\r\n                    <!--<td>\r\n                        <span v-if=\"property.twoWay === true\">\r\n                            <md-icon @mouseover=\"tooltip($event, 'True', 'bottom')\">check_box</md-icon>\r\n                        </span>\r\n                        <span v-if=\"property.twoWay === false\">\r\n                            <md-icon @mouseover=\"tooltip($event, 'False', 'bottom')\">check_box_outline_blank</md-icon>\r\n                        </span>\r\n                        <span v-if=\"property.twoWay === null\">\r\n                            <md-icon @mouseover=\"tooltip($event, 'Not specified', 'bottom')\">indeterminate_check_box</md-icon>\r\n                        </span>\r\n                    </td>-->\r\n                    <td>\r\n                        <span v-if=\"!property.required\">{{property.default | json}}</span>\r\n                        <span v-else><md-badge alert=\"required\" style=\"position: initial; padding: 0;\"></md-badge></span>\r\n                    </td>\r\n                    <td>{{property.description}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div v-if=\"api.api.slots && api.api.slots.length\">\r\n        <h4>Slots</h4>\r\n        <table class=\"striped\">\r\n            <thead>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Description\r\n                </th>\r\n            </thead>\r\n            <tbody>\r\n                <tr v-for=\"slot in api.api.slots\">\r\n                    <td>\r\n                        <span v-if=\"slot.name\">\r\n                            {{slot.name}}\r\n                        </span>\r\n                        <span v-else>\r\n                            <md-badge alert=\"default\" style=\"position: initial; margin: 1rem;\"></md-badge>\r\n                        </span>\r\n                    </td>\r\n                    <td>\r\n                        {{slot.description}}\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div v-if=\"api.api.events && api.api.events.length\">\r\n        <h4>Public events</h4>\r\n        <div v-for=\"event in api.api.events\">\r\n            <md-collection-list>\r\n                <div slot=\"header\">\r\n                    <h4>{{event.name}}</h4>\r\n                    <p>{{event.description}}</p>\r\n                    <p>Type: <md-badge :alert=\"event.type\" style=\"position: initial\"></md-badge></p>\r\n                </div>\r\n                <md-collection-list-item v-if=\"event.args && event.args.length > 0\">\r\n                    <table>\r\n                        <thead>\r\n                            <tr>\r\n                                <th></th>\r\n                                <th>\r\n                                    Name\r\n                                </th>\r\n                                <th>\r\n                                    Description\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr v-for=\"arg in event.args\">\r\n                                <td>\r\n                                    #{{$index + 1}}\r\n                                </td>\r\n                                <td>\r\n                                    {{arg.name}}\r\n                                </td>\r\n                                <td>\r\n                                    {{arg.description}}\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </md-collection-list-item>\r\n            </md-collection-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var components_1 = __webpack_require__(7);
	var mixins_1 = __webpack_require__(15);
	var directives_1 = __webpack_require__(8);
	var DocSources = (function () {
	    function DocSources() {}
	    DocSources.prototype.data = function () {
	        return {
	            expanded: true
	        };
	    };
	    Object.defineProperty(DocSources.prototype, "sources", {
	        get: function get() {
	            if (Array.isArray(this.src)) {
	                return this.src;
	            }
	            return [this.src];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DocSources.prototype.toggle = function () {
	        if (this.expanded) {
	            this.close();
	        } else {
	            this.open();
	        }
	    };
	    DocSources.prototype.close = function () {
	        this.$broadcast('collapsible::close');
	        this.expanded = false;
	    };
	    DocSources.prototype.open = function () {
	        this.$broadcast('collapsible::open');
	        this.expanded = true;
	    };
	    DocSources = __decorate([vue_class_component_1["default"]({
	        props: {
	            src: {
	                required: true
	            }
	        },
	        directives: directives_1["default"],
	        components: components_1["default"],
	        mixins: mixins_1["default"],
	        template: __webpack_require__(452)
	    })], DocSources);
	    return DocSources;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DocSources;
	//# sourceMappingURL=index.js.map

/***/ },
/* 452 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"{float: 'right', margin: sources && sources.length > 1 ? '0.14rem 0 0.912rem 0' : '1.14rem 0 0.912rem 0'}\">\r\n    <md-button type=\"flat\" class=\"waves-effect\"\r\n               @click=\"toggle\">\r\n        {{expanded ? 'Collapse' : 'Expand'}}\r\n    </md-button>\r\n</div>\r\n\r\n<div v-for=\"src in sources\" class=\"doc-sources\">\r\n    <h4 v-if=\"src.name\">\r\n        {{src.name}}\r\n    </h4>\r\n    <div style=\"clear: both\"></div>\r\n    <md-collapsible popout expendable>\r\n        <md-collapsible-item v-if=\"src.template\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>code</md-icon>Template\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.template}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item v-if=\"src.script\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>settings_ethernet</md-icon>Script\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.script}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item v-if=\"src.style\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>style</md-icon>Style\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.style}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n    </md-collapsible>\r\n</div>";

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var vue_class_component_1 = __webpack_require__(6);
	var tabs_1 = __webpack_require__(107);
	var tab_1 = __webpack_require__(105);
	var DocTab = (function () {
	    function DocTab() {}
	    DocTab.prototype.data = function () {
	        return {
	            active: 'showcase'
	        };
	    };
	    DocTab.prototype.hasSlot = function (name) {
	        if (name === void 0) {
	            name = 'default';
	        }
	        return name in this._slotContents;
	    };
	    DocTab = __decorate([vue_class_component_1["default"]({
	        props: {
	            basePath: {
	                type: String,
	                required: true
	            }
	        },
	        components: {
	            mdTabs: tabs_1["default"],
	            mdTab: tab_1["default"]
	        },
	        template: __webpack_require__(454)
	    })], DocTab);
	    return DocTab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DocTab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 454 */
/***/ function(module, exports) {

	module.exports = "<md-tabs :active.sync=\"active\">\r\n    <md-tab v-if=\"hasSlot('showcase')\" name=\"showcase\"><a v-link=\"{path: basePath + '/showcase'}\">Showcase</a></md-tab>\r\n    <md-tab v-if=\"hasSlot('api')\" name=\"api\"><a v-link=\"{path: basePath + '/api'}\">API</a></md-tab>\r\n    <md-tab v-if=\"hasSlot('sources')\" name=\"sources\"><a v-link=\"{path: basePath + '/sources'}\">Sources</a></md-tab>\r\n\r\n    <div slot=\"contents\">\r\n        <div v-show=\"active == 'showcase'\" class=\"show-case\">\r\n            <slot name=\"showcase\"></slot>\r\n        </div>\r\n\r\n        <div v-show=\"active == 'api'\" class=\"api\">\r\n            <slot name=\"api\"></slot>\r\n        </div>\r\n\r\n        <div v-show=\"active == 'sources'\" class=\"sources\">\r\n            <slot name=\"sources\"></slot>\r\n        </div>\r\n    </div>\r\n</md-tabs>";

/***/ },
/* 455 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-material-components.js.map
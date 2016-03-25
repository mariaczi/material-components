(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterializeDocs"] = factory();
	else
		root["VueMaterializeDocs"] = factory();
})(this, function() {
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
	var VueModule = __webpack_require__(1);
	var Vue = VueModule;
	var VueRouterModule = __webpack_require__(2);
	var VueRouter = VueRouterModule;
	var mapping = __webpack_require__(3);
	var App = __webpack_require__(320);
	var components_1 = __webpack_require__(7);
	var directives_1 = __webpack_require__(8);
	var mixins_1 = __webpack_require__(16);
	var components_2 = __webpack_require__(7);
	var vue_1 = __webpack_require__(321);
	var materialize_1 = __webpack_require__(323);
	var doc_api_1 = __webpack_require__(325);
	var doc_sources_1 = __webpack_require__(327);
	var snippet_1 = __webpack_require__(123);
	var doc_tabs_1 = __webpack_require__(329);
	__webpack_require__(331);
	module.exports = {
	    run: function (app) {
	        Vue.config.debug = true;
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
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v1.0.17
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */'use strict';function set(obj,key,val){if(hasOwn(obj,key)){obj[key] = val;return;}if(obj._isVue){set(obj._data,key,val);return;}var ob=obj.__ob__;if(!ob){obj[key] = val;return;}ob.convert(key,val);ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._proxy(key);vm._digest();}}return val;} /**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */function del(obj,key){if(!hasOwn(obj,key)){return;}delete obj[key];var ob=obj.__ob__;if(!ob){return;}ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._unproxy(key);vm._digest();}}}var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */function hasOwn(obj,key){return hasOwnProperty.call(obj,key);} /**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */var literalValueRE=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(exp){return literalValueRE.test(exp);} /**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */function isReserved(str){var c=(str + '').charCodeAt(0);return c === 0x24 || c === 0x5F;} /**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */function _toString(value){return value == null?'':value.toString();} /**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */function toNumber(value){if(typeof value !== 'string'){return value;}else {var parsed=Number(value);return isNaN(parsed)?value:parsed;}} /**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */function toBoolean(value){return value === 'true'?true:value === 'false'?false:value;} /**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */function stripQuotes(str){var a=str.charCodeAt(0);var b=str.charCodeAt(str.length - 1);return a === b && (a === 0x22 || a === 0x27)?str.slice(1,-1):str;} /**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var camelizeRE=/-(\w)/g;function camelize(str){return str.replace(camelizeRE,toUpper);}function toUpper(_,c){return c?c.toUpperCase():'';} /**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var hyphenateRE=/([a-z\d])([A-Z])/g;function hyphenate(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();} /**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */var classifyRE=/(?:^|[-_\/])(\w)/g;function classify(str){return str.replace(classifyRE,toUpper);} /**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */function bind(fn,ctx){return function(a){var l=arguments.length;return l?l > 1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};} /**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */function toArray(list,start){start = start || 0;var i=list.length - start;var ret=new Array(i);while(i--) {ret[i] = list[i + start];}return ret;} /**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */function extend(to,from){var keys=Object.keys(from);var i=keys.length;while(i--) {to[keys[i]] = from[keys[i]];}return to;} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */function isObject(obj){return obj !== null && typeof obj === 'object';} /**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj) === OBJECT_STRING;} /**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var isArray=Array.isArray; /**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});} /**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */function _debounce(func,wait){var timeout,args,context,timestamp,result;var later=function later(){var last=Date.now() - timestamp;if(last < wait && last >= 0){timeout = setTimeout(later,wait - last);}else {timeout = null;result = func.apply(context,args);if(!timeout)context = args = null;}};return function(){context = this;args = arguments;timestamp = Date.now();if(!timeout){timeout = setTimeout(later,wait);}return result;};} /**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */function indexOf(arr,obj){var i=arr.length;while(i--) {if(arr[i] === obj)return i;}return -1;} /**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */function cancellable(fn){var cb=function cb(){if(!cb.cancelled){return fn.apply(this,arguments);}};cb.cancel = function(){cb.cancelled = true;};return cb;} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */function looseEqual(a,b){ /* eslint-disable eqeqeq */return a == b || (isObject(a) && isObject(b)?JSON.stringify(a) === JSON.stringify(b):false); /* eslint-enable eqeqeq */}var hasProto=('__proto__' in {}); // Browser environment sniffing
	var inBrowser=typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]'; // detect devtools
	var devtools=inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__; // UA sniffing for working around browser-specific quirks
	var UA=inBrowser && window.navigator.userAgent.toLowerCase();var isIE9=UA && UA.indexOf('msie 9.0') > 0;var isAndroid=UA && UA.indexOf('android') > 0;var transitionProp=undefined;var transitionEndEvent=undefined;var animationProp=undefined;var animationEndEvent=undefined; // Transition property/event sniffing
	if(inBrowser && !isIE9){var isWebkitTrans=window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;var isWebkitAnim=window.onanimationend === undefined && window.onwebkitanimationend !== undefined;transitionProp = isWebkitTrans?'WebkitTransition':'transition';transitionEndEvent = isWebkitTrans?'webkitTransitionEnd':'transitionend';animationProp = isWebkitAnim?'WebkitAnimation':'animation';animationEndEvent = isWebkitAnim?'webkitAnimationEnd':'animationend';} /**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */var nextTick=(function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending = false;var copies=callbacks.slice(0);callbacks = [];for(var i=0;i < copies.length;i++) {copies[i]();}} /* istanbul ignore if */if(typeof MutationObserver !== 'undefined'){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(counter);observer.observe(textNode,{characterData:true});timerFunc = function(){counter = (counter + 1) % 2;textNode.data = counter;};}else { // webpack attempts to inject a shim for setImmediate
	// if it is used as a global, so we have to work around that to
	// avoid bundling unnecessary code.
	var context=inBrowser?window:typeof global !== 'undefined'?global:{};timerFunc = context.setImmediate || setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending = true;timerFunc(nextTickHandler,0);};})();function Cache(limit){this.size = 0;this.limit = limit;this.head = this.tail = undefined;this._keymap = Object.create(null);}var p=Cache.prototype; /**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */p.put = function(key,value){var removed;if(this.size === this.limit){removed = this.shift();}var entry=this.get(key,true);if(!entry){entry = {key:key};this._keymap[key] = entry;if(this.tail){this.tail.newer = entry;entry.older = this.tail;}else {this.head = entry;}this.tail = entry;this.size++;}entry.value = value;return removed;}; /**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */p.shift = function(){var entry=this.head;if(entry){this.head = this.head.newer;this.head.older = undefined;entry.newer = entry.older = undefined;this._keymap[entry.key] = undefined;this.size--;}return entry;}; /**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */p.get = function(key,returnEntry){var entry=this._keymap[key];if(entry === undefined)return;if(entry === this.tail){return returnEntry?entry:entry.value;} // HEAD--------------TAIL
	//   <.older   .newer>
	//  <--- add direction --
	//   A  B  C  <D>  E
	if(entry.newer){if(entry === this.head){this.head = entry.newer;}entry.newer.older = entry.older; // C <-- E.
	}if(entry.older){entry.older.newer = entry.newer; // C. --> E
	}entry.newer = undefined; // D --x
	entry.older = this.tail; // D. --> E
	if(this.tail){this.tail.newer = entry; // E. <-- D
	}this.tail = entry;return returnEntry?entry:entry.value;};var cache$1=new Cache(1000);var filterTokenRE=/[^\s'"]+|'[^']*'|"[^"]*"/g;var reservedArgRE=/^in$|^-?\d+/; /**
	 * Parser state
	 */var str;var dir;var c;var prev;var i;var l;var lastFilterIndex;var inSingle;var inDouble;var curly;var square;var paren; /**
	 * Push a filter to the current directive object
	 */function pushFilter(){var exp=str.slice(lastFilterIndex,i).trim();var filter;if(exp){filter = {};var tokens=exp.match(filterTokenRE);filter.name = tokens[0];if(tokens.length > 1){filter.args = tokens.slice(1).map(processFilterArg);}}if(filter){(dir.filters = dir.filters || []).push(filter);}lastFilterIndex = i + 1;} /**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */function processFilterArg(arg){if(reservedArgRE.test(arg)){return {value:toNumber(arg),dynamic:false};}else {var stripped=stripQuotes(arg);var dynamic=stripped === arg;return {value:dynamic?arg:stripped,dynamic:dynamic};}} /**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */function parseDirective(s){var hit=cache$1.get(s);if(hit){return hit;} // reset parser state
	str = s;inSingle = inDouble = false;curly = square = paren = 0;lastFilterIndex = 0;dir = {};for(i = 0,l = str.length;i < l;i++) {prev = c;c = str.charCodeAt(i);if(inSingle){ // check single quote
	if(c === 0x27 && prev !== 0x5C)inSingle = !inSingle;}else if(inDouble){ // check double quote
	if(c === 0x22 && prev !== 0x5C)inDouble = !inDouble;}else if(c === 0x7C &&  // pipe
	str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C){if(dir.expression == null){ // first filter, end of expression
	lastFilterIndex = i + 1;dir.expression = str.slice(0,i).trim();}else { // already has filter
	pushFilter();}}else {switch(c){case 0x22:inDouble = true;break; // "
	case 0x27:inSingle = true;break; // '
	case 0x28:paren++;break; // (
	case 0x29:paren--;break; // )
	case 0x5B:square++;break; // [
	case 0x5D:square--;break; // ]
	case 0x7B:curly++;break; // {
	case 0x7D:curly--;break; // }
	}}}if(dir.expression == null){dir.expression = str.slice(0,i).trim();}else if(lastFilterIndex !== 0){pushFilter();}cache$1.put(s,dir);return dir;}var directive=Object.freeze({parseDirective:parseDirective});var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var cache=undefined;var tagRE=undefined;var htmlRE=undefined; /**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */function escapeRegex(str){return str.replace(regexEscapeRE,'\\$&');}function compileRegex(){var open=escapeRegex(config.delimiters[0]);var close=escapeRegex(config.delimiters[1]);var unsafeOpen=escapeRegex(config.unsafeDelimiters[0]);var unsafeClose=escapeRegex(config.unsafeDelimiters[1]);tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close,'g');htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$'); // reset cache
	cache = new Cache(1000);} /**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */function parseText(text){if(!cache){compileRegex();}var hit=cache.get(text);if(hit){return hit;}text = text.replace(/\n/g,'');if(!tagRE.test(text)){return null;}var tokens=[];var lastIndex=tagRE.lastIndex = 0;var match,index,html,value,first,oneTime; /* eslint-disable no-cond-assign */while(match = tagRE.exec(text)) { /* eslint-enable no-cond-assign */index = match.index; // push text token
	if(index > lastIndex){tokens.push({value:text.slice(lastIndex,index)});} // tag token
	html = htmlRE.test(match[0]);value = html?match[1]:match[2];first = value.charCodeAt(0);oneTime = first === 42; // *
	value = oneTime?value.slice(1):value;tokens.push({tag:true,value:value.trim(),html:html,oneTime:oneTime});lastIndex = index + match[0].length;}if(lastIndex < text.length){tokens.push({value:text.slice(lastIndex)});}cache.put(text,tokens);return tokens;} /**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */function tokensToExp(tokens,vm){if(tokens.length > 1){return tokens.map(function(token){return formatToken(token,vm);}).join('+');}else {return formatToken(tokens[0],vm,true);}} /**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */function formatToken(token,vm,single){return token.tag?token.oneTime && vm?'"' + vm.$eval(token.value) + '"':inlineFilters(token.value,single):'"' + token.value + '"';} /**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */var filterRE=/[^|]\|[^|]/;function inlineFilters(exp,single){if(!filterRE.test(exp)){return single?exp:'(' + exp + ')';}else {var dir=parseDirective(exp);if(!dir.filters){return '(' + exp + ')';}else {return 'this._applyFilters(' + dir.expression +  // value
	',null,' +  // oldValue (null for read)
	JSON.stringify(dir.filters) +  // filter descriptors
	',false)'; // write?
	}}}var text=Object.freeze({compileRegex:compileRegex,parseText:parseText,tokensToExp:tokensToExp});var delimiters=['{{','}}'];var unsafeDelimiters=['{{{','}}}'];var config=Object.defineProperties({ /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */debug:false, /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */silent:false, /**
	   * Whether to use async rendering.
	   */async:true, /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */warnExpressionErrors:true, /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */_delimitersChanged:true, /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */_assetTypes:['component','directive','elementDirective','filter','transition','partial'], /**
	   * prop binding modes
	   */_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2}, /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */_maxUpdateCount:100},{delimiters:{ /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */get:function get(){return delimiters;},set:function set(val){delimiters = val;compileRegex();},configurable:true,enumerable:true},unsafeDelimiters:{get:function get(){return unsafeDelimiters;},set:function set(val){unsafeDelimiters = val;compileRegex();},configurable:true,enumerable:true}});var warn=undefined;if(true){(function(){var hasConsole=typeof console !== 'undefined';warn = function(msg,e){if(hasConsole && (!config.silent || config.debug)){console.warn('[Vue warn]: ' + msg); /* istanbul ignore if */if(config.debug){if(e){throw e;}else {console.warn(new Error('Warning Stack Trace').stack);}}}};})();} /**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function appendWithTransition(el,target,vm,cb){applyTransition(el,1,function(){target.appendChild(el);},vm,cb);} /**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function beforeWithTransition(el,target,vm,cb){applyTransition(el,1,function(){before(el,target);},vm,cb);} /**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function removeWithTransition(el,vm,cb){applyTransition(el,-1,function(){remove(el);},vm,cb);} /**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function applyTransition(el,direction,op,vm,cb){var transition=el.__v_trans;if(!transition ||  // skip if there are no js hooks and CSS transition is
	// not supported
	!transition.hooks && !transitionEndEvent ||  // skip transitions for initial compile
	!vm._isCompiled ||  // if the vm is being manipulated by a parent directive
	// during the parent's compilation phase, skip the
	// animation.
	vm.$parent && !vm.$parent._isCompiled){op();if(cb)cb();return;}var action=direction > 0?'enter':'leave';transition[action](op,cb);}var transition=Object.freeze({appendWithTransition:appendWithTransition,beforeWithTransition:beforeWithTransition,removeWithTransition:removeWithTransition,applyTransition:applyTransition}); /**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */function query(el){if(typeof el === 'string'){var selector=el;el = document.querySelector(el);if(!el){("dev") !== 'production' && warn('Cannot find element: ' + selector);}}return el;} /**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function inDoc(node){var doc=document.documentElement;var parent=node && node.parentNode;return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));} /**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */function getAttr(node,_attr){var val=node.getAttribute(_attr);if(val !== null){node.removeAttribute(_attr);}return val;} /**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */function getBindAttr(node,name){var val=getAttr(node,':' + name);if(val === null){val = getAttr(node,'v-bind:' + name);}return val;} /**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */function hasBindAttr(node,name){return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);} /**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function before(el,target){target.parentNode.insertBefore(el,target);} /**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function after(el,target){if(target.nextSibling){before(el,target.nextSibling);}else {target.parentNode.appendChild(el);}} /**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */function remove(el){el.parentNode.removeChild(el);} /**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function prepend(el,target){if(target.firstChild){before(el,target.firstChild);}else {target.appendChild(el);}} /**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */function replace(target,el){var parent=target.parentNode;if(parent){parent.replaceChild(el,target);}} /**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */function on(el,event,cb,useCapture){el.addEventListener(event,cb,useCapture);} /**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function off(el,event,cb){el.removeEventListener(event,cb);} /**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function setClass(el,cls){ /* istanbul ignore if */if(isIE9 && !/svg$/.test(el.namespaceURI)){el.className = cls;}else {el.setAttribute('class',cls);}} /**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function addClass(el,cls){if(el.classList){el.classList.add(cls);}else {var cur=' ' + (el.getAttribute('class') || '') + ' ';if(cur.indexOf(' ' + cls + ' ') < 0){setClass(el,(cur + cls).trim());}}} /**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function removeClass(el,cls){if(el.classList){el.classList.remove(cls);}else {var cur=' ' + (el.getAttribute('class') || '') + ' ';var tar=' ' + cls + ' ';while(cur.indexOf(tar) >= 0) {cur = cur.replace(tar,' ');}setClass(el,cur.trim());}if(!el.className){el.removeAttribute('class');}} /**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */function extractContent(el,asFragment){var child;var rawContent; /* istanbul ignore if */if(isTemplate(el) && isFragment(el.content)){el = el.content;}if(el.hasChildNodes()){trimNode(el);rawContent = asFragment?document.createDocumentFragment():document.createElement('div'); /* eslint-disable no-cond-assign */while(child = el.firstChild) { /* eslint-enable no-cond-assign */rawContent.appendChild(child);}}return rawContent;} /**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */function trimNode(node){var child; /* eslint-disable no-sequences */while((child = node.firstChild,isTrimmable(child))) {node.removeChild(child);}while((child = node.lastChild,isTrimmable(child))) {node.removeChild(child);} /* eslint-enable no-sequences */}function isTrimmable(node){return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);} /**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */function isTemplate(el){return el.tagName && el.tagName.toLowerCase() === 'template';} /**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */function createAnchor(content,persist){var anchor=config.debug?document.createComment(content):document.createTextNode(persist?' ':'');anchor.__v_anchor = true;return anchor;} /**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */var refRE=/^v-ref:/;function findRef(node){if(node.hasAttributes()){var attrs=node.attributes;for(var i=0,l=attrs.length;i < l;i++) {var name=attrs[i].name;if(refRE.test(name)){return camelize(name.replace(refRE,''));}}}} /**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */function mapNodeRange(node,end,op){var next;while(node !== end) {next = node.nextSibling;op(node);node = next;}op(end);} /**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */function removeNodeRange(start,end,vm,frag,cb){var done=false;var removed=0;var nodes=[];mapNodeRange(start,end,function(node){if(node === end)done = true;nodes.push(node);removeWithTransition(node,vm,onRemoved);});function onRemoved(){removed++;if(done && removed >= nodes.length){for(var i=0;i < nodes.length;i++) {frag.appendChild(nodes[i]);}cb && cb();}}} /**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isFragment(node){return node && node.nodeType === 11;} /**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else {var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}var commonTagRE=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;var reservedTagRE=/^(slot|partial|component)$/;var isUnknownElement=undefined;if(true){isUnknownElement = function(el,tag){if(tag.indexOf('-') > -1){ // http://stackoverflow.com/a/28210364/1070244
	return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;}else {return (/HTMLUnknownElement/.test(el.toString()) &&  // Chrome returns unknown for several HTML5 elements.
	// https://code.google.com/p/chromium/issues/detail?id=540526
	!/^(data|time|rtc|rb)$/.test(tag));}};} /**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function checkComponentAttr(el,options){var tag=el.tagName.toLowerCase();var hasAttrs=el.hasAttributes();if(!commonTagRE.test(tag) && !reservedTagRE.test(tag)){if(resolveAsset(options,'components',tag)){return {id:tag};}else {var is=hasAttrs && getIsBinding(el);if(is){return is;}else if(true){var expectedTag=options._componentNameMap && options._componentNameMap[tag];if(expectedTag){warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');}else if(isUnknownElement(el,tag)){warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');}}}}else if(hasAttrs){return getIsBinding(el);}} /**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */function getIsBinding(el){ // dynamic syntax
	var exp=getAttr(el,'is');if(exp != null){return {id:exp};}else {exp = getBindAttr(el,'is');if(exp != null){return {id:exp,dynamic:true};}}} /**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function initProp(vm,prop,value){var key=prop.path;value = coerceProp(prop,value);vm[key] = vm._data[key] = assertProp(prop,value)?value:undefined;} /**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */function assertProp(prop,value){if(!prop.options.required && ( // non-required
	prop.raw === null ||  // abscent
	value == null) // null or undefined
	){return true;}var options=prop.options;var type=options.type;var valid=true;var expectedType;if(type){if(type === String){expectedType = 'string';valid = typeof value === expectedType;}else if(type === Number){expectedType = 'number';valid = typeof value === 'number';}else if(type === Boolean){expectedType = 'boolean';valid = typeof value === 'boolean';}else if(type === Function){expectedType = 'function';valid = typeof value === 'function';}else if(type === Object){expectedType = 'object';valid = isPlainObject(value);}else if(type === Array){expectedType = 'array';valid = isArray(value);}else {valid = value instanceof type;}}if(!valid){("dev") !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');return false;}var validator=options.validator;if(validator){if(!validator(value)){("dev") !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');return false;}}return true;} /**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */function coerceProp(prop,value){var coerce=prop.options.coerce;if(!coerce){return value;} // coerce is a function
	return coerce(value);}function formatType(val){return val?val.charAt(0).toUpperCase() + val.slice(1):'custom type';}function formatValue(val){return Object.prototype.toString.call(val).slice(8,-1);} /**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */var strats=config.optionMergeStrategies = Object.create(null); /**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from) {toVal = to[key];fromVal = from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal) && isObject(fromVal)){mergeData(toVal,fromVal);}}return to;} /**
	 * Data
	 */strats.data = function(parentVal,childVal,vm){if(!vm){ // in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal !== 'function'){("dev") !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');return parentVal;}if(!parentVal){return childVal;} // when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal || childVal){return function mergedInstanceDataFn(){ // instance merge
	var instanceData=typeof childVal === 'function'?childVal.call(vm):childVal;var defaultData=typeof parentVal === 'function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else {return defaultData;}};}}; /**
	 * El
	 */strats.el = function(parentVal,childVal,vm){if(!vm && childVal && typeof childVal !== 'function'){("dev") !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');return;}var ret=childVal || parentVal; // invoke the element factory if this is instance merge
	return vm && typeof ret === 'function'?ret.call(vm):ret;}; /**
	 * Hooks and param attributes are merged as arrays.
	 */strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):isArray(childVal)?childVal:[childVal]:parentVal;}; /**
	 * 0.11 deprecation warning
	 */strats.paramAttributes = function(){ /* istanbul ignore next */("dev") !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');}; /**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal);return childVal?extend(res,guardArrayAssets(childVal)):res;}config._assetTypes.forEach(function(type){strats[type + 's'] = mergeAssets;}); /**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch = strats.events = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal) {var parent=ret[key];var child=childVal[key];if(parent && !isArray(parent)){parent = [parent];}ret[key] = parent?parent.concat(child):[child];}return ret;}; /**
	 * Other object hashes.
	 */strats.props = strats.methods = strats.computed = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;}; /**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal === undefined?parentVal:childVal;}; /**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */function guardComponents(options){if(options.components){var components=options.components = guardArrayAssets(options.components);var ids=Object.keys(components);var def;if(true){var map=options._componentNameMap = {};}for(var i=0,l=ids.length;i < l;i++) {var key=ids[i];if(commonTagRE.test(key) || reservedTagRE.test(key)){("dev") !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);continue;} // record a all lowercase <-> kebab-case mapping for
	// possible custom element case error warning
	if(true){map[key.replace(/-/g,'').toLowerCase()] = hyphenate(key);}def = components[key];if(isPlainObject(def)){components[key] = Vue.extend(def);}}}} /**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */function guardProps(options){var props=options.props;var i,val;if(isArray(props)){options.props = {};i = props.length;while(i--) {val = props[i];if(typeof val === 'string'){options.props[val] = null;}else if(val.name){options.props[val.name] = val;}}}else if(isPlainObject(props)){var keys=Object.keys(props);i = keys.length;while(i--) {val = props[keys[i]];if(typeof val === 'function'){props[keys[i]] = {type:val};}}}} /**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */function guardArrayAssets(assets){if(isArray(assets)){var res={};var i=assets.length;var asset;while(i--) {asset = assets[i];var id=typeof asset === 'function'?asset.options && asset.options.name || asset.id:asset.name || asset.id;if(!id){("dev") !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');}else {res[id] = asset;}}return res;}return assets;} /**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */function mergeOptions(parent,child,vm){guardComponents(child);guardProps(child);var options={};var key;if(child.mixins){for(var i=0,l=child.mixins.length;i < l;i++) {parent = mergeOptions(parent,child.mixins[i],vm);}}for(key in parent) {mergeField(key);}for(key in child) {if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key] || defaultStrat;options[key] = strat(parent[key],child[key],vm,key);}return options;} /**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */function resolveAsset(options,type,id){ /* istanbul ignore if */if(typeof id !== 'string'){return;}var assets=options[type];var camelizedId;return assets[id] ||  // camelCase ID
	assets[camelizedId = camelize(id)] ||  // Pascal Case ID
	assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];} /**
	 * Assert asset exists
	 */function assertAsset(val,type,id){if(!val){("dev") !== 'production' && warn('Failed to resolve ' + type + ': ' + id);}}var uid$1=0; /**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */function Dep(){this.id = uid$1++;this.subs = [];} // the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null; /**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.addSub = function(sub){this.subs.push(sub);}; /**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.removeSub = function(sub){this.subs.$remove(sub);}; /**
	 * Add self as a dependency to the target watcher.
	 */Dep.prototype.depend = function(){Dep.target.addDep(this);}; /**
	 * Notify all subscribers of a new value.
	 */Dep.prototype.notify = function(){ // stablize the subscriber list first
	var subs=toArray(this.subs);for(var i=0,l=subs.length;i < l;i++) {subs[i].update();}};var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto) /**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){ // cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){ // avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--) {args[i] = arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case 'push':inserted = args;break;case 'unshift':inserted = args;break;case 'splice':inserted = args.slice(2);break;}if(inserted)ob.observeArray(inserted); // notify change
	ob.dep.notify();return result;});}); /**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */def(arrayProto,'$set',function $set(index,val){if(index >= this.length){this.length = Number(index) + 1;}return this.splice(index,1,val)[0];}); /**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */def(arrayProto,'$remove',function $remove(item){ /* istanbul ignore if */if(!this.length)return;var index=indexOf(this,item);if(index > -1){return this.splice(index,1);}});var arrayKeys=Object.getOwnPropertyNames(arrayMethods); /**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */function Observer(value){this.value = value;this.dep = new Dep();def(value,'__ob__',this);if(isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else {this.walk(value);}} // Instance methods
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */Observer.prototype.walk = function(obj){var keys=Object.keys(obj);for(var i=0,l=keys.length;i < l;i++) {this.convert(keys[i],obj[keys[i]]);}}; /**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */Observer.prototype.observeArray = function(items){for(var i=0,l=items.length;i < l;i++) {observe(items[i]);}}; /**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */Observer.prototype.convert = function(key,val){defineReactive(this.value,key,val);}; /**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.addVm = function(vm){(this.vms || (this.vms = [])).push(vm);}; /**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.removeVm = function(vm){this.vms.$remove(vm);}; // helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function protoAugment(target,src){ /* eslint-disable no-proto */target.__proto__ = src; /* eslint-enable no-proto */} /**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i < l;i++) {var key=keys[i];def(target,key,src[key]);}} /**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */function observe(value,vm){if(!value || typeof value !== 'object'){return;}var ob;if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){ob = value.__ob__;}else if((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue){ob = new Observer(value);}if(ob && vm){ob.addVm(vm);}return ob;} /**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */function defineReactive(obj,key,val){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property && property.configurable === false){return;} // cater for pre-defined getter/setters
	var getter=property && property.get;var setter=property && property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(isArray(value)){for(var e,i=0,l=value.length;i < l;i++) {e = value[i];e && e.__ob__ && e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal === value){return;}if(setter){setter.call(obj,newVal);}else {val = newVal;}childOb = observe(newVal);dep.notify();}});}var util=Object.freeze(Object.defineProperties({defineReactive:defineReactive,set:set,del:del,hasOwn:hasOwn,isLiteral:isLiteral,isReserved:isReserved,_toString:_toString,toNumber:toNumber,toBoolean:toBoolean,stripQuotes:stripQuotes,camelize:camelize,hyphenate:hyphenate,classify:classify,bind:bind,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,def:def,debounce:_debounce,indexOf:indexOf,cancellable:cancellable,looseEqual:looseEqual,isArray:isArray,hasProto:hasProto,inBrowser:inBrowser,devtools:devtools,isIE9:isIE9,isAndroid:isAndroid,nextTick:nextTick,query:query,inDoc:inDoc,getAttr:getAttr,getBindAttr:getBindAttr,hasBindAttr:hasBindAttr,before:before,after:after,remove:remove,prepend:prepend,replace:replace,on:on,off:off,setClass:setClass,addClass:addClass,removeClass:removeClass,extractContent:extractContent,trimNode:trimNode,isTemplate:isTemplate,createAnchor:createAnchor,findRef:findRef,mapNodeRange:mapNodeRange,removeNodeRange:removeNodeRange,isFragment:isFragment,getOuterHTML:getOuterHTML,mergeOptions:mergeOptions,resolveAsset:resolveAsset,assertAsset:assertAsset,checkComponentAttr:checkComponentAttr,initProp:initProp,assertProp:assertProp,coerceProp:coerceProp,commonTagRE:commonTagRE,reservedTagRE:reservedTagRE},{transitionProp:{get:function get(){return transitionProp;},configurable:true,enumerable:true},transitionEndEvent:{get:function get(){return transitionEndEvent;},configurable:true,enumerable:true},animationProp:{get:function get(){return animationProp;},configurable:true,enumerable:true},animationEndEvent:{get:function get(){return animationEndEvent;},configurable:true,enumerable:true},warn:{get:function get(){return warn;},configurable:true,enumerable:true}}));var uid=0;function initMixin(Vue){ /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */Vue.prototype._init = function(options){options = options || {};this.$el = null;this.$parent = options.parent;this.$root = this.$parent?this.$parent.$root:this;this.$children = [];this.$refs = {}; // child vm references
	this.$els = {}; // element references
	this._watchers = []; // all watchers as an array
	this._directives = []; // all directives
	// a uid
	this._uid = uid++; // a flag to avoid this being observed
	this._isVue = true; // events bookkeeping
	this._events = {}; // registered callbacks
	this._eventsCount = {}; // for $broadcast optimization
	// fragment instance properties
	this._isFragment = false;this._fragment =  // @type {DocumentFragment}
	this._fragmentStart =  // @type {Text|Comment}
	this._fragmentEnd = null; // @type {Text|Comment}
	// lifecycle state
	this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;this._unlinkFn = null; // context:
	// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	this._context = options._context || this.$parent; // scope:
	// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	this._scope = options._scope; // fragment:
	// if this instance is compiled inside a Fragment, it
	// needs to reigster itself as a child of that fragment
	// for attach/detach to work properly.
	this._frag = options._frag;if(this._frag){this._frag.children.push(this);} // push self into parent / transclusion host
	if(this.$parent){this.$parent.$children.push(this);} // save raw constructor data before merge
	// so that we know which properties are provided at
	// instantiation.
	if(true){this._runtimeData = options.data;} // merge options.
	options = this.$options = mergeOptions(this.constructor.options,options,this); // set ref
	this._updateRef(); // initialize data as empty object.
	// it will be filled up in _initScope().
	this._data = {}; // call init hook
	this._callHook('init'); // initialize data observation and scope inheritance.
	this._initState(); // setup event system and option events.
	this._initEvents(); // call created hook
	this._callHook('created'); // if `el` option is passed, start compilation.
	if(options.el){this.$mount(options.el);}};}var pathCache=new Cache(1000); // actions
	var APPEND=0;var PUSH=1;var INC_SUB_PATH_DEPTH=2;var PUSH_SUB_PATH=3; // states
	var BEFORE_PATH=0;var IN_PATH=1;var BEFORE_IDENT=2;var IN_IDENT=3;var IN_SUB_PATH=4;var IN_SINGLE_QUOTE=5;var IN_DOUBLE_QUOTE=6;var AFTER_PATH=7;var ERROR=8;var pathStateMachine=[];pathStateMachine[BEFORE_PATH] = {'ws':[BEFORE_PATH],'ident':[IN_IDENT,APPEND],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[IN_PATH] = {'ws':[IN_PATH],'.':[BEFORE_IDENT],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[BEFORE_IDENT] = {'ws':[BEFORE_IDENT],'ident':[IN_IDENT,APPEND]};pathStateMachine[IN_IDENT] = {'ident':[IN_IDENT,APPEND],'0':[IN_IDENT,APPEND],'number':[IN_IDENT,APPEND],'ws':[IN_PATH,PUSH],'.':[BEFORE_IDENT,PUSH],'[':[IN_SUB_PATH,PUSH],'eof':[AFTER_PATH,PUSH]};pathStateMachine[IN_SUB_PATH] = {"'":[IN_SINGLE_QUOTE,APPEND],'"':[IN_DOUBLE_QUOTE,APPEND],'[':[IN_SUB_PATH,INC_SUB_PATH_DEPTH],']':[IN_PATH,PUSH_SUB_PATH],'eof':ERROR,'else':[IN_SUB_PATH,APPEND]};pathStateMachine[IN_SINGLE_QUOTE] = {"'":[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_SINGLE_QUOTE,APPEND]};pathStateMachine[IN_DOUBLE_QUOTE] = {'"':[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_DOUBLE_QUOTE,APPEND]}; /**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */function getPathCharType(ch){if(ch === undefined){return 'eof';}var code=ch.charCodeAt(0);switch(code){case 0x5B: // [
	case 0x5D: // ]
	case 0x2E: // .
	case 0x22: // "
	case 0x27: // '
	case 0x30: // 0
	return ch;case 0x5F: // _
	case 0x24: // $
	return 'ident';case 0x20: // Space
	case 0x09: // Tab
	case 0x0A: // Newline
	case 0x0D: // Return
	case 0xA0: // No-break space
	case 0xFEFF: // Byte Order Mark
	case 0x2028: // Line Separator
	case 0x2029: // Paragraph Separator
	return 'ws';} // a-z, A-Z
	if(code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A){return 'ident';} // 1-9
	if(code >= 0x31 && code <= 0x39){return 'number';}return 'else';} /**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */function formatSubPath(path){var trimmed=path.trim(); // invalid leading 0
	if(path.charAt(0) === '0' && isNaN(path)){return false;}return isLiteral(trimmed)?stripQuotes(trimmed):'*' + trimmed;} /**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parse(path){var keys=[];var index=-1;var mode=BEFORE_PATH;var subPathDepth=0;var c,newChar,key,type,transition,action,typeMap;var actions=[];actions[PUSH] = function(){if(key !== undefined){keys.push(key);key = undefined;}};actions[APPEND] = function(){if(key === undefined){key = newChar;}else {key += newChar;}};actions[INC_SUB_PATH_DEPTH] = function(){actions[APPEND]();subPathDepth++;};actions[PUSH_SUB_PATH] = function(){if(subPathDepth > 0){subPathDepth--;mode = IN_SUB_PATH;actions[APPEND]();}else {subPathDepth = 0;key = formatSubPath(key);if(key === false){return false;}else {actions[PUSH]();}}};function maybeUnescapeQuote(){var nextChar=path[index + 1];if(mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"'){index++;newChar = '\\' + nextChar;actions[APPEND]();return true;}}while(mode != null) {index++;c = path[index];if(c === '\\' && maybeUnescapeQuote()){continue;}type = getPathCharType(c);typeMap = pathStateMachine[mode];transition = typeMap[type] || typeMap['else'] || ERROR;if(transition === ERROR){return; // parse error
	}mode = transition[0];action = actions[transition[1]];if(action){newChar = transition[2];newChar = newChar === undefined?c:newChar;if(action() === false){return;}}if(mode === AFTER_PATH){keys.raw = path;return keys;}}} /**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parsePath(path){var hit=pathCache.get(path);if(!hit){hit = parse(path);if(hit){pathCache.put(path,hit);}}return hit;} /**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */function getPath(obj,path){return parseExpression(path).get(obj);} /**
	 * Warn against setting non-existent root path on a vm.
	 */var warnNonExistent;if(true){warnNonExistent = function(path){warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');};} /**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */function setPath(obj,path,val){var original=obj;if(typeof path === 'string'){path = parse(path);}if(!path || !isObject(obj)){return false;}var last,key;for(var i=0,l=path.length;i < l;i++) {last = obj;key = path[i];if(key.charAt(0) === '*'){key = parseExpression(key.slice(1)).get.call(original,original);}if(i < l - 1){obj = obj[key];if(!isObject(obj)){obj = {};if(("dev") !== 'production' && last._isVue){warnNonExistent(path);}set(last,key,obj);}}else {if(isArray(obj)){obj.$set(key,val);}else if(key in obj){obj[key] = val;}else {if(("dev") !== 'production' && obj._isVue){warnNonExistent(path);}set(obj,key,val);}}}return true;}var path=Object.freeze({parsePath:parsePath,getPath:getPath,setPath:setPath});var expressionCache=new Cache(1000);var allowedKeywords='Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';var allowedKeywordsRE=new RegExp('^(' + allowedKeywords.replace(/,/g,'\\b|') + '\\b)'); // keywords that don't make sense inside expressions
	var improperKeywords='break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';var improperKeywordsRE=new RegExp('^(' + improperKeywords.replace(/,/g,'\\b|') + '\\b)');var wsRE=/\s/g;var newlineRE=/\n/g;var saveRE=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;var restoreRE=/"(\d+)"/g;var pathTestRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;var identRE=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g;var booleanLiteralRE=/^(?:true|false)$/; /**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */var saved=[]; /**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */function save(str,isString){var i=saved.length;saved[i] = isString?str.replace(newlineRE,'\\n'):str;return '"' + i + '"';} /**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */function rewrite(raw){var c=raw.charAt(0);var path=raw.slice(1);if(allowedKeywordsRE.test(path)){return raw;}else {path = path.indexOf('"') > -1?path.replace(restoreRE,restore):path;return c + 'scope.' + path;}} /**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */function restore(str,i){return saved[i];} /**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */function compileGetter(exp){if(improperKeywordsRE.test(exp)){("dev") !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);} // reset state
	saved.length = 0; // save strings and object literal keys
	var body=exp.replace(saveRE,save).replace(wsRE,''); // rewrite all paths
	// pad 1 space here becaue the regex matches 1 extra char
	body = (' ' + body).replace(identRE,rewrite).replace(restoreRE,restore);return makeGetterFn(body);} /**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */function makeGetterFn(body){try{ /* eslint-disable no-new-func */return new Function('scope','return ' + body + ';'); /* eslint-enable no-new-func */}catch(e) {("dev") !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);}} /**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */function compileSetter(exp){var path=parsePath(exp);if(path){return function(scope,val){setPath(scope,path,val);};}else {("dev") !== 'production' && warn('Invalid setter expression: ' + exp);}} /**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */function parseExpression(exp,needSet){exp = exp.trim(); // try cache
	var hit=expressionCache.get(exp);if(hit){if(needSet && !hit.set){hit.set = compileSetter(hit.exp);}return hit;}var res={exp:exp};res.get = isSimplePath(exp) && exp.indexOf('[') < 0 // optimized super simple getter
	?makeGetterFn('scope.' + exp) // dynamic getter
	:compileGetter(exp);if(needSet){res.set = compileSetter(exp);}expressionCache.put(exp,res);return res;} /**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */function isSimplePath(exp){return pathTestRE.test(exp) &&  // don't treat true/false as paths
	!booleanLiteralRE.test(exp) &&  // Math constants e.g. Math.PI, Math.E etc.
	exp.slice(0,5) !== 'Math.';}var expression=Object.freeze({parseExpression:parseExpression,isSimplePath:isSimplePath}); // we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue=[];var userQueue=[];var has={};var circular={};var waiting=false;var internalQueueDepleted=false; /**
	 * Reset the batcher's state.
	 */function resetBatcherState(){queue = [];userQueue = [];has = {};circular = {};waiting = internalQueueDepleted = false;} /**
	 * Flush both queues and run the watchers.
	 */function flushBatcherQueue(){runBatcherQueue(queue);internalQueueDepleted = true;runBatcherQueue(userQueue); // dev tool hook
	/* istanbul ignore if */if(devtools){devtools.emit('flush');}resetBatcherState();} /**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */function runBatcherQueue(queue){ // do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(var i=0;i < queue.length;i++) {var watcher=queue[i];var id=watcher.id;has[id] = null;watcher.run(); // in dev build, check and stop circular updates.
	if(("dev") !== 'production' && has[id] != null){circular[id] = (circular[id] || 0) + 1;if(circular[id] > config._maxUpdateCount){queue.splice(has[id],1);warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);}}}} /**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */function pushWatcher(watcher){var id=watcher.id;if(has[id] == null){ // if an internal watcher is pushed, but the internal
	// queue is already depleted, we run it immediately.
	if(internalQueueDepleted && !watcher.user){watcher.run();return;} // push watcher into appropriate queue
	var q=watcher.user?userQueue:queue;has[id] = q.length;q.push(watcher); // queue the flush
	if(!waiting){waiting = true;nextTick(flushBatcherQueue);}}}var uid$2=0; /**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */function Watcher(vm,expOrFn,cb,options){ // mix in options
	if(options){extend(this,options);}var isFn=typeof expOrFn === 'function';this.vm = vm;vm._watchers.push(this);this.expression = isFn?expOrFn.toString():expOrFn;this.cb = cb;this.id = ++uid$2; // uid for batching
	this.active = true;this.dirty = this.lazy; // for lazy watchers
	this.deps = Object.create(null);this.newDeps = null;this.prevError = null; // for async error stacks
	// parse expression for getter/setter
	if(isFn){this.getter = expOrFn;this.setter = undefined;}else {var res=parseExpression(expOrFn,this.twoWay);this.getter = res.get;this.setter = res.set;}this.value = this.lazy?undefined:this.get(); // state for avoiding false triggers for deep and Array
	// watchers during vm._digest()
	this.queued = this.shallow = false;} /**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */Watcher.prototype.addDep = function(dep){var id=dep.id;if(!this.newDeps[id]){this.newDeps[id] = dep;if(!this.deps[id]){this.deps[id] = dep;dep.addSub(this);}}}; /**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get = function(){this.beforeGet();var scope=this.scope || this.vm;var value;try{value = this.getter.call(scope,scope);}catch(e) {if(("dev") !== 'production' && config.warnExpressionErrors){warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug?'':'Turn on debug mode to see stack trace.'),e);}} // "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}if(this.preProcess){value = this.preProcess(value);}if(this.filters){value = scope._applyFilters(value,null,this.filters,false);}if(this.postProcess){value = this.postProcess(value);}this.afterGet();return value;}; /**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */Watcher.prototype.set = function(value){var scope=this.scope || this.vm;if(this.filters){value = scope._applyFilters(value,this.value,this.filters,true);}try{this.setter.call(scope,scope,value);}catch(e) {if(("dev") !== 'production' && config.warnExpressionErrors){warn('Error when evaluating setter "' + this.expression + '"',e);}} // two-way sync for v-for alias
	var forContext=scope.$forContext;if(forContext && forContext.alias === this.expression){if(forContext.filters){("dev") !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');return;}forContext._withLock(function(){if(scope.$key){ // original is an object
	forContext.rawValue[scope.$key] = value;}else {forContext.rawValue.$set(scope.$index,value);}});}}; /**
	 * Prepare for dependency collection.
	 */Watcher.prototype.beforeGet = function(){Dep.target = this;this.newDeps = Object.create(null);}; /**
	 * Clean up for dependency collection.
	 */Watcher.prototype.afterGet = function(){Dep.target = null;var ids=Object.keys(this.deps);var i=ids.length;while(i--) {var id=ids[i];if(!this.newDeps[id]){this.deps[id].removeSub(this);}}this.deps = this.newDeps;}; /**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */Watcher.prototype.update = function(shallow){if(this.lazy){this.dirty = true;}else if(this.sync || !config.async){this.run();}else { // if queued, only overwrite shallow with non-shallow,
	// but not the other way around.
	this.shallow = this.queued?shallow?this.shallow:false:!!shallow;this.queued = true; // record before-push error stack in debug mode
	/* istanbul ignore if */if(("dev") !== 'production' && config.debug){this.prevError = new Error('[vue] async stack trace');}pushWatcher(this);}}; /**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */Watcher.prototype.run = function(){if(this.active){var value=this.get();if(value !== this.value ||  // Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated; but only do so if this is a
	// non-shallow update (caused by a vm digest).
	(isObject(value) || this.deep) && !this.shallow){ // set new value
	var oldValue=this.value;this.value = value; // in debug + async mode, when a watcher callbacks
	// throws, we also throw the saved before-push error
	// so the full cross-tick stack trace is available.
	var prevError=this.prevError; /* istanbul ignore if */if(("dev") !== 'production' && config.debug && prevError){this.prevError = null;try{this.cb.call(this.vm,value,oldValue);}catch(e) {nextTick(function(){throw prevError;},0);throw e;}}else {this.cb.call(this.vm,value,oldValue);}}this.queued = this.shallow = false;}}; /**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate = function(){ // avoid overwriting another watcher that is being
	// collected.
	var current=Dep.target;this.value = this.get();this.dirty = false;Dep.target = current;}; /**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend = function(){var depIds=Object.keys(this.deps);var i=depIds.length;while(i--) {this.deps[depIds[i]].depend();}}; /**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown = function(){if(this.active){ // remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed && !this.vm._vForRemoving){this.vm._watchers.$remove(this);}var depIds=Object.keys(this.deps);var i=depIds.length;while(i--) {this.deps[depIds[i]].removeSub(this);}this.active = false;this.vm = this.cb = this.value = null;}}; /**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */function traverse(val){var i,keys;if(isArray(val)){i = val.length;while(i--) traverse(val[i]);}else if(isObject(val)){keys = Object.keys(val);i = keys.length;while(i--) traverse(val[keys[i]]);}}var text$1={bind:function bind(){this.attr = this.el.nodeType === 3?'data':'textContent';},update:function update(value){this.el[this.attr] = _toString(value);}};var templateCache=new Cache(1000);var idSelectorCache=new Cache(1000);var map={efault:[0,'',''],legend:[1,'<fieldset>','</fieldset>'],tr:[2,'<table><tbody>','</tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>']};map.td = map.th = [3,'<table><tbody><tr>','</tr></tbody></table>'];map.option = map.optgroup = [1,'<select multiple="multiple">','</select>'];map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1,'<table>','</table>'];map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1,'<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">','</svg>']; /**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isRealTemplate(node){return isTemplate(node) && isFragment(node.content);}var tagRE$1=/<([\w:]+)/;var entityRE=/&#?\w+?;/; /**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */function stringToFragment(templateString,raw){ // try a cache hit first
	var cacheKey=raw?templateString:templateString.trim();var hit=templateCache.get(cacheKey);if(hit){return hit;}var frag=document.createDocumentFragment();var tagMatch=templateString.match(tagRE$1);var entityMatch=entityRE.test(templateString);if(!tagMatch && !entityMatch){ // text only, return a single text node.
	frag.appendChild(document.createTextNode(templateString));}else {var tag=tagMatch && tagMatch[1];var wrap=map[tag] || map.efault;var depth=wrap[0];var prefix=wrap[1];var suffix=wrap[2];var node=document.createElement('div');node.innerHTML = prefix + templateString + suffix;while(depth--) {node = node.lastChild;}var child; /* eslint-disable no-cond-assign */while(child = node.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}}if(!raw){trimNode(frag);}templateCache.put(cacheKey,frag);return frag;} /**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */function nodeToFragment(node){ // if its a template tag and the browser supports it,
	// its content is already a document fragment.
	if(isRealTemplate(node)){trimNode(node.content);return node.content;} // script template
	if(node.tagName === 'SCRIPT'){return stringToFragment(node.textContent);} // normal node, clone it to avoid mutating the original
	var clonedNode=cloneNode(node);var frag=document.createDocumentFragment();var child; /* eslint-disable no-cond-assign */while(child = clonedNode.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}trimNode(frag);return frag;} // Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate=(function(){ /* istanbul ignore else */if(inBrowser){var a=document.createElement('div');a.innerHTML = '<template>1</template>';return !a.cloneNode(true).firstChild.innerHTML;}else {return false;}})(); // Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug=(function(){ /* istanbul ignore else */if(inBrowser){var t=document.createElement('textarea');t.placeholder = 't';return t.cloneNode(true).value === 't';}else {return false;}})(); /**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */function cloneNode(node){if(!node.querySelectorAll){return node.cloneNode();}var res=node.cloneNode(true);var i,original,cloned; /* istanbul ignore if */if(hasBrokenTemplate){var tempClone=res;if(isRealTemplate(node)){node = node.content;tempClone = res.content;}original = node.querySelectorAll('template');if(original.length){cloned = tempClone.querySelectorAll('template');i = cloned.length;while(i--) {cloned[i].parentNode.replaceChild(cloneNode(original[i]),cloned[i]);}}} /* istanbul ignore if */if(hasTextareaCloneBug){if(node.tagName === 'TEXTAREA'){res.value = node.value;}else {original = node.querySelectorAll('textarea');if(original.length){cloned = res.querySelectorAll('textarea');i = cloned.length;while(i--) {cloned[i].value = original[i].value;}}}}return res;} /**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */function parseTemplate(template,shouldClone,raw){var node,frag; // if the template is already a document fragment,
	// do nothing
	if(isFragment(template)){trimNode(template);return shouldClone?cloneNode(template):template;}if(typeof template === 'string'){ // id selector
	if(!raw && template.charAt(0) === '#'){ // id selector can be cached too
	frag = idSelectorCache.get(template);if(!frag){node = document.getElementById(template.slice(1));if(node){frag = nodeToFragment(node); // save selector to cache
	idSelectorCache.put(template,frag);}}}else { // normal string template
	frag = stringToFragment(template,raw);}}else if(template.nodeType){ // a direct node
	frag = nodeToFragment(template);}return frag && shouldClone?cloneNode(frag):frag;}var template=Object.freeze({cloneNode:cloneNode,parseTemplate:parseTemplate});var html={bind:function bind(){ // a comment node means this is a binding for
	// {{{ inline unescaped html }}}
	if(this.el.nodeType === 8){ // hold nodes
	this.nodes = []; // replace the placeholder with proper anchor
	this.anchor = createAnchor('v-html');replace(this.el,this.anchor);}},update:function update(value){value = _toString(value);if(this.nodes){this.swap(value);}else {this.el.innerHTML = value;}},swap:function swap(value){ // remove old nodes
	var i=this.nodes.length;while(i--) {remove(this.nodes[i]);} // convert new value to a fragment
	// do not attempt to retrieve from id selector
	var frag=parseTemplate(value,true,true); // save a reference to these nodes so we can remove later
	this.nodes = toArray(frag.childNodes);before(frag,this.anchor);}}; /**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */function Fragment(linker,vm,frag,host,scope,parentFrag){this.children = [];this.childFrags = [];this.vm = vm;this.scope = scope;this.inserted = false;this.parentFrag = parentFrag;if(parentFrag){parentFrag.childFrags.push(this);}this.unlink = linker(vm,frag,host,scope,this);var single=this.single = frag.childNodes.length === 1 &&  // do not go single mode if the only node is an anchor
	!frag.childNodes[0].__v_anchor;if(single){this.node = frag.childNodes[0];this.before = singleBefore;this.remove = singleRemove;}else {this.node = createAnchor('fragment-start');this.end = createAnchor('fragment-end');this.frag = frag;prepend(this.node,frag);frag.appendChild(this.end);this.before = multiBefore;this.remove = multiRemove;}this.node.__v_frag = this;} /**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */Fragment.prototype.callHook = function(hook){var i,l;for(i = 0,l = this.childFrags.length;i < l;i++) {this.childFrags[i].callHook(hook);}for(i = 0,l = this.children.length;i < l;i++) {hook(this.children[i]);}}; /**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function singleBefore(target,withTransition){this.inserted = true;var method=withTransition !== false?beforeWithTransition:before;method(this.node,target,this.vm);if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, single node version
	 */function singleRemove(){this.inserted = false;var shouldCallRemove=inDoc(this.node);var self=this;this.beforeRemove();removeWithTransition(this.node,this.vm,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function multiBefore(target,withTransition){this.inserted = true;var vm=this.vm;var method=withTransition !== false?beforeWithTransition:before;mapNodeRange(this.node,this.end,function(node){method(node,target,vm);});if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, multi-nodes version
	 */function multiRemove(){this.inserted = false;var self=this;var shouldCallRemove=inDoc(this.node);this.beforeRemove();removeNodeRange(this.node,this.end,this.vm,this.frag,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Prepare the fragment for removal.
	 */Fragment.prototype.beforeRemove = function(){var i,l;for(i = 0,l = this.childFrags.length;i < l;i++) { // call the same method recursively on child
	// fragments, depth-first
	this.childFrags[i].beforeRemove(false);}for(i = 0,l = this.children.length;i < l;i++) { // Call destroy for all contained instances,
	// with remove:false and defer:true.
	// Defer is necessary because we need to
	// keep the children to call detach hooks
	// on them.
	this.children[i].$destroy(false,true);}var dirs=this.unlink.dirs;for(i = 0,l = dirs.length;i < l;i++) { // disable the watchers on all the directives
	// so that the rendered content stays the same
	// during removal.
	dirs[i]._watcher && dirs[i]._watcher.teardown();}}; /**
	 * Destroy the fragment.
	 */Fragment.prototype.destroy = function(){if(this.parentFrag){this.parentFrag.childFrags.$remove(this);}this.node.__v_frag = null;this.unlink();}; /**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function attach(child){if(!child._isAttached){child._callHook('attached');}} /**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function detach(child){if(child._isAttached){child._callHook('detached');}}var linkerCache=new Cache(5000); /**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */function FragmentFactory(vm,el){this.vm = vm;var template;var isString=typeof el === 'string';if(isString || isTemplate(el)){template = parseTemplate(el,true);}else {template = document.createDocumentFragment();template.appendChild(el);}this.template = template; // linker can be cached, but only for components
	var linker;var cid=vm.constructor.cid;if(cid > 0){var cacheId=cid + (isString?el:getOuterHTML(el));linker = linkerCache.get(cacheId);if(!linker){linker = compile(template,vm.$options,true);linkerCache.put(cacheId,linker);}}else {linker = compile(template,vm.$options,true);}this.linker = linker;} /**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */FragmentFactory.prototype.create = function(host,scope,parentFrag){var frag=cloneNode(this.template);return new Fragment(this.linker,this.vm,frag,host,scope,parentFrag);};var ON=700;var MODEL=800;var BIND=850;var TRANSITION=1100;var EL=1500;var COMPONENT=1500;var PARTIAL=1750;var FOR=2000;var IF=2000;var SLOT=2100;var uid$3=0;var vFor={priority:FOR,params:['track-by','stagger','enter-stagger','leave-stagger'],bind:function bind(){ // support "item in/of items" syntax
	var inMatch=this.expression.match(/(.*) (?:in|of) (.*)/);if(inMatch){var itMatch=inMatch[1].match(/\((.*),(.*)\)/);if(itMatch){this.iterator = itMatch[1].trim();this.alias = itMatch[2].trim();}else {this.alias = inMatch[1].trim();}this.expression = inMatch[2];}if(!this.alias){("dev") !== 'production' && warn('Alias is required in v-for.');return;} // uid as a cache identifier
	this.id = '__v-for__' + ++uid$3; // check if this is an option list,
	// so that we know if we need to update the <select>'s
	// v-model when the option list has changed.
	// because v-model has a lower priority than v-for,
	// the v-model is not bound here yet, so we have to
	// retrive it in the actual updateModel() function.
	var tag=this.el.tagName;this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT'; // setup anchor nodes
	this.start = createAnchor('v-for-start');this.end = createAnchor('v-for-end');replace(this.el,this.end);before(this.start,this.end); // cache
	this.cache = Object.create(null); // fragment factory
	this.factory = new FragmentFactory(this.vm,this.el);},update:function update(data){this.diff(data);this.updateRef();this.updateModel();}, /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */diff:function diff(data){ // check if the Array was converted from an Object
	var item=data[0];var convertedFromObject=this.fromObject = isObject(item) && hasOwn(item,'$key') && hasOwn(item,'$value');var trackByKey=this.params.trackBy;var oldFrags=this.frags;var frags=this.frags = new Array(data.length);var alias=this.alias;var iterator=this.iterator;var start=this.start;var end=this.end;var inDocument=inDoc(start);var init=!oldFrags;var i,l,frag,key,value,primitive; // First pass, go through the new Array and fill up
	// the new frags array. If a piece of data has a cached
	// instance for it, we reuse it. Otherwise build a new
	// instance.
	for(i = 0,l = data.length;i < l;i++) {item = data[i];key = convertedFromObject?item.$key:null;value = convertedFromObject?item.$value:item;primitive = !isObject(value);frag = !init && this.getCachedFrag(value,i,key);if(frag){ // reusable fragment
	frag.reused = true; // update $index
	frag.scope.$index = i; // update $key
	if(key){frag.scope.$key = key;} // update iterator
	if(iterator){frag.scope[iterator] = key !== null?key:i;} // update data for track-by, object repeat &
	// primitive values.
	if(trackByKey || convertedFromObject || primitive){frag.scope[alias] = value;}}else { // new isntance
	frag = this.create(value,alias,i,key);frag.fresh = !init;}frags[i] = frag;if(init){frag.before(end);}} // we're done for the initial render.
	if(init){return;} // Second pass, go through the old fragments and
	// destroy those who are not reused (and remove them
	// from cache)
	var removalIndex=0;var totalRemoved=oldFrags.length - frags.length; // when removing a large number of fragments, watcher removal
	// turns out to be a perf bottleneck, so we batch the watcher
	// removals into a single filter call!
	this.vm._vForRemoving = true;for(i = 0,l = oldFrags.length;i < l;i++) {frag = oldFrags[i];if(!frag.reused){this.deleteCachedFrag(frag);this.remove(frag,removalIndex++,totalRemoved,inDocument);}}this.vm._vForRemoving = false;if(removalIndex){this.vm._watchers = this.vm._watchers.filter(function(w){return w.active;});} // Final pass, move/insert new fragments into the
	// right place.
	var targetPrev,prevEl,currentPrev;var insertionIndex=0;for(i = 0,l = frags.length;i < l;i++) {frag = frags[i]; // this is the frag that we should be after
	targetPrev = frags[i - 1];prevEl = targetPrev?targetPrev.staggerCb?targetPrev.staggerAnchor:targetPrev.end || targetPrev.node:start;if(frag.reused && !frag.staggerCb){currentPrev = findPrevFrag(frag,start,this.id);if(currentPrev !== targetPrev && (!currentPrev ||  // optimization for moving a single item.
	// thanks to suggestions by @livoras in #1807
	findPrevFrag(currentPrev,start,this.id) !== targetPrev)){this.move(frag,prevEl);}}else { // new instance, or still in stagger.
	// insert with updated stagger index.
	this.insert(frag,insertionIndex++,prevEl,inDocument);}frag.reused = frag.fresh = false;}}, /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */create:function create(value,alias,index,key){var host=this._host; // create iteration scope
	var parentScope=this._scope || this.vm;var scope=Object.create(parentScope); // ref holder for the scope
	scope.$refs = Object.create(parentScope.$refs);scope.$els = Object.create(parentScope.$els); // make sure point $parent to parent scope
	scope.$parent = parentScope; // for two-way binding on alias
	scope.$forContext = this; // define scope properties
	defineReactive(scope,alias,value);defineReactive(scope,'$index',index);if(key){defineReactive(scope,'$key',key);}else if(scope.$key){ // avoid accidental fallback
	def(scope,'$key',null);}if(this.iterator){defineReactive(scope,this.iterator,key !== null?key:index);}var frag=this.factory.create(host,scope,this._frag);frag.forId = this.id;this.cacheFrag(value,frag,index,key);return frag;}, /**
	   * Update the v-ref on owner vm.
	   */updateRef:function updateRef(){var ref=this.descriptor.ref;if(!ref)return;var hash=(this._scope || this.vm).$refs;var refs;if(!this.fromObject){refs = this.frags.map(findVmFromFrag);}else {refs = {};this.frags.forEach(function(frag){refs[frag.scope.$key] = findVmFromFrag(frag);});}hash[ref] = refs;}, /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */updateModel:function updateModel(){if(this.isOption){var parent=this.start.parentNode;var model=parent && parent.__v_model;if(model){model.forceUpdate();}}}, /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */insert:function insert(frag,index,prevEl,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null;}var staggerAmount=this.getStagger(frag,index,null,'enter');if(inDocument && staggerAmount){ // create an anchor and insert it synchronously,
	// so that we can resolve the correct order without
	// worrying about some elements not inserted yet
	var anchor=frag.staggerAnchor;if(!anchor){anchor = frag.staggerAnchor = createAnchor('stagger-anchor');anchor.__v_frag = frag;}after(anchor,prevEl);var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.before(anchor);remove(anchor);});setTimeout(op,staggerAmount);}else {frag.before(prevEl.nextSibling);}}, /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */remove:function remove(frag,index,total,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null; // it's not possible for the same frag to be removed
	// twice, so if we have a pending stagger callback,
	// it means this frag is queued for enter but removed
	// before its transition started. Since it is already
	// destroyed, we can just leave it in detached state.
	return;}var staggerAmount=this.getStagger(frag,index,total,'leave');if(inDocument && staggerAmount){var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.remove();});setTimeout(op,staggerAmount);}else {frag.remove();}}, /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */move:function move(frag,prevEl){ // fix a common issue with Sortable:
	// if prevEl doesn't have nextSibling, this means it's
	// been dragged after the end anchor. Just re-position
	// the end anchor to the end of the container.
	/* istanbul ignore if */if(!prevEl.nextSibling){this.end.parentNode.appendChild(this.end);}frag.before(prevEl.nextSibling,false);}, /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */cacheFrag:function cacheFrag(value,frag,index,key){var trackByKey=this.params.trackBy;var cache=this.cache;var primitive=!isObject(value);var id;if(key || trackByKey || primitive){id = trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;if(!cache[id]){cache[id] = frag;}else if(trackByKey !== '$index'){("dev") !== 'production' && this.warnDuplicate(value);}}else {id = this.id;if(hasOwn(value,id)){if(value[id] === null){value[id] = frag;}else {("dev") !== 'production' && this.warnDuplicate(value);}}else {def(value,id,frag);}}frag.raw = value;}, /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */getCachedFrag:function getCachedFrag(value,index,key){var trackByKey=this.params.trackBy;var primitive=!isObject(value);var frag;if(key || trackByKey || primitive){var id=trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;frag = this.cache[id];}else {frag = value[this.id];}if(frag && (frag.reused || frag.fresh)){("dev") !== 'production' && this.warnDuplicate(value);}return frag;}, /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */deleteCachedFrag:function deleteCachedFrag(frag){var value=frag.raw;var trackByKey=this.params.trackBy;var scope=frag.scope;var index=scope.$index; // fix #948: avoid accidentally fall through to
	// a parent repeater which happens to have $key.
	var key=hasOwn(scope,'$key') && scope.$key;var primitive=!isObject(value);if(trackByKey || key || primitive){var id=trackByKey?trackByKey === '$index'?index:value[trackByKey]:key || value;this.cache[id] = null;}else {value[this.id] = null;frag.raw = null;}}, /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */getStagger:function getStagger(frag,index,total,type){type = type + 'Stagger';var trans=frag.node.__v_trans;var hooks=trans && trans.hooks;var hook=hooks && (hooks[type] || hooks.stagger);return hook?hook.call(frag,index,total):index * parseInt(this.params[type] || this.params.stagger,10);}, /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */_preProcess:function _preProcess(value){ // regardless of type, store the un-filtered raw value.
	this.rawValue = value;return value;}, /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */_postProcess:function _postProcess(value){if(isArray(value)){return value;}else if(isPlainObject(value)){ // convert plain object to array.
	var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--) {key = keys[i];res[i] = {$key:key,$value:value[key]};}return res;}else {if(typeof value === 'number' && !isNaN(value)){value = range(value);}return value || [];}},unbind:function unbind(){if(this.descriptor.ref){(this._scope || this.vm).$refs[this.descriptor.ref] = null;}if(this.frags){var i=this.frags.length;var frag;while(i--) {frag = this.frags[i];this.deleteCachedFrag(frag);frag.destroy();}}}}; /**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */function findPrevFrag(frag,anchor,id){var el=frag.node.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__v_frag;while((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {el = el.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__v_frag;}return frag;} /**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */function findVmFromFrag(frag){var node=frag.node; // handle multi-node frag
	if(frag.end){while(!node.__vue__ && node !== frag.end && node.nextSibling) {node = node.nextSibling;}}return node.__vue__;} /**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */function range(n){var i=-1;var ret=new Array(Math.floor(n));while(++i < n) {ret[i] = i;}return ret;}if(true){vFor.warnDuplicate = function(value){warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');};}var vIf={priority:IF,bind:function bind(){var el=this.el;if(!el.__vue__){ // check else block
	var next=el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){remove(next);this.elseFactory = new FragmentFactory(next._context || this.vm,next);} // check main block
	this.anchor = createAnchor('v-if');replace(el,this.anchor);this.factory = new FragmentFactory(this.vm,el);}else {("dev") !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');this.invalid = true;}},update:function update(value){if(this.invalid)return;if(value){if(!this.frag){this.insert();}}else {this.remove();}},insert:function insert(){if(this.elseFrag){this.elseFrag.remove();this.elseFrag = null;}this.frag = this.factory.create(this._host,this._scope,this._frag);this.frag.before(this.anchor);},remove:function remove(){if(this.frag){this.frag.remove();this.frag = null;}if(this.elseFactory && !this.elseFrag){this.elseFrag = this.elseFactory.create(this._host,this._scope,this._frag);this.elseFrag.before(this.anchor);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}if(this.elseFrag){this.elseFrag.destroy();}}};var show={bind:function bind(){ // check else block
	var next=this.el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){this.elseEl = next;}},update:function update(value){this.apply(this.el,value);if(this.elseEl){this.apply(this.elseEl,!value);}},apply:function apply(el,value){if(inDoc(el)){applyTransition(el,value?1:-1,toggle,this.vm);}else {toggle();}function toggle(){el.style.display = value?'':'none';}}};var text$2={bind:function bind(){var self=this;var el=this.el;var isRange=el.type === 'range';var lazy=this.params.lazy;var number=this.params.number;var debounce=this.params.debounce; // handle composition events.
	//   http://blog.evanyou.me/2014/01/03/composition-event/
	// skip this for Android because it handles composition
	// events quite differently. Android doesn't trigger
	// composition events for language input methods e.g.
	// Chinese, but instead triggers them for spelling
	// suggestions... (see Discussion/#162)
	var composing=false;if(!isAndroid && !isRange){this.on('compositionstart',function(){composing = true;});this.on('compositionend',function(){composing = false; // in IE11 the "compositionend" event fires AFTER
	// the "input" event, so the input handler is blocked
	// at the end... have to call it here.
	//
	// #1327: in lazy mode this is unecessary.
	if(!lazy){self.listener();}});} // prevent messing with the input when user is typing,
	// and force update on blur.
	this.focused = false;if(!isRange && !lazy){this.on('focus',function(){self.focused = true;});this.on('blur',function(){self.focused = false;});} // Now attach the main listener
	this.listener = this.rawListener = function(){if(composing || !self._bound){return;}var val=number || isRange?toNumber(el.value):el.value;self.set(val); // force update on next tick to avoid lock & same value
	// also only update when user is not typing
	nextTick(function(){if(self._bound && !self.focused){self.update(self._watcher.value);}});}; // apply debounce
	if(debounce){this.listener = _debounce(this.listener,debounce);} // Support jQuery events, since jQuery.trigger() doesn't
	// trigger native events in some cases and some plugins
	// rely on $.trigger()
	//
	// We want to make sure if a listener is attached using
	// jQuery, it is also removed with jQuery, that's why
	// we do the check for each directive instance and
	// store that check result on itself. This also allows
	// easier test coverage control by unsetting the global
	// jQuery variable in tests.
	this.hasjQuery = typeof jQuery === 'function';if(this.hasjQuery){var method=jQuery.fn.on?'on':'bind';jQuery(el)[method]('change',this.rawListener);if(!lazy){jQuery(el)[method]('input',this.listener);}}else {this.on('change',this.rawListener);if(!lazy){this.on('input',this.listener);}} // IE9 doesn't fire input event on backspace/del/cut
	if(!lazy && isIE9){this.on('cut',function(){nextTick(self.listener);});this.on('keyup',function(e){if(e.keyCode === 46 || e.keyCode === 8){self.listener();}});} // set initial value if present
	if(el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()){this.afterBind = this.listener;}},update:function update(value){this.el.value = _toString(value);},unbind:function unbind(){var el=this.el;if(this.hasjQuery){var method=jQuery.fn.off?'off':'unbind';jQuery(el)[method]('change',this.listener);jQuery(el)[method]('input',this.listener);}}};var radio={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){ // value overwrite via v-bind:value
	if(el.hasOwnProperty('_value')){return el._value;}var val=el.value;if(self.params.number){val = toNumber(val);}return val;};this.listener = function(){self.set(self.getValue());};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind = this.listener;}},update:function update(value){this.el.checked = looseEqual(value,this.getValue());}};var select={bind:function bind(){var self=this;var el=this.el; // method to force update DOM using latest value.
	this.forceUpdate = function(){if(self._watcher){self.update(self._watcher.get());}}; // check if this is a multiple select
	var multiple=this.multiple = el.hasAttribute('multiple'); // attach listener
	this.listener = function(){var value=getValue(el,multiple);value = self.params.number?isArray(value)?value.map(toNumber):toNumber(value):value;self.set(value);};this.on('change',this.listener); // if has initial value, set afterBind
	var initValue=getValue(el,multiple,true);if(multiple && initValue.length || !multiple && initValue !== null){this.afterBind = this.listener;} // All major browsers except Firefox resets
	// selectedIndex with value -1 to 0 when the element
	// is appended to a new parent, therefore we have to
	// force a DOM update whenever that happens...
	this.vm.$on('hook:attached',this.forceUpdate);},update:function update(value){var el=this.el;el.selectedIndex = -1;var multi=this.multiple && isArray(value);var options=el.options;var i=options.length;var op,val;while(i--) {op = options[i];val = op.hasOwnProperty('_value')?op._value:op.value; /* eslint-disable eqeqeq */op.selected = multi?indexOf$1(value,val) > -1:looseEqual(value,val); /* eslint-enable eqeqeq */}},unbind:function unbind(){ /* istanbul ignore next */this.vm.$off('hook:attached',this.forceUpdate);}}; /**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */function getValue(el,multi,init){var res=multi?[]:null;var op,val,selected;for(var i=0,l=el.options.length;i < l;i++) {op = el.options[i];selected = init?op.hasAttribute('selected'):op.selected;if(selected){val = op.hasOwnProperty('_value')?op._value:op.value;if(multi){res.push(val);}else {return val;}}}return res;} /**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */function indexOf$1(arr,val){var i=arr.length;while(i--) {if(looseEqual(arr[i],val)){return i;}}return -1;}var checkbox={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){return el.hasOwnProperty('_value')?el._value:self.params.number?toNumber(el.value):el.value;};function getBooleanValue(){var val=el.checked;if(val && el.hasOwnProperty('_trueValue')){return el._trueValue;}if(!val && el.hasOwnProperty('_falseValue')){return el._falseValue;}return val;}this.listener = function(){var model=self._watcher.value;if(isArray(model)){var val=self.getValue();if(el.checked){if(indexOf(model,val) < 0){model.push(val);}}else {model.$remove(val);}}else {self.set(getBooleanValue());}};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind = this.listener;}},update:function update(value){var el=this.el;if(isArray(value)){el.checked = indexOf(value,this.getValue()) > -1;}else {if(el.hasOwnProperty('_trueValue')){el.checked = looseEqual(value,el._trueValue);}else {el.checked = !!value;}}}};var handlers={text:text$2,radio:radio,select:select,checkbox:checkbox};var model={priority:MODEL,twoWay:true,handlers:handlers,params:['lazy','number','debounce'], /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */bind:function bind(){ // friendly warning...
	this.checkFilters();if(this.hasRead && !this.hasWrite){("dev") !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');}var el=this.el;var tag=el.tagName;var handler;if(tag === 'INPUT'){handler = handlers[el.type] || handlers.text;}else if(tag === 'SELECT'){handler = handlers.select;}else if(tag === 'TEXTAREA'){handler = handlers.text;}else {("dev") !== 'production' && warn('v-model does not support element type: ' + tag);return;}el.__v_model = this;handler.bind.call(this);this.update = handler.update;this._unbind = handler.unbind;}, /**
	   * Check read/write filter stats.
	   */checkFilters:function checkFilters(){var filters=this.filters;if(!filters)return;var i=filters.length;while(i--) {var filter=resolveAsset(this.vm.$options,'filters',filters[i].name);if(typeof filter === 'function' || filter.read){this.hasRead = true;}if(filter.write){this.hasWrite = true;}}},unbind:function unbind(){this.el.__v_model = null;this._unbind && this._unbind();}}; // keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,'delete':[8,46],up:38,left:37,right:39,down:40};function keyFilter(handler,keys){var codes=keys.map(function(key){var charCode=key.charCodeAt(0);if(charCode > 47 && charCode < 58){return parseInt(key,10);}if(key.length === 1){charCode = key.toUpperCase().charCodeAt(0);if(charCode > 64 && charCode < 91){return charCode;}}return keyCodes[key];});codes = [].concat.apply([],codes);return function keyHandler(e){if(codes.indexOf(e.keyCode) > -1){return handler.call(this,e);}};}function stopFilter(handler){return function stopHandler(e){e.stopPropagation();return handler.call(this,e);};}function preventFilter(handler){return function preventHandler(e){e.preventDefault();return handler.call(this,e);};}function selfFilter(handler){return function selfHandler(e){if(e.target === e.currentTarget){return handler.call(this,e);}};}var on$1={priority:ON,acceptStatement:true,keyCodes:keyCodes,bind:function bind(){ // deal with iframes
	if(this.el.tagName === 'IFRAME' && this.arg !== 'load'){var self=this;this.iframeBind = function(){on(self.el.contentWindow,self.arg,self.handler,self.modifiers.capture);};this.on('load',this.iframeBind);}},update:function update(handler){ // stub a noop for v-on with no value,
	// e.g. @mousedown.prevent
	if(!this.descriptor.raw){handler = function(){};}if(typeof handler !== 'function'){("dev") !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);return;} // apply modifiers
	if(this.modifiers.stop){handler = stopFilter(handler);}if(this.modifiers.prevent){handler = preventFilter(handler);}if(this.modifiers.self){handler = selfFilter(handler);} // key filter
	var keys=Object.keys(this.modifiers).filter(function(key){return key !== 'stop' && key !== 'prevent';});if(keys.length){handler = keyFilter(handler,keys);}this.reset();this.handler = handler;if(this.iframeBind){this.iframeBind();}else {on(this.el,this.arg,this.handler,this.modifiers.capture);}},reset:function reset(){var el=this.iframeBind?this.el.contentWindow:this.el;if(this.handler){off(el,this.arg,this.handler);}},unbind:function unbind(){this.reset();}};var prefixes=['-webkit-','-moz-','-ms-'];var camelPrefixes=['Webkit','Moz','ms'];var importantRE=/!important;?$/;var propCache=Object.create(null);var testEl=null;var style={deep:true,update:function update(value){if(typeof value === 'string'){this.el.style.cssText = value;}else if(isArray(value)){this.handleObject(value.reduce(extend,{}));}else {this.handleObject(value || {});}},handleObject:function handleObject(value){ // cache object styles so that only changed props
	// are actually updated.
	var cache=this.cache || (this.cache = {});var name,val;for(name in cache) {if(!(name in value)){this.handleSingle(name,null);delete cache[name];}}for(name in value) {val = value[name];if(val !== cache[name]){cache[name] = val;this.handleSingle(name,val);}}},handleSingle:function handleSingle(prop,value){prop = normalize(prop);if(!prop)return; // unsupported prop
	// cast possible numbers/booleans into strings
	if(value != null)value += '';if(value){var isImportant=importantRE.test(value)?'important':'';if(isImportant){value = value.replace(importantRE,'').trim();}this.el.style.setProperty(prop,value,isImportant);}else {this.el.style.removeProperty(prop);}}}; /**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */function normalize(prop){if(propCache[prop]){return propCache[prop];}var res=prefix(prop);propCache[prop] = propCache[res] = res;return res;} /**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */function prefix(prop){prop = hyphenate(prop);var camel=camelize(prop);var upper=camel.charAt(0).toUpperCase() + camel.slice(1);if(!testEl){testEl = document.createElement('div');}var i=prefixes.length;var prefixed;while(i--) {prefixed = camelPrefixes[i] + upper;if(prefixed in testEl.style){return prefixes[i] + prop;}}if(camel in testEl.style){return prop;}} // xlink
	var xlinkNS='http://www.w3.org/1999/xlink';var xlinkRE=/^xlink:/; // check for attributes that prohibit interpolations
	var disallowedInterpAttrRE=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/; // these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE=/^(?:value|checked|selected|muted)$/; // these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE=/^(?:draggable|contenteditable|spellcheck)$/; // these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps={value:'_value','true-value':'_trueValue','false-value':'_falseValue'};var bind$1={priority:BIND,bind:function bind(){var attr=this.arg;var tag=this.el.tagName; // should be deep watch on object mode
	if(!attr){this.deep = true;} // handle interpolation bindings
	var descriptor=this.descriptor;var tokens=descriptor.interp;if(tokens){ // handle interpolations with one-time tokens
	if(descriptor.hasOneTime){this.expression = tokensToExp(tokens,this._scope || this.vm);} // only allow binding on native attributes
	if(disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')){("dev") !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');this.el.removeAttribute(attr);this.invalid = true;} /* istanbul ignore if */if(true){var raw=attr + '="' + descriptor.raw + '": '; // warn src
	if(attr === 'src'){warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');} // warn style
	if(attr === 'style'){warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');}}}},update:function update(value){if(this.invalid){return;}var attr=this.arg;if(this.arg){this.handleSingle(attr,value);}else {this.handleObject(value || {});}}, // share object handler with v-bind:class
	handleObject:style.handleObject,handleSingle:function handleSingle(attr,value){var el=this.el;var interp=this.descriptor.interp;if(this.modifiers.camel){attr = camelize(attr);}if(!interp && attrWithPropsRE.test(attr) && attr in el){el[attr] = attr === 'value'?value == null // IE9 will set input.value to "null" for null...
	?'':value:value;} // set model props
	var modelProp=modelProps[attr];if(!interp && modelProp){el[modelProp] = value; // update v-model if present
	var model=el.__v_model;if(model){model.listener();}} // do not set value attribute for textarea
	if(attr === 'value' && el.tagName === 'TEXTAREA'){el.removeAttribute(attr);return;} // update attribute
	if(enumeratedAttrRE.test(attr)){el.setAttribute(attr,value?'true':'false');}else if(value != null && value !== false){if(attr === 'class'){ // handle edge case #1960:
	// class interpolation should not overwrite Vue transition class
	if(el.__v_trans){value += ' ' + el.__v_trans.id + '-transition';}setClass(el,value);}else if(xlinkRE.test(attr)){el.setAttributeNS(xlinkNS,attr,value === true?'':value);}else {el.setAttribute(attr,value === true?'':value);}}else {el.removeAttribute(attr);}}};var el={priority:EL,bind:function bind(){ /* istanbul ignore if */if(!this.arg){return;}var id=this.id = camelize(this.arg);var refs=(this._scope || this.vm).$els;if(hasOwn(refs,id)){refs[id] = this.el;}else {defineReactive(refs,id,this.el);}},unbind:function unbind(){var refs=(this._scope || this.vm).$els;if(refs[this.id] === this.el){refs[this.id] = null;}}};var ref={bind:function bind(){("dev") !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');}};var cloak={bind:function bind(){var el=this.el;this.vm.$once('pre-hook:compiled',function(){el.removeAttribute('v-cloak');});}}; // must export plain object
	var directives={text:text$1,html:html,'for':vFor,'if':vIf,show:show,model:model,on:on$1,bind:bind$1,el:el,ref:ref,cloak:cloak};var vClass={deep:true,update:function update(value){if(value && typeof value === 'string'){this.handleObject(stringToObject(value));}else if(isPlainObject(value)){this.handleObject(value);}else if(isArray(value)){this.handleArray(value);}else {this.cleanup();}},handleObject:function handleObject(value){this.cleanup(value);var keys=this.prevKeys = Object.keys(value);for(var i=0,l=keys.length;i < l;i++) {var key=keys[i];if(value[key]){addClass(this.el,key);}else {removeClass(this.el,key);}}},handleArray:function handleArray(value){this.cleanup(value);for(var i=0,l=value.length;i < l;i++) {if(value[i]){addClass(this.el,value[i]);}}this.prevKeys = value.slice();},cleanup:function cleanup(value){if(this.prevKeys){var i=this.prevKeys.length;while(i--) {var key=this.prevKeys[i];if(key && (!value || !contains(value,key))){removeClass(this.el,key);}}}}};function stringToObject(value){var res={};var keys=value.trim().split(/\s+/);var i=keys.length;while(i--) {res[keys[i]] = true;}return res;}function contains(value,key){return isArray(value)?value.indexOf(key) > -1:hasOwn(value,key);}var component={priority:COMPONENT,params:['keep-alive','transition-mode','inline-template'], /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */bind:function bind(){if(!this.el.__vue__){ // keep-alive cache
	this.keepAlive = this.params.keepAlive;if(this.keepAlive){this.cache = {};} // check inline-template
	if(this.params.inlineTemplate){ // extract inline template as a DocumentFragment
	this.inlineTemplate = extractContent(this.el,true);} // component resolution related state
	this.pendingComponentCb = this.Component = null; // transition related state
	this.pendingRemovals = 0;this.pendingRemovalCb = null; // create a ref anchor
	this.anchor = createAnchor('v-component');replace(this.el,this.anchor); // remove is attribute.
	// this is removed during compilation, but because compilation is
	// cached, when the component is used elsewhere this attribute
	// will remain at link time.
	this.el.removeAttribute('is'); // remove ref, same as above
	if(this.descriptor.ref){this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));} // if static, build right now.
	if(this.literal){this.setComponent(this.expression);}}else {("dev") !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);}}, /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */update:function update(value){if(!this.literal){this.setComponent(value);}}, /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */setComponent:function setComponent(value,cb){this.invalidatePending();if(!value){ // just remove current
	this.unbuild(true);this.remove(this.childVM,cb);this.childVM = null;}else {var self=this;this.resolveComponent(value,function(){self.mountComponent(cb);});}}, /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */resolveComponent:function resolveComponent(id,cb){var self=this;this.pendingComponentCb = cancellable(function(Component){self.ComponentName = Component.options.name || id;self.Component = Component;cb();});this.vm._resolveComponent(id,this.pendingComponentCb);}, /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */mountComponent:function mountComponent(cb){ // actual mount
	this.unbuild(true);var self=this;var activateHooks=this.Component.options.activate;var cached=this.getCached();var newComponent=this.build();if(activateHooks && !cached){this.waitingFor = newComponent;callActivateHooks(activateHooks,newComponent,function(){if(self.waitingFor !== newComponent){return;}self.waitingFor = null;self.transition(newComponent,cb);});}else { // update ref for kept-alive component
	if(cached){newComponent._updateRef();}this.transition(newComponent,cb);}}, /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */invalidatePending:function invalidatePending(){if(this.pendingComponentCb){this.pendingComponentCb.cancel();this.pendingComponentCb = null;}}, /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */build:function build(extraOptions){var cached=this.getCached();if(cached){return cached;}if(this.Component){ // default options
	var options={name:this.ComponentName,el:cloneNode(this.el),template:this.inlineTemplate, // make sure to add the child with correct parent
	// if this is a transcluded component, its parent
	// should be the transclusion host.
	parent:this._host || this.vm, // if no inline-template, then the compiled
	// linker can be cached for better performance.
	_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:true,_isRouterView:this._isRouterView, // if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	_context:this.vm, // if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	_scope:this._scope, // pass in the owner fragment of this component.
	// this is necessary so that the fragment can keep
	// track of its contained components in order to
	// call attach/detach hooks for them.
	_frag:this._frag}; // extra options
	// in 1.0.0 this is used by vue-router only
	/* istanbul ignore if */if(extraOptions){extend(options,extraOptions);}var child=new this.Component(options);if(this.keepAlive){this.cache[this.Component.cid] = child;} /* istanbul ignore if */if(("dev") !== 'production' && this.el.hasAttribute('transition') && child._isFragment){warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);}return child;}}, /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */getCached:function getCached(){return this.keepAlive && this.cache[this.Component.cid];}, /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */unbuild:function unbuild(defer){if(this.waitingFor){this.waitingFor.$destroy();this.waitingFor = null;}var child=this.childVM;if(!child || this.keepAlive){if(child){ // remove ref
	child._updateRef(true);}return;} // the sole purpose of `deferCleanup` is so that we can
	// "deactivate" the vm right now and perform DOM removal
	// later.
	child.$destroy(false,defer);}, /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */remove:function remove(child,cb){var keepAlive=this.keepAlive;if(child){ // we may have a component switch when a previous
	// component is still being transitioned out.
	// we want to trigger only one lastest insertion cb
	// when the existing transition finishes. (#1119)
	this.pendingRemovals++;this.pendingRemovalCb = cb;var self=this;child.$remove(function(){self.pendingRemovals--;if(!keepAlive)child._cleanup();if(!self.pendingRemovals && self.pendingRemovalCb){self.pendingRemovalCb();self.pendingRemovalCb = null;}});}else if(cb){cb();}}, /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */transition:function transition(target,cb){var self=this;var current=this.childVM; // for devtool inspection
	if(true){if(current)current._inactive = true;target._inactive = false;}this.childVM = target;switch(self.params.transitionMode){case 'in-out':target.$before(self.anchor,function(){self.remove(current,cb);});break;case 'out-in':self.remove(current,function(){target.$before(self.anchor,cb);});break;default:self.remove(current);target.$before(self.anchor,cb);}}, /**
	   * Unbind.
	   */unbind:function unbind(){this.invalidatePending(); // Do not defer cleanup when unbinding
	this.unbuild(); // destroy all keep-alive cached instances
	if(this.cache){for(var key in this.cache) {this.cache[key].$destroy();}this.cache = null;}}}; /**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */function callActivateHooks(hooks,vm,cb){var total=hooks.length;var called=0;hooks[0].call(vm,next);function next(){if(++called >= total){cb();}else {hooks[called].call(vm,next);}}}var bindingModes=config._propBindingModes;var propDef={bind:function bind(){var child=this.vm;var parent=child._context; // passed in from compiler directly
	var prop=this.descriptor.prop;var childKey=prop.path;var parentKey=prop.parentPath;var twoWay=prop.mode === bindingModes.TWO_WAY;var parentWatcher=this.parentWatcher = new Watcher(parent,parentKey,function(val){val = coerceProp(prop,val);if(assertProp(prop,val)){child[childKey] = val;}},{twoWay:twoWay,filters:prop.filters, // important: props need to be observed on the
	// v-for scope if present
	scope:this._scope}); // set the child initial value.
	initProp(child,prop,parentWatcher.value); // setup two-way binding
	if(twoWay){ // important: defer the child watcher creation until
	// the created hook (after data observation)
	var self=this;child.$once('pre-hook:created',function(){self.childWatcher = new Watcher(child,childKey,function(val){parentWatcher.set(val);},{ // ensure sync upward before parent sync down.
	// this is necessary in cases e.g. the child
	// mutates a prop array, then replaces it. (#1683)
	sync:true});});}},unbind:function unbind(){this.parentWatcher.teardown();if(this.childWatcher){this.childWatcher.teardown();}}};var queue$1=[];var queued=false; /**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */function pushJob(job){queue$1.push(job);if(!queued){queued = true;nextTick(flush);}} /**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */function flush(){ // Force layout
	var f=document.documentElement.offsetHeight;for(var i=0;i < queue$1.length;i++) {queue$1[i]();}queue$1 = [];queued = false; // dummy return, so js linters don't complain about
	// unused variable f
	return f;}var TYPE_TRANSITION='transition';var TYPE_ANIMATION='animation';var transDurationProp=transitionProp + 'Duration';var animDurationProp=animationProp + 'Duration'; /**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */function Transition(el,id,hooks,vm){this.id = id;this.el = el;this.enterClass = hooks && hooks.enterClass || id + '-enter';this.leaveClass = hooks && hooks.leaveClass || id + '-leave';this.hooks = hooks;this.vm = vm; // async state
	this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;this.justEntered = false;this.entered = this.left = false;this.typeCache = {}; // check css transition type
	this.type = hooks && hooks.type; /* istanbul ignore if */if(true){if(this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION){warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);}} // bind
	var self=this;['enterNextTick','enterDone','leaveNextTick','leaveDone'].forEach(function(m){self[m] = bind(self[m],self);});}var p$1=Transition.prototype; /**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */p$1.enter = function(op,cb){this.cancelPending();this.callHook('beforeEnter');this.cb = cb;addClass(this.el,this.enterClass);op();this.entered = false;this.callHookWithCb('enter');if(this.entered){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.enterCancelled;pushJob(this.enterNextTick);}; /**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */p$1.enterNextTick = function(){ // Important hack:
	// in Chrome, if a just-entered element is applied the
	// leave class while its interpolated property still has
	// a very small value (within one frame), Chrome will
	// skip the leave transition entirely and not firing the
	// transtionend event. Therefore we need to protected
	// against such cases using a one-frame timeout.
	this.justEntered = true;var self=this;setTimeout(function(){self.justEntered = false;},17);var enterDone=this.enterDone;var type=this.getCssTransitionType(this.enterClass);if(!this.pendingJsCb){if(type === TYPE_TRANSITION){ // trigger transition by removing enter class now
	removeClass(this.el,this.enterClass);this.setupCssCb(transitionEndEvent,enterDone);}else if(type === TYPE_ANIMATION){this.setupCssCb(animationEndEvent,enterDone);}else {enterDone();}}else if(type === TYPE_TRANSITION){removeClass(this.el,this.enterClass);}}; /**
	 * The "cleanup" phase of an entering transition.
	 */p$1.enterDone = function(){this.entered = true;this.cancel = this.pendingJsCb = null;removeClass(this.el,this.enterClass);this.callHook('afterEnter');if(this.cb)this.cb();}; /**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */p$1.leave = function(op,cb){this.cancelPending();this.callHook('beforeLeave');this.op = op;this.cb = cb;addClass(this.el,this.leaveClass);this.left = false;this.callHookWithCb('leave');if(this.left){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.leaveCancelled; // only need to handle leaveDone if
	// 1. the transition is already done (synchronously called
	//    by the user, which causes this.op set to null)
	// 2. there's no explicit js callback
	if(this.op && !this.pendingJsCb){ // if a CSS transition leaves immediately after enter,
	// the transitionend event never fires. therefore we
	// detect such cases and end the leave immediately.
	if(this.justEntered){this.leaveDone();}else {pushJob(this.leaveNextTick);}}}; /**
	 * The "nextTick" phase of a leaving transition.
	 */p$1.leaveNextTick = function(){var type=this.getCssTransitionType(this.leaveClass);if(type){var event=type === TYPE_TRANSITION?transitionEndEvent:animationEndEvent;this.setupCssCb(event,this.leaveDone);}else {this.leaveDone();}}; /**
	 * The "cleanup" phase of a leaving transition.
	 */p$1.leaveDone = function(){this.left = true;this.cancel = this.pendingJsCb = null;this.op();removeClass(this.el,this.leaveClass);this.callHook('afterLeave');if(this.cb)this.cb();this.op = null;}; /**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */p$1.cancelPending = function(){this.op = this.cb = null;var hasPending=false;if(this.pendingCssCb){hasPending = true;off(this.el,this.pendingCssEvent,this.pendingCssCb);this.pendingCssEvent = this.pendingCssCb = null;}if(this.pendingJsCb){hasPending = true;this.pendingJsCb.cancel();this.pendingJsCb = null;}if(hasPending){removeClass(this.el,this.enterClass);removeClass(this.el,this.leaveClass);}if(this.cancel){this.cancel.call(this.vm,this.el);this.cancel = null;}}; /**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */p$1.callHook = function(type){if(this.hooks && this.hooks[type]){this.hooks[type].call(this.vm,this.el);}}; /**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */p$1.callHookWithCb = function(type){var hook=this.hooks && this.hooks[type];if(hook){if(hook.length > 1){this.pendingJsCb = cancellable(this[type + 'Done']);}hook.call(this.vm,this.el,this.pendingJsCb);}}; /**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */p$1.getCssTransitionType = function(className){ /* istanbul ignore if */if(!transitionEndEvent ||  // skip CSS transitions if page is not visible -
	// this solves the issue of transitionend events not
	// firing until the page is visible again.
	// pageVisibility API is supported in IE10+, same as
	// CSS transitions.
	document.hidden ||  // explicit js-only transition
	this.hooks && this.hooks.css === false ||  // element is hidden
	isHidden(this.el)){return;}var type=this.type || this.typeCache[className];if(type)return type;var inlineStyles=this.el.style;var computedStyles=window.getComputedStyle(this.el);var transDuration=inlineStyles[transDurationProp] || computedStyles[transDurationProp];if(transDuration && transDuration !== '0s'){type = TYPE_TRANSITION;}else {var animDuration=inlineStyles[animDurationProp] || computedStyles[animDurationProp];if(animDuration && animDuration !== '0s'){type = TYPE_ANIMATION;}}if(type){this.typeCache[className] = type;}return type;}; /**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */p$1.setupCssCb = function(event,cb){this.pendingCssEvent = event;var self=this;var el=this.el;var onEnd=this.pendingCssCb = function(e){if(e.target === el){off(el,event,onEnd);self.pendingCssEvent = self.pendingCssCb = null;if(!self.pendingJsCb && cb){cb();}}};on(el,event,onEnd);}; /**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */function isHidden(el){if(/svg$/.test(el.namespaceURI)){ // SVG elements do not have offset(Width|Height)
	// so we need to check the client rect
	var rect=el.getBoundingClientRect();return !(rect.width || rect.height);}else {return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);}}var transition$1={priority:TRANSITION,update:function update(id,oldId){var el=this.el; // resolve on owner vm
	var hooks=resolveAsset(this.vm.$options,'transitions',id);id = id || 'v';el.__v_trans = new Transition(el,id,hooks,this.vm);if(oldId){removeClass(el,oldId + '-transition');}addClass(el,id + '-transition');}};var internalDirectives={style:style,'class':vClass,component:component,prop:propDef,transition:transition$1};var propBindingModes=config._propBindingModes;var empty={}; // regexes
	var identRE$1=/^[$_a-zA-Z]+[\w$]*$/;var settablePathRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/; /**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */function compileProps(el,propOptions){var props=[];var names=Object.keys(propOptions);var i=names.length;var options,name,attr,value,path,parsed,prop;while(i--) {name = names[i];options = propOptions[name] || empty;if(("dev") !== 'production' && name === '$data'){warn('Do not use $data as prop.');continue;} // props could contain dashes, which will be
	// interpreted as minus calculations by the parser
	// so we need to camelize the path here
	path = camelize(name);if(!identRE$1.test(path)){("dev") !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');continue;}prop = {name:name,path:path,options:options,mode:propBindingModes.ONE_WAY,raw:null};attr = hyphenate(name); // first check dynamic version
	if((value = getBindAttr(el,attr)) === null){if((value = getBindAttr(el,attr + '.sync')) !== null){prop.mode = propBindingModes.TWO_WAY;}else if((value = getBindAttr(el,attr + '.once')) !== null){prop.mode = propBindingModes.ONE_TIME;}}if(value !== null){ // has dynamic binding!
	prop.raw = value;parsed = parseDirective(value);value = parsed.expression;prop.filters = parsed.filters; // check binding type
	if(isLiteral(value) && !parsed.filters){ // for expressions containing literal numbers and
	// booleans, there's no need to setup a prop binding,
	// so we can optimize them as a one-time set.
	prop.optimizedLiteral = true;}else {prop.dynamic = true; // check non-settable path for two-way bindings
	if(("dev") !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)){prop.mode = propBindingModes.ONE_WAY;warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);}}prop.parentPath = value; // warn required two-way
	if(("dev") !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY){warn('Prop "' + name + '" expects a two-way binding type.');}}else if((value = getAttr(el,attr)) !== null){ // has literal binding!
	prop.raw = value;}else if(true){ // check possible camelCase prop usage
	var lowerCaseName=path.toLowerCase();value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));if(value){warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');}else if(options.required){ // warn missing required
	warn('Missing required prop: ' + name);}} // push prop
	props.push(prop);}return makePropsLinkFn(props);} /**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */function makePropsLinkFn(props){return function propsLinkFn(vm,scope){ // store resolved props info
	vm._props = {};var i=props.length;var prop,path,options,value,raw;while(i--) {prop = props[i];raw = prop.raw;path = prop.path;options = prop.options;vm._props[path] = prop;if(raw === null){ // initialize absent prop
	initProp(vm,prop,getDefault(vm,options));}else if(prop.dynamic){ // dynamic prop
	if(prop.mode === propBindingModes.ONE_TIME){ // one time binding
	value = (scope || vm._context || vm).$get(prop.parentPath);initProp(vm,prop,value);}else {if(vm._context){ // dynamic binding
	vm._bindDir({name:'prop',def:propDef,prop:prop},null,null,scope); // el, host, scope
	}else { // root instance
	initProp(vm,prop,vm.$get(prop.parentPath));}}}else if(prop.optimizedLiteral){ // optimized literal, cast it and just set once
	var stripped=stripQuotes(raw);value = stripped === raw?toBoolean(toNumber(raw)):stripped;initProp(vm,prop,value);}else { // string literal, but we need to cater for
	// Boolean props with no value
	value = options.type === Boolean && raw === ''?true:raw;initProp(vm,prop,value);}}};} /**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */function getDefault(vm,options){ // no default, return undefined
	if(!hasOwn(options,'default')){ // absent boolean value defaults to false
	return options.type === Boolean?false:undefined;}var def=options['default']; // warn against non-factory defaults for Object & Array
	if(isObject(def)){("dev") !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');} // call factory function for non-Function types
	return typeof def === 'function' && options.type !== Function?def.call(vm):def;} // special binding prefixes
	var bindRE=/^v-bind:|^:/;var onRE=/^v-on:|^@/;var dirAttrRE=/^v-([^:]+)(?:$|:(.*)$)/;var modifierRE=/\.[^\.]+/g;var transitionRE=/^(v-bind:|:)?transition$/; // terminal directives
	var terminalDirectives=['for','if']; // default directive priority
	var DEFAULT_PRIORITY=1000; /**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */function compile(el,options,partial){ // link function for the node itself.
	var nodeLinkFn=partial || !options._asComponent?compileNode(el,options):null; // link function for the childNodes
	var childLinkFn=!(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes()?compileNodeList(el.childNodes,options):null; /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */return function compositeLinkFn(vm,el,host,scope,frag){ // cache childNodes before linking parent, fix #657
	var childNodes=toArray(el.childNodes); // link
	var dirs=linkAndCapture(function compositeLinkCapturer(){if(nodeLinkFn)nodeLinkFn(vm,el,host,scope,frag);if(childLinkFn)childLinkFn(vm,childNodes,host,scope,frag);},vm);return makeUnlinkFn(vm,dirs);};} /**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */function linkAndCapture(linker,vm){ /* istanbul ignore if */if(false){ // reset directives before every capture in production
	// mode, so that when unlinking we don't need to splice
	// them out (which turns out to be a perf hit).
	// they are kept in development mode because they are
	// useful for Vue's own tests.
	vm._directives = [];}var originalDirCount=vm._directives.length;linker();var dirs=vm._directives.slice(originalDirCount);dirs.sort(directiveComparator);for(var i=0,l=dirs.length;i < l;i++) {dirs[i]._bind();}return dirs;} /**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */function directiveComparator(a,b){a = a.descriptor.def.priority || DEFAULT_PRIORITY;b = b.descriptor.def.priority || DEFAULT_PRIORITY;return a > b?-1:a === b?0:1;} /**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */function makeUnlinkFn(vm,dirs,context,contextDirs){function unlink(destroying){teardownDirs(vm,dirs,destroying);if(context && contextDirs){teardownDirs(context,contextDirs);}} // expose linked directives
	unlink.dirs = dirs;return unlink;} /**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */function teardownDirs(vm,dirs,destroying){var i=dirs.length;while(i--) {dirs[i]._teardown();if(("dev") !== 'production' && !destroying){vm._directives.$remove(dirs[i]);}}} /**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */function compileAndLinkProps(vm,el,props,scope){var propsLinkFn=compileProps(el,props);var propDirs=linkAndCapture(function(){propsLinkFn(vm,scope);},vm);return makeUnlinkFn(vm,propDirs);} /**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */function compileRoot(el,options,contextOptions){var containerAttrs=options._containerAttrs;var replacerAttrs=options._replacerAttrs;var contextLinkFn,replacerLinkFn; // only need to compile other attributes for
	// non-fragment instances
	if(el.nodeType !== 11){ // for components, container and replacer need to be
	// compiled separately and linked in different scopes.
	if(options._asComponent){ // 2. container attributes
	if(containerAttrs && contextOptions){contextLinkFn = compileDirectives(containerAttrs,contextOptions);}if(replacerAttrs){ // 3. replacer attributes
	replacerLinkFn = compileDirectives(replacerAttrs,options);}}else { // non-component, just compile as a normal element.
	replacerLinkFn = compileDirectives(el.attributes,options);}}else if(("dev") !== 'production' && containerAttrs){ // warn container directives for fragment instances
	var names=containerAttrs.filter(function(attr){ // allow vue-loader/vueify scoped css attributes
	return attr.name.indexOf('_v-') < 0 &&  // allow event listeners
	!onRE.test(attr.name) &&  // allow slots
	attr.name !== 'slot';}).map(function(attr){return '"' + attr.name + '"';});if(names.length){var plural=names.length > 1;warn('Attribute' + (plural?'s ':' ') + names.join(', ') + (plural?' are':' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');}}options._containerAttrs = options._replacerAttrs = null;return function rootLinkFn(vm,el,scope){ // link context scope dirs
	var context=vm._context;var contextDirs;if(context && contextLinkFn){contextDirs = linkAndCapture(function(){contextLinkFn(context,el,null,scope);},context);} // link self
	var selfDirs=linkAndCapture(function(){if(replacerLinkFn)replacerLinkFn(vm,el);},vm); // return the unlink function that tearsdown context
	// container directives.
	return makeUnlinkFn(vm,selfDirs,context,contextDirs);};} /**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileNode(node,options){var type=node.nodeType;if(type === 1 && node.tagName !== 'SCRIPT'){return compileElement(node,options);}else if(type === 3 && node.data.trim()){return compileTextNode(node,options);}else {return null;}} /**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileElement(el,options){ // preprocess textareas.
	// textarea treats its text content as the initial value.
	// just bind it as an attr directive for value.
	if(el.tagName === 'TEXTAREA'){var tokens=parseText(el.value);if(tokens){el.setAttribute(':value',tokensToExp(tokens));el.value = '';}}var linkFn;var hasAttrs=el.hasAttributes(); // check terminal directives (for & if)
	if(hasAttrs){linkFn = checkTerminalDirectives(el,options);} // check element directives
	if(!linkFn){linkFn = checkElementDirectives(el,options);} // check component
	if(!linkFn){linkFn = checkComponent(el,options);} // normal directives
	if(!linkFn && hasAttrs){linkFn = compileDirectives(el.attributes,options);}return linkFn;} /**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */function compileTextNode(node,options){ // skip marked text nodes
	if(node._skip){return removeText;}var tokens=parseText(node.wholeText);if(!tokens){return null;} // mark adjacent text nodes as skipped,
	// because we are using node.wholeText to compile
	// all adjacent text nodes together. This fixes
	// issues in IE where sometimes it splits up a single
	// text node into multiple ones.
	var next=node.nextSibling;while(next && next.nodeType === 3) {next._skip = true;next = next.nextSibling;}var frag=document.createDocumentFragment();var el,token;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];el = token.tag?processTextToken(token,options):document.createTextNode(token.value);frag.appendChild(el);}return makeTextNodeLinkFn(tokens,frag,options);} /**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */function removeText(vm,node){remove(node);} /**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */function processTextToken(token,options){var el;if(token.oneTime){el = document.createTextNode(token.value);}else {if(token.html){el = document.createComment('v-html');setTokenType('html');}else { // IE will clean up empty textNodes during
	// frag.cloneNode(true), so we have to give it
	// something here...
	el = document.createTextNode(' ');setTokenType('text');}}function setTokenType(type){if(token.descriptor)return;var parsed=parseDirective(token.value);token.descriptor = {name:type,def:directives[type],expression:parsed.expression,filters:parsed.filters};}return el;} /**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */function makeTextNodeLinkFn(tokens,frag){return function textNodeLinkFn(vm,el,host,scope){var fragClone=frag.cloneNode(true);var childNodes=toArray(fragClone.childNodes);var token,value,node;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];value = token.value;if(token.tag){node = childNodes[i];if(token.oneTime){value = (scope || vm).$eval(value);if(token.html){replace(node,parseTemplate(value,true));}else {node.data = value;}}else {vm._bindDir(token.descriptor,node,host,scope);}}}replace(el,fragClone);};} /**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function compileNodeList(nodeList,options){var linkFns=[];var nodeLinkFn,childLinkFn,node;for(var i=0,l=nodeList.length;i < l;i++) {node = nodeList[i];nodeLinkFn = compileNode(node,options);childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes()?compileNodeList(node.childNodes,options):null;linkFns.push(nodeLinkFn,childLinkFn);}return linkFns.length?makeChildLinkFn(linkFns):null;} /**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */function makeChildLinkFn(linkFns){return function childLinkFn(vm,nodes,host,scope,frag){var node,nodeLinkFn,childrenLinkFn;for(var i=0,n=0,l=linkFns.length;i < l;n++) {node = nodes[n];nodeLinkFn = linkFns[i++];childrenLinkFn = linkFns[i++]; // cache childNodes before linking parent, fix #657
	var childNodes=toArray(node.childNodes);if(nodeLinkFn){nodeLinkFn(vm,node,host,scope,frag);}if(childrenLinkFn){childrenLinkFn(vm,childNodes,host,scope,frag);}}};} /**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */function checkElementDirectives(el,options){var tag=el.tagName.toLowerCase();if(commonTagRE.test(tag)){return;}var def=resolveAsset(options,'elementDirectives',tag);if(def){return makeTerminalNodeLinkFn(el,tag,'',options,def);}} /**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function checkComponent(el,options){var component=checkComponentAttr(el,options);if(component){var ref=findRef(el);var descriptor={name:'component',ref:ref,expression:component.id,def:internalDirectives.component,modifiers:{literal:!component.dynamic}};var componentLinkFn=function componentLinkFn(vm,el,host,scope,frag){if(ref){defineReactive((scope || vm).$refs,ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};componentLinkFn.terminal = true;return componentLinkFn;}} /**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */function checkTerminalDirectives(el,options){ // skip v-pre
	if(getAttr(el,'v-pre') !== null){return skip;} // skip v-else block, but only if following v-if
	if(el.hasAttribute('v-else')){var prev=el.previousElementSibling;if(prev && prev.hasAttribute('v-if')){return skip;}}var value,dirName;for(var i=0,l=terminalDirectives.length;i < l;i++) {dirName = terminalDirectives[i];value = el.getAttribute('v-' + dirName);if(value != null){return makeTerminalNodeLinkFn(el,dirName,value,options);}}}function skip(){}skip.terminal = true; /**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */function makeTerminalNodeLinkFn(el,dirName,value,options,def){var parsed=parseDirective(value);var descriptor={name:dirName,expression:parsed.expression,filters:parsed.filters,raw:value, // either an element directive, or if/for
	// #2366 or custom terminal directive
	def:def || resolveAsset(options,'directives',dirName)}; // check ref for v-for and router-view
	if(dirName === 'for' || dirName === 'router-view'){descriptor.ref = findRef(el);}var fn=function terminalNodeLinkFn(vm,el,host,scope,frag){if(descriptor.ref){defineReactive((scope || vm).$refs,descriptor.ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};fn.terminal = true;return fn;} /**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */function compileDirectives(attrs,options){var i=attrs.length;var dirs=[];var attr,name,value,rawName,rawValue,dirName,arg,modifiers,dirDef,tokens,matched;while(i--) {attr = attrs[i];name = rawName = attr.name;value = rawValue = attr.value;tokens = parseText(value); // reset arg
	arg = null; // check modifiers
	modifiers = parseModifiers(name);name = name.replace(modifierRE,''); // attribute interpolations
	if(tokens){value = tokensToExp(tokens);arg = name;pushDir('bind',directives.bind,tokens); // warn against mixing mustaches with v-bind
	if(true){if(name === 'class' && Array.prototype.some.call(attrs,function(attr){return attr.name === ':class' || attr.name === 'v-bind:class';})){warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');}}}else  // special attribute: transition
	if(transitionRE.test(name)){modifiers.literal = !bindRE.test(name);pushDir('transition',internalDirectives.transition);}else  // event handlers
	if(onRE.test(name)){arg = name.replace(onRE,'');pushDir('on',directives.on);}else  // attribute bindings
	if(bindRE.test(name)){dirName = name.replace(bindRE,'');if(dirName === 'style' || dirName === 'class'){pushDir(dirName,internalDirectives[dirName]);}else {arg = dirName;pushDir('bind',directives.bind);}}else  // normal directives
	if(matched = name.match(dirAttrRE)){dirName = matched[1];arg = matched[2]; // skip v-else (when used with v-show)
	if(dirName === 'else'){continue;}dirDef = resolveAsset(options,'directives',dirName);if(true){assertAsset(dirDef,'directive',dirName);}if(dirDef){pushDir(dirName,dirDef);}}} /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */function pushDir(dirName,def,interpTokens){var hasOneTimeToken=interpTokens && hasOneTime(interpTokens);var parsed=!hasOneTimeToken && parseDirective(value);dirs.push({name:dirName,attr:rawName,raw:rawValue,def:def,arg:arg,modifiers:modifiers, // conversion from interpolation strings with one-time token
	// to expression is differed until directive bind time so that we
	// have access to the actual vm context for one-time bindings.
	expression:parsed && parsed.expression,filters:parsed && parsed.filters,interp:interpTokens,hasOneTime:hasOneTimeToken});}if(dirs.length){return makeNodeLinkFn(dirs);}} /**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */function parseModifiers(name){var res=Object.create(null);var match=name.match(modifierRE);if(match){var i=match.length;while(i--) {res[match[i].slice(1)] = true;}}return res;} /**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */function makeNodeLinkFn(directives){return function nodeLinkFn(vm,el,host,scope,frag){ // reverse apply because it's sorted low to high
	var i=directives.length;while(i--) {vm._bindDir(directives[i],el,host,scope,frag);}};} /**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */function hasOneTime(tokens){var i=tokens.length;while(i--) {if(tokens[i].oneTime)return true;}}var specialCharRE=/[^\w\-:\.]/; /**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transclude(el,options){ // extract container attributes to pass them down
	// to compiler, because they need to be compiled in
	// parent scope. we are mutating the options object here
	// assuming the same object will be used for compile
	// right after this.
	if(options){options._containerAttrs = extractAttrs(el);} // for template tags, what we want is its content as
	// a documentFragment (for fragment instances)
	if(isTemplate(el)){el = parseTemplate(el);}if(options){if(options._asComponent && !options.template){options.template = '<slot></slot>';}if(options.template){options._content = extractContent(el);el = transcludeTemplate(el,options);}}if(isFragment(el)){ // anchors for fragment instance
	// passing in `persist: true` to avoid them being
	// discarded by IE during template cloning
	prepend(createAnchor('v-start',true),el);el.appendChild(createAnchor('v-end',true));}return el;} /**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transcludeTemplate(el,options){var template=options.template;var frag=parseTemplate(template,true);if(frag){var replacer=frag.firstChild;var tag=replacer.tagName && replacer.tagName.toLowerCase();if(options.replace){ /* istanbul ignore if */if(el === document.body){("dev") !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');} // there are many cases where the instance must
	// become a fragment instance: basically anything that
	// can create more than 1 root nodes.
	if( // multi-children template
	frag.childNodes.length > 1 ||  // non-element template
	replacer.nodeType !== 1 ||  // single nested component
	tag === 'component' || resolveAsset(options,'components',tag) || hasBindAttr(replacer,'is') ||  // element directive
	resolveAsset(options,'elementDirectives',tag) ||  // for block
	replacer.hasAttribute('v-for') ||  // if block
	replacer.hasAttribute('v-if')){return frag;}else {options._replacerAttrs = extractAttrs(replacer);mergeAttrs(el,replacer);return replacer;}}else {el.appendChild(frag);return el;}}else {("dev") !== 'production' && warn('Invalid template option: ' + template);}} /**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */function extractAttrs(el){if(el.nodeType === 1 && el.hasAttributes()){return toArray(el.attributes);}} /**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */function mergeAttrs(from,to){var attrs=from.attributes;var i=attrs.length;var name,value;while(i--) {name = attrs[i].name;value = attrs[i].value;if(!to.hasAttribute(name) && !specialCharRE.test(name)){to.setAttribute(name,value);}else if(name === 'class' && !parseText(value)){value.split(/\s+/).forEach(function(cls){addClass(to,cls);});}}} /**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */function scanSlots(template,content,vm){if(!content){return;}var contents=vm._slotContents = {};var slots=template.querySelectorAll('slot');if(slots.length){var hasDefault,slot,name;for(var i=0,l=slots.length;i < l;i++) {slot = slots[i]; /* eslint-disable no-cond-assign */if(name = slot.getAttribute('name')){select(slot,name);}else if(("dev") !== 'production' && (name = getBindAttr(slot,'name'))){warn('<slot :name="' + name + '">: slot names cannot be dynamic.');}else { // default slot
	hasDefault = true;} /* eslint-enable no-cond-assign */}if(hasDefault){contents['default'] = extractFragment(content.childNodes,content);}}function select(slot,name){ // named slot
	var selector='[slot="' + name + '"]';var nodes=content.querySelectorAll(selector);if(nodes.length){contents[name] = extractFragment(nodes,content);}}} /**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @return {DocumentFragment}
	 */function extractFragment(nodes,parent){var frag=document.createDocumentFragment();nodes = toArray(nodes);for(var i=0,l=nodes.length;i < l;i++) {var node=nodes[i];if(node.parentNode === parent){if(isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')){parent.removeChild(node);node = parseTemplate(node);}frag.appendChild(node);}}return frag;}var compiler=Object.freeze({compile:compile,compileAndLinkProps:compileAndLinkProps,compileRoot:compileRoot,terminalDirectives:terminalDirectives,transclude:transclude,scanSlots:scanSlots});function stateMixin(Vue){ /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */Object.defineProperty(Vue.prototype,'$data',{get:function get(){return this._data;},set:function set(newData){if(newData !== this._data){this._setData(newData);}}}); /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */Vue.prototype._initState = function(){this._initProps();this._initMeta();this._initMethods();this._initData();this._initComputed();}; /**
	   * Initialize props.
	   */Vue.prototype._initProps = function(){var options=this.$options;var el=options.el;var props=options.props;if(props && !el){("dev") !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');} // make sure to convert string selectors into element now
	el = options.el = query(el);this._propsUnlinkFn = el && el.nodeType === 1 && props // props must be linked in proper scope if inside v-for
	?compileAndLinkProps(this,el,props,this._scope):null;}; /**
	   * Initialize the data.
	   */Vue.prototype._initData = function(){var propsData=this._data;var optionsDataFn=this.$options.data;var optionsData=optionsDataFn && optionsDataFn();var runtimeData;if(true){runtimeData = (typeof this._runtimeData === 'function'?this._runtimeData():this._runtimeData) || {};this._runtimeData = null;}if(optionsData){this._data = optionsData;for(var prop in propsData) {if(("dev") !== 'production' && hasOwn(optionsData,prop) && !hasOwn(runtimeData,prop)){warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');}if(this._props[prop].raw !== null || !hasOwn(optionsData,prop)){set(optionsData,prop,propsData[prop]);}}}var data=this._data; // proxy data on instance
	var keys=Object.keys(data);var i,key;i = keys.length;while(i--) {key = keys[i];this._proxy(key);} // observe data
	observe(data,this);}; /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */Vue.prototype._setData = function(newData){newData = newData || {};var oldData=this._data;this._data = newData;var keys,key,i; // unproxy keys not present in new data
	keys = Object.keys(oldData);i = keys.length;while(i--) {key = keys[i];if(!(key in newData)){this._unproxy(key);}} // proxy keys not already proxied,
	// and trigger change for changed values
	keys = Object.keys(newData);i = keys.length;while(i--) {key = keys[i];if(!hasOwn(this,key)){ // new property
	this._proxy(key);}}oldData.__ob__.removeVm(this);observe(newData,this);this._digest();}; /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */Vue.prototype._proxy = function(key){if(!isReserved(key)){ // need to store ref to self here
	// because these getter/setters might
	// be called by child scopes via
	// prototype inheritance.
	var self=this;Object.defineProperty(self,key,{configurable:true,enumerable:true,get:function proxyGetter(){return self._data[key];},set:function proxySetter(val){self._data[key] = val;}});}}; /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */Vue.prototype._unproxy = function(key){if(!isReserved(key)){delete this[key];}}; /**
	   * Force update on every watcher in scope.
	   */Vue.prototype._digest = function(){for(var i=0,l=this._watchers.length;i < l;i++) {this._watchers[i].update(true); // shallow updates
	}}; /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */function noop(){}Vue.prototype._initComputed = function(){var computed=this.$options.computed;if(computed){for(var key in computed) {var userDef=computed[key];var def={enumerable:true,configurable:true};if(typeof userDef === 'function'){def.get = makeComputedGetter(userDef,this);def.set = noop;}else {def.get = userDef.get?userDef.cache !== false?makeComputedGetter(userDef.get,this):bind(userDef.get,this):noop;def.set = userDef.set?bind(userDef.set,this):noop;}Object.defineProperty(this,key,def);}}};function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,null,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};} /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */Vue.prototype._initMethods = function(){var methods=this.$options.methods;if(methods){for(var key in methods) {this[key] = bind(methods[key],this);}}}; /**
	   * Initialize meta information like $index, $key & $value.
	   */Vue.prototype._initMeta = function(){var metas=this.$options._meta;if(metas){for(var key in metas) {defineReactive(this,key,metas[key]);}}};}var eventRE=/^v-on:|^@/;function eventsMixin(Vue){ /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */Vue.prototype._initEvents = function(){var options=this.$options;if(options._asComponent){registerComponentEvents(this,options.el);}registerCallbacks(this,'$on',options.events);registerCallbacks(this,'$watch',options.watch);}; /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */function registerComponentEvents(vm,el){var attrs=el.attributes;var name,handler;for(var i=0,l=attrs.length;i < l;i++) {name = attrs[i].name;if(eventRE.test(name)){name = name.replace(eventRE,'');handler = (vm._scope || vm._context).$eval(attrs[i].value,true);if(typeof handler === 'function'){handler._fromParent = true;vm.$on(name.replace(eventRE),handler);}else if(true){warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name?' on component <' + vm.$options.name + '>':'') + ' expects a function value, got ' + handler);}}}} /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */function registerCallbacks(vm,action,hash){if(!hash)return;var handlers,key,i,j;for(key in hash) {handlers = hash[key];if(isArray(handlers)){for(i = 0,j = handlers.length;i < j;i++) {register(vm,action,key,handlers[i]);}}else {register(vm,action,key,handlers);}}} /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */function register(vm,action,key,handler,options){var type=typeof handler;if(type === 'function'){vm[action](key,handler,options);}else if(type === 'string'){var methods=vm.$options.methods;var method=methods && methods[handler];if(method){vm[action](key,method,options);}else {("dev") !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');}}else if(handler && type === 'object'){register(vm,action,key,handler.handler,handler);}} /**
	   * Setup recursive attached/detached calls
	   */Vue.prototype._initDOMHooks = function(){this.$on('hook:attached',onAttached);this.$on('hook:detached',onDetached);}; /**
	   * Callback to recursively call attached hook on children
	   */function onAttached(){if(!this._isAttached){this._isAttached = true;this.$children.forEach(callAttach);}} /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */function callAttach(child){if(!child._isAttached && inDoc(child.$el)){child._callHook('attached');}} /**
	   * Callback to recursively call detached hook on children
	   */function onDetached(){if(this._isAttached){this._isAttached = false;this.$children.forEach(callDetach);}} /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */function callDetach(child){if(child._isAttached && !inDoc(child.$el)){child._callHook('detached');}} /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */Vue.prototype._callHook = function(hook){this.$emit('pre-hook:' + hook);var handlers=this.$options[hook];if(handlers){for(var i=0,j=handlers.length;i < j;i++) {handlers[i].call(this);}}this.$emit('hook:' + hook);};}function noop(){} /**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */function Directive(descriptor,vm,el,host,scope,frag){this.vm = vm;this.el = el; // copy descriptor properties
	this.descriptor = descriptor;this.name = descriptor.name;this.expression = descriptor.expression;this.arg = descriptor.arg;this.modifiers = descriptor.modifiers;this.filters = descriptor.filters;this.literal = this.modifiers && this.modifiers.literal; // private
	this._locked = false;this._bound = false;this._listeners = null; // link context
	this._host = host;this._scope = scope;this._frag = frag; // store directives on node in dev mode
	if(("dev") !== 'production' && this.el){this.el._vue_directives = this.el._vue_directives || [];this.el._vue_directives.push(this);}} /**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */Directive.prototype._bind = function(){var name=this.name;var descriptor=this.descriptor; // remove attribute
	if((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute){var attr=descriptor.attr || 'v-' + name;this.el.removeAttribute(attr);} // copy def properties
	var def=descriptor.def;if(typeof def === 'function'){this.update = def;}else {extend(this,def);} // setup directive params
	this._setupParams(); // initial bind
	if(this.bind){this.bind();}this._bound = true;if(this.literal){this.update && this.update(descriptor.raw);}else if((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()){ // wrapped updater for context
	var dir=this;if(this.update){this._update = function(val,oldVal){if(!dir._locked){dir.update(val,oldVal);}};}else {this._update = noop;}var preProcess=this._preProcess?bind(this._preProcess,this):null;var postProcess=this._postProcess?bind(this._postProcess,this):null;var watcher=this._watcher = new Watcher(this.vm,this.expression,this._update, // callback
	{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:preProcess,postProcess:postProcess,scope:this._scope}); // v-model with inital inline value need to sync back to
	// model instead of update to DOM on init. They would
	// set the afterBind hook to indicate that.
	if(this.afterBind){this.afterBind();}else if(this.update){this.update(watcher.value);}}}; /**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */Directive.prototype._setupParams = function(){if(!this.params){return;}var params=this.params; // swap the params array with a fresh object.
	this.params = Object.create(null);var i=params.length;var key,val,mappedKey;while(i--) {key = params[i];mappedKey = camelize(key);val = getBindAttr(this.el,key);if(val != null){ // dynamic
	this._setupParamWatcher(mappedKey,val);}else { // static
	val = getAttr(this.el,key);if(val != null){this.params[mappedKey] = val === ''?true:val;}}}}; /**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */Directive.prototype._setupParamWatcher = function(key,expression){var self=this;var called=false;var unwatch=(this._scope || this.vm).$watch(expression,function(val,oldVal){self.params[key] = val; // since we are in immediate mode,
	// only call the param change callbacks if this is not the first update.
	if(called){var cb=self.paramWatchers && self.paramWatchers[key];if(cb){cb.call(self,val,oldVal);}}else {called = true;}},{immediate:true,user:false});(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);}; /**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */Directive.prototype._checkStatement = function(){var expression=this.expression;if(expression && this.acceptStatement && !isSimplePath(expression)){var fn=parseExpression(expression).get;var scope=this._scope || this.vm;var handler=function handler(e){scope.$event = e;fn.call(scope,scope);scope.$event = null;};if(this.filters){handler = scope._applyFilters(handler,null,this.filters);}this.update(handler);return true;}}; /**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */Directive.prototype.set = function(value){ /* istanbul ignore else */if(this.twoWay){this._withLock(function(){this._watcher.set(value);});}else if(true){warn('Directive.set() can only be used inside twoWay' + 'directives.');}}; /**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */Directive.prototype._withLock = function(fn){var self=this;self._locked = true;fn.call(self);nextTick(function(){self._locked = false;});}; /**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */Directive.prototype.on = function(event,handler,useCapture){on(this.el,event,handler,useCapture);(this._listeners || (this._listeners = [])).push([event,handler]);}; /**
	 * Teardown the watcher and call unbind.
	 */Directive.prototype._teardown = function(){if(this._bound){this._bound = false;if(this.unbind){this.unbind();}if(this._watcher){this._watcher.teardown();}var listeners=this._listeners;var i;if(listeners){i = listeners.length;while(i--) {off(this.el,listeners[i][0],listeners[i][1]);}}var unwatchFns=this._paramUnwatchFns;if(unwatchFns){i = unwatchFns.length;while(i--) {unwatchFns[i]();}}if(("dev") !== 'production' && this.el){this.el._vue_directives.$remove(this);}this.vm = this.el = this._watcher = this._listeners = null;}};function lifecycleMixin(Vue){ /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */Vue.prototype._updateRef = function(remove){var ref=this.$options._ref;if(ref){var refs=(this._scope || this._context).$refs;if(remove){if(refs[ref] === this){refs[ref] = null;}}else {refs[ref] = this;}}}; /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */Vue.prototype._compile = function(el){var options=this.$options; // transclude and init element
	// transclude can potentially replace original
	// so we need to keep reference; this step also injects
	// the template and caches the original attributes
	// on the container node and replacer node.
	var original=el;el = transclude(el,options);this._initElement(el); // handle v-pre on root node (#2026)
	if(el.nodeType === 1 && getAttr(el,'v-pre') !== null){return;} // root is always compiled per-instance, because
	// container attrs and props can be different every time.
	var contextOptions=this._context && this._context.$options;var rootLinker=compileRoot(el,options,contextOptions); // scan for slot distribution before compiling the content
	// so that it's decoupeld from slot/directive compilation order
	scanSlots(el,options._content,this); // compile and link the rest
	var contentLinkFn;var ctor=this.constructor; // component compilation can be cached
	// as long as it's not using inline-template
	if(options._linkerCachable){contentLinkFn = ctor.linker;if(!contentLinkFn){contentLinkFn = ctor.linker = compile(el,options);}} // link phase
	// make sure to link root with prop scope!
	var rootUnlinkFn=rootLinker(this,el,this._scope);var contentUnlinkFn=contentLinkFn?contentLinkFn(this,el):compile(el,options)(this,el); // register composite unlink function
	// to be called during instance destruction
	this._unlinkFn = function(){rootUnlinkFn(); // passing destroying: true to avoid searching and
	// splicing the directives
	contentUnlinkFn(true);}; // finally replace original
	if(options.replace){replace(original,el);}this._isCompiled = true;this._callHook('compiled');}; /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */Vue.prototype._initElement = function(el){if(isFragment(el)){this._isFragment = true;this.$el = this._fragmentStart = el.firstChild;this._fragmentEnd = el.lastChild; // set persisted text anchors to empty
	if(this._fragmentStart.nodeType === 3){this._fragmentStart.data = this._fragmentEnd.data = '';}this._fragment = el;}else {this.$el = el;}this.$el.__vue__ = this;this._callHook('beforeCompile');}; /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */Vue.prototype._bindDir = function(descriptor,node,host,scope,frag){this._directives.push(new Directive(descriptor,this,node,host,scope,frag));}; /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */Vue.prototype._destroy = function(remove,deferCleanup){if(this._isBeingDestroyed){if(!deferCleanup){this._cleanup();}return;}var destroyReady;var pendingRemoval;var self=this; // Cleanup should be called either synchronously or asynchronoysly as
	// callback of this.$remove(), or if remove and deferCleanup are false.
	// In any case it should be called after all other removing, unbinding and
	// turning of is done
	var cleanupIfPossible=function cleanupIfPossible(){if(destroyReady && !pendingRemoval && !deferCleanup){self._cleanup();}}; // remove DOM element
	if(remove && this.$el){pendingRemoval = true;this.$remove(function(){pendingRemoval = false;cleanupIfPossible();});}this._callHook('beforeDestroy');this._isBeingDestroyed = true;var i; // remove self from parent. only necessary
	// if parent is not being destroyed as well.
	var parent=this.$parent;if(parent && !parent._isBeingDestroyed){parent.$children.$remove(this); // unregister ref (remove: true)
	this._updateRef(true);} // destroy all children.
	i = this.$children.length;while(i--) {this.$children[i].$destroy();} // teardown props
	if(this._propsUnlinkFn){this._propsUnlinkFn();} // teardown all directives. this also tearsdown all
	// directive-owned watchers.
	if(this._unlinkFn){this._unlinkFn();}i = this._watchers.length;while(i--) {this._watchers[i].teardown();} // remove reference to self on $el
	if(this.$el){this.$el.__vue__ = null;}destroyReady = true;cleanupIfPossible();}; /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */Vue.prototype._cleanup = function(){if(this._isDestroyed){return;} // remove self from owner fragment
	// do it in cleanup so that we can call $destroy with
	// defer right when a fragment is about to be removed.
	if(this._frag){this._frag.children.$remove(this);} // remove reference from data ob
	// frozen object may not have observer.
	if(this._data.__ob__){this._data.__ob__.removeVm(this);} // Clean up references to private properties and other
	// instances. preserve reference to _data so that proxy
	// accessors still work. The only potential side effect
	// here is that mutating the instance after it's destroyed
	// may affect the state of other components that are still
	// observing the same object, but that seems to be a
	// reasonable responsibility for the user rather than
	// always throwing an error on them.
	this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null; // call the last hook...
	this._isDestroyed = true;this._callHook('destroyed'); // turn off all instance listeners.
	this.$off();};}function miscMixin(Vue){ /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */Vue.prototype._applyFilters = function(value,oldValue,filters,write){var filter,fn,args,arg,offset,i,l,j,k;for(i = 0,l = filters.length;i < l;i++) {filter = filters[i];fn = resolveAsset(this.$options,'filters',filter.name);if(true){assertAsset(fn,'filter',filter.name);}if(!fn)continue;fn = write?fn.write:fn.read || fn;if(typeof fn !== 'function')continue;args = write?[value,oldValue]:[value];offset = write?2:1;if(filter.args){for(j = 0,k = filter.args.length;j < k;j++) {arg = filter.args[j];args[j + offset] = arg.dynamic?this.$get(arg.value):arg.value;}}value = fn.apply(this,args);}return value;}; /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */Vue.prototype._resolveComponent = function(id,cb){var factory=resolveAsset(this.$options,'components',id);if(true){assertAsset(factory,'component',id);}if(!factory){return;} // async component factory
	if(!factory.options){if(factory.resolved){ // cached
	cb(factory.resolved);}else if(factory.requested){ // pool callbacks
	factory.pendingCallbacks.push(cb);}else {factory.requested = true;var cbs=factory.pendingCallbacks = [cb];factory.call(this,function resolve(res){if(isPlainObject(res)){res = Vue.extend(res);} // cache resolved
	factory.resolved = res; // invoke callbacks
	for(var i=0,l=cbs.length;i < l;i++) {cbs[i](res);}},function reject(reason){("dev") !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason?'\nReason: ' + reason:''));});}}else { // normal component
	cb(factory);}};}var filterRE$1=/[^|]\|[^|]/;function dataAPI(Vue){ /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */Vue.prototype.$get = function(exp,asStatement){var res=parseExpression(exp);if(res){if(asStatement && !isSimplePath(exp)){var self=this;return function statementHandler(){self.$arguments = toArray(arguments);var result=res.get.call(self,self);self.$arguments = null;return result;};}else {try{return res.get.call(this,this);}catch(e) {}}}}; /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */Vue.prototype.$set = function(exp,val){var res=parseExpression(exp,true);if(res && res.set){res.set.call(this,this,val);}}; /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */Vue.prototype.$delete = function(key){del(this._data,key);}; /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */Vue.prototype.$watch = function(expOrFn,cb,options){var vm=this;var parsed;if(typeof expOrFn === 'string'){parsed = parseDirective(expOrFn);expOrFn = parsed.expression;}var watcher=new Watcher(vm,expOrFn,cb,{deep:options && options.deep,sync:options && options.sync,filters:parsed && parsed.filters,user:!options || options.user !== false});if(options && options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};}; /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */Vue.prototype.$eval = function(text,asStatement){ // check for filters.
	if(filterRE$1.test(text)){var dir=parseDirective(text); // the filter regex check might give false positive
	// for pipes inside strings, so it's possible that
	// we don't get any filters here
	var val=this.$get(dir.expression,asStatement);return dir.filters?this._applyFilters(val,null,dir.filters):val;}else { // no filter
	return this.$get(text,asStatement);}}; /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */Vue.prototype.$interpolate = function(text){var tokens=parseText(text);var vm=this;if(tokens){if(tokens.length === 1){return vm.$eval(tokens[0].value) + '';}else {return tokens.map(function(token){return token.tag?vm.$eval(token.value):token.value;}).join('');}}else {return text;}}; /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */Vue.prototype.$log = function(path){var data=path?getPath(this._data,path):this._data;if(data){data = clean(data);} // include computed fields
	if(!path){for(var key in this.$options.computed) {data[key] = clean(this[key]);}}console.log(data);}; /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */function clean(obj){return JSON.parse(JSON.stringify(obj));}}function domAPI(Vue){ /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */Vue.prototype.$nextTick = function(fn){nextTick(fn,this);}; /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$appendTo = function(target,cb,withTransition){return insert(this,target,cb,withTransition,append,appendWithTransition);}; /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$prependTo = function(target,cb,withTransition){target = query(target);if(target.hasChildNodes()){this.$before(target.firstChild,cb,withTransition);}else {this.$appendTo(target,cb,withTransition);}return this;}; /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$before = function(target,cb,withTransition){return insert(this,target,cb,withTransition,beforeWithCb,beforeWithTransition);}; /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$after = function(target,cb,withTransition){target = query(target);if(target.nextSibling){this.$before(target.nextSibling,cb,withTransition);}else {this.$appendTo(target.parentNode,cb,withTransition);}return this;}; /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$remove = function(cb,withTransition){if(!this.$el.parentNode){return cb && cb();}var inDocument=this._isAttached && inDoc(this.$el); // if we are not in document, no need to check
	// for transitions
	if(!inDocument)withTransition = false;var self=this;var realCb=function realCb(){if(inDocument)self._callHook('detached');if(cb)cb();};if(this._isFragment){removeNodeRange(this._fragmentStart,this._fragmentEnd,this,this._fragment,realCb);}else {var op=withTransition === false?removeWithCb:removeWithTransition;op(this.$el,this,realCb);}return this;}; /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */function insert(vm,target,cb,withTransition,op1,op2){target = query(target);var targetIsDetached=!inDoc(target);var op=withTransition === false || targetIsDetached?op1:op2;var shouldCallHook=!targetIsDetached && !vm._isAttached && !inDoc(vm.$el);if(vm._isFragment){mapNodeRange(vm._fragmentStart,vm._fragmentEnd,function(node){op(node,target,vm);});cb && cb();}else {op(vm.$el,target,vm,cb);}if(shouldCallHook){vm._callHook('attached');}return vm;} /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */function query(el){return typeof el === 'string'?document.querySelector(el):el;} /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function append(el,target,vm,cb){target.appendChild(el);if(cb)cb();} /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function beforeWithCb(el,target,vm,cb){before(el,target);if(cb)cb();} /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function removeWithCb(el,vm,cb){remove(el);if(cb)cb();}}function eventsAPI(Vue){ /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$on = function(event,fn){(this._events[event] || (this._events[event] = [])).push(fn);modifyListenerCount(this,event,1);return this;}; /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$once = function(event,fn){var self=this;function on(){self.$off(event,on);fn.apply(this,arguments);}on.fn = fn;this.$on(event,on);return this;}; /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$off = function(event,fn){var cbs; // all
	if(!arguments.length){if(this.$parent){for(event in this._events) {cbs = this._events[event];if(cbs){modifyListenerCount(this,event,-cbs.length);}}}this._events = {};return this;} // specific event
	cbs = this._events[event];if(!cbs){return this;}if(arguments.length === 1){modifyListenerCount(this,event,-cbs.length);this._events[event] = null;return this;} // specific handler
	var cb;var i=cbs.length;while(i--) {cb = cbs[i];if(cb === fn || cb.fn === fn){modifyListenerCount(this,event,-1);cbs.splice(i,1);break;}}return this;}; /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */Vue.prototype.$emit = function(event){var isSource=typeof event === 'string';event = isSource?event:event.name;var cbs=this._events[event];var shouldPropagate=isSource || !cbs;if(cbs){cbs = cbs.length > 1?toArray(cbs):cbs; // this is a somewhat hacky solution to the question raised
	// in #2102: for an inline component listener like <comp @test="doThis">,
	// the propagation handling is somewhat broken. Therefore we
	// need to treat these inline callbacks differently.
	var hasParentCbs=isSource && cbs.some(function(cb){return cb._fromParent;});if(hasParentCbs){shouldPropagate = false;}var args=toArray(arguments,1);for(var i=0,l=cbs.length;i < l;i++) {var cb=cbs[i];var res=cb.apply(this,args);if(res === true && (!hasParentCbs || cb._fromParent)){shouldPropagate = true;}}}return shouldPropagate;}; /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$broadcast = function(event){var isSource=typeof event === 'string';event = isSource?event:event.name; // if no child has registered for this event,
	// then there's no need to broadcast.
	if(!this._eventsCount[event])return;var children=this.$children;var args=toArray(arguments);if(isSource){ // use object event to indicate non-source emit
	// on children
	args[0] = {name:event,source:this};}for(var i=0,l=children.length;i < l;i++) {var child=children[i];var shouldPropagate=child.$emit.apply(child,args);if(shouldPropagate){child.$broadcast.apply(child,args);}}return this;}; /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$dispatch = function(event){var shouldPropagate=this.$emit.apply(this,arguments);if(!shouldPropagate)return;var parent=this.$parent;var args=toArray(arguments); // use object event to indicate non-source emit
	// on parents
	args[0] = {name:event,source:this};while(parent) {shouldPropagate = parent.$emit.apply(parent,args);parent = shouldPropagate?parent.$parent:null;}return this;}; /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */var hookRE=/^hook:/;function modifyListenerCount(vm,event,count){var parent=vm.$parent; // hooks do not get broadcasted so no need
	// to do bookkeeping for them
	if(!parent || !count || hookRE.test(event))return;while(parent) {parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;parent = parent.$parent;}}}function lifecycleAPI(Vue){ /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */Vue.prototype.$mount = function(el){if(this._isCompiled){("dev") !== 'production' && warn('$mount() should be called only once.');return;}el = query(el);if(!el){el = document.createElement('div');}this._compile(el);this._initDOMHooks();if(inDoc(this.$el)){this._callHook('attached');ready.call(this);}else {this.$once('hook:attached',ready);}return this;}; /**
	   * Mark an instance as ready.
	   */function ready(){this._isAttached = true;this._isReady = true;this._callHook('ready');} /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */Vue.prototype.$destroy = function(remove,deferCleanup){this._destroy(remove,deferCleanup);}; /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */Vue.prototype.$compile = function(el,host,scope,frag){return compile(el,this.$options,true)(this,el,host,scope,frag);};} /**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */function Vue(options){this._init(options);} // install internals
	initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);miscMixin(Vue); // install instance APIs
	dataAPI(Vue);domAPI(Vue);eventsAPI(Vue);lifecycleAPI(Vue);var slot={priority:SLOT,params:['name'],bind:function bind(){ // this was resolved during component transclusion
	var name=this.params.name || 'default';var content=this.vm._slotContents && this.vm._slotContents[name];if(!content || !content.hasChildNodes()){this.fallback();}else {this.compile(content.cloneNode(true),this.vm._context,this.vm);}},compile:function compile(content,context,host){if(content && context){if(this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')){ // if the inserted slot has v-if
	// inject fallback content as the v-else
	var elseBlock=document.createElement('template');elseBlock.setAttribute('v-else','');elseBlock.innerHTML = this.el.innerHTML; // the else block should be compiled in child scope
	elseBlock._context = this.vm;content.appendChild(elseBlock);}var scope=host?host._scope:this._scope;this.unlink = context.$compile(content,host,scope,this._frag);}if(content){replace(this.el,content);}else {remove(this.el);}},fallback:function fallback(){this.compile(extractContent(this.el,true),this.vm);},unbind:function unbind(){if(this.unlink){this.unlink();}}};var partial={priority:PARTIAL,params:['name'], // watch changes to name for dynamic partials
	paramWatchers:{name:function name(value){vIf.remove.call(this);if(value){this.insert(value);}}},bind:function bind(){this.anchor = createAnchor('v-partial');replace(this.el,this.anchor);this.insert(this.params.name);},insert:function insert(id){var partial=resolveAsset(this.vm.$options,'partials',id);if(true){assertAsset(partial,'partial',id);}if(partial){this.factory = new FragmentFactory(this.vm,partial);vIf.insert.call(this);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}};var elementDirectives={slot:slot,partial:partial};var convertArray=vFor._postProcess; /**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */function limitBy(arr,n,offset){offset = offset?parseInt(offset,10):0;n = toNumber(n);return typeof n === 'number'?arr.slice(offset,offset + n):arr;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */function filterBy(arr,search,delimiter){arr = convertArray(arr);if(search == null){return arr;}if(typeof search === 'function'){return arr.filter(search);} // cast to lowercase string
	search = ('' + search).toLowerCase(); // allow optional `in` delimiter
	// because why not
	var n=delimiter === 'in'?3:2; // extract and flatten keys
	var keys=toArray(arguments,n).reduce(function(prev,cur){return prev.concat(cur);},[]);var res=[];var item,key,val,j;for(var i=0,l=arr.length;i < l;i++) {item = arr[i];val = item && item.$value || item;j = keys.length;if(j){while(j--) {key = keys[j];if(key === '$key' && contains$1(item.$key,search) || contains$1(getPath(val,key),search)){res.push(item);break;}}}else if(contains$1(item,search)){res.push(item);}}return res;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */function orderBy(arr,sortKey,reverse){arr = convertArray(arr);if(!sortKey){return arr;}var order=reverse && reverse < 0?-1:1; // sort on a copy to avoid mutating original array
	return arr.slice().sort(function(a,b){if(sortKey !== '$key'){if(isObject(a) && '$value' in a)a = a.$value;if(isObject(b) && '$value' in b)b = b.$value;}a = isObject(a)?getPath(a,sortKey):a;b = isObject(b)?getPath(b,sortKey):b;return a === b?0:a > b?order:-order;});} /**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */function contains$1(val,search){var i;if(isPlainObject(val)){var keys=Object.keys(val);i = keys.length;while(i--) {if(contains$1(val[keys[i]],search)){return true;}}}else if(isArray(val)){i = val.length;while(i--) {if(contains$1(val[i],search)){return true;}}}else if(val != null){return val.toString().toLowerCase().indexOf(search) > -1;}}var digitsRE=/(\d{3})(?=\d)/g; // asset collections must be a plain object.
	var filters={orderBy:orderBy,filterBy:filterBy,limitBy:limitBy, /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */json:{read:function read(value,indent){return typeof value === 'string'?value:JSON.stringify(value,null,Number(indent) || 2);},write:function write(value){try{return JSON.parse(value);}catch(e) {return value;}}}, /**
	   * 'abc' => 'Abc'
	   */capitalize:function capitalize(value){if(!value && value !== 0)return '';value = value.toString();return value.charAt(0).toUpperCase() + value.slice(1);}, /**
	   * 'abc' => 'ABC'
	   */uppercase:function uppercase(value){return value || value === 0?value.toString().toUpperCase():'';}, /**
	   * 'AbC' => 'abc'
	   */lowercase:function lowercase(value){return value || value === 0?value.toString().toLowerCase():'';}, /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */currency:function currency(value,_currency){value = parseFloat(value);if(!isFinite(value) || !value && value !== 0)return '';_currency = _currency != null?_currency:'$';var stringified=Math.abs(value).toFixed(2);var _int=stringified.slice(0,-3);var i=_int.length % 3;var head=i > 0?_int.slice(0,i) + (_int.length > 3?',':''):'';var _float=stringified.slice(-3);var sign=value < 0?'-':'';return sign + _currency + head + _int.slice(i).replace(digitsRE,'$1,') + _float;}, /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */pluralize:function pluralize(value){var args=toArray(arguments,1);return args.length > 1?args[value % 10 - 1] || args[args.length - 1]:args[0] + (value === 1?'':'s');}, /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */debounce:function debounce(handler,delay){if(!handler)return;if(!delay){delay = 300;}return _debounce(handler,delay);}};function installGlobalAPI(Vue){ /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */Vue.options = {directives:directives,elementDirectives:elementDirectives,filters:filters,transitions:{},components:{},partials:{},replace:true}; /**
	   * Expose useful internals
	   */Vue.util = util;Vue.config = config;Vue.set = set;Vue['delete'] = del;Vue.nextTick = nextTick; /**
	   * The following are exposed for advanced usage / plugins
	   */Vue.compiler = compiler;Vue.FragmentFactory = FragmentFactory;Vue.internalDirectives = internalDirectives;Vue.parsers = {path:path,text:text,template:template,directive:directive,expression:expression}; /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid = 0;var cid=1; /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */Vue.extend = function(extendOptions){extendOptions = extendOptions || {};var Super=this;var isFirstExtend=Super.cid === 0;if(isFirstExtend && extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name || Super.options.name;if(true){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');name = null;}}var Sub=createClass(name || 'VueComponent');Sub.prototype = Object.create(Super.prototype);Sub.prototype.constructor = Sub;Sub.cid = cid++;Sub.options = mergeOptions(Super.options,extendOptions);Sub['super'] = Super; // allow further extension
	Sub.extend = Super.extend; // create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type] = Super[type];}); // enable recursive self-lookup
	if(name){Sub.options.components[name] = Sub;} // cache constructor
	if(isFirstExtend){extendOptions._Ctor = Sub;}return Sub;}; /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */function createClass(name){ /* eslint-disable no-new-func */return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')(); /* eslint-enable no-new-func */} /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */Vue.use = function(plugin){ /* istanbul ignore if */if(plugin.installed){return;} // additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install === 'function'){plugin.install.apply(plugin,args);}else {plugin.apply(null,args);}plugin.installed = true;return this;}; /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */Vue.mixin = function(mixin){Vue.options = mergeOptions(Vue.options,mixin);}; /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */config._assetTypes.forEach(function(type){Vue[type] = function(id,definition){if(!definition){return this.options[type + 's'][id];}else { /* istanbul ignore if */if(true){if(type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))){warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);}}if(type === 'component' && isPlainObject(definition)){definition.name = id;definition = Vue.extend(definition);}this.options[type + 's'][id] = definition;return definition;}};}); // expose internal transition API
	extend(Vue.transition,transition);}installGlobalAPI(Vue);Vue.version = '1.0.17'; // devtools global hook
	/* istanbul ignore next */if(devtools){devtools.emit('init',Vue);}else if(("dev") !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');}module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.11
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	(function (global, factory) {
	   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.VueRouter = factory();
	})(undefined, function () {
	  'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map(callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	   function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root) {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride(Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View(Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link(Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this._stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	});

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
	var badges_1 = __webpack_require__(116);
	var breadcrumbs_1 = __webpack_require__(133);
	var buttons_1 = __webpack_require__(144);
	var cards_1 = __webpack_require__(164);
	var chips_1 = __webpack_require__(175);
	var collapsibles_1 = __webpack_require__(180);
	var collections_1 = __webpack_require__(191);
	var dropdowns_1 = __webpack_require__(205);
	var forms_1 = __webpack_require__(210);
	var navbars_1 = __webpack_require__(236);
	var modals_1 = __webpack_require__(266);
	var dialogs_1 = __webpack_require__(277);
	var media_1 = __webpack_require__(285);
	var tabs_1 = __webpack_require__(293);
	var paginations_1 = __webpack_require__(301);
	var preloaders_1 = __webpack_require__(306);
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
	    urls: ['/badges', '/badges/:tab'],
	    link: '/badges',
	    title: 'Badges',
	    component: badges_1['default']
	}, {
	    urls: ['/breadcrumbs/:tab'],
	    link: '/breadcrumbs',
	    title: 'Breadcrumbs',
	    component: breadcrumbs_1['default']
	}, {
	    urls: ['/buttons/:tab'],
	    link: '/buttons/showcase',
	    title: 'Buttons',
	    component: buttons_1['default']
	}, {
	    urls: ['/cards'],
	    link: '/cards',
	    title: 'Cards',
	    component: cards_1['default']
	}, {
	    urls: ['/collapsibles'],
	    link: '/collapsibles',
	    title: 'Collapsibles',
	    component: collapsibles_1['default']
	}, {
	    urls: ['/collections'],
	    link: '/collections',
	    title: 'Collections',
	    component: collections_1['default']
	}, {
	    urls: ['/chips'],
	    link: '/chips',
	    title: 'Chips',
	    component: chips_1['default']
	}, {
	    urls: ['/dialogs'],
	    link: '/dialogs',
	    title: 'Dialogs',
	    component: dialogs_1['default']
	}, {
	    urls: ['/dropdowns'],
	    link: '/dropdowns',
	    title: 'Dropdowns',
	    component: dropdowns_1['default']
	}, {
	    urls: ['/forms'],
	    link: '/forms',
	    title: 'Forms',
	    component: forms_1['default']
	}, {
	    urls: ['/modals'],
	    link: '/modals',
	    title: 'Modals',
	    component: modals_1['default']
	}, {
	    urls: ['/media'],
	    link: '/media',
	    title: 'Media',
	    component: media_1['default']
	}, {
	    urls: ['/navbars'],
	    link: '/navbars',
	    title: 'Navbars',
	    component: navbars_1['default']
	}, {
	    urls: ['/tabs/:tab'],
	    link: '/tabs/4',
	    title: 'Tabs',
	    component: tabs_1['default']
	}, {
	    urls: ['/pagination'],
	    link: '/pagination',
	    title: 'Pagination',
	    component: paginations_1['default']
	}, {
	    urls: ['/preloaders'],
	    link: '/preloaders',
	    title: 'Preloaders',
	    component: preloaders_1['default']
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
	var template = __webpack_require__(113);
	var HomePage = (function () {
	    function HomePage() {}
	    HomePage = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: template
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
	var mixins_1 = __webpack_require__(16);
	var badge_1 = __webpack_require__(24);
	var button_1 = __webpack_require__(26);
	var breadcrumbs_1 = __webpack_require__(30);
	var card_1 = __webpack_require__(38);
	var checkbox_1 = __webpack_require__(40);
	var checkbox_group_1 = __webpack_require__(42);
	var chip_1 = __webpack_require__(44);
	var circural_preloader_1 = __webpack_require__(46);
	var collapsible_1 = __webpack_require__(48);
	var collapsible_item_1 = __webpack_require__(49);
	var collection_1 = __webpack_require__(52);
	var collection_list_1 = __webpack_require__(56);
	var collection_item_1 = __webpack_require__(54);
	var collection_list_item_1 = __webpack_require__(58);
	var dropdown_1 = __webpack_require__(60);
	var dropdown_item_1 = __webpack_require__(62);
	var dropdown_list_1 = __webpack_require__(61);
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
	var icon_1 = __webpack_require__(27);
	var image_1 = __webpack_require__(86);
	var lean_overlay_1 = __webpack_require__(88);
	var linear_preloader_1 = __webpack_require__(91);
	var modal_1 = __webpack_require__(93);
	var nav_item_1 = __webpack_require__(95);
	var navbar_1 = __webpack_require__(31);
	var pagination_1 = __webpack_require__(97);
	var sidenav_1 = __webpack_require__(32);
	var sidenav_overlay_1 = __webpack_require__(33);
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
	var field_1 = __webpack_require__(12);
	var slot_1 = __webpack_require__(13);
	var wave_effect_1 = __webpack_require__(14);
	var directives = {
	    bindBoolean: bind_boolean_1['default'],
	    bindRaw: bind_raw_1['default'],
	    bindClickAway: click_away_1['default'],
	    field: field_1['default'],
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
	// v-bind-boolean.disabled="disabled"
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var VueModule = __webpack_require__(1);
	var Vue = VueModule;
	var handler = Vue.options.directives.model;
	var field = {
	    priority: 800,
	    twoWay: true,
	    params: ['lazy', 'number', 'debounce'],
	    bind: function bind() {
	        this.field = this.el.__vue__.$els.field || this.el.querySelector('.field');
	        if (this.field) {
	            if (this.arg) {
	                this.field.setAttribute(this.arg, this.arg);
	            }
	            this.checkFilters = Vue.options.directives.model.checkFilters;
	            this.__el__ = this.el;
	            this.el = this.field;
	            handler.bind.call(this);
	        } else {
	            console.log('Error: No "field" on component');
	        }
	    },
	    unbind: function unbind() {
	        if (this.field) {
	            handler.unbind.call(this);
	            this.el = this.__el__;
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = field;
	//# sourceMappingURL=index.js.map

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var effect_1 = __webpack_require__(15);
	var waveEffect = {
	    bind: function bind() {
	        var _this = this;
	        this.hide = function (e) {
	            effect_1["default"].hide(e, _this.el);
	        };
	        this.show = function (e) {
	            effect_1["default"].show(e, _this.el);
	        };
	        this.el.addEventListener("mousedown", this.show);
	        this.el.addEventListener("mouseleave", this.hide);
	        this.el.addEventListener("mouseup", this.hide);
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var events_1 = __webpack_require__(17);
	var input_1 = __webpack_require__(18);
	var toast_1 = __webpack_require__(19);
	var tooltip_1 = __webpack_require__(22);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports['default'] = [events_1['default'], input_1['default'], toast_1['default'], tooltip_1['default']];
	//# sourceMappingURL=index.js.map

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = {
	    computed: {
	        id: function id() {
	            var self = this;
	            return self.$options.name.toLowerCase() + '_' + self._uid;
	        }
	    },
	    methods: {
	        fireEvent: function fireEvent(element, event) {
	            if ("createEvent" in document) {
	                var evt = document.createEvent("HTMLEvents");
	                evt.initEvent(event, false, true);
	                element.dispatchEvent(evt);
	            } else {
	                element.fireEvent("on" + event);
	            }
	        },
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var toast_1 = __webpack_require__(20);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vel = __webpack_require__(21);
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*!
	 * Materialize v0.97.5 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	var tooltip_1 = __webpack_require__(23);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Velocity = __webpack_require__(21);
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
	            targetTop = origin.offsetTop - tooltipHeight - margin;
	            targetLeft = origin.offsetLeft + originWidth / 2 - tooltipWidth / 2;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipVerticalMovement = '-10px';
	            backdrop.style.borderRadius = '14px 14px 0 0';
	            backdrop.style.transformOrigin = '50% 90%';
	            backdrop.style.marginTop = tooltipHeight.toString() + 'px';
	            backdrop.style.marginLeft = (tooltipWidth / 2 - backdrop.offsetWidth / 2).toString() + 'px';
	        } else if (tooltipPosition === "left") {
	            targetTop = origin.offsetTop + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = origin.offsetLeft - tooltipWidth - margin;
	            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
	            tooltipHorizontalMovement = '-10px';
	            backdrop.style.width = '14px';
	            backdrop.style.height = '14px';
	            backdrop.style.borderRadius = '14px 0 0 14px';
	            backdrop.style.transformOrigin = '95% 50%';
	            backdrop.style.marginTop = (tooltipHeight / 2).toString() + 'px';
	            backdrop.style.marginLeft = tooltipWidth.toString() + 'px';
	        } else if (tooltipPosition === "right") {
	            targetTop = origin.offsetTop + originHeight / 2 - tooltipHeight / 2;
	            targetLeft = origin.offsetLeft + originWidth + margin;
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
	            targetTop = origin.offsetTop + origin.offsetHeight + margin;
	            targetLeft = origin.offsetLeft + originWidth / 2 - tooltipWidth / 2;
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
/* 24 */
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
	        template: __webpack_require__(25)
	    })], Badge);
	    return Badge;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badge;
	//# sourceMappingURL=index.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<span class=\"badge\" :class=\"{new: !!alert}\">\r\n    <slot></slot>\r\n\r\n    <span v-if=\"alert\" class=\"new\">{{alert}}</span>\r\n</span>";

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
	var icon_1 = __webpack_require__(27);
	var wave_effect_1 = __webpack_require__(14);
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
	        template: __webpack_require__(29)
	    })], Button);
	    return Button;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Button;
	//# sourceMappingURL=index.js.map

/***/ },
/* 27 */
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
	var template = __webpack_require__(28);
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
	        template: template
	    })], Icon);
	    return Icon;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Icon;
	//# sourceMappingURL=index.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<i class=\"material-icons\"\r\n   :class=\"{right: right, left: left}\">\r\n    <slot></slot>\r\n</i>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"computedClasses\" v-wave-effect>\r\n    <md-icon v-if=\"icon\" :right=\"iconAlignRight\" :left=\"!iconAlignRight\">\r\n        {{icon}}\r\n    </md-icon>\r\n    <slot></slot>\r\n</a>";

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
	var navbar_1 = __webpack_require__(31);
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
	        template: __webpack_require__(37)
	    })], Breadcrumbs);
	    return Breadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Breadcrumbs;
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
	var icon_1 = __webpack_require__(27);
	var sidenav_1 = __webpack_require__(32);
	var template = __webpack_require__(36);
	var DEFAULT_CLASSES = ["hide-on-med-and-down"];
	var Navbar = (function () {
	    function Navbar() {}
	    Object.defineProperty(Navbar.prototype, "logoClasses", {
	        get: function get() {
	            var classes = [];
	            if (this.center) {
	                classes.push("center");
	            } else {
	                if (!this.right) {
	                    classes.push("right");
	                }
	                if (!this.left) {
	                    classes.push("left");
	                }
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Navbar.prototype, "listClasses", {
	        get: function get() {
	            var classes = [];
	            if (this.classes && this.classes.length == 0) {
	                classes = classes.concat(DEFAULT_CLASSES);
	            }
	            if (this.right) {
	                classes.push("right");
	            }
	            if (this.left) {
	                classes.push("left");
	            }
	            return classes;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Navbar.prototype.openSideMenu = function () {
	        var self = this;
	        self.$broadcast('sidenav::open');
	    };
	    Navbar.prototype.closeSideMenu = function () {
	        var self = this;
	        self.$broadcast('sidenav::close');
	    };
	    Navbar = __decorate([vue_class_component_1["default"]({
	        props: {
	            title: {
	                type: String,
	                required: false,
	                "default": ""
	            },
	            classes: {
	                type: Array,
	                required: false,
	                "default": function _default() {
	                    return [];
	                }
	            },
	            right: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            left: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            center: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            fixed: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            bgColor: {
	                type: String,
	                required: false,
	                "default": ""
	            },
	            hamburger: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            closeOnClick: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            onlySideNav: {
	                type: Boolean,
	                required: false,
	                "default": false
	            }
	        },
	        components: {
	            mdIcon: icon_1["default"],
	            mdSidenav: sidenav_1["default"]
	        },
	        events: {
	            'nav-item::clicked': function navItemClicked() {
	                if (this.closeOnClick) {
	                    this.$broadcast('sidenav::close');
	                }
	            }
	        },
	        template: template
	    })], Navbar);
	    return Navbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbar;
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
	var sidenav_overlay_1 = __webpack_require__(33);
	var template = __webpack_require__(35);
	var ESC = 27;
	var SideNav = (function () {
	    function SideNav() {}
	    SideNav.prototype.ready = function () {
	        var _this = this;
	        this.active = this.fixed || this.active;
	        window.document.addEventListener('keydown', function (evt) {
	            evt = evt || window.event;
	            if (evt.keyCode == ESC) {
	                _this.close();
	            }
	        });
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
	            fixed: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'sidenav::open': function sidenavOpen() {
	                this.open();
	                return true;
	            },
	            'sidenav::close': function sidenavClose() {
	                this.close();
	                return true;
	            }
	        },
	        components: {
	            mdSidenavOverlay: sidenav_overlay_1["default"]
	        },
	        template: template
	    })], SideNav);
	    return SideNav;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SideNav;
	//# sourceMappingURL=index.js.map

/***/ },
/* 33 */
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
	var template = __webpack_require__(34);
	var SidenavOverlay = (function () {
	    function SidenavOverlay() {}
	    SidenavOverlay = __decorate([vue_class_component_1["default"]({
	        template: template
	    })], SidenavOverlay);
	    return SidenavOverlay;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SidenavOverlay;
	//# sourceMappingURL=index.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div id=\"sidenav-overlay\"></div>";

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-sidenav\">\r\n    <ul v-if=\"active\" transition=\"side-nav\" :style=\"computedStyle\" :class=\"{fixed: fixed}\" class=\"side-nav\">\r\n        <slot></slot>\r\n    </ul>\r\n\r\n    <div v-if=\"!fixed\" @click=\"close\">\r\n        <md-sidenav-overlay v-if=\"active\" transition=\"modal-overlay\"></md-sidenav-overlay>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'navbar-fixed': fixed}\"\r\n     :style=\"fixed ? {position: 'absolute', top: 0}: {}\"\r\n     class=\"md-navbar\">\r\n\r\n    <nav>\r\n        <div class=\"nav-wrapper\" :class=\"bgColor\">\r\n            <slot name=\"content\">\r\n                <slot name=\"logo\">\r\n                    <a v-if=\"title\"\r\n                       href=\"javascript:void(0)\" class=\"brand-logo\" :class=\"logoClasses\">\r\n                        {{title}}\r\n                    </a>\r\n                    <a v-if=\"hamburger\" href=\"javascript:void(0)\" class=\"button-collapse\"\r\n                       @click=\"openSideMenu\">\r\n                        <md-icon>menu</md-icon>\r\n                    </a>\r\n                </slot>\r\n\r\n                <slot name=\"navs\">\r\n                    <ul v-if=\"!onlySideNav\" :class=\"listClasses\">\r\n                        <slot></slot>\r\n                    </ul>\r\n                    <md-sidenav :close-on-click=\"closeOnClick\"> <!-- only if is active -->\r\n                        <slot></slot>\r\n                    </md-sidenav>\r\n                </slot>\r\n            </slot>\r\n        </div>\r\n    </nav>\r\n</div>\r\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<md-navbar>\r\n    <div slot=\"content\">\r\n        <a v-for=\"(label, url) in list\" :href=\"url\" class=\"breadcrumb\">\r\n            {{label}}\r\n        </a>\r\n    </div>\r\n</md-navbar>";

/***/ },
/* 38 */
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
	var Velocity = __webpack_require__(21);
	var template = __webpack_require__(39);
	var Card = (function () {
	    function Card() {}
	    Card.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Card.prototype.ready = function () {
	        var _this = this;
	        var self = this;
	        var activators = self.$el.querySelectorAll('.activator');
	        Array.prototype.slice.call(activators).forEach(function (activator) {
	            activator.addEventListener('click', _this.open);
	        });
	        var revealClose = self.$els.revealClose;
	        if (revealClose) {
	            revealClose.addEventListener('click', this.close);
	        }
	    };
	    Card.prototype.open = function () {
	        if (!this.active) {
	            this.active = true;
	            var self = this;
	            var reveal = self.$els.reveal;
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
	            var self = this;
	            var reveal = self.$els.reveal;
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
	            var self = this;
	            return 'image' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "titleSlot", {
	        get: function get() {
	            var self = this;
	            return 'title' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "actionsSlot", {
	        get: function get() {
	            var self = this;
	            return 'actions' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Card.prototype, "revealSlot", {
	        get: function get() {
	            var self = this;
	            return 'reveal' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Card = __decorate([vue_class_component_1["default"]({
	        props: {
	            contentClass: {
	                required: false,
	                'default': null
	            },
	            titleInImage: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            small: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            medium: {
	                type: Boolean,
	                required: false,
	                'default': false
	            },
	            large: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], Card);
	    return Card;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Card;
	//# sourceMappingURL=index.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"{overflow: revealSlot ? 'hidden' : 'initial'}\"\r\n     :class=\"{small: small, medium: medium, large: large}\"\r\n     class=\"md-card card\">\r\n    <slot name=\"card-content\">\r\n        <slot name=\"card-image\">\r\n            <div v-if=\"imageSlot\" class=\"card-image\">\r\n                <slot name=\"image\"></slot>\r\n                <div v-if=\"titleSlot && titleInImage\" class=\"card-title\">\r\n                    <slot name=\"title\"></slot>\r\n                </div>\r\n            </div>\r\n        </slot>\r\n\r\n        <div class=\"card-content\" :class=\"contentClass\">\r\n            <div v-if=\"titleSlot && !titleInImage\" class=\"card-title\">\r\n                <slot name=\"title\"></slot>\r\n            </div>\r\n            <slot></slot>\r\n        </div>\r\n\r\n        <slot name=\"card-action\">\r\n            <div v-if=\"actionsSlot\" class=\"card-action\">\r\n                <slot name=\"actions\"></slot>\r\n            </div>\r\n        </slot>\r\n\r\n        <div v-if=\"revealSlot\" v-el:reveal class=\"card-reveal\">\r\n            <i v-el:reveal-close class=\"material-icons right close\">close</i>\r\n            <slot name=\"reveal\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>";

/***/ },
/* 40 */
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
	var input_1 = __webpack_require__(18);
	var bind_boolean_1 = __webpack_require__(9);
	var template = __webpack_require__(41);
	var CheckboxField = (function () {
	    function CheckboxField() {}
	    Object.defineProperty(CheckboxField.prototype, "slot", {
	        get: function get() {
	            return 'default' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        template: template
	    })], CheckboxField);
	    return CheckboxField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-checkbox input-field\">\r\n    <i v-if=\"slotIcon\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-el:field\r\n           :id=\"id\"\r\n           :name=\"resolvedName\"\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           type=\"checkbox\" class=\"field\"/>\r\n    <label v-if=\"slot\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

/***/ },
/* 42 */
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
	var template = __webpack_require__(43);
	var CheckboxGroup = (function () {
	    function CheckboxGroup() {}
	    CheckboxGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true,
	                'default': 'text'
	            }
	        },
	        template: template
	    })], CheckboxGroup);
	    return CheckboxGroup;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CheckboxGroup;
	//# sourceMappingURL=index.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 44 */
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
	var template = __webpack_require__(45);
	var Chip = (function () {
	    function Chip() {}
	    Chip.prototype.data = function () {
	        return {
	            closed: false
	        };
	    };
	    Chip = __decorate([vue_class_component_1["default"]({
	        props: {
	            closeable: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], Chip);
	    return Chip;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Chip;
	//# sourceMappingURL=index.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"!closed\" class=\"chip\" transition=\"chip\">\r\n    <slot></slot>\r\n    <i v-if=\"closeable\"\r\n       @click=\"closed = true\" class=\"material-icons\">close</i>\r\n</div>";

/***/ },
/* 46 */
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
	var template = __webpack_require__(47);
	var CircularPreloader = (function () {
	    function CircularPreloader() {}
	    CircularPreloader = __decorate([vue_class_component_1["default"]({
	        props: {
	            size: {
	                type: String,
	                required: false,
	                'default': ''
	            },
	            color: {
	                type: String,
	                required: false,
	                'default': ''
	            },
	            flashing: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], CircularPreloader);
	    return CircularPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CircularPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"preloader-wrapper active\" :class=\"size\">\r\n    <div v-if=\"!flashing\" class=\"spinner-layer\" :class=\"'spinner-' + color + '-only'\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- flashing -->\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-blue\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-red\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-yellow\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div v-if=\"flashing\" class=\"spinner-layer spinner-green\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 48 */
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
	var collapsible_item_1 = __webpack_require__(49);
	var template = __webpack_require__(51);
	var Collapsible = (function () {
	    function Collapsible() {}
	    Object.defineProperty(Collapsible.prototype, "computedClasses", {
	        get: function get() {
	            if (this.popout) {
	                return ["popout"];
	            } else {
	                return [];
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collapsible = __decorate([vue_class_component_1["default"]({
	        props: {
	            popout: {
	                type: Boolean,
	                required: false,
	                "default": false
	            },
	            expendable: {
	                type: Boolean,
	                required: false,
	                "default": false
	            }
	        },
	        template: template,
	        components: {
	            mdCollapsibleItem: collapsible_item_1["default"]
	        },
	        events: {
	            'collapsible::open': function collapsibleOpen(uid) {
	                // propagate event to children
	                this.$broadcast('collapsible::open', uid, this.expendable);
	            },
	            'collapsible::close': function collapsibleClose(uid) {
	                // propagate event to children
	                this.$broadcast('collapsible::close', uid);
	            }
	        }
	    })], Collapsible);
	    return Collapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collapsible;
	//# sourceMappingURL=index.js.map

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
	var events_1 = __webpack_require__(17);
	var template = __webpack_require__(50);
	var Velocity = __webpack_require__(21);
	var CollapsibleItem = (function () {
	    function CollapsibleItem() {}
	    CollapsibleItem.prototype.ready = function () {
	        this.active = this.expanded;
	    };
	    CollapsibleItem.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
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
	    Object.defineProperty(CollapsibleItem.prototype, "_body", {
	        get: function get() {
	            var self = this;
	            return self.$els.body;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.openThis = function () {
	        var _this = this;
	        if (!this.active) {
	            this.active = true;
	            this.onNextTick(function () {
	                Velocity(_this._body, 'slideDown', _this._slideConfig);
	            });
	        }
	    };
	    Object.defineProperty(CollapsibleItem.prototype, "_slideConfig", {
	        get: function get() {
	            var self = this;
	            return {
	                duration: 350,
	                easing: "easeOutQuart",
	                queue: false,
	                complete: function complete() {
	                    self._body.style.height = '';
	                }
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsibleItem.prototype.open = function (uid, expendable) {
	        if (uid === null) {
	            this.openThis();
	        } else {
	            if (uid == this._uid) {
	                this.openThis();
	            } else {
	                if (!expendable) {
	                    this.closeThis();
	                }
	            }
	        }
	    };
	    CollapsibleItem.prototype.closeThis = function () {
	        var _this = this;
	        if (this.active) {
	            this.active = false;
	            this.onNextTick(function () {
	                _this._body.style.display = 'block';
	                Velocity(_this._body, 'slideUp', _this._slideConfig);
	            });
	        }
	    };
	    CollapsibleItem.prototype.close = function (uid) {
	        if (uid === null) {
	            this.closeThis();
	        } else {
	            if (uid == this._uid) {
	                this.closeThis();
	            }
	        }
	    };
	    CollapsibleItem.prototype.toggle = function () {
	        var self = this;
	        if (self.active) {
	            self.$dispatch('collapsible::close', this._uid);
	        } else {
	            self.$dispatch('collapsible::open', this._uid);
	        }
	    };
	    CollapsibleItem.prototype.onNextTick = function (callback) {
	        var self = this;
	        self.$nextTick(callback);
	    };
	    CollapsibleItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            expanded: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template,
	        mixins: [events_1["default"]],
	        events: {
	            'collapsible::open': function collapsibleOpen(uid, expendable) {
	                this.open(uid, expendable);
	            },
	            'collapsible::close': function collapsibleClose(uid) {
	                this.close(uid);
	            }
	        }
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
/***/ function(module, exports) {

	module.exports = "<ul class=\"collapsible\" :class=\"computedClasses\">\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 52 */
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
	var template = __webpack_require__(53);
	var mdCollectionItem = __webpack_require__(54);
	var Collection = (function () {
	    function Collection() {}
	    Object.defineProperty(Collection.prototype, "headerSlot", {
	        get: function get() {
	            var self = this;
	            return 'header' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Collection = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollectionItem: mdCollectionItem
	        }
	    })], Collection);
	    return Collection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</div>";

/***/ },
/* 54 */
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
	var template = __webpack_require__(55);
	var CollectionItem = (function () {
	    function CollectionItem() {}
	    Object.defineProperty(CollectionItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            var self = this;
	            return 'secondary-content' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], CollectionItem);
	    return CollectionItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<a class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</a>";

/***/ },
/* 56 */
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
	var template = __webpack_require__(57);
	var CollectionList = (function () {
	    function CollectionList() {}
	    Object.defineProperty(CollectionList.prototype, "headerSlot", {
	        get: function get() {
	            var self = this;
	            return 'header' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionList = __decorate([vue_class_component_1["default"]({
	        template: template
	    })], CollectionList);
	    return CollectionList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"collection\" :class=\"{'with-header': headerSlot}\">\r\n    <div v-if=\"headerSlot\" class=\"collection-header\">\r\n        <slot name=\"header\"></slot>\r\n    </div>\r\n    <slot></slot>\r\n</ul>";

/***/ },
/* 58 */
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
	var template = __webpack_require__(59);
	var CollectionListItem = (function () {
	    function CollectionListItem() {}
	    Object.defineProperty(CollectionListItem.prototype, "secondaryContentSlot", {
	        get: function get() {
	            var self = this;
	            return 'secondary-content' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionListItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], CollectionListItem);
	    return CollectionListItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CollectionListItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<li class=\"md-collection-item collection-item\" :class=\"{active: active}\">\r\n    <slot></slot>\r\n    <span v-if=\"secondaryContentSlot\" class=\"secondary-content\">\r\n        <slot name=\"secondary-content\"></slot>\r\n    </span>\r\n</li>";

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
	var button_1 = __webpack_require__(26);
	var dropdown_list_1 = __webpack_require__(61);
	var dropdown_item_1 = __webpack_require__(62);
	var click_away_1 = __webpack_require__(11);
	var template = __webpack_require__(65);
	/**
	 * Todo: open to top on bootom of page
	 */
	var Dropdown = (function () {
	    function Dropdown() {}
	    Dropdown.prototype.open = function (e) {
	        var self = this;
	        self.$broadcast("dropdown::open", e);
	    };
	    Dropdown.prototype.close = function () {
	        var self = this;
	        self.$broadcast("dropdown::close");
	    };
	    Dropdown = __decorate([vue_class_component_1["default"]({
	        props: {
	            /**
	             * Label of button
	             */
	            title: {
	                type: String,
	                required: false,
	                "default": ""
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
	            "dropdown::close": function dropdownClose() {
	                // propagate event to children
	                this.$broadcast("dropdown::close");
	            }
	        },
	        template: template
	    })], Dropdown);
	    return Dropdown;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdown;
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
	var button_1 = __webpack_require__(26);
	var dropdown_item_1 = __webpack_require__(62);
	var click_away_1 = __webpack_require__(11);
	var template = __webpack_require__(64);
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
	        var offset = this.offset(element);
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
	    DropdownList.prototype.offset = function (element) {
	        var top = 0,
	            left = 0;
	        // do {
	        //     top += element.offsetTop  || 0;
	        //     left += element.offsetLeft || 0;
	        //     element = element.offsetParent;
	        // } while(element);
	        return {
	            top: element.offsetTop,
	            left: element.offsetLeft
	        };
	    };
	    DropdownList = __decorate([vue_class_component_1["default"]({
	        components: {
	            mbButton: button_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        },
	        directives: {
	            onClickAway: click_away_1["default"]
	        },
	        events: {
	            "dropdown::close": function dropdownClose() {
	                this.hide();
	            },
	            "dropdown::open": function dropdownOpen(e) {
	                this.open(e);
	            }
	        },
	        template: template
	    })], DropdownList);
	    return DropdownList;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownList;
	//# sourceMappingURL=index.js.map

/***/ },
/* 62 */
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
	var template = __webpack_require__(63);
	var DropdownItem = (function () {
	    function DropdownItem() {}
	    DropdownItem.prototype.data = function () {
	        return {};
	    };
	    DropdownItem.prototype.closeIfEnable = function () {
	        if (this.closing) {
	            var self = this;
	            self.$dispatch("dropdown::close");
	        }
	    };
	    DropdownItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            closing: {
	                type: Boolean,
	                required: false,
	                "default": true
	            }
	        },
	        template: template
	    })], DropdownItem);
	    return DropdownItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"closeIfEnable\">\r\n    <a href=\"javascript:void(0)\">\r\n        <slot></slot>\r\n    </a>\r\n</li>";

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
	var template = __webpack_require__(67);
	var EventWrapper = (function () {
	    function EventWrapper() {}
	    EventWrapper.prototype.ready = function () {
	        var self = this;
	        this.events.forEach(function (event) {
	            self.$on(event, function () {
	                var args = [event].concat(Array.prototype.slice.call(arguments));
	                self.$broadcast.apply(self, args);
	                // self.$broadcast(event, arguments);
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
	        template: template
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
	var button_1 = __webpack_require__(26);
	var icon_1 = __webpack_require__(27);
	var Velocity = __webpack_require__(21);
	var template = __webpack_require__(69);
	var Fab = (function () {
	    function Fab() {}
	    Fab.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Fab.prototype.ready = function () {
	        var self = this;
	        if (this.event == 'hover') {
	            self.$els.fab.addEventListener('mouseenter', this.open);
	            self.$els.fab.addEventListener('mouseleave', this.close);
	        } else {
	            self.$els.fab.addEventListener(this.event, this.toggle);
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
	            var self = this;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(self.$el.querySelectorAll('ul .btn-floating'));
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
	            var self = this;
	            var offsetY, offsetX;
	            if (this.horizontal) {
	                offsetX = 40;
	            } else {
	                offsetY = 40;
	            }
	            var items = Array.prototype.slice.call(self.$el.querySelectorAll('ul .btn-floating'));
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
	        template: template
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
	var input_1 = __webpack_require__(18);
	var bind_boolean_1 = __webpack_require__(9);
	var bind_raw_1 = __webpack_require__(10);
	var template = __webpack_require__(71);
	var FileInputField = (function () {
	    function FileInputField() {}
	    FileInputField.prototype.data = function () {
	        return {
	            fileName: ''
	        };
	    };
	    Object.defineProperty(FileInputField.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FileInputField.prototype.selectFile = function (e) {
	        var _this = this;
	        this.fileName = Array.prototype.slice.call(e.target.files).map(function (f) {
	            return f.name;
	        }).join(', ');
	        this.$nextTick(function () {
	            _this.fireEvent(_this.field, 'change');
	        });
	    };
	    FileInputField = __decorate([vue_class_component_1["default"]({
	        props: {
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
	            bindBoolean: bind_boolean_1["default"],
	            bindRaw: bind_raw_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: template
	    })], FileInputField);
	    return FileInputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FileInputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"file-field input-field\">\r\n    <div class=\"btn\">\r\n        <slot name=\"label\">\r\n            <span>File</span>\r\n        </slot>\r\n        <input @change=\"selectFile\" :name=\"name\"\r\n               v-bind-boolean:multiple=\"multiple\" type=\"file\">\r\n    </div>\r\n    <div class=\"file-path-wrapper\">\r\n        <input v-el:field\r\n               v-bind-raw:value=\"fileName\"\r\n               :placeholder=\"placeholder\"\r\n               class=\"file-path field\" type=\"text\">\r\n    </div>\r\n</div>";

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
	var input_1 = __webpack_require__(18);
	var template = __webpack_require__(73);
	var InputField = (function () {
	    function InputField() {}
	    InputField.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    InputField.prototype.ready = function () {
	        this.setupDisabled();
	        this.refreshValue();
	    };
	    Object.defineProperty(InputField.prototype, "field", {
	        get: function get() {
	            var self = this;
	            return self.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputField.prototype, "slot", {
	        get: function get() {
	            return 'default' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InputField.prototype, "slotIcon", {
	        get: function get() {
	            return 'icon-name' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	    InputField.prototype.refreshValue = function () {
	        this.value = this.$els.field.value;
	    };
	    InputField.prototype.setActive = function (val) {
	        this.active = val;
	    };
	    InputField.prototype.activateField = function () {
	        this.active = true;
	    };
	    InputField.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    InputField.prototype.setupDisabled = function () {
	        if (!this.disabled) {
	            this.field.addEventListener('focus', this.activateField);
	            this.field.addEventListener('blur', this.deactivateField);
	            this.field.removeAttribute('disabled');
	        } else {
	            this.field.removeEventListener('focus', this.activateField);
	            this.field.removeEventListener('blur', this.deactivateField);
	            this.field.setAttribute('disabled', 'disabled');
	        }
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
	                'default': null
	            },
	            disabled: {
	                type: Boolean,
	                required: false,
	                'default': null
	            },
	            type: {
	                type: String,
	                required: false,
	                'default': 'text'
	            }
	        },
	        mixins: [input_1["default"]],
	        template: template
	    })], InputField);
	    return InputField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-field\">\r\n    <i v-if=\"slotIcon\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <input v-el:field\r\n           @change=\"refreshValue\"\r\n           :placeholder=\"placeholder\" :id=\"id\"\r\n           :type=\"type\" class=\"field\"/>\r\n    <label v-if=\"slot\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

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
	var template = __webpack_require__(75);
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
	        template: template
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
	var input_1 = __webpack_require__(18);
	var template = __webpack_require__(77);
	var SelectOption = (function () {
	    function SelectOption() {}
	    SelectOption.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Object.defineProperty(SelectOption.prototype, "multiple", {
	        get: function get() {
	            return this.$parent.$data.multiple;
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
	    SelectOption.prototype.setSelected = function (value, values) {
	        if (!this.multiple) {
	            this.active = this.value == value;
	        } else if (values) {
	            this.active = values.indexOf(this.value) >= 0;
	        }
	    };
	    SelectOption.prototype.unselect = function () {
	        if (this.active && !this.disabled && this.multiple) {
	            this.active = false;
	            this.$dispatch('select::unselect', this.value, this);
	        }
	    };
	    SelectOption.prototype.unsetSelected = function (value) {
	        if (this.multiple && this.value == value) {
	            this.active = false;
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
	                required: true
	            }
	        },
	        events: {
	            'option::select': function optionSelect(value, values) {
	                this.setSelected(value, values);
	            },
	            'option::unselect': function optionUnselect(value) {
	                this.unsetSelected(value);
	            }
	        },
	        directives: {
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: template
	    })], SelectOption);
	    return SelectOption;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectOption;
	//# sourceMappingURL=index.js.map

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<li @click.prevent=\"toggle\" :class=\"computedClasses\">\r\n    <span>\r\n        <input v-el:field\r\n               v-show=\"multiple\" v-model=\"active\"\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               type=\"checkbox\">\r\n        <label v-if=\"multiple\"></label>\r\n        <slot></slot>\r\n    </span>\r\n</li>";

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
	var input_1 = __webpack_require__(18);
	var template = __webpack_require__(79);
	var Radio = (function () {
	    function Radio() {}
	    Object.defineProperty(Radio.prototype, "checked", {
	        get: function get() {
	            return this.radiosValue == this.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "radiosValue", {
	        get: function get() {
	            return this.field.__v_model._watcher.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "field", {
	        get: function get() {
	            return this.$els.field;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "slot", {
	        get: function get() {
	            return 'default' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Radio.prototype, "group", {
	        get: function get() {
	            return this.$parent.$data.group;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Radio = __decorate([vue_class_component_1["default"]({
	        props: {
	            value: {
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
	        template: template
	    })], Radio);
	    return Radio;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radio;
	//# sourceMappingURL=index.js.map

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<span class=\"md-radio\">\r\n    <input v-el:field\r\n           v-bind-boolean:disabled=\"disabled\"\r\n           v-bind-boolean:checked=\"checked\"\r\n           :id=\"id\" :name=\"group\" value=\"\" v-bind-raw:value=\"value\"\r\n           type=\"radio\" class=\"field\"/>\r\n    <label v-if=\"slot\" :for=\"id\">\r\n        <slot></slot>\r\n    </label>\r\n</span>";

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
	var template = __webpack_require__(81);
	var RadioGroup = (function () {
	    function RadioGroup() {}
	    RadioGroup = __decorate([vue_class_component_1["default"]({
	        props: {
	            group: {
	                type: String,
	                required: true,
	                'default': 'text'
	            }
	        },
	        template: template
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
	var dropdown_list_1 = __webpack_require__(61);
	var input_1 = __webpack_require__(18);
	var slot_1 = __webpack_require__(13);
	var click_away_1 = __webpack_require__(11);
	var bind_boolean_1 = __webpack_require__(9);
	var Vue = __webpack_require__(1);
	var template = __webpack_require__(83);
	function getValue(el, multi, init) {
	    var res = multi ? [] : null;
	    var op, val, selected;
	    for (var i = 0, l = el.options.length; i < l; i++) {
	        op = el.options[i];
	        selected = init ? op.hasAttribute('selected') : op.selected;
	        if (selected) {
	            val = op.hasOwnProperty('_value') ? op._value : op.value;
	            if (multi) {
	                res.push(val);
	            } else {
	                return val;
	            }
	        }
	    }
	    return res;
	}
	var SelectField = (function () {
	    function SelectField() {}
	    SelectField.prototype.data = function () {
	        return {
	            active: false,
	            valueSingle: null,
	            valueMultiple: [],
	            options: {}
	        };
	    };
	    SelectField.prototype.ready = function () {
	        var _this = this;
	        var options = this.$getAllChildren().filter(function (c) {
	            return 'SelectOption' == c.$options.name;
	        });
	        for (var i = 0; i < options.length; i++) {
	            var option = options[i];
	            var opt = this.createOption(option);
	            Vue.set(this.options, opt.value, opt);
	        }
	        this.$nextTick(function () {
	            _this.refreshValue();
	            _this.refreshOptions();
	        });
	    };
	    SelectField.prototype.createOption = function (option) {
	        var content = option._slotContents["default"];
	        var value = option.$data.value;
	        var disabled = option.$data.disabled;
	        return {
	            content: content.textContent,
	            value: value,
	            disabled: disabled
	        };
	    };
	    Object.defineProperty(SelectField.prototype, "value", {
	        get: function get() {
	            return this.multiple ? this.valueMultiple : this.valueSingle;
	        },
	        set: function set(value) {
	            if (this.multiple) {
	                this.valueMultiple = value;
	            } else {
	                this.valueSingle = value.length ? value[0] : value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContent", {
	        get: function get() {
	            return this.multiple ? this.valueContentMultiple : this.valueContentSingle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentSingle", {
	        get: function get() {
	            return this.options[this.valueSingle] ? this.options[this.valueSingle].content : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "valueContentMultiple", {
	        get: function get() {
	            var _this = this;
	            if (this.valueMultiple.length) {
	                return this.valueMultiple.map(function (value) {
	                    return _this.options[value] ? _this.options[value].content : '';
	                }).join(', ');
	            } else {
	                return this.options[this.defaultSelect] ? this.options[this.defaultSelect].content : '';
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectField.prototype, "labelSlot", {
	        get: function get() {
	            var self = this;
	            return 'label' in self._slotContents;
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
	    SelectField.prototype.open = function (e) {
	        if (!this.active) {
	            this.active = true;
	            this.$broadcast('dropdown::open', e);
	        }
	    };
	    SelectField.prototype.close = function () {
	        if (this.active) {
	            this.active = false;
	            this.$broadcast('dropdown::close');
	        }
	    };
	    SelectField.prototype.setSelected = function (value) {
	        var _this = this;
	        (this.multiple ? this.setSelectedMultiple : this.setSelectedSingle)(value);
	        this.$broadcast('option::select', value);
	        this.$nextTick(function () {
	            _this.fireEvent(_this.field, 'change');
	        });
	    };
	    SelectField.prototype.setSelectedSingle = function (value) {
	        this.valueSingle = value;
	        this.selectOptionSingle(value);
	        this.close();
	    };
	    SelectField.prototype.selectOptionSingle = function (value) {
	        Array.prototype.slice.call(this.$els.field.options).forEach(function (o) {
	            o.selected = value == o.value;
	        });
	    };
	    SelectField.prototype.setSelectedMultiple = function (value) {
	        this.valueMultiple.push(value);
	        this.selectOptionMultiple(value);
	    };
	    SelectField.prototype.selectOptionMultiple = function (value) {
	        Array.prototype.slice.call(this.$els.field.options).forEach(function (o) {
	            if (value == o.value) {
	                o.selected = true;
	            }
	        });
	    };
	    SelectField.prototype.unsetSelected = function (value) {
	        var _this = this;
	        (this.multiple ? this.unsetSelectedMultiple : this.unsetSelectedSingle)(value);
	        this.$broadcast('option::unselect', value);
	        this.$nextTick(function () {
	            _this.fireEvent(_this.field, 'change');
	        });
	    };
	    SelectField.prototype.unsetSelectedSingle = function () {
	        this.valueSingle = null;
	    };
	    SelectField.prototype.unsetSelectedMultiple = function (value) {
	        this.valueMultiple.$remove(value);
	        this.unsetOptionMultiple(value);
	    };
	    SelectField.prototype.unsetOptionMultiple = function (value) {
	        Array.prototype.slice.call(this.$els.field.options).forEach(function (o) {
	            if (value == o.value) {
	                o.selected = false;
	            }
	        });
	    };
	    SelectField.prototype.refreshValue = function () {
	        this.value = Array.prototype.slice.call(this.$els.field.selectedOptions).map(function (o) {
	            return o.value;
	        });
	    };
	    SelectField.prototype.refreshOptions = function () {
	        var _this = this;
	        Array.prototype.slice.call(this.$els.field.selectedOptions).forEach(function (o) {
	            _this.$broadcast('option::select', o.value, _this.value);
	        });
	    };
	    SelectField = __decorate([vue_class_component_1["default"]({
	        props: {
	            multiple: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        events: {
	            'select::select': function selectSelect(value, option) {
	                this.setSelected(value, option);
	            },
	            'select::unselect': function selectUnselect(value, option) {
	                this.unsetSelected(value, option);
	            }
	        },
	        components: {
	            mdDropdownList: dropdown_list_1["default"]
	        },
	        directives: {
	            slot: slot_1["default"],
	            clickAway: click_away_1["default"],
	            bindBoolean: bind_boolean_1["default"]
	        },
	        mixins: [input_1["default"]],
	        template: template
	    })], SelectField);
	    return SelectField;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SelectField;
	//# sourceMappingURL=index.js.map

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-select input-field\" v-click-away=\"close\">\r\n    <i v-if=\"slotIcon\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n\r\n    <div class=\"select-wrapper\">\r\n\r\n        <span class=\"caret\">▼</span>\r\n        <input @click=\"open\" readonly=\"readonly\" :value=\"valueContent\"\r\n               type=\"text\" class=\"select-dropdown\">\r\n\r\n        <md-dropdown-list :active=\"active\" class=\"select-dropdown\">\r\n            <slot></slot>\r\n        </md-dropdown-list>\r\n\r\n        <select v-el:field\r\n                @change=\"refreshValue\"\r\n                v-bind-boolean:multiple=\"multiple\"\r\n                :placeholder=\"placeholder\" :id=\"id\"\r\n                :type=\"type\" class=\"field\">\r\n            <option v-for=\"opt in options\" :value=\"opt.value\" v-bind-boolean:disabled=\"opt.disabled\">{{opt.content}}</option>\r\n        </select>\r\n    </div>\r\n    <label v-if=\"labelSlot\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot name=\"label\"></slot>\r\n    </label>\r\n</div>";

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
	var input_1 = __webpack_require__(18);
	var Velocity = __webpack_require__(21);
	var template = __webpack_require__(85);
	var TextArea = (function () {
	    function TextArea() {}
	    TextArea.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    TextArea.prototype.ready = function () {
	        this.setupDisabled();
	    };
	    Object.defineProperty(TextArea.prototype, "slot", {
	        get: function get() {
	            var self = this;
	            return 'default' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextArea.prototype, "slotIcon", {
	        get: function get() {
	            var self = this;
	            return 'icon-name' in self._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	            var self = this;
	            return self.$el.querySelector('.field');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextArea.prototype.setActive = function (val) {
	        this.active = val;
	    };
	    TextArea.prototype.resize = function (lines, oldLines) {
	        var styles = window.getComputedStyle(this.field);
	        var paddingVertical = parseInt(styles.getPropertyValue('padding-bottom')) + parseInt(styles.getPropertyValue('padding-top'));
	        if (lines < oldLines) {
	            this.field.style.height = 'auto';
	        }
	        Velocity(this.field, { height: this.field.scrollHeight - paddingVertical }, {
	            duration: 10
	        });
	    };
	    TextArea.prototype.delayedResize = function (lines, oldLines) {
	        var _this = this;
	        window.setTimeout(function () {
	            _this.resize(lines, oldLines);
	        }, 0);
	    };
	    TextArea.prototype.activateField = function () {
	        this.active = true;
	    };
	    TextArea.prototype.deactivateField = function () {
	        this.active = false;
	    };
	    TextArea.prototype.setupDisabled = function () {
	        if (!this.disabled) {
	            this.field.addEventListener('focus', this.activateField);
	            this.field.addEventListener('blur', this.deactivateField);
	            this.field.removeAttribute('disabled');
	        } else {
	            this.field.removeEventListener('focus', this.activateField);
	            this.field.removeEventListener('blur', this.deactivateField);
	            this.field.setAttribute('disabled', 'disabled');
	        }
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
	                'default': null
	            },
	            autoresize: {
	                type: Boolean,
	                required: false,
	                'default': true
	            }
	        },
	        watch: {
	            disabled: function disabled() {
	                this.setupDisabled();
	            },
	            value: function value(lines, oldLines) {
	                this.delayedResize(lines, oldLines);
	            }
	        },
	        mixins: [input_1["default"]],
	        template: template
	    })], TextArea);
	    return TextArea;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = TextArea;
	//# sourceMappingURL=index.js.map

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<div class=\"md-textarea input-field\">\r\n    <i v-if=\"slotIcon\" class=\"material-icons prefix\">\r\n        <slot name=\"icon-name\"></slot>\r\n    </i>\r\n    <textarea v-el:field\r\n              v-model=\"value\"\r\n              :id=\"id\" class=\"materialize-textarea field\">\r\n    </textarea>\r\n    <label v-if=\"slot\" :for=\"id\" :class=\"labelClasses\">\r\n        <slot></slot>\r\n    </label>\r\n</div>";

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
	var template = __webpack_require__(90);
	var ESC = 27;
	var Image = (function () {
	    function Image() {}
	    Image.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Image.prototype.ready = function () {
	        var self = this;
	        var img = self.$els.img;
	        var placeholder = self.$els.placeholder;
	        this.materialBox = new materialbox_1["default"](img, placeholder);
	        // Return on ESC
	        window.addEventListener('keyup', function (e) {
	            if (e.keyCode === ESC) {
	                self.close();
	            }
	        });
	    };
	    Image.prototype.compiled = function () {
	        var self = this;
	        // todo: remove hack webpack img src loading
	        self.$els.img.setAttribute('src', this.src);
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
	        var self = this;
	        var el = self.$els.img;
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
	                required: true
	            },
	            caption: {
	                type: String,
	                required: false,
	                "default": null
	            },
	            height: {
	                type: String,
	                required: false,
	                "default": null
	            },
	            width: {
	                type: String,
	                required: false,
	                "default": null
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        template: template
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
	var Velocity = __webpack_require__(21);
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
	var template = __webpack_require__(89);
	var LeanOverlay = (function () {
	    function LeanOverlay() {}
	    LeanOverlay = __decorate([vue_class_component_1["default"]({
	        template: template
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

	module.exports = "<div class=\"md-image\">\r\n    <div v-el:placeholder class=\"material-placeholder\">\r\n        <img @click=\"toggle\" :height=\"height\" :width=\"width\"\r\n             v-el:img\r\n             class=\"materialboxed\"\r\n             :class=\"{active: active}\">\r\n    </div>\r\n\r\n    <md-lean-overlay v-if=\"active\" @click=\"toggle\" transition=\"modal-overlay\"></md-lean-overlay>\r\n    <div v-if=\"active && caption\" transition=\"fade\" class=\"materialbox-caption\" style=\"display: block\">\r\n        {{caption}}\r\n    </div>\r\n</div>\r\n";

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
	var template = __webpack_require__(92);
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
	                required: false,
	                'default': null
	            }
	        },
	        template: template
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
	// todo better animation   
	var vue_class_component_1 = __webpack_require__(6);
	var lean_overlay_1 = __webpack_require__(88);
	var template = __webpack_require__(94);
	var ESC = 27;
	var Modal = (function () {
	    function Modal() {}
	    Modal.prototype.data = function () {
	        return {
	            active: false
	        };
	    };
	    Modal.prototype.ready = function () {
	        var self = this;
	        window.document.addEventListener('keydown', function (evt) {
	            evt = evt || window.event;
	            if (evt.keyCode == ESC) {
	                self.close();
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
	        }
	    };
	    Modal = __decorate([vue_class_component_1["default"]({
	        props: {
	            "class": {
	                type: String,
	                required: false,
	                "default": ""
	            },
	            bottom: {
	                type: Boolean,
	                required: false,
	                "default": false
	            }
	        },
	        components: {
	            mdLeanOverlay: lean_overlay_1["default"]
	        },
	        events: {
	            'modal::open': function modalOpen() {
	                this.open();
	            },
	            'modal::close': function modalClose() {
	                this.close();
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
	        template: template
	    })], Modal);
	    return Modal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"active\" :transition=\"transition\"\r\n     :style=\"computedStyle\" class=\"modal\" :class=\"computedClasses\">\r\n    <slot name=\"content\">\r\n        <div class=\"modal-content\">\r\n            <slot></slot>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <slot name=\"footer\"></slot>\r\n        </div>\r\n    </slot>\r\n</div>\r\n\r\n<md-lean-overlay v-if=\"active\" transition=\"modal-overlay\"\r\n              @click=\"close\">\r\n</md-lean-overlay>";

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
	var template = __webpack_require__(96);
	var NavItem = (function () {
	    function NavItem() {}
	    NavItem.prototype.click = function () {
	        var self = this;
	        self.$dispatch('nav-item::clicked');
	    };
	    NavItem = __decorate([vue_class_component_1["default"]({
	        props: {
	            href: {
	                type: String,
	                required: false,
	                'default': ''
	            },
	            active: {
	                type: Boolean,
	                required: false,
	                'default': false
	            }
	        },
	        template: template
	    })], NavItem);
	    return NavItem;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = NavItem;
	//# sourceMappingURL=index.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<li @click=\"click\" :class=\"{active: active}\">\r\n    <slot name=\"content\">\r\n        <a v-if=\"href\" :href=\"href\">\r\n            <slot></slot>\r\n        </a>\r\n    </slot>\r\n</li>";

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
	var icon_1 = __webpack_require__(27);
	var wave_effect_1 = __webpack_require__(14);
	var template = __webpack_require__(98);
	var Utils = (function () {
	    function Utils() {}
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
	var Pagination = (function () {
	    function Pagination() {}
	    Pagination.prototype.data = function () {
	        return {
	            currentPage: 0 // starts with 0
	        };
	    };
	    Object.defineProperty(Pagination.prototype, "pages", {
	        get: function get() {
	            return Math.max(Math.ceil(this.totalRecords / this.pageSize), 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pagination.prototype, "pager", {
	        get: function get() {
	            return Utils.generatePagination(this);
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
	            pageSize: {
	                type: Number,
	                required: true
	            },
	            totalRecords: {
	                type: Number,
	                required: true
	            },
	            displayPages: {
	                type: Number,
	                required: false,
	                'default': 5
	            },
	            itemClass: {
	                required: false,
	                'default': null
	            },
	            firstLast: {
	                type: Boolean,
	                required: false,
	                'default': false
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
	        template: template
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
	var VueModule = __webpack_require__(1);
	var vue = VueModule;
	var template = __webpack_require__(100);
	var Slide = (function () {
	    function Slide() {}
	    Slide.prototype.compiled = function () {
	        var self = this;
	        // todo: remove hack webpack img src loading
	        self.$els.img.setAttribute('src', this.img);
	    };
	    Slide.prototype.ready = function () {
	        this._setClasses(this.active);
	    };
	    Slide.prototype.data = function () {
	        var self = this;
	        var position = self.$parent.$children.indexOf(this);
	        return {
	            active: false,
	            position: position,
	            classes: {}
	        };
	    };
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
	        vue.set(this.classes, 'active', val);
	        vue.set(this.classes, 'fadeIn', val);
	        vue.set(this.classes, 'fadeOut', !val);
	    };
	    Slide = __decorate([vue_class_component_1["default"]({
	        props: {
	            img: {
	                type: String,
	                required: true
	            },
	            align: {
	                type: String,
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
	        template: template
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
	var template = __webpack_require__(102);
	var Slider = (function () {
	    function Slider() {}
	    Slider.prototype.data = function () {
	        return {
	            activeItem: 0,
	            itemsCount: 0
	        };
	    };
	    Slider.prototype.ready = function () {
	        var self = this;
	        self.$broadcast('slider::activate', this.activeItem);
	        this.interval = this.interval ? this.interval : 4000;
	        this.itemsCount = self.$children.length;
	        this.setupInterval();
	    };
	    Slider.prototype.handler = function () {
	        var self = this;
	        if (self.$children) {
	            this.activeItem = (this.activeItem + 1) % this.itemsCount;
	            self.$broadcast('slider::activate', this.activeItem);
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
	        var self = this;
	        self.$broadcast('slider::activate', index);
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
	        template: template
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
	var input_1 = __webpack_require__(18);
	var bind_boolean_1 = __webpack_require__(9);
	var template = __webpack_require__(104);
	var Switch = (function () {
	    function Switch() {}
	    Object.defineProperty(Switch.prototype, "slotOn", {
	        get: function get() {
	            return 'on' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Switch.prototype, "slotOff", {
	        get: function get() {
	            return 'off' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Switch = __decorate([vue_class_component_1["default"]({
	        props: {
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
	        template: template
	    })], Switch);
	    return Switch;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Switch;
	//# sourceMappingURL=index.js.map

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\r\n    <label>\r\n        <slot name=\"off\">Off</slot>\r\n        <input v-el:field\r\n               v-bind-boolean:disabled=\"disabled\"\r\n               type=\"checkbox\" class=\"field\">\r\n        <span class=\"lever\"></span>\r\n        <slot name=\"on\">On</slot>\r\n    </label>\r\n</div>";

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
	var template = __webpack_require__(106);
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
	            var self = this;
	            return self.$parent.$children.indexOf(this);
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
	        var self = this;
	        var hash = window.location.hash;
	        var el = self.$el;
	        var anchors = el.getElementsByTagName("a");
	        for (var i = 0; i < anchors.length; i++) {
	            var a = anchors[i];
	            if (hash == a.getAttribute("href")) {
	                this.setAsSelected();
	            }
	        }
	    };
	    Tab.prototype.setAsSelected = function () {
	        if (!this.disabled) {
	            var self = this;
	            self.$dispatch('tabs::on-select', this);
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
	                "default": false
	            },
	            name: {
	                type: String,
	                required: false,
	                "default": null
	            }
	        },
	        events: {
	            'tab::select': function tabSelect(id) {
	                this.select(id);
	            }
	        },
	        template: template
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
	var Velocity = __webpack_require__(21);
	var template = __webpack_require__(108);
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
	    Tabs.prototype.ready = function () {
	        if (this.active) {
	            this.$broadcast('tab::select', this.active);
	        }
	    };
	    Tabs.prototype.select = function (tab) {
	        this.active = tab.id;
	        var target = tab.$el;
	        var parent = target.parentElement;
	        this.moveIndicator(this.indicator.left, target.offsetLeft, this.indicator.right, parent.offsetWidth - target.offsetLeft - target.offsetWidth);
	        return true;
	    };
	    Tabs.prototype.moveIndicator = function (left, newLeft, right, newRight) {
	        var self = this;
	        var indicator = self.$els.indicator;
	        // Update indicator
	        if (newLeft - left >= 0) {
	            Velocity(indicator, { "right": newRight }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { "left": newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        } else {
	            Velocity(indicator, { "left": newLeft }, { duration: 300, queue: false, easing: 'easeOutQuad' });
	            Velocity(indicator, { "right": newRight }, { duration: 300, queue: false, easing: 'easeOutQuad', delay: 90 });
	        }
	    };
	    Tabs = __decorate([vue_class_component_1["default"]({
	        props: {
	            active: {
	                required: false,
	                'default': null
	            }
	        },
	        events: {
	            'tabs::on-select': function tabsOnSelect(tab) {
	                this.select(tab);
	                return true;
	            }
	        },
	        template: template
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

	module.exports = "<div class=\"home-page\" v-cloak>\r\n    <div class=\"row\">\r\n        <div class=\"col s10 m10 l10 offset-s1 offset-m1 offset-l1\">\r\n            <md-collapsible>\r\n                <md-collapsible-item>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>style</md-icon>\r\n                        CSS\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Color\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/color.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Grid\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/grid.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Helpers\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/helpers.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Media\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/media-css.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Sass\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/sass.html\"></>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Shadow\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/shadow.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Table\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/table.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Typography\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/typography.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n\r\n            <md-collapsible>\r\n                <md-collapsible-item expanded>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>code</md-icon>\r\n                        Components\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Badges\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/badges'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/badges.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Buttons\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/buttons'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/buttons.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Breadcrumbs\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/breadcrumbs'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/breadcrumbs.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Cards\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/cards'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/cards.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Chips\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/chips'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/chips.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Collections\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/collections'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/collections.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Footer\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/footer.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Forms\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/forms'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/forms.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Icons\r\n                            <span slot=\"secondary-content\">\r\n                                <materialize-logo href=\"http://materializecss.com/icons.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Navbar\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/navbars'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/navbar.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Pagination\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/pagination'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/pagination.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Preloader\r\n                            <span slot=\"secondary-content\">\r\n                                <vue-logo v-link=\"{path: '/preloaders'}\"></vue-logo>\r\n                                <materialize-logo href=\"http://materializecss.com/preloader.html\"></materialize-logo>\r\n                            </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n            <md-collapsible>\r\n                <md-collapsible-item expanded>\r\n                    <div slot=\"header\">\r\n                        <md-icon left>settings_ethernet</md-icon>\r\n                        Javascript\r\n                        <md-icon right class=\"caret secondary-content\">swap_vert</md-icon>\r\n                    </div>\r\n                    <div slot=\"body\">\r\n                        <md-collection-list>\r\n                            <md-collection-list-item>\r\n                                Collapsible\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/collapsibles'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/collapsible.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Dialogs\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/dialogs'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/dialogs.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Dropdown\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/dropdowns'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/dropdown.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Media\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/media'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/media.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Modals\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/modals'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/modals.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Parallax\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/parallax.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Pushpin\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/pushpin.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                ScrollFire\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/scrollfire.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Scrollspy\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/scrollspy.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                SideNav\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/side-nav.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Tabs\r\n                                <span slot=\"secondary-content\">\r\n                                    <vue-logo v-link=\"{path: '/tabs'}\"></vue-logo>\r\n                                    <materialize-logo href=\"http://materializecss.com/tabs.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Transitions\r\n                                <span slot=\"secondary-content\">\r\n                                    <materialize-logo href=\"http://materializecss.com/transitions.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                            <md-collection-list-item>\r\n                                Waves\r\n                                <span slot=\"secondary-content\">\r\n                                    todo directives\r\n                                    <!--<vue-logo v-link=\"{path: '/directives'}\"></vue-logo>-->\r\n                                    <materialize-logo href=\"http://materializecss.com/waves.html\"></materialize-logo>\r\n                                </span>\r\n                            </md-collection-list-item>\r\n                        </md-collection-list>\r\n                    </div>\r\n                </md-collapsible-item>\r\n            </md-collapsible>\r\n        </div>\r\n    </div>\r\n</div>";

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
	var template = __webpack_require__(115);
	var AboutPage = (function () {
	    function AboutPage() {}
	    AboutPage = __decorate([vue_class_component_1["default"]({
	        components: components_1["default"],
	        template: template
	    })], AboutPage);
	    return AboutPage;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = AboutPage;
	//# sourceMappingURL=index.js.map

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <div class=\"row\">\r\n        <h2 class=\"center\">Materialize Components</h2>\r\n        <p>\r\n            Materialize Components implements components with Vue.js + Materialize.css. There is no jQuery, only Vue as Javascript library.\r\n        </p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>flash_on</md-icon>\r\n                <p class=\"promo-caption\">Simple &<br>powerful</p>\r\n                <p class=\"light center\">\r\n                    Material Components provide quick and easy templating and creating of Material Design interface.\r\n                    They use minimum dependencies. No jQuery, only Vue and Velocity for advance animations.\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>web</md-icon>\r\n                <p class=\"promo-caption\">Components</p>\r\n                <p class=\"light center\">\r\n                    Component is primary way how to modularize your UI with Vue. There are many components witch implements Material design with materialize.css.\r\n                    All components have out of box dynamic behavior.\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n            <div class=\"center promo\">\r\n                <md-icon>devices</md-icon>\r\n                <p class=\"promo-caption\">Material Design</p>\r\n                <p class=\"light center\">\r\n                    Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology.\r\n                    Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <h4>Materialize.css</h4>\r\n        <p>\r\n            Materialize.css is CSS framework implements Material Design designed in Google. It uses CSS (SASS) and jQuery.\r\n            For more info visit <a href=\"http://materializecss.com/\">materializecss.com</a>.\r\n        </p>\r\n        <h4>Vue.js</h4>\r\n        <p>\r\n            Vue.js (pronounced /vjuː/, like view) is Javascript library for building web user interfaces.\r\n            It provides simple and effective solution how to build your UI components by <em>data binding</em>.\r\n            For more info visit <a href=\"http://vuejs.org/\">vuejs.org</a>.\r\n        </p>\r\n    </div>\r\n</div>";

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
	var collections_1 = __webpack_require__(117);
	var dropdowns_1 = __webpack_require__(119);
	var navbars_1 = __webpack_require__(121);
	var snippet_1 = __webpack_require__(123);
	var Badges = (function () {
	    function Badges() {}
	    Badges.prototype.data = function () {
	        return {
	            alert: 'new',
	            api: __webpack_require__(125),
	            snippets: {
	                collections: __webpack_require__(126),
	                dropdowns: __webpack_require__(127),
	                navbars: __webpack_require__(128)
	            },
	            src: {
	                script: __webpack_require__(129),
	                template: __webpack_require__(130),
	                style: __webpack_require__(131)
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
	        template: __webpack_require__(132)
	    })], Badges);
	    return Badges;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badges;
	//# sourceMappingURL=index.js.map

/***/ },
/* 117 */
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
	        template: __webpack_require__(118)
	    })], Collections);
	    return Collections;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collections;
	//# sourceMappingURL=index.js.map

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <md-input v-field=\"alert\" class=\"col s6\">\r\n        Alert\r\n    </md-input>\r\n</div>\r\n\r\n<md-collection>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 1<md-badge>1</md-badge></md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 2<md-badge :alert=\"alert\">4</md-badge></md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 3</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Item 4<md-badge>14</md-badge></md-collection-item>\r\n</md-collection>";

/***/ },
/* 119 */
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
	var dropdown_1 = __webpack_require__(60);
	var dropdown_item_1 = __webpack_require__(62);
	var badge_1 = __webpack_require__(24);
	var template = __webpack_require__(120);
	var Dropdowns = (function () {
	    function Dropdowns() {}
	    Dropdowns.prototype.closeDropdown = function () {
	        var self = this;
	        self.$broadcast('dropdown::close');
	    };
	    Dropdowns = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"],
	            mdBadge: badge_1["default"]
	        }
	    })], Dropdowns);
	    return Dropdowns;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dropdowns;
	//# sourceMappingURL=index.js.map

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<md-dropdown title=\"Dropdown\">\r\n    <md-dropdown-item :closing=\"false\">\r\n        one <md-badge>1</md-badge>\r\n    </md-dropdown-item>\r\n    <md-dropdown-item :closing=\"false\">\r\n        two <md-badge alert=\"new\">1</md-badge>\r\n    </md-dropdown-item>\r\n    <md-dropdown-item :closing=\"false\">\r\n        three\r\n    </md-dropdown-item>\r\n    <md-dropdown-item closing>\r\n        <md-badge alert=\"close\"></md-badge>\r\n    </md-dropdown-item>\r\n</md-dropdown>";

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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var template = __webpack_require__(122);
	var Navbars = (function () {
	    function Navbars() {}
	    Navbars.prototype.data = function () {
	        return {};
	    };
	    Navbars = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        }
	    })], Navbars);
	    return Navbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass <md-badge alert=\"new\">4</md-badge></md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('sass')\">sass</md-nav-item>\r\n</md-navbar>\r\n";

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
	var template = __webpack_require__(124);
	var Snippet = (function () {
	    function Snippet() {}
	    Snippet = __decorate([vue_class_component_1["default"]({
	        template: template
	    })], Snippet);
	    return Snippet;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Snippet;
	//# sourceMappingURL=index.js.map

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <pre><slot></slot></pre>\r\n</div>";

/***/ },
/* 125 */
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
/* 126 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span>Item 1<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span>Item 2<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">:alert</span>=<span class=\"hljs-value\">\"alert\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span>Item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span>Item 4<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Dropdown\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        one <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        two <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">:closing</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n        three\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"close\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown</span>&gt;</span>";

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"\"</span>&gt;</span>sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"\"</span>&gt;</span>sass <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-badge</span> <span class=\"hljs-attribute\">alert</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-badge</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"\"</span>&gt;</span>sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n";

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        alert: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>\r\n        }\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./badge.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Badge {\r\n}";

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"badge\"</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"{new: !!alert}\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"alert\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"new\"</span>&gt;</span>{{alert}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>";

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">span</span><span class=\"hljs-class\">.badge</span><span class=\"hljs-class\">.new</span><span class=\"hljs-pseudo\">:after</span> {\r\n  <span class=\"hljs-attribute\">content</span><span class=\"hljs-value\">: <span class=\"hljs-string\">\"\"</span>;</span>\r\n}\r\n\r\n<span class=\"hljs-tag\">nav</span> <span class=\"hljs-tag\">span</span><span class=\"hljs-class\">.badge</span><span class=\"hljs-class\">.new</span> <span class=\"hljs-class\">.new</span> {\r\n  <span class=\"hljs-attribute\">margin-right</span><span class=\"hljs-value\">: <span class=\"hljs-number\">8px</span>;</span>\r\n}";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n\r\n    <doc-tabs base-path=\"/badges\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Collections</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-collections></doc-collections>\r\n\r\n                <doc-snippet>{{{snippets.collections}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Badges in Dropdown</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-dropdowns></doc-dropdowns>\r\n\r\n                <doc-snippet>{{{snippets.dropdowns}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Badges in Navbar</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbars></doc-navbars>\r\n\r\n                <doc-snippet>{{{snippets.navbars}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 133 */
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
	var default_1 = __webpack_require__(134);
	var navbar_1 = __webpack_require__(136);
	var Breadcrumbs = (function () {
	    function Breadcrumbs() {}
	    Breadcrumbs.prototype.data = function () {
	        return {
	            api: __webpack_require__(138),
	            snippets: {
	                breadcrumbs: __webpack_require__(139),
	                navbarBreadcrumbs: __webpack_require__(140)
	            },
	            src: {
	                script: __webpack_require__(141),
	                template: __webpack_require__(142)
	            }
	        };
	    };
	    Breadcrumbs = __decorate([vue_class_component_1["default"]({
	        components: {
	            docBreadcrumbs: default_1["default"],
	            docNavbarBreadcrumbs: navbar_1["default"]
	        },
	        template: __webpack_require__(143)
	    })], Breadcrumbs);
	    return Breadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Breadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 134 */
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
	        template: __webpack_require__(135)
	    })], DefaultBreadcrumbs);
	    return DefaultBreadcrumbs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultBreadcrumbs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <h4>Demo:</h4>\r\n    <div class=\"col s3\">\r\n        <md-input v-field=\"label\">\r\n            Label\r\n        </md-input>\r\n    </div>\r\n    <div class=\"col s3\">\r\n        <md-input v-field=\"url\">\r\n            Url\r\n        </md-input>\r\n    </div>\r\n    <div class=\"col s3\" style=\"margin-top: 20px;\">\r\n        <md-button @click=\"push\">\r\n            Push\r\n        </md-button>\r\n    </div>\r\n    <div class=\"col s3\" style=\"margin-top: 20px;\">\r\n        <md-button @click=\"pop\">\r\n            POP\r\n        </md-button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <pre>{{breadcrumbs | json}}</pre>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<md-breadcrumbs :list=\"breadcrumbs\">\r\n</md-breadcrumbs>";

/***/ },
/* 136 */
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
	var navbar_1 = __webpack_require__(31);
	var NavbarBreadcrumbs = (function () {
	    function NavbarBreadcrumbs() {}
	    NavbarBreadcrumbs = __decorate([vue_class_component_1["default"]({
	        template: __webpack_require__(137),
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
/* 137 */
/***/ function(module, exports) {

	module.exports = "<md-navbar>\r\n    <div class=\"col s12\" slot=\"content\">\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">First</a>\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">Second</a>\r\n        <a href=\"javascript:void(0)\" class=\"breadcrumb\">Third</a>\r\n    </div>\r\n</md-navbar>";

/***/ },
/* 138 */
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
/* 139 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-breadcrumbs</span> <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"{First: '#!', Second: '#!', Third: '#!'}\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-breadcrumbs</span>&gt;</span>";

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s12\"</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> mdNavbar from <span class=\"hljs-string\">'../navbar'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        list: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Object</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">'default'</span>: {}\r\n        }\r\n    },\r\n    components: {\r\n        mdNavbar\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./breadcrumbs.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Breadcrumbs {\r\n}";

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"(label, url) in list\"</span> <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"url\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"breadcrumb\"</span>&gt;</span>\r\n            {{label}}\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n\r\n    <doc-tabs base-path=\"/breadcrumbs\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Breadcrumbs</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-breadcrumbs></doc-breadcrumbs>\r\n\r\n                <doc-snippet>{{{snippets.breadcrumbs}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Using navbar</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-navbar-breadcrumbs></doc-navbar-breadcrumbs>\r\n\r\n                <doc-snippet>{{{snippets.navbarBreadcrumbs}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 144 */
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
	var raised_1 = __webpack_require__(145);
	var floating_1 = __webpack_require__(147);
	var fab_1 = __webpack_require__(149);
	var fab_horizontal_1 = __webpack_require__(151);
	var fab_click_1 = __webpack_require__(153);
	var Butons = (function () {
	    function Butons() {}
	    Butons.prototype.data = function () {
	        return {
	            api: __webpack_require__(155),
	            snippets: {
	                raisedButtons: __webpack_require__(156),
	                floatingButtons: __webpack_require__(157),
	                fabButtons: __webpack_require__(158),
	                fabHorizontalButtons: __webpack_require__(159),
	                fabClickButtons: __webpack_require__(160)
	            },
	            src: {
	                script: __webpack_require__(161),
	                template: __webpack_require__(162)
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
	        template: __webpack_require__(163)
	    })], Butons);
	    return Butons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Butons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 145 */
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
	        template: __webpack_require__(146)
	    })], RaisedButtons);
	    return RaisedButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RaisedButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row demo\">\r\n    <h4>Demo</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col s3\">\r\n            <md-select v-field=\"icon\" class=\"col\">\r\n                <md-option value=\"cloud\"><md-icon>cloud</md-icon></md-option>\r\n                <md-option value=\"code\"><md-icon>code</md-icon></md-option>\r\n                <md-option value=\"delete\"><md-icon>delete</md-icon></md-option>\r\n                <md-option value=\"grade\"><md-icon>grade</md-icon></md-option>\r\n\r\n                <span slot=\"label\">Icon</span>\r\n            </md-select>\r\n        </div>\r\n        <div class=\"col s3\">\r\n            <md-checkbox v-field=\"iconAlignRight\" class=\"filled-in\">Icon right</md-checkbox>\r\n        </div>\r\n        <div class=\"col s3\">\r\n            <md-checkbox v-field=\"large\" class=\"filled-in\">Large</md-checkbox>\r\n        </div>\r\n        <div class=\"col s3\">\r\n            <md-checkbox v-field=\"disabled\" class=\"filled-in\">Disabled</md-checkbox>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<md-button :icon=\"icon\" :icon-align-right=\"iconAlignRight\" :large=\"large\" :disabled=\"disabled\"\r\n           class=\"waves-effect waves-light\">Stuff</md-button>\r\n<md-button class=\"waves-effect waves-light\"><md-icon left>cloud</md-icon>button</md-button>\r\n<md-button class=\"waves-effect waves-light\"><md-icon right>cloud</md-icon>button</md-button>\r\n";

/***/ },
/* 147 */
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
	var button_1 = __webpack_require__(26);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(148);
	var FloatingButtons = (function () {
	    function FloatingButtons() {}
	    FloatingButtons = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], FloatingButtons);
	    return FloatingButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FloatingButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "<md-button class=\"waves-effect waves-light red\" floating large><md-icon>add</md-icon></md-button>\r\n";

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
	var fab_1 = __webpack_require__(68);
	var button_1 = __webpack_require__(26);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(150);
	var FabButtons = (function () {
	    function FabButtons() {}
	    FabButtons = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], FabButtons);
	    return FabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab style=\"position: absolute\">\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>";

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
	var fab_1 = __webpack_require__(68);
	var button_1 = __webpack_require__(26);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(152);
	var FabButtons = (function () {
	    function FabButtons() {}
	    FabButtons = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], FabButtons);
	    return FabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab horizontal style=\"position: absolute\">\r\n        <template slot=\"icon-name\">edit</template>\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>\r\n";

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
	var button_1 = __webpack_require__(26);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(154);
	var ClickFabButtons = (function () {
	    function ClickFabButtons() {}
	    ClickFabButtons = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdFab: fab_1["default"],
	            mdButton: button_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], ClickFabButtons);
	    return ClickFabButtons;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ClickFabButtons;
	//# sourceMappingURL=index.js.map

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative\">\r\n    <md-fab horizontal event=\"click\" style=\"position: absolute\">\r\n        <template slot=\"icon-name\">add</template>\r\n        <li><md-button floating class=\"red\"><md-icon>insert_chart</md-icon></md-button></li>\r\n        <li><md-button floating class=\"yellow darken-1\"><md-icon>format_quote</md-icon></md-button></li>\r\n        <li><md-button floating class=\"green\"><md-icon>publish</md-icon></md-button></li>\r\n        <li><md-button floating class=\"blue\"><md-icon>attach_file</md-icon></md-button></li>\r\n    </md-fab>\r\n</div>\r\n";

/***/ },
/* 155 */
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
				"name": "iconAlignRight",
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
/* 156 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span>Stuff<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">left</span>&gt;</span>cloud<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-light\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>cloud<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n";

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-large waves-effect waves-light red\"</span> <span class=\"hljs-attribute\">floating</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>add<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span> <span class=\"hljs-attribute\">horizontal</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>edit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-fab</span> <span class=\"hljs-attribute\">horizontal</span> <span class=\"hljs-attribute\">event</span>=<span class=\"hljs-value\">\"click\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>add<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>insert_chart<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"yellow darken-1\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>format_quote<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>publish<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">floating</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>attach_file<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-fab</span>&gt;</span>";

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-keyword\">import</span> Component from <span class=\"hljs-string\">'vue-class-component'</span>;\r\n<span class=\"hljs-keyword\">import</span> mdIcon from <span class=\"hljs-string\">'../icon'</span>;\r\n\r\n<span class=\"hljs-keyword\">import</span> waveEffect from <span class=\"hljs-string\">'../../directives/wave-effect'</span>;\r\n\r\n@Component({\r\n    props: {\r\n        <span class=\"hljs-keyword\">type</span>: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        icon: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">String</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">null</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        iconAlignRight: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        large: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        disabled: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        },\r\n        floating: {\r\n            <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">Boolean</span>,\r\n            required: <span class=\"hljs-literal\">false</span>,\r\n            <span class=\"hljs-string\">\"default\"</span>: <span class=\"hljs-literal\">false</span>,\r\n            twoWay: <span class=\"hljs-literal\">false</span>\r\n        }\r\n    },\r\n    components: {\r\n        mdIcon\r\n    },\r\n    directives: {\r\n        waveEffect\r\n    },\r\n    template: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./btn.html'</span>)\r\n})\r\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Button {\r\n    <span class=\"hljs-keyword\">private</span> <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">string</span>;\r\n    <span class=\"hljs-keyword\">private</span> large: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> disabled: <span class=\"hljs-built_in\">boolean</span>;\r\n    <span class=\"hljs-keyword\">private</span> floating: <span class=\"hljs-built_in\">boolean</span>;\r\n\r\n    <span class=\"hljs-keyword\">get</span> computedClasses() {\r\n        <span class=\"hljs-keyword\">var</span> classes = {\r\n            <span class=\"hljs-string\">'btn-large'</span>: <span class=\"hljs-keyword\">this</span>.large,\r\n            <span class=\"hljs-string\">'disabled'</span>: <span class=\"hljs-keyword\">this</span>.disabled,\r\n            <span class=\"hljs-string\">'btn-floating'</span>: <span class=\"hljs-keyword\">this</span>.floating\r\n        };\r\n        classes[<span class=\"hljs-keyword\">this</span>.type ? <span class=\"hljs-string\">\"btn-\"</span> + <span class=\"hljs-keyword\">this</span>.type : <span class=\"hljs-string\">\"btn\"</span>] = <span class=\"hljs-literal\">true</span>;\r\n        <span class=\"hljs-keyword\">return</span> classes;\r\n    }\r\n}";

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">:class</span>=<span class=\"hljs-value\">\"computedClasses\"</span> <span class=\"hljs-attribute\">v-wave-effect</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">v-if</span>=<span class=\"hljs-value\">\"icon\"</span> <span class=\"hljs-attribute\">:right</span>=<span class=\"hljs-value\">\"iconAlignRight\"</span> <span class=\"hljs-attribute\">:left</span>=<span class=\"hljs-value\">\"!iconAlignRight\"</span>&gt;</span>\r\n        {{icon}}\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slot</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slot</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <doc-tabs base-path=\"/buttons\">\r\n        <div slot=\"showcase\">\r\n            <h2 class=\"header\">Raised</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-raised-buttons></doc-raised-buttons>\r\n\r\n                <doc-snippet>{{{snippets.raisedButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Floating</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-floating-buttons></doc-floating-buttons>\r\n\r\n                <doc-snippet>{{{snippets.floatingButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">FAB</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-buttons></doc-fab-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">FAB horizontal</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-horizontal-buttons></doc-fab-horizontal-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabHorizontalButtons}}}</doc-snippet>\r\n            </div>\r\n\r\n            <h2 class=\"header\">Only click</h2>\r\n            <div class=\"doc-example\">\r\n                <doc-fab-click-buttons></doc-fab-click-buttons>\r\n\r\n                <doc-snippet>{{{snippets.fabClickButtons}}}</doc-snippet>\r\n            </div>\r\n        </div>\r\n\r\n        <div slot=\"api\">\r\n            <doc-api :api=\"api\"></doc-api>\r\n        </div>\r\n\r\n        <div slot=\"sources\">\r\n            <doc-sources :src=\"src\"></doc-sources>\r\n        </div>\r\n    </doc-tabs>\r\n</div>";

/***/ },
/* 164 */
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
	var default_1 = __webpack_require__(165);
	var image_1 = __webpack_require__(167);
	var reveal_1 = __webpack_require__(169);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(171);
	var Cards = (function () {
	    function Cards() {}
	    Cards.prototype.data = function () {
	        return {
	            defaultCardSnippet: __webpack_require__(172),
	            imageCardSnippet: __webpack_require__(173),
	            revealCardSnippet: __webpack_require__(174)
	        };
	    };
	    Cards = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docDefaultCard: default_1["default"],
	            docImageCard: image_1["default"],
	            docRevealCard: reveal_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Cards);
	    return Cards;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Cards;
	//# sourceMappingURL=index.js.map

/***/ },
/* 165 */
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
	var template = __webpack_require__(166);
	var card_1 = __webpack_require__(38);
	var DefaultCard = (function () {
	    function DefaultCard() {}
	    DefaultCard = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCard: card_1["default"]
	        }
	    })], DefaultCard);
	    return DefaultCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m6\">\r\n        <md-card class=\"blue-grey darken-1\" content-class=\"white-text\">\r\n            <span slot=\"title\">\r\n                Card Title\r\n            </span>\r\n\r\n            <p>I am a very simple card. I am good at containing small bits of information.\r\n                    I am convenient because I require little markup to use effectively.</p>\r\n\r\n            <div slot=\"actions\">\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>";

/***/ },
/* 167 */
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
	var template = __webpack_require__(168);
	var card_1 = __webpack_require__(38);
	var ImageCard = (function () {
	    function ImageCard() {}
	    ImageCard = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCard: card_1["default"]
	        }
	    })], ImageCard);
	    return ImageCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ImageCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m7\">\r\n        <md-card title-in-image>\r\n            <span slot=\"title\">\r\n                Card Title\r\n            </span>\r\n            <div slot=\"image\">\r\n                <img src=\"http://materializecss.com/images/sample-1.jpg\">\r\n            </div>\r\n            <div>\r\n                <p>I am a very simple card. I am good at containing small bits of information.\r\n                    I am convenient because I require little markup to use effectively.</p>\r\n            </div>\r\n            <div slot=\"actions\">\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>";

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
	var card_1 = __webpack_require__(38);
	var icon_1 = __webpack_require__(27);
	var wave_effect_1 = __webpack_require__(14);
	var template = __webpack_require__(170);
	var RevealCard = (function () {
	    function RevealCard() {}
	    RevealCard = __decorate([vue_class_component_1["default"]({
	        template: template,
	        directives: {
	            waveEffect: wave_effect_1["default"]
	        },
	        components: {
	            mdCard: card_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], RevealCard);
	    return RevealCard;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RevealCard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m8\">\r\n        <md-card>\r\n            <span slot=\"title\" class=\"activator\">\r\n                Card Title<md-icon right>more_vert</md-icon>\r\n            </span>\r\n            <div slot=\"image\" v-wave-effect class=\"waves-effect waves-block waves-light\">\r\n                <img class=\"activator\" src=\"http://materializecss.com/images/office.jpg\">\r\n            </div>\r\n            <p>\r\n                <a href=\"javascript:void(0)\">This is a link</a>\r\n            </p>\r\n            <div slot=\"reveal\">\r\n                <span class=\"card-title grey-text text-darken-4\">Card Title</span>\r\n                <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n            </div>\r\n        </md-card>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Default card</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-card></doc-default-card>\r\n\r\n        <doc-snippet>{{{defaultCardSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Card with image</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-image-card></doc-image-card>\r\n\r\n        <doc-snippet>{{{imageCardSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Reveal card</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-reveal-card></doc-reveal-card>\r\n\r\n        <doc-snippet>{{{revealCardSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s12 m6\"</span>&gt;</span>\r\n        <span class=\"hljs-comment\">&lt;!-- CARD --&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"blue-grey darken-1\"</span> <span class=\"hljs-attribute\">content-class</span>=<span class=\"hljs-value\">\"white-text\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>\r\n                Card Title\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>I am a very simple card. I am good at containing small bits of information.\r\n                I am convenient because I require little markup to use effectively.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"actions\"</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>";

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>\r\n        Card Title\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"image\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://materializecss.com/images/sample-1.jpg\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>I am a very simple card. I am good at containing small bits of information.\r\n            I am convenient because I require little markup to use effectively.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"actions\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>";

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-card</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"title\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"activator\"</span>&gt;</span>\r\n        Card Title<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>more_vert<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-comment\">&lt;!-- wave effect directive --&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"image\"</span> <span class=\"hljs-attribute\">v-wave-effect</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-block waves-light\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"activator\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://materializecss.com/images/office.jpg\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>This is a link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"reveal\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title grey-text text-darken-4\"</span>&gt;</span>Card Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Here is some more information about this product that is only revealed once clicked on.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-card</span>&gt;</span>";

/***/ },
/* 175 */
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
	var default_1 = __webpack_require__(176);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(178);
	var Chips = (function () {
	    function Chips() {}
	    Chips.prototype.data = function () {
	        return {
	            defaultChipSnippet: __webpack_require__(179)
	        };
	    };
	    Chips = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docDefaultChip: default_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Chips);
	    return Chips;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Chips;
	//# sourceMappingURL=index.js.map

/***/ },
/* 176 */
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
	var template = __webpack_require__(177);
	var chip_1 = __webpack_require__(44);
	var DefaultChip = (function () {
	    function DefaultChip() {}
	    DefaultChip = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdChip: chip_1["default"]
	        }
	    })], DefaultChip);
	    return DefaultChip;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultChip;
	//# sourceMappingURL=index.js.map

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<md-chip>\r\n    <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"Contact Person\">\r\n    Jane Doe\r\n</md-chip>\r\n\r\n<md-chip closeable>\r\n    Tag\r\n</md-chip>\r\n\r\n";

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Chips</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-chip></doc-default-chip>\r\n\r\n        <doc-snippet>{{{defaultChipSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-chip</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://materializecss.com/images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Contact Person\"</span>&gt;</span>\r\n    Jane Doe\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-chip</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-chip</span> <span class=\"hljs-attribute\">closeable</span>&gt;</span>\r\n    Tag\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-chip</span>&gt;</span>";

/***/ },
/* 180 */
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
	var defaultCollapsible_1 = __webpack_require__(181);
	var popoutCollapsible_1 = __webpack_require__(183);
	var expendableCollapsible_1 = __webpack_require__(185);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(187);
	var Collapsibles = (function () {
	    function Collapsibles() {}
	    Collapsibles.prototype.data = function () {
	        return {
	            defaultCollapsibleSnippet: __webpack_require__(188),
	            popoutCollapsibleSnippet: __webpack_require__(189),
	            expendableCollapsibleSnippet: __webpack_require__(190)
	        };
	    };
	    Collapsibles = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docDefaultCollapsible: defaultCollapsible_1["default"],
	            docPopoutCollapsible: popoutCollapsible_1["default"],
	            docExpendableCollapsible: expendableCollapsible_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Collapsibles);
	    return Collapsibles;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Collapsibles;
	//# sourceMappingURL=index.js.map

/***/ },
/* 181 */
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
	var template = __webpack_require__(182);
	var collapsible_1 = __webpack_require__(48);
	var collapsible_item_1 = __webpack_require__(49);
	var icon_1 = __webpack_require__(27);
	var DefaultCollapsible = (function () {
	    function DefaultCollapsible() {}
	    DefaultCollapsible = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollapsible: collapsible_1["default"],
	            mdCollapsibleItem: collapsible_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], DefaultCollapsible);
	    return DefaultCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<md-collapsible>\r\n    <md-collapsible-item expanded>\r\n        <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n</md-collapsible>";

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
	var template = __webpack_require__(184);
	var collapsible_1 = __webpack_require__(48);
	var collapsible_item_1 = __webpack_require__(49);
	var icon_1 = __webpack_require__(27);
	var PopoutCollapsible = (function () {
	    function PopoutCollapsible() {}
	    PopoutCollapsible = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdIcon: icon_1["default"],
	            mdCollapsible: collapsible_1["default"],
	            mdCollapsibleItem: collapsible_item_1["default"]
	        }
	    })], PopoutCollapsible);
	    return PopoutCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = PopoutCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<md-collapsible popout>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n</md-collapsible>";

/***/ },
/* 185 */
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
	var template = __webpack_require__(186);
	var collapsible_1 = __webpack_require__(48);
	var collapsible_item_1 = __webpack_require__(49);
	var icon_1 = __webpack_require__(27);
	var ExpendableCollapsible = (function () {
	    function ExpendableCollapsible() {}
	    ExpendableCollapsible = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollapsible: collapsible_1["default"],
	            mdCollapsibleItem: collapsible_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], ExpendableCollapsible);
	    return ExpendableCollapsible;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ExpendableCollapsible;
	//# sourceMappingURL=index.js.map

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<md-collapsible expendable>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>filter_drama</md-icon>First</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>place</md-icon>Second</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n    <md-collapsible-item>\r\n        <div slot=\"header\"><md-icon>whatshot</md-icon>Third</div>\r\n        <div slot=\"body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n    </md-collapsible-item>\r\n</md-collapsible>";

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Accordion</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-collapsible></doc-default-collapsible>\r\n\r\n        <doc-snippet>{{{defaultCollapsibleSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Popout</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-popout-collapsible></doc-popout-collapsible>\r\n\r\n        <doc-snippet>{{{popoutCollapsibleSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Expandable</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-expendable-collapsible></doc-expendable-collapsible>\r\n\r\n        <doc-snippet>{{{expendableCollapsibleSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span> <span class=\"hljs-attribute\">expanded</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span> <span class=\"hljs-attribute\">popout</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible</span> <span class=\"hljs-attribute\">expendable</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>filter_drama<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>place<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>whatshot<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>Lorem ipsum dolor sit amet.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collapsible</span>&gt;</span>";

/***/ },
/* 191 */
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
	var links_1 = __webpack_require__(192);
	var header_1 = __webpack_require__(194);
	var secondary_content_1 = __webpack_require__(196);
	var avatar_1 = __webpack_require__(198);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(200);
	var Badges = (function () {
	    function Badges() {}
	    Badges.prototype.data = function () {
	        return {
	            collectionLinksSnippet: __webpack_require__(201),
	            collectionHeaderSnippet: __webpack_require__(202),
	            collectionSecondaryContentSnippet: __webpack_require__(203),
	            collectionAvatarSnippet: __webpack_require__(204)
	        };
	    };
	    Badges = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docCollectionLinks: links_1["default"],
	            docCollectionHeader: header_1["default"],
	            docCollectionSecondaryContent: secondary_content_1["default"],
	            docAvatarContent: avatar_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Badges);
	    return Badges;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Badges;
	//# sourceMappingURL=index.js.map

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
	var template = __webpack_require__(193);
	var collection_1 = __webpack_require__(52);
	var collection_item_1 = __webpack_require__(54);
	var LinksCollection = (function () {
	    function LinksCollection() {}
	    LinksCollection = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"]
	        }
	    })], LinksCollection);
	    return LinksCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinksCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\" active>Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n</md-collection>";

/***/ },
/* 194 */
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
	var template = __webpack_require__(195);
	var collection_1 = __webpack_require__(52);
	var collection_item_1 = __webpack_require__(54);
	var HeaderCollection = (function () {
	    function HeaderCollection() {}
	    HeaderCollection = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"]
	        }
	    })], HeaderCollection);
	    return HeaderCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = HeaderCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <h4 slot=\"header\">First Names</h4>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n    <md-collection-item href=\"javascript:void(0)\">Alvin</md-collection-item>\r\n</md-collection>";

/***/ },
/* 196 */
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
	var template = __webpack_require__(197);
	var icon_1 = __webpack_require__(27);
	var collection_1 = __webpack_require__(52);
	var collection_item_1 = __webpack_require__(54);
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
	        template: template,
	        components: {
	            mdIcon: icon_1["default"],
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"]
	        }
	    })], SecondaryContentCollection);
	    return SecondaryContentCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SecondaryContentCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <h4 slot=\"header\">First Names</h4>\r\n    <md-collection-item v-for=\"item in items\" :href=\"item\">\r\n        {{$key}}\r\n        <md-icon slot=\"secondary-content\">send</md-icon>\r\n    </md-collection-item>\r\n </md-collection>";

/***/ },
/* 198 */
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
	var template = __webpack_require__(199);
	var collection_1 = __webpack_require__(52);
	var collection_item_1 = __webpack_require__(54);
	var icon_1 = __webpack_require__(27);
	var AvatarCollection = (function () {
	    function AvatarCollection() {}
	    AvatarCollection = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], AvatarCollection);
	    return AvatarCollection;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = AvatarCollection;
	//# sourceMappingURL=index.js.map

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<md-collection>\r\n    <md-collection-item class=\"avatar\">\r\n        <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-item>\r\n    <md-collection-item class=\"avatar\">\r\n        <md-icon class=\"circle\">folder</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-item>\r\n    <md-collection-item class=\"avatar\">\r\n        <md-icon class=\"circle green\">assessment</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-item>\r\n    <md-collection-item class=\"avatar\">\r\n        <md-icon class=\"circle red\">play_arrow</md-icon>\r\n        <span class=\"title\">Title</span>\r\n        <p>First Line <br> Second Line </p>\r\n        <a slot=\"secondary-content\" href=\"javascript:void(0)\"><md-icon>grade</md-icon></a>\r\n    </md-collection-item>\r\n</md-collection>";

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Links</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-collection-links></doc-collection-links>\r\n\r\n        <doc-snippet>{{{collectionLinksSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Header</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-collection-header></doc-collection-header>\r\n\r\n        <doc-snippet>{{{collectionHeaderSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Secondary content</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-collection-secondary-content></doc-collection-secondary-content>\r\n\r\n        <doc-snippet>{{{collectionSecondaryContentSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Secondary content</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-avatar-content></doc-avatar-content>\r\n\r\n        <doc-snippet>{{{collectionAvatarSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>First Names<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!\"</span>&gt;</span>Alvin<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = "/*\r\n{\r\n    'Alvin1': 'javascript:void(0)',\r\n    'Alvin2': 'javascript:void(0)',\r\n    'Alvin3': 'javascript:void(0)',\r\n    'Alvin4': 'javascript:void(0)'\r\n}\r\n*/\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"header\"</span>&gt;</span>First Names<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">v-for</span>=<span class=\"hljs-value\">\"item in items\"</span> <span class=\"hljs-attribute\">:href</span>=<span class=\"hljs-value\">\"item\"</span>&gt;</span>\r\n        {{$key}}\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span>send<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://materializecss.com/images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    ...\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle green\"</span>&gt;</span>assessment<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"secondary-content\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    ...\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>";

/***/ },
/* 205 */
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
	var snippet_1 = __webpack_require__(123);
	var default_1 = __webpack_require__(206);
	var events_1 = __webpack_require__(17);
	var template = __webpack_require__(208);
	var Modals = (function () {
	    function Modals() {}
	    Modals.prototype.data = function () {
	        return {
	            defaultDropdownSnippet: __webpack_require__(209)
	        };
	    };
	    Modals = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultDropdown: default_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], Modals);
	    return Modals;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modals;
	//# sourceMappingURL=index.js.map

/***/ },
/* 206 */
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
	var template = __webpack_require__(207);
	var dropdown_1 = __webpack_require__(60);
	var dropdown_item_1 = __webpack_require__(62);
	var DefaultDropdown = (function () {
	    function DefaultDropdown() {}
	    DefaultDropdown = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"]
	        }
	    })], DefaultDropdown);
	    return DefaultDropdown;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultDropdown;
	//# sourceMappingURL=index.js.map

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<md-dropdown title=\"Drop me\">\r\n    <md-dropdown-item>\r\n        one\r\n    </md-dropdown-item>\r\n    <md-dropdown-item>\r\n        two\r\n    </md-dropdown-item>\r\n    <li class=\"divider\"></li>\r\n    <md-dropdown-item>\r\n        three\r\n    </md-dropdown-item>\r\n</md-dropdown>";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Dropdown</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-dropdown></doc-default-dropdown>\r\n\r\n        <doc-snippet>{{{defaultDropdownSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Drop me\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n        one\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n        two\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n        three\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown</span>&gt;</span>";

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
	var input_fields_1 = __webpack_require__(211);
	var input_icon_fields_1 = __webpack_require__(213);
	var textareas_1 = __webpack_require__(215);
	var selects_1 = __webpack_require__(217);
	var radios_1 = __webpack_require__(219);
	var checkboxes_1 = __webpack_require__(221);
	var switches_1 = __webpack_require__(223);
	var file_inputs_1 = __webpack_require__(225);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(227);
	var Forms = (function () {
	    function Forms() {}
	    Forms.prototype.data = function () {
	        return {
	            inputFieldsSnippet: __webpack_require__(228),
	            inputIconFieldsSnippet: __webpack_require__(229),
	            textareasSnippet: __webpack_require__(230),
	            selectsSnippet: __webpack_require__(231),
	            radiosSnippet: __webpack_require__(232),
	            checkboxesSnippet: __webpack_require__(233),
	            switchesSnippet: __webpack_require__(234),
	            fileInputsSnippet: __webpack_require__(235)
	        };
	    };
	    Forms = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docInputFields: input_fields_1["default"],
	            docInputIconFields: input_icon_fields_1["default"],
	            docTextareas: textareas_1["default"],
	            docSelects: selects_1["default"],
	            docRadios: radios_1["default"],
	            docCheckboxes: checkboxes_1["default"],
	            docSwitches: switches_1["default"],
	            docFileInputs: file_inputs_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Forms);
	    return Forms;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Forms;
	//# sourceMappingURL=index.js.map

/***/ },
/* 211 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(212);
	var InputFileds = (function () {
	    function InputFileds() {}
	    InputFileds.prototype.data = function () {
	        return {
	            firstName: 'Martin',
	            lastName: ''
	        };
	    };
	    InputFileds = __decorate([vue_class_component_1["default"]({
	        template: template,
	        directives: {
	            field: field_1["default"]
	        },
	        components: {
	            mdInput: input_1["default"]
	        }
	    })], InputFileds);
	    return InputFileds;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputFileds;
	//# sourceMappingURL=index.js.map

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <md-input v-field=\"firstName\" placeholder=\"Placeholder\" class=\"col s6\">\r\n                First Name\r\n            </md-input>\r\n            <md-input v-field=\"lastName\" class=\"col s6\">\r\n                Last name\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                First name: {{firstName}}\r\n            </div>\r\n            <div class=\"output col s6\">\r\n                Last name: {{lastName}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input value=\"I am not editable\" disabled class=\"col s12\">\r\n                Disabled\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input type=\"password\" class=\"col s12\">\r\n                Password\r\n            </md-input>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-input type=\"email\" class=\"col s12\">\r\n                Email\r\n            </md-input>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 213 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(214);
	var InputIconFileds = (function () {
	    function InputIconFileds() {}
	    InputIconFileds = __decorate([vue_class_component_1["default"]({
	        template: template,
	        directives: {
	            field: field_1["default"]
	        },
	        components: {
	            mdInput: input_1["default"]
	        }
	    })], InputIconFileds);
	    return InputIconFileds;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = InputIconFileds;
	//# sourceMappingURL=index.js.map

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <md-input v-field=\"firstName\" class=\"col s6\">\r\n                First Name\r\n                <template slot=\"icon-name\">account_circle</template>\r\n            </md-input>\r\n            <md-input type=\"tel\" class=\"col s6\">\r\n                Telephone\r\n                <template slot=\"icon-name\">phone</template>\r\n            </md-input>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 215 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(216);
	var eolToBr = function eolToBr(input) {
	    return input.replace(/\n/g, '<br>');
	};
	var Textarea = (function () {
	    function Textarea() {}
	    Textarea.prototype.data = function () {
	        return {
	            value: 'Text'
	        };
	    };
	    Textarea = __decorate([vue_class_component_1["default"]({
	        template: template,
	        directives: {
	            field: field_1["default"]
	        },
	        components: {
	            mdTextarea: textarea_1["default"]
	        },
	        filters: {
	            eolToBr: eolToBr
	        }
	    })], Textarea);
	    return Textarea;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Textarea;
	//# sourceMappingURL=index.js.map

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <md-textarea v-field=\"value\" debounce=\"500\" class=\"col s6\">\r\n                Textarea:\r\n            </md-textarea>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Textarea: {{{value | eolToBr}}}\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>";

/***/ },
/* 217 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(218);
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
	        directives: {
	            field: field_1["default"]
	        },
	        template: template
	    })], Selects);
	    return Selects;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Selects;
	//# sourceMappingURL=index.js.map

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{value}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select v-field=\"value\" class=\"col s6\">\r\n                <md-option value=\"\" disabled>Choose your option</md-option>\r\n                <md-option value=\"1\">Option 1</md-option>\r\n                <md-option value=\"2\">Option 2</md-option>\r\n                <md-option value=\"3\">Option 3</md-option>\r\n\r\n                <span slot=\"label\">Materialize Select</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{multipleValue | json}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select v-field:multiple=\"multipleValue\" multiple class=\"col s6\">\r\n                <md-option value=\"\" disabled>Choose your option</md-option>\r\n                <md-option value=\"1\">Option 1</md-option>\r\n                <md-option value=\"2\">Option 2</md-option>\r\n                <md-option value=\"3\">Option 3</md-option>\r\n\r\n                <span slot=\"label\">Materialize Select</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{groupsValue}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <md-select v-field=\"groupsValue\" class=\"col s6\">\r\n                <md-optgroup label=\"team 1\">\r\n                    <md-option value=\"1\">Option 1</md-option>\r\n                    <md-option value=\"2\">Option 2</md-option>\r\n                </md-optgroup>\r\n                <md-optgroup label=\"team 2\">\r\n                    <md-option value=\"3\">Option 3</md-option>\r\n                    <md-option value=\"4\">Option 4</md-option>\r\n                </md-optgroup>\r\n                <span slot=\"label\">Optgroups</span>\r\n            </md-select>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- todo circles + browser default + disable -->";

/***/ },
/* 219 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(220);
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
	        directives: {
	            field: field_1["default"]
	        },
	        template: template
	    })], Radios);
	    return Radios;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radios;
	//# sourceMappingURL=index.js.map

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: {{value}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-radio-group group=\"group1\">\r\n                    <p>\r\n                        <md-radio v-field=\"value\" value=\"red\">\r\n                            Red\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio v-field=\"value\" value=\"yellow\">\r\n                            Yellow\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio v-field=\"value\" value=\"green\" class=\"with-gap\">\r\n                            Green\r\n                        </md-radio>\r\n                    </p>\r\n                    <p>\r\n                        <md-radio v-field=\"value\" value=\"brown\" disabled>\r\n                            Brown\r\n                        </md-radio>\r\n                    </p>\r\n                </md-radio-group>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 221 */
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
	var checkbox_1 = __webpack_require__(40);
	var checkbox_group_1 = __webpack_require__(42);
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(222);
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
	        directives: {
	            field: field_1["default"]
	        },
	        template: template
	    })], Radios);
	    return Radios;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Radios;
	//# sourceMappingURL=index.js.map

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: <pre>{{checkbox | json}}</pre>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-checkbox-group group=\"checkbox\">\r\n                    <p>\r\n                        <md-checkbox v-field=\"checkbox.red\" value=\"red\">\r\n                            Red\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox v-field=\"checkbox.yellow\" value=\"yellow\">\r\n                            Yellow\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox v-field=\"checkbox.filled\" value=\"filled\" class=\"filled-in\">\r\n                            Filled in\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox v-field=\"checkbox.green\" value=\"green\" disabled>\r\n                            Green\r\n                        </md-checkbox>\r\n                    </p>\r\n                    <p>\r\n                        <md-checkbox v-field=\"checkbox.brown\" value=\"brown\" disabled>\r\n                            Brown\r\n                        </md-checkbox>\r\n                    </p>\r\n                </md-checkbox-group>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 223 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(224);
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
	        directives: {
	            field: field_1["default"]
	        },
	        template: template
	    })], Switches);
	    return Switches;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Switches;
	//# sourceMappingURL=index.js.map

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                Selected: <pre>{{switches | json}}</pre>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <p>\r\n                    <md-switch v-field=\"switches[0]\">\r\n                    </md-switch>\r\n                </p>\r\n                <p>\r\n                    <md-switch v-field=\"switches[1]\">\r\n                        <span slot=\"on\">True</span>\r\n                        <span slot=\"off\">False</span>\r\n                    </md-switch>\r\n                </p>\r\n                <p>\r\n                    <md-switch v-field=\"switches[2]\" disabled>\r\n                        <span slot=\"on\">On</span>\r\n                        <span slot=\"off\">Off</span>\r\n                    </md-switch>\r\n                </p>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 225 */
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
	var field_1 = __webpack_require__(12);
	var template = __webpack_require__(226);
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
	        directives: {
	            field: field_1["default"]
	        },
	        template: template
	    })], FileInputs);
	    return FileInputs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FileInputs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"output col s6\">\r\n                <p>\r\n                    Selected file: {{fileName}}\r\n                </p>\r\n                <p>\r\n                    Selected files: {{fileNames}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <form action=\"#\">\r\n                <md-file-input v-field=\"fileName\" name=\"file\"></md-file-input>\r\n                <md-file-input v-field=\"fileNames\" name=\"files\" multiple\r\n                               placeholder=\"Upload one or more files\"></md-file-input>\r\n            </form>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Input fields</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-input-fields></doc-input-fields>\r\n\r\n        <doc-snippet>{{{inputFieldsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Icon Prefixes</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-input-icon-fields></doc-input-icon-fields>\r\n\r\n        <doc-snippet>{{{inputIconFieldsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Textarea</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-textareas></doc-textareas>\r\n\r\n        <doc-snippet>{{{textareasSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Select</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-selects></doc-selects>\r\n\r\n        <doc-snippet>{{{selectsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Checkbox</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-checkboxes></doc-checkboxes>\r\n\r\n        <doc-snippet>{{{checkboxesSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Switches</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-switches></doc-switches>\r\n\r\n        <doc-snippet>{{{switchesSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">File input</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-file-inputs></doc-file-inputs>\r\n\r\n        <doc-snippet>{{{fileInputsSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"firstName\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Placeholder\"</span>&gt;</span>\r\n    First Name\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"lastName\"</span>&gt;</span>\r\n    Last name\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"password\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"password\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s12\"</span>&gt;</span>\r\n    Password\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s12\"</span>&gt;</span>\r\n    Email\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>";

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"firstName\"</span>&gt;</span>\r\n    First Name\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>account_circle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"telephone\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"tel\"</span>&gt;</span>\r\n    Telephone\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"icon-name\"</span>&gt;</span>phone<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-input</span>&gt;</span>";

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-textarea</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">debounce</span>=<span class=\"hljs-value\">\"500\"</span>&gt;</span>\r\n    Textarea:\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-textarea</span>&gt;</span>";

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Choose your option<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Materialize Select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"multipleValue\"</span> <span class=\"hljs-attribute\">multiple</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Choose your option<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Materialize Select<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-select</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"groupsValue\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col s6\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-optgroup</span> <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"team 1\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>Option 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Option 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-optgroup</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-optgroup</span> <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"team 2\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>Option 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-option</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"4\"</span>&gt;</span>Option 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-option</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-optgroup</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"label\"</span>&gt;</span>Optgroups<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-select</span>&gt;</span>\r\n";

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio-group</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"group1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n        Red\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"yellow\"</span>&gt;</span>\r\n        Yellow\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"green\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"with-gap\"</span>&gt;</span>\r\n        Green\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-radio</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"value\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"brown\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Brown\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-radio-group</span>&gt;</span>";

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox-group</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"checkbox\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"checkbox.red\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span>\r\n        Red\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"checkbox.yellow\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"yellow\"</span>&gt;</span>\r\n        Yellow\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"checkbox.filled\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"filled\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"filled-in\"</span>&gt;</span>\r\n        Filled in\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"checkbox.green\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"green\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Green\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-checkbox</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"checkbox.brown\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"brown\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n        Brown\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-checkbox-group</span>&gt;</span>";

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"switches[0]\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"switches[1]\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"on\"</span>&gt;</span>True<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"off\"</span>&gt;</span>False<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-switch</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"switches[2]\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"on\"</span>&gt;</span>On<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"off\"</span>&gt;</span>Off<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-switch</span>&gt;</span>";

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-file-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"fileName\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"file\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-file-input</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-file-input</span> <span class=\"hljs-attribute\">v-field</span>=<span class=\"hljs-value\">\"fileNames\"</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"files\"</span> <span class=\"hljs-attribute\">multiple</span>\r\n               <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Upload one or more files\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-file-input</span>&gt;</span>";

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
	var left_align_1 = __webpack_require__(237);
	var right_align_1 = __webpack_require__(239);
	var center_align_1 = __webpack_require__(241);
	var active_items_1 = __webpack_require__(243);
	var fixed_1 = __webpack_require__(245);
	var dropdown_1 = __webpack_require__(247);
	var icon_links_1 = __webpack_require__(249);
	var buttons_1 = __webpack_require__(251);
	var search_1 = __webpack_require__(253);
	var mobile_collapse_1 = __webpack_require__(255);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(257);
	var Navbars = (function () {
	    function Navbars() {}
	    Navbars.prototype.data = function () {
	        return {
	            navbarRightSnippet: __webpack_require__(258),
	            navbarLeftSnippet: __webpack_require__(259),
	            navbarCenterSnippet: __webpack_require__(260),
	            navbarActiveItemsSnippet: __webpack_require__(261),
	            navbarFixedSnippet: __webpack_require__(262),
	            navbarDropdownSnippet: __webpack_require__(263),
	            navbarIconLinksSnippet: __webpack_require__(264),
	            navbarButtonsSnippet: __webpack_require__(264),
	            navbarSearchSnippet: __webpack_require__(265),
	            navbarMobileCollapseSnippet: __webpack_require__(265)
	        };
	    };
	    Navbars = __decorate([vue_class_component_1["default"]({
	        template: template,
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
	            docNavbarMobileCollapse: mobile_collapse_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Navbars);
	    return Navbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Navbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 237 */
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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var template = __webpack_require__(238);
	var LeftAlignNavbars = (function () {
	    function LeftAlignNavbars() {}
	    LeftAlignNavbars.prototype.data = function () {
	        return {};
	    };
	    LeftAlignNavbars = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        }
	    })], LeftAlignNavbars);
	    return LeftAlignNavbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LeftAlignNavbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" left>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 239 */
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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var template = __webpack_require__(240);
	var RightAlignNavbar = (function () {
	    function RightAlignNavbar() {}
	    RightAlignNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        }
	    })], RightAlignNavbar);
	    return RightAlignNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = RightAlignNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Right align</h2>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 241 */
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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var template = __webpack_require__(242);
	var CenterAlignNavbar = (function () {
	    function CenterAlignNavbar() {}
	    CenterAlignNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        }
	    })], CenterAlignNavbar);
	    return CenterAlignNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CenterAlignNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" center left>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 243 */
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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var template = __webpack_require__(244);
	var ActiveItemNavbar = (function () {
	    function ActiveItemNavbar() {}
	    ActiveItemNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"]
	        }
	    })], ActiveItemNavbar);
	    return ActiveItemNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ActiveItemNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" left center>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\" active>JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 245 */
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
	var badge_1 = __webpack_require__(24);
	var button_1 = __webpack_require__(26);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(246);
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
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdButton: button_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdSnippet: snippet_1["default"]
	        }
	    })], FixedNavbars);
	    return FixedNavbars;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FixedNavbars;
	//# sourceMappingURL=index.js.map

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<md-button @click=\"toggleFixed\">\r\n    Toggle display fixed menu\r\n</md-button>\r\n\r\n<md-navbar title=\"Logo\" left fixed v-if=\"showFixed\" bg-color=\"blue darken-4\">\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">JavaScript</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 247 */
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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var dropdown_1 = __webpack_require__(60);
	var dropdown_item_1 = __webpack_require__(62);
	var dropdown_list_1 = __webpack_require__(61);
	var icon_1 = __webpack_require__(27);
	var events_1 = __webpack_require__(17);
	var template = __webpack_require__(248);
	var DropdownNavbar = (function () {
	    function DropdownNavbar() {}
	    DropdownNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdDropdown: dropdown_1["default"],
	            mdDropdownItem: dropdown_item_1["default"],
	            mdDropdownList: dropdown_list_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], DropdownNavbar);
	    return DropdownNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DropdownNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<md-dropdown-list>\r\n    <md-dropdown-item closing>one</md-dropdown-item>\r\n    <md-dropdown-item closing>two</md-dropdown-item>\r\n    <md-dropdown-item class=\"divider\"></md-dropdown-item>\r\n    <md-dropdown-item closing>three</md-dropdown-item>\r\n</md-dropdown-list>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\" @click=\"broadcast('dropdown::open', $event)\">\r\n        Dropdown<md-icon right>arrow_drop_down</md-icon>\r\n    </md-nav-item>\r\n</md-navbar>\r\n";

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
	var badge_1 = __webpack_require__(24);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(250);
	var IconLinksNavbar = (function () {
	    function IconLinksNavbar() {}
	    IconLinksNavbar.prototype.data = function () {
	        return {};
	    };
	    IconLinksNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], IconLinksNavbar);
	    return IconLinksNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = IconLinksNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>search</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>view_module</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>refresh</md-icon></md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon>more_vert</md-icon></md-nav-item>\r\n</md-navbar>\r\n\r\n<hr/>\r\n\r\n<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon left>search</md-icon>Link with Left Icon</md-nav-item>\r\n    <md-nav-item href=\"javascript:void(0)\"><md-icon right>view_module</md-icon>Link with Right Icon</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 251 */
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
	var badge_1 = __webpack_require__(24);
	var button_1 = __webpack_require__(26);
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(252);
	var ButtonsNavbar = (function () {
	    function ButtonsNavbar() {}
	    ButtonsNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdBadge: badge_1["default"],
	            mdButton: button_1["default"],
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], ButtonsNavbar);
	    return ButtonsNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ButtonsNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<md-navbar title=\"Logo\" right>\r\n    <md-nav-item href=\"javascript:void(0)\">A link</md-nav-item>\r\n    <md-nav-item>\r\n        <md-button slot=\"content\" class=\"waves-effect waves-light\">A button</md-button>\r\n    </md-nav-item>\r\n    <md-nav-item>\r\n        <md-button slot=\"content\" class=\"waves-effect waves-light\" large>A large button</md-button>\r\n    </md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 253 */
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
	var navbar_1 = __webpack_require__(31);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(254);
	var SearchNavbar = (function () {
	    function SearchNavbar() {}
	    SearchNavbar.prototype.data = function () {
	        return {};
	    };
	    SearchNavbar = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdNavbar: navbar_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], SearchNavbar);
	    return SearchNavbar;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = SearchNavbar;
	//# sourceMappingURL=index.js.map

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Search</h2>\r\n\r\n<md-navbar>\r\n    <form slot=\"content\">\r\n        <!-- todo input field -->\r\n        <div class=\"input-field\">\r\n            <input id=\"search\" type=\"search\" required>\r\n            <label for=\"search\"><md-icon>search</md-icon></label>\r\n            <i class=\"material-icons\">close</i>\r\n        </div>\r\n    </form>\r\n</md-navbar>";

/***/ },
/* 255 */
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
	var navbar_1 = __webpack_require__(31);
	var nav_item_1 = __webpack_require__(95);
	var icon_1 = __webpack_require__(27);
	var template = __webpack_require__(256);
	var MobileCollase = (function () {
	    function MobileCollase() {}
	    MobileCollase.prototype.data = function () {
	        return {};
	    };
	    MobileCollase = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdNavbar: navbar_1["default"],
	            mdNavItem: nav_item_1["default"],
	            mdIcon: icon_1["default"]
	        }
	    })], MobileCollase);
	    return MobileCollase;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = MobileCollase;
	//# sourceMappingURL=index.js.map

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<h2 class=\"header\">Mobile Collapse</h2>\r\n\r\n<md-navbar title=\"Logo\" hamburger>\r\n    <md-nav-item href=\"javascript:alert('sass.html')\">Sass</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('badges.html')\">Components</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('collapsible.html')\">Javascript</md-nav-item>\r\n    <md-nav-item href=\"javascript:alert('mobile.html')\">Mobile</md-nav-item>\r\n</md-navbar>\r\n";

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-right></doc-navbar-right>\r\n        <doc-snippet>{{{navbarRightSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Left Aligned</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-left></doc-navbar-left>\r\n        <doc-snippet>{{{navbarLeftSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Center Aligned</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-center></doc-navbar-center>\r\n        <doc-snippet>{{{navbarCenterSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Active items</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-active-items></doc-navbar-active-items>\r\n        <doc-snippet>{{{navbarActiveItemsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Fixes</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-fixed></doc-navbar-fixed>\r\n        <doc-snippet>{{{navbarFixedSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Dropdown Menu</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-dropdown></doc-navbar-dropdown>\r\n        <doc-snippet>{{{navbarDropdownSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Icon Links</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-icon-links></doc-navbar-icon-links>\r\n        <doc-snippet>{{{navbarIconLinksSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Buttons</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-buttons></doc-navbar-buttons>\r\n        <doc-snippet>{{{navbarButtonsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-search></doc-navbar-search>\r\n        <doc-snippet>{{{navbarSearchSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <div class=\"doc-example\">\r\n        <doc-navbar-mobile-collapse></doc-navbar-mobile-collapse>\r\n        <doc-snippet>{{{navbarMobileCollapseSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">left</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">center</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">left</span> <span class=\"hljs-attribute\">center</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span> <span class=\"hljs-attribute\">active</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">left</span> <span class=\"hljs-attribute\">fixed</span> <span class=\"hljs-attribute\">bg-color</span>=<span class=\"hljs-value\">\"blue darken-4\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"sass.html\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"badges.html\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"collapsible.html\"</span>&gt;</span>JavaScript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>one<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>two<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"divider\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-dropdown-item</span> <span class=\"hljs-attribute\">closing</span>&gt;</span>three<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-dropdown-list</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:alert('sass.html')\"</span>&gt;</span>Sass<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:alert('badges.html')\"</span>&gt;</span>Components<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n                 @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('dropdown::open')\"</span>&gt;</span>\r\n        Dropdown<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>arrow_drop_down<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"actionscript\">\r\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">broadcast</span><span class=\"hljs-params\">(event, $event)</span> </span>{\r\n        <span class=\"hljs-keyword\">this</span>.$broadcast(event, $event);\r\n    }\r\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>";

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>view_module<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>refresh<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>more_vert<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Logo\"</span> <span class=\"hljs-attribute\">right</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">left</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Link with Left Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-nav-item</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">right</span>&gt;</span>view_module<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>Link with Right Icon<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-nav-item</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n";

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-navbar</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"content\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"input-field\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"search\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"search\"</span> <span class=\"hljs-attribute\">required</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">label</span> <span class=\"hljs-attribute\">for</span>=<span class=\"hljs-value\">\"search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span>&gt;</span>search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">label</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>close<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-navbar</span>&gt;</span>";

/***/ },
/* 266 */
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
	var snippet_1 = __webpack_require__(123);
	var default_1 = __webpack_require__(267);
	var fixed_footer_1 = __webpack_require__(269);
	var bottom_1 = __webpack_require__(271);
	var events_1 = __webpack_require__(17);
	var template = __webpack_require__(273);
	var Modals = (function () {
	    function Modals() {}
	    Modals.prototype.data = function () {
	        return {
	            defaultModalSnippet: __webpack_require__(274),
	            fixedFooterModalSnippet: __webpack_require__(275),
	            bottomModalSnippet: __webpack_require__(276)
	        };
	    };
	    Modals = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultModal: default_1["default"],
	            docFixedFooterModal: fixed_footer_1["default"],
	            docBottomModal: bottom_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], Modals);
	    return Modals;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Modals;
	//# sourceMappingURL=index.js.map

/***/ },
/* 267 */
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
	var template = __webpack_require__(268);
	var button_1 = __webpack_require__(26);
	var modal_1 = __webpack_require__(93);
	var events_1 = __webpack_require__(17);
	var DefaultModal = (function () {
	    function DefaultModal() {}
	    DefaultModal = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], DefaultModal);
	    return DefaultModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "<md-modal>\r\n    <h4>Modal Header</h4>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n\r\n    <span slot=\"footer\">\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Agree\r\n        </md-button>\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Disagree\r\n        </md-button>\r\n    </span>\r\n</md-modal>\r\n\r\n<md-button href=\"javascript:void(0)\"\r\n     @click=\"broadcast('modal::open')\">\r\n    Modal\r\n</md-button>";

/***/ },
/* 269 */
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
	var template = __webpack_require__(270);
	var button_1 = __webpack_require__(26);
	var modal_1 = __webpack_require__(93);
	var events_1 = __webpack_require__(17);
	var FifexFooterModal = (function () {
	    function FifexFooterModal() {}
	    FifexFooterModal = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], FifexFooterModal);
	    return FifexFooterModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FifexFooterModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "<md-modal class=\"modal-fixed-footer\">\r\n    <h4>Modal Header</h4>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n    <p>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\r\n    </p>\r\n\r\n    <span slot=\"footer\">\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Agree\r\n        </md-button>\r\n        <md-button href=\"javascript:void(0)\" class=\"waves-effect waves-green btn-flat\"\r\n             @click=\"broadcast('modal::close')\">\r\n            Diagree\r\n        </md-button>\r\n    </span>\r\n</md-modal>\r\n\r\n<md-button href=\"javascript:void(0)\"\r\n     @click=\"broadcast('modal::open')\">\r\n    Modal - fixed footer\r\n</md-button>\r\n";

/***/ },
/* 271 */
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
	var template = __webpack_require__(272);
	var collection_1 = __webpack_require__(52);
	var collection_item_1 = __webpack_require__(54);
	var button_1 = __webpack_require__(26);
	var modal_1 = __webpack_require__(93);
	var icon_1 = __webpack_require__(27);
	var events_1 = __webpack_require__(17);
	var BottomModal = (function () {
	    function BottomModal() {}
	    BottomModal = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCollection: collection_1["default"],
	            mdCollectionItem: collection_item_1["default"],
	            mdButton: button_1["default"],
	            mdModal: modal_1["default"],
	            mdIcon: icon_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], BottomModal);
	    return BottomModal;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = BottomModal;
	//# sourceMappingURL=index.js.map

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "<md-modal bottom>\r\n    <md-collection>\r\n        <md-collection-item class=\"avatar\">\r\n            <img src=\"http://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle\">folder</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle green\">assessment</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n        <md-collection-item class=\"avatar\">\r\n            <md-icon class=\"circle red\">play_arrow</md-icon>\r\n            <span class=\"title\">Title</span>\r\n            <p>First Line <br> Second Line </p>\r\n            <a href=\"javascript:void(0)\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\r\n        </md-collection-item>\r\n    </md-collection>\r\n</md-modal>\r\n\r\n<md-button href=\"javascript:void(0)\"\r\n     @click=\"broadcast('modal::open')\">\r\n    Modal - bottom style\r\n</md-button>";

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Modal</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-modal></doc-default-modal>\r\n\r\n        <doc-snippet>{{{defaultModalSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Modal - fixed footer</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-fixed-footer-modal></doc-fixed-footer-modal>\r\n\r\n        <doc-snippet>{{{fixedFooterModalSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Modal - bottom</h2>\r\n    <p>\r\n        TODO: warn keep modals in different component due events\r\n    </p>\r\n    <div class=\"doc-example\">\r\n        <doc-bottom-modal></doc-bottom-modal>\r\n\r\n        <doc-snippet>{{{bottomModalSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n             @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::close')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n     @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"modal-fixed-footer\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n             @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::close')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n     @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - fixed footer\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n";

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- Simple --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">bottom</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span>&gt;</span>Modal Header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>A bunch of text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"footer\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"waves-effect waves-green btn-flat\"</span>\r\n             @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::close')\"</span>&gt;</span>\r\n            Agree\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n     @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - bottom style\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- Complex --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-modal</span> <span class=\"hljs-attribute\">bottom</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://materializecss.com/images/yuna.jpg\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle\"</span>&gt;</span>folder<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle green\"</span>&gt;</span>assessment<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-collection-item</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"avatar\"</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-icon</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"circle red\"</span>&gt;</span>play_arrow<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-icon</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"title\"</span>&gt;</span>Title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>First Line <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> Second Line <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"secondary-content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">i</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"material-icons\"</span>&gt;</span>grade<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection-item</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-collection</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-modal</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"javascript:void(0)\"</span>\r\n     @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('modal::open')\"</span>&gt;</span>\r\n    Modal - bottom style\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 277 */
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
	var toasts_1 = __webpack_require__(278);
	var tooltips_1 = __webpack_require__(280);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(282);
	var Dialogs = (function () {
	    function Dialogs() {}
	    Dialogs.prototype.data = function () {
	        return {
	            toastsSnippet: __webpack_require__(283),
	            tooltipsSnippet: __webpack_require__(284)
	        };
	    };
	    Dialogs = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docToasts: toasts_1["default"],
	            docTooltips: tooltips_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Dialogs);
	    return Dialogs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Dialogs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 278 */
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
	var template = __webpack_require__(279);
	var toast_1 = __webpack_require__(19);
	var button_1 = __webpack_require__(26);
	var Toasts = (function () {
	    function Toasts() {}
	    Toasts.prototype.makeAToast = function (msg) {
	        var self = this;
	        self.toast(msg, 4000, '', function () {
	            alert('Your toast was dismissed');
	        });
	    };
	    Toasts = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdButton: button_1["default"]
	        },
	        mixins: [toast_1["default"]]
	    })], Toasts);
	    return Toasts;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Toasts;
	//# sourceMappingURL=index.js.map

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "<p>\r\n    <md-button @click=\"toast('I am a toast!', 4000)\">\r\n        TOAST!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"toast('<span>I am toast content</span>', 5000)\">\r\n        TOAST with content!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"makeAToast('I am toast')\">\r\n        TOAST with callback!\r\n    </md-button>\r\n</p>\r\n\r\n<p>\r\n    <md-button @click=\"toast('I am a toast!', 3000, 'rounded')\">\r\n        Rounded TOAST\r\n    </md-button>\r\n</p>\r\n\r\n";

/***/ },
/* 280 */
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
	var template = __webpack_require__(281);
	var tooltip_1 = __webpack_require__(22);
	var button_1 = __webpack_require__(26);
	var Tooltips = (function () {
	    function Tooltips() {}
	    Tooltips = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdButton: button_1["default"]
	        },
	        mixins: [tooltip_1["default"]]
	    })], Tooltips);
	    return Tooltips;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tooltips;
	//# sourceMappingURL=index.js.map

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am bottom tooltip!', 'bottom')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            BOTTOM\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am top tooltip!', 'top')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            TOP\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am left tooltip!', 'left')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            LEFT\r\n        </md-button>\r\n    </p>\r\n\r\n    <p>\r\n        <md-button @mouseover=\"tooltip($event, 'I am right tooltip!', 'right')\"\r\n             class=\"col s4 offset-s4 l2 offset-l1\">\r\n            RIGHT\r\n        </md-button>\r\n    </p>\r\n</div>\r\n";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Toasts</h2>\r\n    <p>\r\n        Toasts are provided by mixin\r\n    </p>\r\n    <div class=\"doc-example\">\r\n        <doc-toasts></doc-toasts>\r\n\r\n        <doc-snippet>{{{toastsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Tooltips</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-tooltips></doc-tooltips>\r\n\r\n        <doc-snippet>{{{tooltipsSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('I am a toast!', 4000)\"</span>&gt;</span>\r\n    // this.toast(message, displayLength, className, completeCallback);\r\n    TOAST!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('&lt;span&gt;I am toast content&lt;/span&gt;', 5000)\"</span>&gt;</span>\r\n    TOAST with content!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"makeAToast('I am toast')\"</span>&gt;</span>\r\n    // makeATast: function(msg) {\r\n    //   this.toast(msg, 4000, '', function() {\r\n    //     alert('Your toast was dismissed');\r\n    //   })\r\n    // }\r\n    TOAST with callback!\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"toast('I am a toast!', 3000, 'rounded')\"</span>&gt;</span>\r\n    Rounded TOAST\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n\r\n";

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">mouseover</span>=<span class=\"hljs-value\">\"tooltip($event, 'I am right tooltip!', 'bottom')\"</span>&gt;</span>\r\n    BOTTOM\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>";

/***/ },
/* 285 */
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
	var snippet_1 = __webpack_require__(123);
	var images_1 = __webpack_require__(286);
	var sliders_1 = __webpack_require__(288);
	var template = __webpack_require__(290);
	var Media = (function () {
	    function Media() {}
	    Media.prototype.data = function () {
	        return {
	            imagesSnippet: __webpack_require__(291),
	            slidesSnippet: __webpack_require__(292)
	        };
	    };
	    Media = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docSnippet: snippet_1["default"],
	            docImages: images_1["default"],
	            docSliders: sliders_1["default"]
	        }
	    })], Media);
	    return Media;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Media;
	//# sourceMappingURL=index.js.map

/***/ },
/* 286 */
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
	var template = __webpack_require__(287);
	var image_1 = __webpack_require__(86);
	var Image = (function () {
	    function Image() {}
	    Image = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdImage: image_1["default"]
	        }
	    })], Image);
	    return Image;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Image;
	//# sourceMappingURL=index.js.map

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = "<md-image src=\"http://lorempixel.com/512/512/\" width=\"512\" height=\"512\"></md-image>\r\n\r\n<md-image src=\"http://lorempixel.com/512/1024/\"\r\n          caption=\"A picture ...\"\r\n          width=\"256\" height=\"512\"></md-image>\r\n";

/***/ },
/* 288 */
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
	var template = __webpack_require__(289);
	var slider_1 = __webpack_require__(101);
	var slide_1 = __webpack_require__(99);
	var Slides = (function () {
	    function Slides() {}
	    Slides = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdSlider: slider_1["default"],
	            mdSlide: slide_1["default"]
	        }
	    })], Slides);
	    return Slides;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Slides;
	//# sourceMappingURL=index.js.map

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<md-slider>\r\n    <md-slide img=\"http://lorempixel.com/580/250/nature/1\" align=\"left\">\r\n        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>\r\n    </md-slide>\r\n    <md-slide img=\"http://lorempixel.com/580/250/nature/2\" align=\"right\">\r\n        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h3>\r\n    </md-slide>\r\n    <md-slide img=\"http://lorempixel.com/580/250/nature/3\" align=\"center\">\r\n        <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</h3>\r\n    </md-slide>\r\n    <md-slide img=\"http://lorempixel.com/580/250/nature/4\" align=\"left\">\r\n        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>\r\n    </md-slide>\r\n</md-slider>";

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Material box</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-images></doc-images>\r\n\r\n        <doc-snippet>{{{imagesSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Slides</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-sliders></doc-sliders>\r\n\r\n        <doc-snippet>{{{slidesSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-image</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lorempixel.com/512/512/\"</span>\r\n          <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">\"512\"</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">\"512\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-image</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-image</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://lorempixel.com/512/1024/\"</span>\r\n          <span class=\"hljs-attribute\">caption</span>=<span class=\"hljs-value\">\"A picture ...\"</span>\r\n          <span class=\"hljs-attribute\">width</span>=<span class=\"hljs-value\">\"256\"</span> <span class=\"hljs-attribute\">height</span>=<span class=\"hljs-value\">\"512\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-image</span>&gt;</span>\r\n";

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slider</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"http://lorempixel.com/580/250/nature/1\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"http://lorempixel.com/580/250/nature/2\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"right\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"http://lorempixel.com/580/250/nature/3\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"center\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-slide</span> <span class=\"hljs-attribute\">img</span>=<span class=\"hljs-value\">\"http://lorempixel.com/580/250/nature/4\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slide</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-slider</span>&gt;</span>";

/***/ },
/* 293 */
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
	var snippet_1 = __webpack_require__(123);
	var default_1 = __webpack_require__(294);
	var scrollable_1 = __webpack_require__(296);
	var template = __webpack_require__(298);
	var Tabs = (function () {
	    function Tabs() {}
	    Tabs.prototype.data = function () {
	        return {
	            defaultTabsSnippet: __webpack_require__(299),
	            docScrollableTabsSnippet: __webpack_require__(300)
	        };
	    };
	    Tabs = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultTabs: default_1["default"],
	            docScrollableTabs: scrollable_1["default"]
	        }
	    })], Tabs);
	    return Tabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Tabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 294 */
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
	var template = __webpack_require__(295);
	var tabs_1 = __webpack_require__(107);
	var tab_1 = __webpack_require__(105);
	var button_1 = __webpack_require__(26);
	var events_1 = __webpack_require__(17);
	var DefaultTabs = (function () {
	    function DefaultTabs() {}
	    DefaultTabs.prototype.data = function () {
	        return {
	            tab: {
	                id: null,
	                text: null
	            }
	        };
	    };
	    DefaultTabs.prototype.selected = function (tab) {
	        this.tab.id = tab.id;
	        this.tab.text = tab.$el.textContent.trim();
	    };
	    DefaultTabs = __decorate([vue_class_component_1["default"]({
	        template: template,
	        events: {
	            'tabs::on-select': function tabsOnSelect(tab) {
	                this.selected(tab);
	            }
	        },
	        components: {
	            mdTabs: tabs_1["default"],
	            mdTab: tab_1["default"],
	            mdButton: button_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], DefaultTabs);
	    return DefaultTabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultTabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<md-tabs class=\"z-depth-1\">\r\n    <md-tab><a href=\"#!/tabs/1\">Test 1</a></md-tab>\r\n    <md-tab name=\"second\"><a href=\"#!/tabs/2\">Test 2</a></md-tab>\r\n    <md-tab disabled><a href=\"#!/tabs/3\">Disabled Tab</a></md-tab>\r\n    <md-tab><a href=\"#!/tabs/4\">Test 4</a></md-tab>\r\n    <md-tab><a href=\"#!/tabs/5\">Test 5</a></md-tab>\r\n</md-tabs>\r\n\r\n<div style=\"padding: 10px\">\r\n    Selected:\r\n    {{tab | json}}\r\n</div>\r\n<div style=\"padding: 10px\">\r\n    <md-button @click=\"broadcast('tab::select', 0)\">\r\n        Select TEST 1\r\n    </md-button>\r\n</div>\r\n";

/***/ },
/* 296 */
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
	var template = __webpack_require__(297);
	var tabs_1 = __webpack_require__(107);
	var tab_1 = __webpack_require__(105);
	var ScrollableTabs = (function () {
	    function ScrollableTabs() {}
	    ScrollableTabs = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdTabs: tabs_1["default"],
	            mdTab: tab_1["default"]
	        }
	    })], ScrollableTabs);
	    return ScrollableTabs;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ScrollableTabs;
	//# sourceMappingURL=index.js.map

/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = "<md-tabs class=\"z-depth-1\">\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\" disabled><a href=\"javascript:void(0)\">Disabled Tab</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 1</a></md-tab>\r\n    <md-tab class=\"s3\"><a class=\"active\" href=\"javascript:void(0)\">Test 2</a></md-tab>\r\n    <md-tab class=\"s3\" disabled><a href=\"javascript:void(0)\">Disabled Tab</a></md-tab>\r\n    <md-tab class=\"s3\"><a href=\"javascript:void(0)\">Test 4</a></md-tab>\r\n</md-tabs>\r\n";

/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Tabs</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-tabs></doc-default-tabs>\r\n\r\n        <doc-snippet>{{{defaultTabsSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Scrollable</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-scrollable-tabs></doc-scrollable-tabs>\r\n\r\n        <doc-snippet>{{{docScrollableTabsSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tabs</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"z-depth-1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/1\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"second\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/2\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/3\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/4\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#!/tabs/5\"</span>&gt;</span>Test 5<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tabs</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-button</span> @<span class=\"hljs-attribute\">click</span>=<span class=\"hljs-value\">\"broadcast('tab::select', 0)\"</span>&gt;</span>\r\n    Select TEST 1\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-button</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">script</span>&gt;</span><span class=\"actionscript\">\r\n    <span class=\"hljs-keyword\">var</span> component = {\r\n        events: {\r\n            <span class=\"hljs-string\">'tabs::on-select'</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(tab)</span> </span>{\r\n                <span class=\"hljs-keyword\">this</span>.selected = tab;\r\n            }\r\n        }\r\n    }\r\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">script</span>&gt;</span>";

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tabs</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"z-depth-1\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"active\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Disabled Tab<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-tab</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"s3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Test 4<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-tabs</span>&gt;</span>\r\n";

/***/ },
/* 301 */
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
	var snippet_1 = __webpack_require__(123);
	var default_1 = __webpack_require__(302);
	var events_1 = __webpack_require__(17);
	var template = __webpack_require__(304);
	var Paginations = (function () {
	    function Paginations() {}
	    Paginations.prototype.data = function () {
	        return {
	            defaultPaginationSnippet: __webpack_require__(305)
	        };
	    };
	    Paginations = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docSnippet: snippet_1["default"],
	            docDefaultPagination: default_1["default"]
	        },
	        mixins: [events_1["default"]]
	    })], Paginations);
	    return Paginations;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Paginations;
	//# sourceMappingURL=index.js.map

/***/ },
/* 302 */
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
	var template = __webpack_require__(303);
	var pagination_1 = __webpack_require__(97);
	var DefaultPagination = (function () {
	    function DefaultPagination() {}
	    DefaultPagination = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdPagination: pagination_1["default"]
	        }
	    })], DefaultPagination);
	    return DefaultPagination;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DefaultPagination;
	//# sourceMappingURL=index.js.map

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = "<md-pagination :page-size=\"5\" :total-records=\"50\"></md-pagination>\r\n\r\n<md-pagination :page-size=\"5\" :total-records=\"50\" :display-pages=\"10\" item-class=\"waves-effect\"></md-pagination>";

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h2 class=\"header\">Pagination</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-default-pagination></doc-default-pagination>\r\n\r\n        <doc-snippet>{{{defaultPaginationSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-pagination</span> <span class=\"hljs-attribute\">:page-size</span>=<span class=\"hljs-value\">\"5\"</span> <span class=\"hljs-attribute\">:total-records</span>=<span class=\"hljs-value\">\"50\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-pagination</span>&gt;</span>\r\n\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-pagination</span> <span class=\"hljs-attribute\">:page-size</span>=<span class=\"hljs-value\">\"5\"</span> <span class=\"hljs-attribute\">:total-records</span>=<span class=\"hljs-value\">\"50\"</span> <span class=\"hljs-attribute\">:display-pages</span>=<span class=\"hljs-value\">\"10\"</span> <span class=\"hljs-attribute\">item-class</span>=<span class=\"hljs-value\">\"waves-effect\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-pagination</span>&gt;</span>";

/***/ },
/* 306 */
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
	var linear_determinate_1 = __webpack_require__(307);
	var linear_indeterminate_1 = __webpack_require__(309);
	var circular_1 = __webpack_require__(311);
	var flashing_1 = __webpack_require__(313);
	var snippet_1 = __webpack_require__(123);
	var template = __webpack_require__(315);
	var Preloaders = (function () {
	    function Preloaders() {}
	    Preloaders.prototype.data = function () {
	        return {
	            linearDeterminateSnippet: __webpack_require__(316),
	            linearIndeterminateSnippet: __webpack_require__(317),
	            circularSnippet: __webpack_require__(318),
	            flashingSnippet: __webpack_require__(319)
	        };
	    };
	    Preloaders = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            docLinearDeterminate: linear_determinate_1["default"],
	            docLinearIndeterminate: linear_indeterminate_1["default"],
	            docCircular: circular_1["default"],
	            docFlashing: flashing_1["default"],
	            docSnippet: snippet_1["default"]
	        }
	    })], Preloaders);
	    return Preloaders;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Preloaders;
	//# sourceMappingURL=index.js.map

/***/ },
/* 307 */
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
	var template = __webpack_require__(308);
	var linear_preloader_1 = __webpack_require__(91);
	var LinearDeterminatePreloader = (function () {
	    function LinearDeterminatePreloader() {}
	    LinearDeterminatePreloader = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdLinearPreloader: linear_preloader_1["default"]
	        }
	    })], LinearDeterminatePreloader);
	    return LinearDeterminatePreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearDeterminatePreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = "<md-linear-preloader value=\"70\"></md-linear-preloader>";

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
	var template = __webpack_require__(310);
	var linear_preloader_1 = __webpack_require__(91);
	var LinearIndeterminatePreloader = (function () {
	    function LinearIndeterminatePreloader() {}
	    LinearIndeterminatePreloader = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdLinearPreloader: linear_preloader_1["default"]
	        }
	    })], LinearIndeterminatePreloader);
	    return LinearIndeterminatePreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = LinearIndeterminatePreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = "<md-linear-preloader></md-linear-preloader>";

/***/ },
/* 311 */
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
	var template = __webpack_require__(312);
	var circural_preloader_1 = __webpack_require__(46);
	var CircularPreloader = (function () {
	    function CircularPreloader() {}
	    CircularPreloader = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCircularPreloader: circural_preloader_1["default"]
	        }
	    })], CircularPreloader);
	    return CircularPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = CircularPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 312 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader size=\"large\" color=\"blue\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader color=\"red\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader size=\"small\" color=\"green\"></md-circular-preloader>\r\n    </div>\r\n</div>";

/***/ },
/* 313 */
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
	var template = __webpack_require__(314);
	var circural_preloader_1 = __webpack_require__(46);
	var FlashingPreloader = (function () {
	    function FlashingPreloader() {}
	    FlashingPreloader = __decorate([vue_class_component_1["default"]({
	        template: template,
	        components: {
	            mdCircularPreloader: circural_preloader_1["default"]
	        }
	    })], FlashingPreloader);
	    return FlashingPreloader;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = FlashingPreloader;
	//# sourceMappingURL=index.js.map

/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing size=\"large\"></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing></md-circular-preloader>\r\n    </div>\r\n    <div class=\"col m4 s12\">\r\n        <md-circular-preloader flashing size=\"small\"></md-circular-preloader>\r\n    </div>\r\n</div>";

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = "<div v-cloak>\r\n    <h1>Linear</h1>\r\n\r\n    <h2 class=\"header\">Determinate</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-linear-determinate></doc-linear-determinate>\r\n\r\n        <doc-snippet>{{{linearDeterminateSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Indeterminate</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-linear-indeterminate></doc-linear-indeterminate>\r\n\r\n        <doc-snippet>{{{linearIndeterminateSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Circular</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-circular></doc-circular>\r\n\r\n        <doc-snippet>{{{circularSnippet}}}</doc-snippet>\r\n    </div>\r\n\r\n    <h2 class=\"header\">Flashing</h2>\r\n    <div class=\"doc-example\">\r\n        <doc-flashing></doc-flashing>\r\n\r\n        <doc-snippet>{{{flashingSnippet}}}</doc-snippet>\r\n    </div>\r\n</div>";

/***/ },
/* 316 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-linear-preloader</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"70\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span>";

/***/ },
/* 317 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-linear-preloader</span>&gt;</span>";

/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"large\"</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"blue\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"red\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"small\"</span> <span class=\"hljs-attribute\">color</span>=<span class=\"hljs-value\">\"green\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n";

/***/ },
/* 319 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"large\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">md-circular-preloader</span> <span class=\"hljs-attribute\">flashing</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">md-circular-preloader</span>&gt;</span>";

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/ts.d.ts"/>
	"use strict";
	var VueModule = __webpack_require__(1);
	var Vue = VueModule;
	var pages = __webpack_require__(4);
	var components_1 = __webpack_require__(7);
	module.exports = Vue.extend({
	    components: components_1['default'],
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
/* 321 */
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
	var template = __webpack_require__(322);
	var Forms = (function () {
	    function Forms() {}
	    Forms = __decorate([vue_class_component_1["default"]({
	        props: ['href'],
	        template: template
	    })], Forms);
	    return Forms;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = Forms;
	//# sourceMappingURL=index.js.map

/***/ },
/* 322 */
/***/ function(module, exports) {

	module.exports = "<a>\r\n    <img src=\"http://vuejs.org/images/logo.png\" height=\"28\" alt=\"vue\">\r\n</a>";

/***/ },
/* 323 */
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
	var template = __webpack_require__(324);
	var MaerializeLogo = (function () {
	    function MaerializeLogo() {}
	    MaerializeLogo = __decorate([vue_class_component_1["default"]({
	        props: ['href'],
	        template: template
	    })], MaerializeLogo);
	    return MaerializeLogo;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = MaerializeLogo;
	//# sourceMappingURL=index.js.map

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "<a :href=\"href\" target=\"_blank\">\r\n    <img src=\"http://materializecss.com/images/favicon/favicon-32x32.png\" height=\"32\" alt=\"materialize\"/>\r\n</a>";

/***/ },
/* 325 */
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
	var ApiDoc = (function () {
	    function ApiDoc() {}
	    ApiDoc = __decorate([vue_class_component_1["default"]({
	        props: {
	            api: {
	                required: true
	            }
	        },
	        template: __webpack_require__(326)
	    })], ApiDoc);
	    return ApiDoc;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = ApiDoc;
	//# sourceMappingURL=index.js.map

/***/ },
/* 326 */
/***/ function(module, exports) {

	module.exports = "\r\n<div v-if=\"api.properties && api.properties.length\">\r\n    <h2>Properties</h2>\r\n    <table class=\"striped\">\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                    Name\r\n                </th>\r\n                <th>\r\n                    Type\r\n                </th>\r\n                <th>\r\n                    Required\r\n                </th>\r\n                <th>\r\n                    Two way\r\n                </th>\r\n                <th>\r\n                    Default\r\n                </th>\r\n                <th>\r\n                    Description\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr v-for=\"property in api.properties\">\r\n                <td>{{property.name}}</td>\r\n                <td>{{property.type}}</td>\r\n                <td>{{property.required}}</td>\r\n                <td>{{property.twoWay}}</td>\r\n                <td>{{property.default | json}}</td>\r\n                <td>{{property.description}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div v-if=\"api.slots && api.slots.length\">\r\n    <h2>Slots</h2>\r\n    <table class=\"striped\">\r\n        <thead>\r\n            <th>\r\n                Name\r\n            </th>\r\n            <th>\r\n                Description\r\n            </th>\r\n        </thead>\r\n        <tbody>\r\n            <tr v-for=\"slot in api.slots\">\r\n                <td>\r\n                    {{slot.name ? slot.name : \"\\\"\\\"\"}}\r\n                </td>\r\n                <td>\r\n                    {{slot.description}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div v-if=\"api.events && api.events.length\">\r\n    <h2>Events</h2>\r\n    <table>\r\n        <tbody>\r\n        <tr v-for=\"event in api.events\">\r\n\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

/***/ },
/* 327 */
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
	var DocSources = (function () {
	    function DocSources() {}
	    DocSources = __decorate([vue_class_component_1["default"]({
	        props: {
	            src: {
	                required: true
	            }
	        },
	        components: components_1["default"],
	        template: __webpack_require__(328)
	    })], DocSources);
	    return DocSources;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DocSources;
	//# sourceMappingURL=index.js.map

/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = "<div class=\"doc-sources\">\r\n    <md-collapsible popout expendable>\r\n        <md-collapsible-item v-if=\"src.template\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>code</md-icon>Template\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.template}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item v-if=\"src.script\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>settings_ethernet</md-icon>Script\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.script}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n        <md-collapsible-item v-if=\"src.style\" expanded>\r\n            <div slot=\"header\">\r\n                <md-icon>style</md-icon>Style\r\n            </div>\r\n            <div slot=\"body\">\r\n                <pre>{{{src.style}}}</pre>\r\n            </div>\r\n        </md-collapsible-item>\r\n    </md-collapsible>\r\n</div>";

/***/ },
/* 329 */
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
	    Object.defineProperty(DocTab.prototype, "slotShowcase", {
	        get: function get() {
	            return 'showcase' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DocTab.prototype, "slotApi", {
	        get: function get() {
	            return 'api' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DocTab.prototype, "slotSources", {
	        get: function get() {
	            return 'sources' in this._slotContents;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        template: __webpack_require__(330)
	    })], DocTab);
	    return DocTab;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = DocTab;
	//# sourceMappingURL=index.js.map

/***/ },
/* 330 */
/***/ function(module, exports) {

	module.exports = "<md-tabs :active.sync=\"active\">\r\n    <md-tab v-if=\"slotShowcase\" name=\"showcase\"><a v-link=\"{path: basePath + '/showcase'}\">Showcase</a></md-tab>\r\n    <md-tab v-if=\"slotApi\" name=\"api\"><a v-link=\"{path: basePath + '/api'}\">API</a></md-tab>\r\n    <md-tab v-if=\"slotSources\" name=\"sources\"><a v-link=\"{path: basePath + '/sources'}\">Sources</a></md-tab>\r\n\r\n    <div slot=\"contents\">\r\n        <div v-show=\"active == 'showcase'\" class=\"show-case\">\r\n            <slot name=\"showcase\"></slot>\r\n        </div>\r\n\r\n        <div v-show=\"active == 'api'\" class=\"api\">\r\n            <slot name=\"api\"></slot>\r\n        </div>\r\n\r\n        <div v-show=\"active == 'sources'\" class=\"sources\">\r\n            <slot name=\"sources\"></slot>\r\n        </div>\r\n    </div>\r\n</md-tabs>";

/***/ },
/* 331 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-materialize-components.js.map
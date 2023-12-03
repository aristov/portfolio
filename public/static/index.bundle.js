/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_icons_css_lddesign_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_icons_css_lddesign_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html
{
  height: 100%;
}
body
{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #000;
}
body,
body #root
{
  height: 100%;
}
a[href]
{
  color: #00a;
  text-decoration: none;
}
a[href]:hover,
a[href]:focus
{
  color: #00f;
}
.icon::before
{
  margin: 0;
}
.appear
{
  transition: opacity .3s, transform .3s;
}
[aria-busy=true] .appear
{
  transform: translateY(20px);
  opacity: 0;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#lddesign" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face
{
  font-family: 'lddesign';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'),
  url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
  url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'),
  url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype'),
  url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'lddesign';
    src: url('../font/lddesign.svg?87942404#lddesign') format('svg');
  }
}
*/

[class^='icon-']:before, [class*=' icon-']:before
{
  font-family: 'lddesign';
  font-style: normal;
  font-weight: normal;
  speak: never;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.icon-phone:before
{
  content: '\\e804';
}
/* '' */
.icon-mail:before
{
  content: '\\e805';
}
/* '' */
.icon-cancel:before
{
  content: '\\e806';
}
/* '' */
.icon-livejournal:before
{
  content: '\\e809';
}
/* '' */
.icon-left-big:before
{
  content: '\\e80a';
}
/* '' */
.icon-facebook:before
{
  content: '\\f09a';
}
/* '' */
.icon-menu:before
{
  content: '\\f0c9';
}
/* '' */
.icon-angle-left:before
{
  content: '\\f104';
}
/* '' */
.icon-angle-right:before
{
  content: '\\f105';
}
/* '' */
.icon-instagram:before
{
  content: '\\f16d';
}
/* '' */
.icon-vkontakte:before
{
  content: '\\f189';
}
/* '' */
.icon-file-pdf:before
{
  content: '\\f1c1';
}
/* '' */
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6b6b7cf48fa48678d9a.eot?87942404";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "18492da502d2c4437fa6.woff2?87942404";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0ae699dbf59e5d9be51.woff?87942404";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5d31a8ef368e2ffa5ba.ttf?87942404";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7ed47dd3aefe559d96ad.svg?87942404";

/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _Inner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _SlideShow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _AlbumGroup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _DocumentList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _Contacts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var _Blog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78);
/* harmony import */ var _ErrorContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84);














class App extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'App'

  state = {
    open : false,
    data : null,
  }

  render() {
    let path = decodeURIComponent(location.pathname)
    path = path.replace(/\/$/, '')
    path ||= '/'
    this.classList = [
      this.state.open && 'open',
      path === '/' && 'homepage',
    ]
    return new _Inner_js__WEBPACK_IMPORTED_MODULE_2__.Inner([
      new _Header_js__WEBPACK_IMPORTED_MODULE_1__.Header({
        data : this.state.data,
        open : this.state.open,
        toggleNav : this.toggleNav,
        closeNav : this.closeNav,
      }),
      (0,_router_js__WEBPACK_IMPORTED_MODULE_10__.router)([
        {
          path : /^\/[а-яёй\w\-]+\/[а-яёй\w\-]+$/i,
          render : () => new _SlideShow_js__WEBPACK_IMPORTED_MODULE_4__.SlideShow({
            key : 'slideshow',
            path,
          }),
        },
        ..._api_js__WEBPACK_IMPORTED_MODULE_11__["default"].config.sections.map(section => ({
          path : section.path,
          render : () => new _AlbumGroup_js__WEBPACK_IMPORTED_MODULE_5__.AlbumGroup({
            path,
            key : path,
          }),
        })),
        {
          path : '/Проектирование',
          render : () => new _DocumentList_js__WEBPACK_IMPORTED_MODULE_6__.DocumentList({
            key : 'documentlist',
          }),
        },
        {
          path : '/Блог',
          render : () => new _Blog_js__WEBPACK_IMPORTED_MODULE_8__.Blog({
            key : 'blog',
          }),
        },
        {
          path : '/Контакты',
          render : () => new _Contacts_js__WEBPACK_IMPORTED_MODULE_7__.Contacts({
            key : 'contacts',
          }),
        },
        {
          path : '/',
          render : () => new _SlideShow_js__WEBPACK_IMPORTED_MODULE_4__.SlideShow({
            key : 'slideshow',
            path : '/',
            auto : true,
          }),
        },
        {
          path : /.*/,
          render : () => new _Main_js__WEBPACK_IMPORTED_MODULE_3__.Main({
            key : 'error',
            children : new _ErrorContent_js__WEBPACK_IMPORTED_MODULE_9__.ErrorContent,
          }),
        },
      ]),
      new Backdrop({ onclick : this.closeNav }),
    ])
  }

  mount() {
    window.onpopstate = () => this.setState({})
    document.onclick = e => {
      e.target.closest('.Link') && this.setState({})
    }
  }

  destroy() {
    window.onpopstate = null
    document.onclick = null
  }

  toggleNav = () => {
    this.setState(state => ({ open : !state.open }))
  }

  closeNav = () => {
    this.setState({ open : false })
  }
}

class Backdrop extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'Backdrop'
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AriaType: () => (/* reexport safe */ _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__.AriaType),
/* harmony export */   AttrType: () => (/* reexport safe */ _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__.AttrType),
/* harmony export */   Attributes: () => (/* reexport safe */ _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__.Attributes),
/* harmony export */   BooleanType: () => (/* reexport safe */ _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__.BooleanType),
/* harmony export */   Class: () => (/* reexport safe */ _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__.Class),
/* harmony export */   ClassList: () => (/* reexport safe */ _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__.ClassList),
/* harmony export */   Context: () => (/* reexport safe */ _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__.Context),
/* harmony export */   Dataset: () => (/* reexport safe */ _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__.Dataset),
/* harmony export */   ElemType: () => (/* reexport safe */ _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__.ElemType),
/* harmony export */   EventType: () => (/* reexport safe */ _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__.EventType),
/* harmony export */   HtmlA: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlA),
/* harmony export */   HtmlAbbr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAbbr),
/* harmony export */   HtmlAddress: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAddress),
/* harmony export */   HtmlArea: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArea),
/* harmony export */   HtmlArticle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlArticle),
/* harmony export */   HtmlAside: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAside),
/* harmony export */   HtmlAudio: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlAudio),
/* harmony export */   HtmlB: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlB),
/* harmony export */   HtmlBase: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBase),
/* harmony export */   HtmlBdi: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdi),
/* harmony export */   HtmlBdo: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBdo),
/* harmony export */   HtmlBlockQuote: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBlockQuote),
/* harmony export */   HtmlBody: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBody),
/* harmony export */   HtmlBr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlBr),
/* harmony export */   HtmlButton: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlButton),
/* harmony export */   HtmlCanvas: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCanvas),
/* harmony export */   HtmlCaption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCaption),
/* harmony export */   HtmlCite: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCite),
/* harmony export */   HtmlCode: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCode),
/* harmony export */   HtmlCol: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlCol),
/* harmony export */   HtmlColGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlColGroup),
/* harmony export */   HtmlData: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlData),
/* harmony export */   HtmlDataList: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDataList),
/* harmony export */   HtmlDd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDd),
/* harmony export */   HtmlDel: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDel),
/* harmony export */   HtmlDetails: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDetails),
/* harmony export */   HtmlDfn: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDfn),
/* harmony export */   HtmlDialog: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDialog),
/* harmony export */   HtmlDiv: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDiv),
/* harmony export */   HtmlDl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDl),
/* harmony export */   HtmlDt: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlDt),
/* harmony export */   HtmlEm: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEm),
/* harmony export */   HtmlEmbed: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlEmbed),
/* harmony export */   HtmlFieldSet: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFieldSet),
/* harmony export */   HtmlFigCaption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigCaption),
/* harmony export */   HtmlFigure: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFigure),
/* harmony export */   HtmlFooter: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlFooter),
/* harmony export */   HtmlForm: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlForm),
/* harmony export */   HtmlH1: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH1),
/* harmony export */   HtmlH2: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH2),
/* harmony export */   HtmlH3: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH3),
/* harmony export */   HtmlH4: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH4),
/* harmony export */   HtmlH5: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH5),
/* harmony export */   HtmlH6: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlH6),
/* harmony export */   HtmlHGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHGroup),
/* harmony export */   HtmlHead: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHead),
/* harmony export */   HtmlHeader: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHeader),
/* harmony export */   HtmlHr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHr),
/* harmony export */   HtmlHtml: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlHtml),
/* harmony export */   HtmlI: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlI),
/* harmony export */   HtmlIFrame: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIFrame),
/* harmony export */   HtmlImg: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlImg),
/* harmony export */   HtmlInput: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlInput),
/* harmony export */   HtmlIns: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlIns),
/* harmony export */   HtmlKbd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlKbd),
/* harmony export */   HtmlLabel: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLabel),
/* harmony export */   HtmlLegend: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLegend),
/* harmony export */   HtmlLi: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLi),
/* harmony export */   HtmlLink: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlLink),
/* harmony export */   HtmlMain: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMain),
/* harmony export */   HtmlMap: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMap),
/* harmony export */   HtmlMark: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMark),
/* harmony export */   HtmlMenu: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMenu),
/* harmony export */   HtmlMeta: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeta),
/* harmony export */   HtmlMeter: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlMeter),
/* harmony export */   HtmlNav: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNav),
/* harmony export */   HtmlNoScript: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlNoScript),
/* harmony export */   HtmlObject: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlObject),
/* harmony export */   HtmlOl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOl),
/* harmony export */   HtmlOptGroup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOptGroup),
/* harmony export */   HtmlOption: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOption),
/* harmony export */   HtmlOutput: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlOutput),
/* harmony export */   HtmlP: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlP),
/* harmony export */   HtmlParam: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlParam),
/* harmony export */   HtmlPicture: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPicture),
/* harmony export */   HtmlPre: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlPre),
/* harmony export */   HtmlProgress: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlProgress),
/* harmony export */   HtmlQ: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlQ),
/* harmony export */   HtmlRp: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRp),
/* harmony export */   HtmlRt: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRt),
/* harmony export */   HtmlRuby: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlRuby),
/* harmony export */   HtmlS: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlS),
/* harmony export */   HtmlSamp: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSamp),
/* harmony export */   HtmlScript: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlScript),
/* harmony export */   HtmlSection: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSection),
/* harmony export */   HtmlSelect: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSelect),
/* harmony export */   HtmlSmall: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSmall),
/* harmony export */   HtmlSource: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSource),
/* harmony export */   HtmlSpan: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSpan),
/* harmony export */   HtmlStrong: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStrong),
/* harmony export */   HtmlStyle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlStyle),
/* harmony export */   HtmlSub: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSub),
/* harmony export */   HtmlSummary: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSummary),
/* harmony export */   HtmlSup: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlSup),
/* harmony export */   HtmlTBody: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTBody),
/* harmony export */   HtmlTFoot: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTFoot),
/* harmony export */   HtmlTHead: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTHead),
/* harmony export */   HtmlTable: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTable),
/* harmony export */   HtmlTd: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTd),
/* harmony export */   HtmlTemplate: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTemplate),
/* harmony export */   HtmlTextArea: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTextArea),
/* harmony export */   HtmlTh: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTh),
/* harmony export */   HtmlTime: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTime),
/* harmony export */   HtmlTitle: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTitle),
/* harmony export */   HtmlTr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTr),
/* harmony export */   HtmlTrack: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlTrack),
/* harmony export */   HtmlType: () => (/* reexport safe */ _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__.HtmlType),
/* harmony export */   HtmlU: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlU),
/* harmony export */   HtmlUl: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlUl),
/* harmony export */   HtmlVar: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVar),
/* harmony export */   HtmlVideo: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlVideo),
/* harmony export */   HtmlWbr: () => (/* reexport safe */ _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__.HtmlWbr),
/* harmony export */   Id: () => (/* reexport safe */ _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__.Id),
/* harmony export */   InnerHTML: () => (/* reexport safe */ _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__.InnerHTML),
/* harmony export */   InnerText: () => (/* reexport safe */ _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__.InnerText),
/* harmony export */   NumberType: () => (/* reexport safe */ _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__.NumberType),
/* harmony export */   PropType: () => (/* reexport safe */ _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__.PropType),
/* harmony export */   RoleAlert: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlert),
/* harmony export */   RoleAlertDialog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleAlertDialog),
/* harmony export */   RoleApplication: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleApplication),
/* harmony export */   RoleArticle: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleArticle),
/* harmony export */   RoleBanner: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBanner),
/* harmony export */   RoleBlockQuote: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleBlockQuote),
/* harmony export */   RoleButton: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleButton),
/* harmony export */   RoleCaption: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCaption),
/* harmony export */   RoleCell: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCell),
/* harmony export */   RoleCheckBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCheckBox),
/* harmony export */   RoleCode: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleCode),
/* harmony export */   RoleColumnHeader: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleColumnHeader),
/* harmony export */   RoleComboBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComboBox),
/* harmony export */   RoleComplementary: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleComplementary),
/* harmony export */   RoleContentInfo: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleContentInfo),
/* harmony export */   RoleDefinition: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDefinition),
/* harmony export */   RoleDeletion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDeletion),
/* harmony export */   RoleDialog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDialog),
/* harmony export */   RoleDirectory: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDirectory),
/* harmony export */   RoleDocument: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleDocument),
/* harmony export */   RoleEmphasis: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleEmphasis),
/* harmony export */   RoleFeed: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFeed),
/* harmony export */   RoleFigure: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleFigure),
/* harmony export */   RoleForm: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleForm),
/* harmony export */   RoleGeneric: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGeneric),
/* harmony export */   RoleGrid: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGrid),
/* harmony export */   RoleGridCell: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGridCell),
/* harmony export */   RoleGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleGroup),
/* harmony export */   RoleHeading: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleHeading),
/* harmony export */   RoleImg: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleImg),
/* harmony export */   RoleInsertion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleInsertion),
/* harmony export */   RoleLink: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLink),
/* harmony export */   RoleList: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleList),
/* harmony export */   RoleListBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListBox),
/* harmony export */   RoleListItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleListItem),
/* harmony export */   RoleLog: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleLog),
/* harmony export */   RoleMain: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMain),
/* harmony export */   RoleMarquee: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMarquee),
/* harmony export */   RoleMath: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMath),
/* harmony export */   RoleMenu: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenu),
/* harmony export */   RoleMenuBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuBar),
/* harmony export */   RoleMenuItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItem),
/* harmony export */   RoleMenuItemCheckBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemCheckBox),
/* harmony export */   RoleMenuItemRadio: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMenuItemRadio),
/* harmony export */   RoleMeter: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleMeter),
/* harmony export */   RoleNavigation: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNavigation),
/* harmony export */   RoleNone: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNone),
/* harmony export */   RoleNote: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleNote),
/* harmony export */   RoleOption: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleOption),
/* harmony export */   RoleParagraph: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleParagraph),
/* harmony export */   RolePresentation: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RolePresentation),
/* harmony export */   RoleProgressBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleProgressBar),
/* harmony export */   RoleRadio: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadio),
/* harmony export */   RoleRadioGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRadioGroup),
/* harmony export */   RoleRegion: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRegion),
/* harmony export */   RoleRow: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRow),
/* harmony export */   RoleRowGroup: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowGroup),
/* harmony export */   RoleRowHeader: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleRowHeader),
/* harmony export */   RoleScrollBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleScrollBar),
/* harmony export */   RoleSearch: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearch),
/* harmony export */   RoleSearchBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSearchBox),
/* harmony export */   RoleSectionHead: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSectionHead),
/* harmony export */   RoleSeparator: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSeparator),
/* harmony export */   RoleSlider: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSlider),
/* harmony export */   RoleSpinButton: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSpinButton),
/* harmony export */   RoleStatus: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStatus),
/* harmony export */   RoleStrong: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleStrong),
/* harmony export */   RoleSubscript: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSubscript),
/* harmony export */   RoleSuperscript: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSuperscript),
/* harmony export */   RoleSwitch: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleSwitch),
/* harmony export */   RoleTab: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTab),
/* harmony export */   RoleTabList: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabList),
/* harmony export */   RoleTabPanel: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTabPanel),
/* harmony export */   RoleTable: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTable),
/* harmony export */   RoleTerm: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTerm),
/* harmony export */   RoleTextBox: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTextBox),
/* harmony export */   RoleTime: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTime),
/* harmony export */   RoleTimer: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTimer),
/* harmony export */   RoleToolBar: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolBar),
/* harmony export */   RoleToolTip: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleToolTip),
/* harmony export */   RoleTree: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTree),
/* harmony export */   RoleTreeGrid: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeGrid),
/* harmony export */   RoleTreeItem: () => (/* reexport safe */ _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__.RoleTreeItem),
/* harmony export */   RoleType: () => (/* reexport safe */ _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__.RoleType),
/* harmony export */   Style: () => (/* reexport safe */ _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__.Style),
/* harmony export */   TextType: () => (/* reexport safe */ _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__.TextType),
/* harmony export */   TokenType: () => (/* reexport safe */ _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__.TokenType)
/* harmony export */ });
/* harmony import */ var _lib_AriaModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _lib_AriaType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _lib_AttrType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _lib_Attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _lib_BooleanType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _lib_Class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _lib_ClassList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony import */ var _lib_Context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _lib_Dataset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _lib_ElemType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _lib_EventType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);
/* harmony import */ var _lib_HtmlModule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41);
/* harmony import */ var _lib_HtmlType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42);
/* harmony import */ var _lib_Id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35);
/* harmony import */ var _lib_InnerHTML_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36);
/* harmony import */ var _lib_InnerText_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39);
/* harmony import */ var _lib_NumberType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24);
/* harmony import */ var _lib_PropType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30);
/* harmony import */ var _lib_RoleType_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21);
/* harmony import */ var _lib_Style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37);
/* harmony import */ var _lib_TextType_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(38);
/* harmony import */ var _lib_TokenType_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28);
/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
























/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleAlert: () => (/* binding */ RoleAlert),
/* harmony export */   RoleAlertDialog: () => (/* binding */ RoleAlertDialog),
/* harmony export */   RoleApplication: () => (/* binding */ RoleApplication),
/* harmony export */   RoleArticle: () => (/* binding */ RoleArticle),
/* harmony export */   RoleBanner: () => (/* binding */ RoleBanner),
/* harmony export */   RoleBlockQuote: () => (/* binding */ RoleBlockQuote),
/* harmony export */   RoleButton: () => (/* binding */ RoleButton),
/* harmony export */   RoleCaption: () => (/* binding */ RoleCaption),
/* harmony export */   RoleCell: () => (/* binding */ RoleCell),
/* harmony export */   RoleCheckBox: () => (/* binding */ RoleCheckBox),
/* harmony export */   RoleCode: () => (/* binding */ RoleCode),
/* harmony export */   RoleColumnHeader: () => (/* binding */ RoleColumnHeader),
/* harmony export */   RoleComboBox: () => (/* binding */ RoleComboBox),
/* harmony export */   RoleComplementary: () => (/* binding */ RoleComplementary),
/* harmony export */   RoleContentInfo: () => (/* binding */ RoleContentInfo),
/* harmony export */   RoleDefinition: () => (/* binding */ RoleDefinition),
/* harmony export */   RoleDeletion: () => (/* binding */ RoleDeletion),
/* harmony export */   RoleDialog: () => (/* binding */ RoleDialog),
/* harmony export */   RoleDirectory: () => (/* binding */ RoleDirectory),
/* harmony export */   RoleDocument: () => (/* binding */ RoleDocument),
/* harmony export */   RoleEmphasis: () => (/* binding */ RoleEmphasis),
/* harmony export */   RoleFeed: () => (/* binding */ RoleFeed),
/* harmony export */   RoleFigure: () => (/* binding */ RoleFigure),
/* harmony export */   RoleForm: () => (/* binding */ RoleForm),
/* harmony export */   RoleGeneric: () => (/* binding */ RoleGeneric),
/* harmony export */   RoleGrid: () => (/* binding */ RoleGrid),
/* harmony export */   RoleGridCell: () => (/* binding */ RoleGridCell),
/* harmony export */   RoleGroup: () => (/* binding */ RoleGroup),
/* harmony export */   RoleHeading: () => (/* binding */ RoleHeading),
/* harmony export */   RoleImg: () => (/* binding */ RoleImg),
/* harmony export */   RoleInsertion: () => (/* binding */ RoleInsertion),
/* harmony export */   RoleLink: () => (/* binding */ RoleLink),
/* harmony export */   RoleList: () => (/* binding */ RoleList),
/* harmony export */   RoleListBox: () => (/* binding */ RoleListBox),
/* harmony export */   RoleListItem: () => (/* binding */ RoleListItem),
/* harmony export */   RoleLog: () => (/* binding */ RoleLog),
/* harmony export */   RoleMain: () => (/* binding */ RoleMain),
/* harmony export */   RoleMarquee: () => (/* binding */ RoleMarquee),
/* harmony export */   RoleMath: () => (/* binding */ RoleMath),
/* harmony export */   RoleMenu: () => (/* binding */ RoleMenu),
/* harmony export */   RoleMenuBar: () => (/* binding */ RoleMenuBar),
/* harmony export */   RoleMenuItem: () => (/* binding */ RoleMenuItem),
/* harmony export */   RoleMenuItemCheckBox: () => (/* binding */ RoleMenuItemCheckBox),
/* harmony export */   RoleMenuItemRadio: () => (/* binding */ RoleMenuItemRadio),
/* harmony export */   RoleMeter: () => (/* binding */ RoleMeter),
/* harmony export */   RoleNavigation: () => (/* binding */ RoleNavigation),
/* harmony export */   RoleNone: () => (/* binding */ RoleNone),
/* harmony export */   RoleNote: () => (/* binding */ RoleNote),
/* harmony export */   RoleOption: () => (/* binding */ RoleOption),
/* harmony export */   RoleParagraph: () => (/* binding */ RoleParagraph),
/* harmony export */   RolePresentation: () => (/* binding */ RolePresentation),
/* harmony export */   RoleProgressBar: () => (/* binding */ RoleProgressBar),
/* harmony export */   RoleRadio: () => (/* binding */ RoleRadio),
/* harmony export */   RoleRadioGroup: () => (/* binding */ RoleRadioGroup),
/* harmony export */   RoleRegion: () => (/* binding */ RoleRegion),
/* harmony export */   RoleRow: () => (/* binding */ RoleRow),
/* harmony export */   RoleRowGroup: () => (/* binding */ RoleRowGroup),
/* harmony export */   RoleRowHeader: () => (/* binding */ RoleRowHeader),
/* harmony export */   RoleScrollBar: () => (/* binding */ RoleScrollBar),
/* harmony export */   RoleSearch: () => (/* binding */ RoleSearch),
/* harmony export */   RoleSearchBox: () => (/* binding */ RoleSearchBox),
/* harmony export */   RoleSectionHead: () => (/* binding */ RoleSectionHead),
/* harmony export */   RoleSeparator: () => (/* binding */ RoleSeparator),
/* harmony export */   RoleSlider: () => (/* binding */ RoleSlider),
/* harmony export */   RoleSpinButton: () => (/* binding */ RoleSpinButton),
/* harmony export */   RoleStatus: () => (/* binding */ RoleStatus),
/* harmony export */   RoleStrong: () => (/* binding */ RoleStrong),
/* harmony export */   RoleSubscript: () => (/* binding */ RoleSubscript),
/* harmony export */   RoleSuperscript: () => (/* binding */ RoleSuperscript),
/* harmony export */   RoleSwitch: () => (/* binding */ RoleSwitch),
/* harmony export */   RoleTab: () => (/* binding */ RoleTab),
/* harmony export */   RoleTabList: () => (/* binding */ RoleTabList),
/* harmony export */   RoleTabPanel: () => (/* binding */ RoleTabPanel),
/* harmony export */   RoleTable: () => (/* binding */ RoleTable),
/* harmony export */   RoleTerm: () => (/* binding */ RoleTerm),
/* harmony export */   RoleTextBox: () => (/* binding */ RoleTextBox),
/* harmony export */   RoleTime: () => (/* binding */ RoleTime),
/* harmony export */   RoleTimer: () => (/* binding */ RoleTimer),
/* harmony export */   RoleToolBar: () => (/* binding */ RoleToolBar),
/* harmony export */   RoleToolTip: () => (/* binding */ RoleToolTip),
/* harmony export */   RoleTree: () => (/* binding */ RoleTree),
/* harmony export */   RoleTreeGrid: () => (/* binding */ RoleTreeGrid),
/* harmony export */   RoleTreeItem: () => (/* binding */ RoleTreeItem)
/* harmony export */ });
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);





class RoleAlert extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'alert'
  static props = {
    live : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-live', 'assertive'),
    atomic : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-atomic', true),
  }
}

class RoleAlertDialog extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'alertdialog'
}

class RoleApplication extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'application'
}

class RoleArticle extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'article'
}

class RoleBanner extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'banner'
}

class RoleBlockQuote extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'blockquote'
}

class RoleButton extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'button'
}

class RoleCaption extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'caption'
}

class RoleCell extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'cell'
}

class RoleCheckBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'checkbox'
}

class RoleCode extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'code'
}

class RoleColumnHeader extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'columnheader'
}

class RoleComboBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'combobox'
  static props = {
    hasPopup : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-haspopup', 'listbox'),
  }
}

class RoleComplementary extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'complementary'
}

class RoleContentInfo extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'contentinfo'
}

class RoleDefinition extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'definition'
}

class RoleDeletion extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'deletion'
}

class RoleDialog extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'dialog'
}

/**
 * @deprecated
 */
class RoleDirectory extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'directory'
}

class RoleDocument extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'document'
}

class RoleEmphasis extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'emphasis'
}

class RoleFeed extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'feed'
}

class RoleFigure extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'figure'
}

class RoleForm extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'form'
}

class RoleGeneric extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'generic'
}

class RoleGrid extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'grid'
}

class RoleGridCell extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'gridcell'
}

class RoleGroup extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'group'
}

class RoleHeading extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'heading'
}

class RoleImg extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'img'
}

class RoleInsertion extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'insertion'
}

class RoleLink extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'link'
}

class RoleList extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'list'
}

class RoleListBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'listbox'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'vertical'),
  }
}

class RoleListItem extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'listitem'
}

class RoleLog extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'log'
  static props = {
    live : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-live', 'polite'),
  }
}

class RoleMain extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'main'
}

class RoleMarquee extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'marquee'
}

class RoleMath extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'math'
}

class RoleMenu extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'menu'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'vertical'),
  }
}

class RoleMenuBar extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'menubar'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'horizontal'),
  }
}

class RoleMenuItem extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'menuitem'
}

class RoleMenuItemCheckBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'menuitemcheckbox'
}

class RoleMenuItemRadio extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'menuitemradio'
}

class RoleMeter extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'meter'
  static props = {
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', 0),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', 100),
  }
}

class RoleNavigation extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'navigation'
}

class RoleNone extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'none'
}

class RoleNote extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'note'
}

class RoleOption extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'option'
  static props = {
    selected : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-selected', false),
  }
}

class RoleParagraph extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'paragraph'
}

class RolePresentation extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'presentation'
}

class RoleProgressBar extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'progressbar'
  static props = {
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', 0),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', 100),
  }
}

class RoleRadio extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'radio'
}

class RoleRadioGroup extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'radiogroup'
}

class RoleRegion extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'region'
}

class RoleRow extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'row'
}

class RoleRowGroup extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'rowgroup'
}

class RoleRowHeader extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'rowheader'
}

class RoleScrollBar extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'scrollbar'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'vertical'),
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', 0),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', 100),
  }
}

class RoleSearch extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'search'
}

class RoleSearchBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'searchbox'
}

class RoleSectionHead extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'sectionhead'
}

class RoleSeparator extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'separator'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'horizontal'),
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', 0),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', 100),
  }
}

class RoleSlider extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'slider'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'horizontal'),
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', 0),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', 100),
  }
}

class RoleSpinButton extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'spinbutton'
  static props = {
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin', -Infinity),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax', Infinity),
    valueNow : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuenow', 0),
  }
}

class RoleStatus extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'status'
  static props = {
    live : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-live', 'polite'),
    atomic : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-atomic', true),
  }
}

class RoleStrong extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'strong'
}

class RoleSubscript extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'subscript'
}

class RoleSuperscript extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'superscript'
}

class RoleSwitch extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'switch'
}

class RoleTab extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'tab'
  static props = {
    selected : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-selected', false),
  }
}

class RoleTabList extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'tablist'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'horizontal'),
  }
}

class RoleTabPanel extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'tabpanel'
}

class RoleTable extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'table'
}

class RoleTerm extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'term'
}

class RoleTextBox extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'textbox'
}

class RoleTime extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'time'
}

class RoleTimer extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'timer'
}

class RoleToolBar extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'toolbar'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'horizontal'),
  }
}

class RoleToolTip extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'tooltip'
}

class RoleTree extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'tree'
  static props = {
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation', 'vertical'),
  }
}

class RoleTreeGrid extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'treegrid'
}

class RoleTreeItem extends _RoleType_js__WEBPACK_IMPORTED_MODULE_0__.RoleType
{
  static role = 'treeitem'
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleType: () => (/* binding */ RoleType)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _InnerText_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);






/**
 * @abstract
 */
class RoleType extends _ElemType_js__WEBPACK_IMPORTED_MODULE_3__.ElemType
{
  static props = {
    accessKey : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('accesskey'),
    autocapitalize : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('autocapitalize'),
    autofocus : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('autofocus'),
    contentEditable : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('contenteditable'),
    dir : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('dir'),
    draggable : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('draggable'),
    enterKeyHint : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('enterkeyhint'),
    inputMode : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('inputmode'),
    lang : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('lang'),
    spellcheck : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('spellcheck'),
    tabIndex : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('tabindex', NaN),
    title : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('title'),
    translate : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('translate'),
    innerText : _InnerText_js__WEBPACK_IMPORTED_MODULE_4__.InnerText,
  }
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttrType: () => (/* binding */ AttrType)
/* harmony export */ });
/**
 * @abstract
 */
class AttrType
{
  static nodeName = null

  static defaultValue = ''

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|null|*}
   */
  static get(elem, propName) {
    return elem.node.getAttribute(this.nodeName) ?? this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|null|*} value
   */
  static set(elem, propName, value) {
    elem.vnode[propName] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {*} value
   */
  static update(elem, propName, value) {
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(value != elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   */
  static reset(elem, propName) {
    if(!elem.vnode.hasOwnProperty(propName)) {
      elem.node.removeAttribute(this.nodeName)
    }
  }

  /**
   * @param {string} nodeName
   * @param {*} [defaultValue]
   * @return {constructor @link AttrType}
   */
  static define(nodeName, defaultValue = this.defaultValue) {
    return class extends this
    {
      static nodeName = nodeName
      static defaultValue = defaultValue
    }
  }
}


/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanType: () => (/* binding */ BooleanType)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


class BooleanType extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  static defaultValue = false

  static nodeValue = ''

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {boolean}
   */
  static get(elem, propName) {
    const value = super.get(elem, propName)
    return value === this.nodeValue || value !== 'false' && !!value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {boolean} value
   */
  static update(elem, propName, value) {
    if(value === this.get(elem, propName)) {
      return
    }
    if(value) {
      elem.node.setAttribute(this.nodeName, this.nodeValue)
    }
    else elem.node.removeAttribute(this.nodeName)
  }

  /**
   * @param {string} nodeName
   * @param {boolean} [defaultValue]
   * @param {string} [nodeValue]
   * @return {constructor @link BooleanType}
   */
  static define(nodeName, defaultValue = this.defaultValue, nodeValue = this.nodeValue) {
    return class extends this
    {
      static nodeName = nodeName
      static defaultValue = defaultValue
      static nodeValue = nodeValue
    }
  }
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberType: () => (/* binding */ NumberType)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


class NumberType extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  static defaultValue = NaN

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {number}
   */
  static get(elem, propName) {
    const value = elem.node.getAttribute(this.nodeName)
    return value === null ?
      this.defaultValue :
      +value
  }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElemType: () => (/* binding */ ElemType)
/* harmony export */ });
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _AriaType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _Class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _ClassList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _EventType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);
/* harmony import */ var _Id_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var _InnerHTML_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _TextType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38);














const { Comment, CustomEvent, document } = _window_cjs__WEBPACK_IMPORTED_MODULE_0__
const indexOf = Array.prototype.indexOf
const specialProps = {
  children : true,
  class : true,
  node : true,
  parent : true,
  tagName : true,
}
const nullDescriptor = {
  writable : true,
  value : null,
}
const descriptors = {
  __vnode : nullDescriptor,
  __node : nullDescriptor,
  __children : nullDescriptor,
  __parent : nullDescriptor,
  __index : nullDescriptor,
  __ref : nullDescriptor,
  __handlers : nullDescriptor,
  __sampleNode : nullDescriptor,
  vnode : nullDescriptor,
  node : nullDescriptor,
  children : nullDescriptor,
  parent : {
    writable : true,
    value : undefined,
  },
}

/**
 * @abstract
 */
class ElemType
{
  static namespace = null

  static tagName = 'div'

  static role = null

  static class = null

  static className = null

  static props = {
    role : _AttrType_js__WEBPACK_IMPORTED_MODULE_2__.AttrType.define('role'),
    className : _Class_js__WEBPACK_IMPORTED_MODULE_4__.Class,
    classList : _ClassList_js__WEBPACK_IMPORTED_MODULE_5__.ClassList,
    id : _Id_js__WEBPACK_IMPORTED_MODULE_8__.Id,
    style : _Style_js__WEBPACK_IMPORTED_MODULE_11__.Style,
    dataset : _Dataset_js__WEBPACK_IMPORTED_MODULE_6__.Dataset,
    attributes : _Attributes_js__WEBPACK_IMPORTED_MODULE_3__.Attributes,
    innerHTML : _InnerHTML_js__WEBPACK_IMPORTED_MODULE_9__.InnerHTML,
    textContent : _PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType,
    ..._EventType_js__WEBPACK_IMPORTED_MODULE_7__.EventType.props,
    ..._AriaType_js__WEBPACK_IMPORTED_MODULE_1__.AriaType.props,
  }

  static defaultProps = null

  /**
   * @param {*} [props]
   */
  constructor(props) {
    this.constructor.__init()
    Object.defineProperties(this, descriptors)
    Object.defineProperty(this, 'props', {
      writable : true,
      value : {
        children : null,
        ...this.constructor.__defaultProps,
      },
    })
    if(props?.constructor === Object) {
      Object.assign(this.props, props)
    }
    else if(props !== undefined) {
      this.props.children = props
    }
  }

  /**
   * @return {string}
   */
  toString() {
    this.__init()
    return this.node.outerHTML
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = { ...this.state }
    if(!this.state) {
      this.state = {}
    }
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.vnode = this.__createVNode()
    this.__update()
    this.update(this.props, prevState)
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function|string|string[]} [filter]
   * @return {null|ElemType|*}
   */
  find(type, filter) {
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || child.__applyFilter(filter)) {
          return child
        }
      }
      if(child = child.find(type, filter)) {
        return child
      }
    }
    return null
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function|string|string[]} [filter]
   * @return {(null|ElemType|*)[]}
   */
  findAll(type, filter) {
    const result = []
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || child.__applyFilter(filter)) {
          result.push(child)
        }
      }
      result.push(...child.findAll(type, filter))
    }
    return result
  }

  /**
   * @param {Element} node
   * @return {ElemType|*|null}
   */
  getElemByNode(node) {
    return node === this.node ?
      this :
      this.find(ElemType, elem => elem.node === node)
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function|string|string[]} [filter]
   * @return {ElemType|*|null}
   */
  closest(type, filter) {
    let elem = this
    do if(elem instanceof type) {
      if(!filter || elem.__applyFilter(filter)) {
        return elem
      }
    }
    while(elem = elem.__parent)
    return null
  }

  /**
   * @param {ElemType} elem
   * @return {boolean}
   */
  contains(elem) {
    let parent = elem.__parent
    do if(parent === this) {
      return true
    }
    while(parent = parent?.__parent)
    return false
  }

  /**
   * @public
   */
  blur() {
    this.node.blur()
  }

  /**
   * @public
   */
  click() {
    this.node.click()
  }

  /**
   * @public
   */
  focus() {
    this.node.focus()
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}|*} [dict]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event !== 'string') {
      return this.node.dispatchEvent(event)
    }
    const desc = _EventType_js__WEBPACK_IMPORTED_MODULE_7__.EventType.types[event]
    event = desc ?
      new desc.constructor(event, { ...desc.dict, ...dict }) :
      new CustomEvent(event, dict)
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string} type
   * @param {function} callback
   * @param {{capture,once,passive}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   * @protected
   */
  on(type, callback, options = {}) {
    if(!this.__handlers) {
      this.__handlers = new Map
    }
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    let listeners = this.__handlers.get(type)
    if(!listeners) {
      this.__handlers.set(type, listeners = new Map)
    }
    let listener = listeners.get(callback)
    if(listener) {
      return
    }
    listener = e => {
      const event = new _EventType_js__WEBPACK_IMPORTED_MODULE_7__.EventType(e, this)
      callback.call(this, event, this.getElemByNode(e.target))
      options.once && listeners.delete(callback)
    }
    listener.__options = options
    listeners.set(callback, listener)
    this.node.addEventListener(type, listener, options)
  }

  /**
   * @param {string} type
   * @param {function} callback
   * @param {{capture}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @protected
   */
  off(type, callback, options = {}) {
    if(!this.__handlers) {
      return
    }
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    const listeners = this.__handlers.get(type)
    const listener = listeners?.get(callback)
    if(listener) {
      this.node.removeEventListener(type, listener, options)
      listeners.delete(callback)
      listeners.size || this.__handlers.delete(type)
    }
  }

  /**
   * @protected
   */
  removeAllListeners() {
    if(!this.__handlers) {
      return
    }
    let type, listeners, callback, listener
    for([type, listeners] of this.__handlers.entries()) {
      for([callback, listener] of listeners.entries()) {
        this.node.removeEventListener(type, listener, listener.__options)
        listeners.delete(callback)
      }
      this.__handlers.delete(type)
    }
    this.__handlers = null
  }

  /**
   * @protected
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @protected
   * @abstract
   */
  assign() {
    void null
  }

  /**
   * @return {*}
   * @protected
   * @abstract
   */
  render() {
    return this.props.children
  }

  /**
   * @protected
   * @abstract
   */
  mount() {
    void null
  }

  /**
   * @param {{}} prevProps
   * @param {{}} prevState
   * @protected
   * @abstract
   */
  update(prevProps, prevState) {
    void null
  }

  /**
   * @protected
   * @abstract
   */
  destroy() {
    void null
  }

  /**
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node = this.props.node, parentNode) {
    if(this.node) {
      return
    }
    this.node = node || this.__createNode()
    this.__sampleNode = this.props.tagName ?
      this.__createNode() :
      this.constructor.__sampleNode
    this.vnode = this.__createVNode()
    this.state && Object.defineProperty(this, 'state', {
      enumerable : false,
      value : this.state,
    })
    this.init()
    this.assign()
    this.__assignProps()
    this.__children = this.parent === null ?
      undefined :
      this.render()
    this.__setRefs()
    if(this.parent === undefined) {
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && this.__mount()
      return
    }
    if(this.parent === null) {
      this.__node = new Comment(this.constructor.name)
      if(node?.parentNode) {
        node.replaceWith(this.__node)
      }
      else parentNode?.append(this.__node)
      this.children = []
      node && this.__mount()
      return
    }
    this.__setProps()
    this.__setChildren()
    this.__node = new Comment(this.constructor.name)
    this.node.replaceWith(this.__node)
    this.parent.append(this.node)
    node && this.__mount()
  }

  /**
   * @private
   */
  __mount() {
    let child
    for(child of this.children) {
      child.props && child.__mount()
    }
    this.mount()
  }

  /**
   * @private
   */
  __assignProps() {
    const props = this.props
    let name
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
  }

  /**
   * @return {Element|*}
   * @private
   */
  __createNode() {
    return this.constructor.__createNode(this.props.tagName)
  }

  /**
   * @private
   * @return {{role,className,classList}}
   */
  __createVNode() {
    const vnode = {
      className : _Class_js__WEBPACK_IMPORTED_MODULE_4__.Class.generate(this.constructor),
      role : this.constructor.role,
    }
    Object.defineProperty(vnode, 'classList', nullDescriptor)
    return vnode
  }

  /**
   * @private
   */
  __setProps() {
    if(this.__vnode) {
      this.__resetProps()
    }
    const map = this.constructor.__props
    const vnode = this.vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.update(this, name, vnode[name])
    }
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.__props
    const vnode = this.__vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.reset(this, name, vnode[name])
    }
  }

  /**
   * @private
   */
  __setChildren() {
    if(this.__children === undefined) {
      this.children = this.children || []
      return
    }
    const node = this.node
    const childrenA = this.children
    const childrenB = []
    const indexA = this.__index
    let indexB = {}
    let childB, key
    const forEach = childB => {
      if(!_PropType_js__WEBPACK_IMPORTED_MODULE_10__.PropType.filter(childB)) {
        return
      }
      if(Array.isArray(childB)) {
        childB.forEach(forEach)
        return
      }
      if(!childB.props && !childB.__init) {
        childB = new _TextType_js__WEBPACK_IMPORTED_MODULE_12__.TextType(childB)
        indexB = null
      }
      childrenB.push(childB)
      if(!childrenA) {
        childB.__parent = this
        childB.__init()
        node.append(childB.__node || childB.node)
      }
      if(!indexB) {
        return
      }
      key = childB.props.key
      if(key === undefined) {
        indexB = null
      }
      else if(indexB[key]) {
        indexB = null
        console.warn('Duplicate key detected', key, childB, this)
      }
      else indexB[key] = childB
    }
    forEach(this.__children)
    this.__children = childrenB
    this.__index = indexB
    if(!childrenA) {
      this.children = childrenB
      return
    }
    if(!indexA || !indexB) {
      this.__setChildNodes()
      this.children = childrenB
      return
    }
    const childNodes = node.childNodes
    const length = childrenB.length
    let childA, nodeA, nextA, i, j
    for(childA of childrenA) {
      if(!indexB[childA.props.key]) {
        childA.__destroy()
      }
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.props.key]) {
        continue
      }
      nextA = childNodes[i]
      childB.__parent = this
      childB.__init()
      if(nextA) {
        nextA.before(childB.__node || childB.node)
      }
      else {
        node.append(childB.__node || childB.node)
      }
      childB.__mount()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      key = childB.props.key
      childA = indexA[key]
      if(!childA) {
        continue
      }
      nodeA = childA.__node || childA.node
      j = indexOf.call(childNodes, nodeA)
      if(i !== j) {
        nextA = childNodes[i].nextSibling
        if(nextA) {
          if(nodeA !== nextA && nodeA.nextSibling !== nextA) {
            nextA.before(nodeA)
          }
        }
        else node.append(nodeA)
      }
      if(childA.constructor !== childB.constructor) {
        childB.__parent = this
        childA.__replaceElem(childB)
        continue
      }
      childrenB[i] = childA
      indexB[key] = childA
      childA.__parent = this
      childA.__updateElem(childB)
    }
    this.children = childrenB
  }

  /**
   * @private
   */
  __setChildNodes() {
    const childrenA = this.children
    const childrenB = this.__children
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      if(childA === undefined) {
        childB.__parent = this
        childB.__init()
        this.node.append(childB.__node || childB.node)
        childB.__mount?.()
        continue
      }
      if(childB === undefined) {
        childA.__destroy()
        continue
      }
      if(!childA.props && !childB.props) {
        if(childA.node.data !== childB.data) {
          childA.node.data = childB.data
        }
        childrenB[i] = childA
        continue
      }
      if(childA.props && childB.props) {
        if(childA.tagName === childB.tagName && childA.props.key === childB.props.key) {
          if(childA.constructor !== childB.constructor) {
            childB.__parent = this
            childA.__replaceElem(childB)
            continue
          }
          childrenB[i] = childA
          childA.__parent = this
          childA.__updateElem(childB)
          continue
        }
      }
      nodeA = childA.node
      childA.__destroy(true)
      childB.__parent = this
      childB.__init()
      nodeA.replaceWith(childB.__node || childB.node)
      childB.__mount?.()
    }
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __updateElem(elem) {
    const prevProps = this.props
    const refA = this.__ref
    const refB = elem.__ref
    this.props = elem.props
    this.vnode = this.__createVNode()
    this.__update()
    if(refA && refB) {
      refB.ctx[refB.name] = this
    }
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __replaceElem(elem) {
    const node = this.node
    const children = this.children
    this.children = []
    this.vnode = this.__createVNode()
    this.__resetProps()
    this.__destroy(true)
    this.node = this.__createNode()
    elem.children = children
    elem.__init(node)
  }

  /**
   * @private
   */
  __setRefs() {
    let name, item
    for(name in this) {
      item = this[name]
      if(item?.props) {
        item.__ref = { name, ctx : this }
      }
    }
  }

  /**
   * @private
   */
  __update() {
    this.parent = undefined
    this.assign()
    this.__assignProps()
    this.__children = this.parent === null ?
      undefined :
      this.render()
    this.__setRefs()
    if(this.parent === undefined) {
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
      }
      this.__setProps()
      this.__setChildren()
      return
    }
    if(this.parent === null) {
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      else this.node.remove()
      return
    }
    if(!this.__node) {
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
    }
    this.__setProps()
    this.__setChildren()
    if(this.node.parentNode !== this.parent) {
      this.parent.append(this.node)
    }
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    this.children.forEach(child => child.__destroy(true))
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    this.__parent = null
    this.__ref = null
    keepNode || this.node.remove()
  }

  /**
   * @param {function|string|string[]} [filter]
   * @return {boolean|*}
   * @private
   */
  __applyFilter(filter) {
    if(typeof filter === 'function') {
      return filter(this)
    }
    if(typeof filter === 'string') {
      return this[filter]
    }
    const [key, value] = filter
    return this[key] === value
  }

  /**
   * @private
   */
  __debug() {
    init.apply(this, arguments)
    this.node.__elem = this
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
  }

  /**
   * @return {ElemType|*}
   */
  get rootElem() {
    let parent = this
    while(parent.__parent) {
      parent = parent.__parent
    }
    return parent
  }

  /**
   * @param {*} [props]
   * @param {ParentNode} [parentNode]
   * @return {ElemType|*}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    const node = elem.props.node
    if(node?.hasChildNodes()) {
      node.innerHTML = ''
    }
    elem.__init(node, parentNode)
    node || elem.__mount()
    return elem
  }

  /**
   * @param {ElemType} [elem]
   * @param {boolean} [keepNode]
   */
  static destroy(elem, keepNode) {
    elem?.__destroy(keepNode)
  }

  /**
   * @param {boolean} value
   */
  static setDebugMode(value) {
    ElemType.prototype.__init = value ?
      ElemType.prototype.__debug :
      init
  }

  /**
   * @param {string} prop
   * @param {constructor @link PropType|constructor @link AttrType|constructor @link EventType|*} type
   * @private
   */
  static __defineProp(prop, type) {
    if(typeof type !== 'function') {
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        writable : true,
        value : type,
      })
      return
    }
    Object.defineProperty(this.prototype, prop, {
      configurable : true,
      get() {
        return type.get(this, prop)
      },
      set(value) {
        type.set(this, prop, value)
      },
    })
  }

  /**
   * @param {{}} props
   */
  static __defineProps(props) {
    let prop, type
    for(prop in props) {
      type = props[prop]
      this.__defineProp(prop, type)
    }
  }

  /**
   * @private
   */
  static __init() {
    if(this.hasOwnProperty('__props')) {
      return
    }
    if(this !== ElemType) {
      Object.getPrototypeOf(this).__init()
    }
    if(this.hasOwnProperty('props')) {
      this.__defineProps(this.props)
    }
    Object.defineProperties(this, {
      __props : {
        value : { ...this.__props, ...this.props },
      },
      __defaultProps : {
        value : { ...this.__defaultProps, ...this.defaultProps },
      },
      __sampleNode : {
        value : this.__createNode(),
      },
    })
  }

  /**
   * @param {string} [tagName]
   * @return {HTMLElement|*}
   * @private
   */
  static __createNode(tagName = this.tagName) {
    return this.namespace === null ?
      document.createElement(tagName) :
      document.createElementNS(this.namespace, tagName)
  }
}

const init = ElemType.prototype.__init


/***/ }),
/* 26 */
/***/ ((module) => {

if(typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AriaType: () => (/* binding */ AriaType)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _TokenType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);





/**
 * @mixin
 */
class AriaType
{
  static props = {
    activeDescendant : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-activedescendant'),
    atomic : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-atomic', false, 'true'),
    autoComplete : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-autocomplete', 'none'),
    busy : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-busy', false, 'true'),
    checked : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-checked'),
    colCount : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-colcount'),
    colIndex : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-colindex'),
    colSpan : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-colspan'),
    controls : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-controls'),
    current : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-current', false),
    describedBy : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-describedby'),
    details : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-details'),
    disabled : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-disabled', false, 'true'),
    dropEffect : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-dropeffect', 'none'),
    errorMessage : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-errormessage'),
    expanded : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-expanded'),
    flowTo : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-flowto'),
    grabbed : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-grabbed'),
    hasPopup : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-haspopup', false),
    hidden : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-hidden'),
    invalid : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-invalid', false),
    keyShortcuts : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-keyshortcuts'),
    label : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-label'),
    labelledBy : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-labelledby'),
    level : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-level'),
    live : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-live', 'off'),
    modal : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-modal', false, 'true'),
    multiLine : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-multiline', false, 'true'),
    multiSelectable : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-multiselectable', false, 'true'),
    orientation : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-orientation'),
    owns : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-owns'),
    placeholder : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-placeholder'),
    posInSet : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-posinset'),
    pressed : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-pressed'),
    readOnly : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-readonly', false, 'true'),
    relevant : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-relevant', 'additions text'),
    required : _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define('aria-required', false, 'true'),
    roleDescription : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-roledescription'),
    rowCount : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-rowcount'),
    rowIndex : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-rowindex'),
    rowSpan : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-rowspan'),
    selected : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-selected'),
    setSize : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-setsize'),
    sort : _TokenType_js__WEBPACK_IMPORTED_MODULE_3__.TokenType.define('aria-sort', 'none'),
    valueMax : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemax'),
    valueMin : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuemin'),
    valueNow : _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define('aria-valuenow'),
    valueText : _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define('aria-valuetext'),
  }
}


/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenType: () => (/* binding */ TokenType)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


class TokenType extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  static defaultValue = undefined

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|boolean|undefined}
   */
  static get(elem, propName) {
    const value = super.get(elem, propName)
    return value === 'true' || value !== 'false' && value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|boolean|null|undefined} value
   */
  static update(elem, propName, value) {
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(String(value) !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attributes: () => (/* binding */ Attributes)
/* harmony export */ });
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


class Attributes extends _PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}|null} value
   */
  static set(elem, name, value) {
    const vnode = elem.vnode
    if(!value) {
      delete vnode.attributes
      return
    }
    if(vnode.attributes) {
      value = Object.assign(vnode.attributes, value)
    }
    delete vnode.attributes
    vnode.attributes = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} attributes
   */
  static update(elem, name, attributes) {
    let attr, value
    for(attr in attributes) {
      value = attributes[attr]
      if(value === null) {
        elem.node.removeAttribute(attr)
      }
      else if(value !== elem.node.getAttribute(attr)) {
        elem.node.setAttribute(attr, value)
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} attributes
   */
  static reset(elem, name, attributes) {
    let attr
    for(attr in attributes) {
      if(!elem.vnode.attributes?.hasOwnProperty(attr)) {
        elem.node.removeAttribute(attr)
      }
    }
  }
}


/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropType: () => (/* binding */ PropType)
/* harmony export */ });
const filterTypes = {
  '[object Null]' : true,
  '[object Boolean]' : true,
  '[object Undefined]' : true,
}

/**
 * @abstract
 */
class PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @returns {string|null|*}
   */
  static get(elem, name) {
    return elem.node[name]
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} value
   */
  static update(elem, name, value) {
    if(value !== elem.node[name]) {
      elem.node[name] = value
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = elem.__sampleNode[name]
    }
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  static filter(value) {
    return !filterTypes[toString.call(value)]
  }
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Class: () => (/* binding */ Class)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


class Class extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  static nodeName = 'class'

  /**
   * @param {ElemType} elem
   */
  static update(elem) {
    const arr = [elem.vnode.className]
    const classList = elem.vnode.classList
    if(classList) {
      arr.push(...classList)
    }
    const className = arr.filter(Boolean).join(' ')
    super.update(elem, this.nodeName, className || null)
  }

  /**
   * @param {constructor @link ElemType} constructor
   * @return {string}
   */
  static generate(constructor) {
    if(constructor.hasOwnProperty('className')) {
      return constructor.className
    }
    const set = new Set
    let proto = constructor
    while(proto.class !== null) {
      set.add(proto.class)
      proto = Object.getPrototypeOf(proto)
    }
    const className = Array.from(set).join(' ')
    return constructor.className = className || null
  }
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassList: () => (/* binding */ ClassList)
/* harmony export */ });
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


class ClassList extends _PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode.classList = [elem.vnode.classList, value].flat()
  }
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


class Dataset extends _PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} dataset
   */
  static update(elem, name, dataset) {
    let attr, value
    for(attr in dataset) {
      value = dataset[attr]
      if(value === null) {
        delete elem.node.dataset[attr]
      }
      else if(value !== elem.node.dataset[attr]) {
        elem.node.dataset[attr] = value
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} dataset
   */
  static reset(elem, name, dataset) {
    let attr
    for(attr in dataset) {
      if(!elem.vnode.dataset?.hasOwnProperty(attr)) {
        delete elem.node.dataset[attr]
      }
    }
  }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventType: () => (/* binding */ EventType)
/* harmony export */ });
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


class EventType
{
  static ElemType

  /**
   * @param {Event|*} e
   * @param {ElemType|*} context
   */
  constructor(e, context) {
    this.nativeEvent = e
    this.currentTarget = context
  }

  /**
   * @return {ElemType|*}
   */
  get target() {
    const elem = this.currentTarget
    let node = this.nativeEvent.target
    let target = elem.getElemByNode(node)
    if(target) {
      return target
    }
    do {
      node = node.parentNode
      target = elem.getElemByNode(node)
    }
    while(node && !target)
    return target
  }

  /**
   * @return {ElemType|*|null}
   */
  get relatedTarget() {
    const node = this.nativeEvent.relatedTarget
    return node && this.currentTarget.rootElem.getElemByNode(node)
  }

  /**
   * @return {ElemType|*|null}
   */
  get submitter() {
    const node = this.nativeEvent.submitter
    return node && this.currentTarget.getElemByNode(node)
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @return {function|null}
   */
  static get(elem, name) {
    return elem.node[name]
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function|null} callback
   */
  static set(elem, name, callback) {
    if(!callback) {
      delete elem.vnode[name]
      return
    }
    elem.vnode[name] = e => {
      const event = new EventType(e, elem)
      return callback.call(elem, event, elem.getElemByNode(e.target))
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function} callback
   */
  static update(elem, name, callback) {
    elem.node[name] = callback
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = null
    }
  }

  /**
   * @return {{string: constructor @link EventType}}
   */
  static types = {
    afterprint : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    animationcancel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.AnimationEvent, true),
    animationend : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.AnimationEvent, true),
    animationiteration : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.AnimationEvent, true),
    animationstart : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.AnimationEvent, true),
    auxclick : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    beforeinput : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, true, true),
    beforematch : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    beforeprint : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    beforeunload : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    blur : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.FocusEvent),
    cancel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, false, true),
    canplay : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    canplaythrough : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    change : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, true),
    click : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    close : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    contextlost : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    contextmenu : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    contextrestored : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    copy : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.ClipboardEvent, true, true),
    cuechange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    cut : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.ClipboardEvent, true, true),
    dblclick : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    drag : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true, true),
    dragend : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true),
    dragenter : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true, true),
    dragleave : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true),
    dragover : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true, true),
    dragstart : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true, true),
    drop : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.DragEvent, true, true),
    durationchange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    emptied : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    ended : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    error : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    focus : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.FocusEvent),
    focusin : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.FocusEvent, true),
    focusout : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.FocusEvent, true),
    formdata : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.FormDataEvent),
    gotpointercapture : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true),
    hashchange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.HashChangeEvent),
    input : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.InputEvent, true),
    invalid : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, false, true),
    keydown : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.KeyboardEvent, true, true),
    keypress : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.KeyboardEvent, true, true),
    keyup : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.KeyboardEvent, true, true),
    languagechange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    load : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    loadeddata : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    loadedmetadata : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    loadstart : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    lostpointercapture : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true),
    message : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MessageEvent),
    messageerror : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MessageEvent),
    mousedown : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    mouseenter : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent),
    mouseleave : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent),
    mousemove : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    mouseout : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    mouseover : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    mouseup : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.MouseEvent, true, true),
    offline : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    online : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    pagehide : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PageTransitionEvent),
    pageshow : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PageTransitionEvent),
    paste : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.ClipboardEvent, true, true),
    pause : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    play : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    playing : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    pointercancel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true),
    pointerdown : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true, true),
    pointerenter : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent),
    pointerleave : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent),
    pointermove : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true, true),
    pointerout : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true, true),
    pointerover : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true, true),
    pointerrawupdate : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true),
    pointerup : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PointerEvent, true, true),
    popstate : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PopStateEvent),
    progress : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.ProgressEvent),
    ratechange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    reset : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, true, true),
    resize : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.UIEvent),
    rejectionhandled : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PromiseRejectionEvent),
    scroll : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, true),
    securitypolicyviolation : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.SecurityPolicyViolationEvent, true),
    seeked : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    seeking : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    select : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.UIEvent, true),
    slotchange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event, true),
    stalled : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    storage : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.StorageEvent),
    submit : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.SubmitEvent, true, true),
    suspend : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    timeupdate : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    toggle : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    touchcancel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TouchEvent, true),
    touchend : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TouchEvent, true, true),
    touchmove : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TouchEvent, true, true),
    touchstart : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TouchEvent, true, true),
    transitioncancel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TransitionEvent, true),
    transitionend : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TransitionEvent, true, true),
    transitionrun : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TransitionEvent, true),
    transitionstart : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.TransitionEvent, true),
    unhandledrejection : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.PromiseRejectionEvent),
    unload : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    volumechange : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    waiting : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.Event),
    wheel : define(_window_cjs__WEBPACK_IMPORTED_MODULE_0__.WheelEvent, true, true),
  }

  static props = {}

  static {
    let type, prop
    for(type in this.types) {
      prop = 'on' + type
      if(prop in _window_cjs__WEBPACK_IMPORTED_MODULE_0__.HTMLElement.prototype) {
        this.props[prop] = EventType
      }
    }
  }

  static members = {
    AT_TARGET : true,
    BUBBLING_PHASE : true,
    CAPTURING_PHASE : true,
    DOM_DELTA_LINE : true,
    DOM_DELTA_PAGE : true,
    DOM_DELTA_PIXEL : true,
    DOM_KEY_LOCATION_LEFT : true,
    DOM_KEY_LOCATION_NUMPAD : true,
    DOM_KEY_LOCATION_RIGHT : true,
    DOM_KEY_LOCATION_STANDARD : true,
    NONE : true,
    altKey : true,
    altitudeAngle : true,
    animationName : true,
    azimuthAngle : true,
    blockedURI : true,
    bubbles : true,
    button : true,
    buttons : true,
    cancelable : true,
    changedTouches : true,
    charCode : true,
    clientX : true,
    clientY : true,
    clipboardData : true,
    code : true,
    columnNumber : true,
    composed : true,
    composedPath : false,
    ctrlKey : true,
    data : true,
    dataTransfer : true,
    defaultPrevented : true,
    deltaMode : true,
    deltaX : true,
    deltaY : true,
    deltaZ : true,
    detail : true,
    disposition : true,
    documentURI : true,
    effectiveDirective : true,
    elapsedTime : true,
    eventPhase : true,
    formData : true,
    getCoalescedEvents : false,
    getModifierState : false,
    getPredictedEvents : false,
    getTargetRanges : false,
    height : true,
    inputType : true,
    isComposing : true,
    isPrimary : true,
    isTrusted : true,
    key : true,
    keyCode : true,
    lastEventId : true,
    layerX : true,
    layerY : true,
    lengthComputable : true,
    lineNumber : true,
    loaded : true,
    location : true,
    metaKey : true,
    movementX : true,
    movementY : true,
    newURL : true,
    newValue : true,
    offsetX : true,
    offsetY : true,
    oldURL : true,
    oldValue : true,
    origin : true,
    originalPolicy : true,
    pageX : true,
    pageY : true,
    path : true,
    persisted : true,
    pointerId : true,
    pointerType : true,
    ports : true,
    pressure : true,
    preventDefault : false,
    promise : true,
    propertyName : true,
    pseudoElement : true,
    reason : true,
    referrer : true,
    repeat : true,
    sample : true,
    screenX : true,
    screenY : true,
    shiftKey : true,
    source : true,
    sourceCapabilities : true,
    sourceFile : true,
    state : true,
    statusCode : true,
    stopImmediatePropagation : false,
    stopPropagation : false,
    storageArea : true,
    tangentialPressure : true,
    targetTouches : true,
    tiltX : true,
    tiltY : true,
    timeStamp : true,
    total : true,
    touches : true,
    twist : true,
    type : true,
    url : true,
    userActivation : true,
    view : true,
    violatedDirective : true,
    wheelDelta : true,
    wheelDeltaX : true,
    wheelDeltaY : true,
    which : true,
    width : true,
    x : true,
    y : true,
  }

  static {
    let desc
    for(const name in this.members) {
      desc = this.members[name] ? {
        get() {
          return this.nativeEvent[name]
        },
      } : {
        value(...args) {
          return this.nativeEvent[name](...args)
        },
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }
}

/**
 * @param {constructor @link Event} constructor
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
function define(constructor, bubbles = false, cancelable = false) {
  return {
    constructor,
    dict : { bubbles, cancelable },
  }
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Id: () => (/* binding */ Id)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


let counter = 0

class Id extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  static nodeName = 'id'

  static generate() {
    const str = (counter++).toString(36)
    return 'ID_' + str.padStart(4, '0')
  }
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerHTML: () => (/* binding */ InnerHTML)
/* harmony export */ });
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


class InnerHTML extends _PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*[]|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = Array.isArray(value) ?
      value.filter(_PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType.filter).join('') :
      value
  }
}


/***/ }),
/* 37 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style: () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



const sampleNode = _window_cjs__WEBPACK_IMPORTED_MODULE_0__.document.createElement('div')

class Style extends _AttrType_js__WEBPACK_IMPORTED_MODULE_1__.AttrType
{
  static nodeName = 'style'

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @return {CSSStyleDeclaration}
   */
  static get(elem, prop) {
    return elem.node.style
  }

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @param {string|{}|null} value
   */
  static set(elem, prop, value) {
    if(typeof value === 'string' || value === null) {
      sampleNode.style = value || ''
    }
    else Object.assign(sampleNode.style, value)
    elem.vnode.style = sampleNode.getAttribute('style') || null
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {*} value
   */
  static update(elem, propName, value) {
    super.update(elem, propName, value)
    sampleNode.style = ''
  }
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextType: () => (/* binding */ TextType)
/* harmony export */ });
/* harmony import */ var _window_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const { Text } = _window_cjs__WEBPACK_IMPORTED_MODULE_0__

class TextType
{
  /**
   * @param {string|number|*} data
   */
  constructor(data) {
    this.data = String(data)
    this.node = null
  }

  /**
   * @param {Text} [node]
   * @private
   */
  __init(node) {
    this.node = node || new Text(this.data)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode) {
    keepNode || this.node.remove()
  }
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InnerText: () => (/* binding */ InnerText)
/* harmony export */ });
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


class InnerText extends _PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*[]|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = Array.isArray(value) ?
      value.filter(_PropType_js__WEBPACK_IMPORTED_MODULE_0__.PropType.filter).join('\n') :
      value
  }
}


/***/ }),
/* 40 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
class Context
{
  /**
   * @param {*} props
   * @constructor
   */
  constructor(props) {
    /**
     * @param {*} newProps
     * @param {*} children
     * @return {*}
     */
    this.Provider = ({ children, ...newProps }) => {
      props = newProps
      return children
    }
    /**
     * @param {function} render
     */
    this.Consumer = render => render(props)
  }
}


/***/ }),
/* 41 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlA: () => (/* binding */ HtmlA),
/* harmony export */   HtmlAbbr: () => (/* binding */ HtmlAbbr),
/* harmony export */   HtmlAddress: () => (/* binding */ HtmlAddress),
/* harmony export */   HtmlArea: () => (/* binding */ HtmlArea),
/* harmony export */   HtmlArticle: () => (/* binding */ HtmlArticle),
/* harmony export */   HtmlAside: () => (/* binding */ HtmlAside),
/* harmony export */   HtmlAudio: () => (/* binding */ HtmlAudio),
/* harmony export */   HtmlB: () => (/* binding */ HtmlB),
/* harmony export */   HtmlBase: () => (/* binding */ HtmlBase),
/* harmony export */   HtmlBdi: () => (/* binding */ HtmlBdi),
/* harmony export */   HtmlBdo: () => (/* binding */ HtmlBdo),
/* harmony export */   HtmlBlockQuote: () => (/* binding */ HtmlBlockQuote),
/* harmony export */   HtmlBody: () => (/* binding */ HtmlBody),
/* harmony export */   HtmlBr: () => (/* binding */ HtmlBr),
/* harmony export */   HtmlButton: () => (/* binding */ HtmlButton),
/* harmony export */   HtmlCanvas: () => (/* binding */ HtmlCanvas),
/* harmony export */   HtmlCaption: () => (/* binding */ HtmlCaption),
/* harmony export */   HtmlCite: () => (/* binding */ HtmlCite),
/* harmony export */   HtmlCode: () => (/* binding */ HtmlCode),
/* harmony export */   HtmlCol: () => (/* binding */ HtmlCol),
/* harmony export */   HtmlColGroup: () => (/* binding */ HtmlColGroup),
/* harmony export */   HtmlData: () => (/* binding */ HtmlData),
/* harmony export */   HtmlDataList: () => (/* binding */ HtmlDataList),
/* harmony export */   HtmlDd: () => (/* binding */ HtmlDd),
/* harmony export */   HtmlDel: () => (/* binding */ HtmlDel),
/* harmony export */   HtmlDetails: () => (/* binding */ HtmlDetails),
/* harmony export */   HtmlDfn: () => (/* binding */ HtmlDfn),
/* harmony export */   HtmlDialog: () => (/* binding */ HtmlDialog),
/* harmony export */   HtmlDiv: () => (/* binding */ HtmlDiv),
/* harmony export */   HtmlDl: () => (/* binding */ HtmlDl),
/* harmony export */   HtmlDt: () => (/* binding */ HtmlDt),
/* harmony export */   HtmlEm: () => (/* binding */ HtmlEm),
/* harmony export */   HtmlEmbed: () => (/* binding */ HtmlEmbed),
/* harmony export */   HtmlFieldSet: () => (/* binding */ HtmlFieldSet),
/* harmony export */   HtmlFigCaption: () => (/* binding */ HtmlFigCaption),
/* harmony export */   HtmlFigure: () => (/* binding */ HtmlFigure),
/* harmony export */   HtmlFooter: () => (/* binding */ HtmlFooter),
/* harmony export */   HtmlForm: () => (/* binding */ HtmlForm),
/* harmony export */   HtmlH1: () => (/* binding */ HtmlH1),
/* harmony export */   HtmlH2: () => (/* binding */ HtmlH2),
/* harmony export */   HtmlH3: () => (/* binding */ HtmlH3),
/* harmony export */   HtmlH4: () => (/* binding */ HtmlH4),
/* harmony export */   HtmlH5: () => (/* binding */ HtmlH5),
/* harmony export */   HtmlH6: () => (/* binding */ HtmlH6),
/* harmony export */   HtmlHGroup: () => (/* binding */ HtmlHGroup),
/* harmony export */   HtmlHead: () => (/* binding */ HtmlHead),
/* harmony export */   HtmlHeader: () => (/* binding */ HtmlHeader),
/* harmony export */   HtmlHr: () => (/* binding */ HtmlHr),
/* harmony export */   HtmlHtml: () => (/* binding */ HtmlHtml),
/* harmony export */   HtmlI: () => (/* binding */ HtmlI),
/* harmony export */   HtmlIFrame: () => (/* binding */ HtmlIFrame),
/* harmony export */   HtmlImg: () => (/* binding */ HtmlImg),
/* harmony export */   HtmlInput: () => (/* binding */ HtmlInput),
/* harmony export */   HtmlIns: () => (/* binding */ HtmlIns),
/* harmony export */   HtmlKbd: () => (/* binding */ HtmlKbd),
/* harmony export */   HtmlLabel: () => (/* binding */ HtmlLabel),
/* harmony export */   HtmlLegend: () => (/* binding */ HtmlLegend),
/* harmony export */   HtmlLi: () => (/* binding */ HtmlLi),
/* harmony export */   HtmlLink: () => (/* binding */ HtmlLink),
/* harmony export */   HtmlMain: () => (/* binding */ HtmlMain),
/* harmony export */   HtmlMap: () => (/* binding */ HtmlMap),
/* harmony export */   HtmlMark: () => (/* binding */ HtmlMark),
/* harmony export */   HtmlMenu: () => (/* binding */ HtmlMenu),
/* harmony export */   HtmlMeta: () => (/* binding */ HtmlMeta),
/* harmony export */   HtmlMeter: () => (/* binding */ HtmlMeter),
/* harmony export */   HtmlNav: () => (/* binding */ HtmlNav),
/* harmony export */   HtmlNoScript: () => (/* binding */ HtmlNoScript),
/* harmony export */   HtmlObject: () => (/* binding */ HtmlObject),
/* harmony export */   HtmlOl: () => (/* binding */ HtmlOl),
/* harmony export */   HtmlOptGroup: () => (/* binding */ HtmlOptGroup),
/* harmony export */   HtmlOption: () => (/* binding */ HtmlOption),
/* harmony export */   HtmlOutput: () => (/* binding */ HtmlOutput),
/* harmony export */   HtmlP: () => (/* binding */ HtmlP),
/* harmony export */   HtmlParam: () => (/* binding */ HtmlParam),
/* harmony export */   HtmlPicture: () => (/* binding */ HtmlPicture),
/* harmony export */   HtmlPre: () => (/* binding */ HtmlPre),
/* harmony export */   HtmlProgress: () => (/* binding */ HtmlProgress),
/* harmony export */   HtmlQ: () => (/* binding */ HtmlQ),
/* harmony export */   HtmlRp: () => (/* binding */ HtmlRp),
/* harmony export */   HtmlRt: () => (/* binding */ HtmlRt),
/* harmony export */   HtmlRuby: () => (/* binding */ HtmlRuby),
/* harmony export */   HtmlS: () => (/* binding */ HtmlS),
/* harmony export */   HtmlSamp: () => (/* binding */ HtmlSamp),
/* harmony export */   HtmlScript: () => (/* binding */ HtmlScript),
/* harmony export */   HtmlSection: () => (/* binding */ HtmlSection),
/* harmony export */   HtmlSelect: () => (/* binding */ HtmlSelect),
/* harmony export */   HtmlSmall: () => (/* binding */ HtmlSmall),
/* harmony export */   HtmlSource: () => (/* binding */ HtmlSource),
/* harmony export */   HtmlSpan: () => (/* binding */ HtmlSpan),
/* harmony export */   HtmlStrong: () => (/* binding */ HtmlStrong),
/* harmony export */   HtmlStyle: () => (/* binding */ HtmlStyle),
/* harmony export */   HtmlSub: () => (/* binding */ HtmlSub),
/* harmony export */   HtmlSummary: () => (/* binding */ HtmlSummary),
/* harmony export */   HtmlSup: () => (/* binding */ HtmlSup),
/* harmony export */   HtmlTBody: () => (/* binding */ HtmlTBody),
/* harmony export */   HtmlTFoot: () => (/* binding */ HtmlTFoot),
/* harmony export */   HtmlTHead: () => (/* binding */ HtmlTHead),
/* harmony export */   HtmlTable: () => (/* binding */ HtmlTable),
/* harmony export */   HtmlTd: () => (/* binding */ HtmlTd),
/* harmony export */   HtmlTemplate: () => (/* binding */ HtmlTemplate),
/* harmony export */   HtmlTextArea: () => (/* binding */ HtmlTextArea),
/* harmony export */   HtmlTh: () => (/* binding */ HtmlTh),
/* harmony export */   HtmlTime: () => (/* binding */ HtmlTime),
/* harmony export */   HtmlTitle: () => (/* binding */ HtmlTitle),
/* harmony export */   HtmlTr: () => (/* binding */ HtmlTr),
/* harmony export */   HtmlTrack: () => (/* binding */ HtmlTrack),
/* harmony export */   HtmlU: () => (/* binding */ HtmlU),
/* harmony export */   HtmlUl: () => (/* binding */ HtmlUl),
/* harmony export */   HtmlVar: () => (/* binding */ HtmlVar),
/* harmony export */   HtmlVideo: () => (/* binding */ HtmlVideo),
/* harmony export */   HtmlWbr: () => (/* binding */ HtmlWbr)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _NumberType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _PropType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);






const attr = _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType.define.bind(_AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType)
const boolean = _BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType.define.bind(_BooleanType_js__WEBPACK_IMPORTED_MODULE_1__.BooleanType)
const number = _NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType.define.bind(_NumberType_js__WEBPACK_IMPORTED_MODULE_2__.NumberType)

class HtmlA extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'a'

  static props = {
    download : attr('download'),
    hash : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    host : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    hostname : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    href : attr('href'),
    hreflang : attr('hreflang'),
    password : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    pathname : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    port : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    protocol : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    rev : attr('rev'),
    search : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    target : attr('target'),
    type : attr('type'),
    username : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlAbbr extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'abbr'
}

class HtmlAddress extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'address'
}

class HtmlArea extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'area'

  static props = {
    alt : attr('alt'),
    coords : attr('coords'),
    download : attr('download'),
    hash : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    host : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    hostname : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    href : attr('href'),
    password : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    pathname : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    port : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    protocol : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    search : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    shape : attr('shape'),
    target : attr('target'),
    username : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlArticle extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'article'
}

class HtmlAside extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'aside'
}

class HtmlAudio extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'audio'

  static props = {
    autoplay : boolean('autoplay'),
    controls : boolean('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultMuted : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultPlaybackRate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    loop : boolean('loop'),
    muted : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    playbackRate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    preload : attr('preload'),
    src : attr('src'),
    srcObject : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    volume : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlB extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'b'
}

class HtmlBase extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'base'

  static props = {
    href : attr('href'),
    target : attr('target'),
  }
}

class HtmlBdi extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'bdi'
}

class HtmlBdo extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'bdo'
}

class HtmlBlockQuote extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'blockquote'

  static props = {
    cite : attr('cite'),
  }
}

class HtmlBody extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'body'
}

class HtmlBr extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'br'
}

class HtmlButton extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'button'

  static props = {
    autofocus : boolean('autofocus'),
    disabled : boolean('disabled'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : boolean('formnovalidate'),
    formTarget : attr('formtarget'),
    name : attr('name'),
    type : attr('type'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlCanvas extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'canvas'

  static props = {
    height : number('height'),
    width : number('width'),
  }
}

class HtmlCaption extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'caption'
}

class HtmlCite extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'cite'
}

class HtmlCode extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'code'
}

class HtmlCol extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'col'

  static props = {
    span : number('span'),
  }
}

class HtmlColGroup extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'colgroup'

  static props = {
    span : number('span'),
  }
}

class HtmlData extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'data'

  static props = {
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlDataList extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'datalist'
}

class HtmlDd extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'dd'
}

class HtmlDel extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'del'

  static props = {
    cite : attr('cite'),
    dateTime : attr('datetime'),
  }
}

class HtmlDetails extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'details'

  static props = {
    open : boolean('open'),
  }
}

class HtmlDfn extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'dfn'
}

class HtmlDialog extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'dialog'

  static props = {
    open : boolean('open'),
    returnValue : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlDiv extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'div'
}

class HtmlDl extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'dl'
}

class HtmlDt extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'dt'
}

class HtmlEm extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'em'
}

class HtmlEmbed extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'embed'

  static props = {
    height : number('height'),
    src : attr('src'),
    type : attr('type'),
    width : number('width'),
  }
}

class HtmlFieldSet extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'fieldset'

  static props = {
    disabled : boolean('disabled'),
    name : attr('name'),
  }
}

class HtmlFigCaption extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'figcaption'
}

class HtmlFigure extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'figure'
}

class HtmlFooter extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'footer'
}

class HtmlForm extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'form'

  static props = {
    acceptCharset : attr('accept-charset'),
    action : attr('action'),
    autocomplete : attr('autocomplete'),
    enctype : attr('enctype'),
    method : attr('method'),
    name : attr('name'),
    noValidate : boolean('novalidate'),
    target : attr('target'),
  }
}

class HtmlH1 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h1'
}

class HtmlH2 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h2'
}

class HtmlH3 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h3'
}

class HtmlH4 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h4'
}

class HtmlH5 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h5'
}

class HtmlH6 extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'h6'
}

class HtmlHGroup extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'hgroup'
}

class HtmlHead extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'head'
}

class HtmlHeader extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'header'
}

class HtmlHr extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'hr'
}

class HtmlHtml extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'html'
}

class HtmlI extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'i'
}

class HtmlIFrame extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'iframe'

  static props = {
    allowFullScreen : boolean('allowfullscreen'),
    height : number('height'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    srcdoc : attr('srcdoc'),
    width : number('width'),
  }
}

class HtmlImg extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'img'

  static props = {
    alt : attr('alt'),
    crossOrigin : attr('crossorigin'),
    height : number('height'),
    isMap : boolean('ismap'),
    referrerPolicy : attr('referrerpolicy'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    useMap : attr('usemap'),
    width : number('width'),
  }
}

class HtmlInput extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'input'

  static props = {
    accept : attr('accept'),
    alt : attr('alt'),
    autocomplete : attr('autocomplete'),
    checked : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultChecked : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultValue : attr('value'),
    dirName : attr('dirname'),
    disabled : boolean('disabled'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : boolean('formnovalidate'),
    formTarget : attr('formtarget'),
    height : number('height'),
    indeterminate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    inputMode : attr('inputmode'),
    max : attr('max'),
    maxLength : number('maxlength'),
    min : attr('min'),
    minLength : number('minlength'),
    multiple : boolean('multiple'),
    name : attr('name'),
    pattern : attr('pattern'),
    placeholder : attr('placeholder'),
    readOnly : boolean('readonly'),
    required : boolean('required'),
    selectionDirection : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    selectionEnd : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    selectionStart : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    size : number('size'),
    src : attr('src'),
    step : attr('step'),
    type : attr('type'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    valueAsDate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    valueAsNumber : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    width : number('width'),
  }
}

class HtmlIns extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'ins'

  static props = {
    cite : attr('cite'),
    dateTime : attr('datetime'),
  }
}

class HtmlKbd extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'kbd'
}

class HtmlLabel extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'label'

  static props = {
    htmlFor : attr('for'),
  }
}

class HtmlLegend extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'legend'
}

class HtmlLi extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'li'

  static props = {
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlLink extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'link'

  static props = {
    crossOrigin : attr('crossorigin'),
    disabled : boolean('disabled'),
    href : attr('href'),
    hreflang : attr('hreflang'),
    media : attr('media'),
    nonce : attr('nonce'),
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    rev : attr('rev'),
    type : attr('type'),
  }
}

class HtmlMain extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'main'
}

class HtmlMap extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'map'

  static props = {
    name : attr('name'),
  }
}

class HtmlMark extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'mark'
}

class HtmlMenu extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'menu'
}

class HtmlMeta extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'meta'

  static props = {
    charset : attr('charset'),
    content : attr('content'),
    httpEquiv : attr('http-equiv'),
    name : attr('name'),
  }
}

class HtmlMeter extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'meter'

  static props = {
    high : number('high'),
    low : number('low'),
    max : number('max'),
    min : number('min'),
    optimum : number('optimum'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlNav extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'nav'
}

class HtmlNoScript extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'noscript'
}

class HtmlObject extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'object'

  static props = {
    data : attr('data'),
    height : number('height'),
    name : attr('name'),
    type : attr('type'),
    useMap : attr('usemap'),
    width : number('width'),
  }
}

class HtmlOl extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'ol'

  static props = {
    reversed : boolean('reversed'),
    start : number('start'),
    type : attr('type'),
  }
}

class HtmlOptGroup extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'optgroup'

  static props = {
    disabled : boolean('disabled'),
    label : attr('label'),
  }
}

class HtmlOption extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'option'

  static props = {
    defaultSelected : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    disabled : boolean('disabled'),
    label : attr('label'),
    selected : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    text : attr('text'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlOutput extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'output'

  static props = {
    defaultValue : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    htmlFor : attr('for'),
    name : attr('name'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlP extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'p'
}

class HtmlParam extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'param'
}

class HtmlPicture extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'picture'
}

class HtmlPre extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'pre'
}

class HtmlProgress extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'progress'

  static props = {
    max : number('max'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlQ extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'q'

  static props = {
    cite : attr('cite'),
  }
}

class HtmlRp extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'rp'
}

class HtmlRt extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'rt'
}

class HtmlRuby extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'ruby'
}

class HtmlS extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 's'
}

class HtmlSamp extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'samp'
}

class HtmlScript extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'script'

  static props = {
    async : boolean('async'),
    charset : attr('charset'),
    crossOrigin : attr('crossorigin'),
    defer : boolean('defer'),
    integrity : attr('integrity'),
    noModule : boolean('nomodule'),
    nonce : attr('nonce'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    text : attr('text'),
    type : attr('type'),
  }
}

class HtmlSection extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'section'
}

class HtmlSelect extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'select'

  static props = {
    autocomplete : attr('autocomplete'),
    disabled : boolean('disabled'),
    multiple : boolean('multiple'),
    name : attr('name'),
    required : boolean('required'),
    selectedIndex : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    size : number('size'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
  }
}

class HtmlSmall extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'small'
}

class HtmlSource extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'source'

  static props = {
    height : number('height'),
    media : attr('media'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    type : attr('type'),
    width : number('width'),
  }
}

class HtmlSpan extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'span'
}

class HtmlStrong extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'strong'
}

class HtmlStyle extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'style'

  static props = {
    media : attr('media'),
    nonce : attr('nonce'),
    type : attr('type'),
  }
}

class HtmlSub extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'sub'
}

class HtmlSummary extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'summary'
}

class HtmlSup extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'sup'
}

class HtmlTBody extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'tbody'
}

class HtmlTFoot extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'tfoot'
}

class HtmlTHead extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'thead'
}

class HtmlTable extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'table'
}

class HtmlTd extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'td'

  static props = {
    colSpan : number('colspan'),
    headers : attr('headers'),
    rowSpan : number('rowspan'),
  }
}

class HtmlTemplate extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'template'
}

class HtmlTextArea extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'textarea'

  static props = {
    autocomplete : attr('autocomplete'),
    cols : number('cols'),
    defaultValue : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    dirName : attr('dirname'),
    disabled : boolean('disabled'),
    inputMode : attr('inputmode'),
    maxLength : number('maxlength'),
    minLength : number('minlength'),
    name : attr('name'),
    placeholder : attr('placeholder'),
    readOnly : boolean('readonly'),
    required : boolean('required'),
    rows : number('rows'),
    selectionDirection : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    selectionEnd : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    selectionStart : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    step : attr('step'),
    value : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    wrap : attr('wrap'),
  }
}

class HtmlTh extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'th'

  static props = {
    abbr : attr('abbr'),
    colSpan : number('colspan'),
    headers : attr('headers'),
    rowSpan : number('rowspan'),
    scope : attr('scope'),
  }
}

class HtmlTime extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'time'

  static props = {
    dateTime : attr('datetime'),
  }
}

class HtmlTitle extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'title'

  static props = {
    text : attr('text'),
  }
}

class HtmlTr extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'tr'
}

class HtmlTrack extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'track'

  static props = {
    default : boolean('default'),
    kind : attr('kind'),
    label : attr('label'),
    src : attr('src'),
    srclang : attr('srclang'),
  }
}

class HtmlU extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'u'
}

class HtmlUl extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'ul'
}

class HtmlVar extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'var'
}

class HtmlVideo extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'video'

  static props = {
    autoplay : boolean('autoplay'),
    controls : boolean('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultMuted : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    defaultPlaybackRate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    height : number('height'),
    loop : boolean('loop'),
    muted : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    playbackRate : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    playsinline : boolean('playsInline'),
    poster : attr('poster'),
    preload : attr('preload'),
    src : attr('src'),
    srcObject : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    volume : _PropType_js__WEBPACK_IMPORTED_MODULE_4__.PropType,
    width : number('width'),
  }
}

class HtmlWbr extends _HtmlType_js__WEBPACK_IMPORTED_MODULE_3__.HtmlType
{
  static tagName = 'wbr'
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlType: () => (/* binding */ HtmlType)
/* harmony export */ });
/* harmony import */ var _BooleanType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _ElemType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _RoleType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);




/**
 * @abstract
 */
class HtmlType extends _ElemType_js__WEBPACK_IMPORTED_MODULE_1__.ElemType
{
  static props = {
    ..._RoleType_js__WEBPACK_IMPORTED_MODULE_2__.RoleType.props,
    hidden : _BooleanType_js__WEBPACK_IMPORTED_MODULE_0__.BooleanType.define('hidden'),
  }
}


/***/ }),
/* 43 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Inner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _Social_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);








const { Hammer } = window

class Header extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHeader
{
  static class = 'Header'

  render() {
    const year = (new Date).getFullYear()
    return [
      new _Inner_js__WEBPACK_IMPORTED_MODULE_1__.Inner([
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH1(new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
          href : '/',
          children : 'Лариса Дедловская',
        })),
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlButton({
          className : 'MenuButton',
          onclick : this.props.toggleNav,
          children : new _Icon_js__WEBPACK_IMPORTED_MODULE_4__.Icon(this.props.open ? 'cancel' : 'menu'),
        }),
      ]),
      this._nav = new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlNav([
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlUl({
          role : 'menu',
          onclick : this.props.closeNav,
          children : [
            _api_js__WEBPACK_IMPORTED_MODULE_5__["default"].config.sections.map(section => new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              role : 'menuitem',
              children : new _Link_js__WEBPACK_IMPORTED_MODULE_2__.Link({
                to : section.path,
                children : section.title,
                onkeydown : this.onKeyDown,
              }),
            })),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              role : 'menuitem',
              children : new _Link_js__WEBPACK_IMPORTED_MODULE_2__.Link({
                to : '/Проектирование',
                children : 'Проектирование',
                onkeydown : this.onKeyDown,
              }),
            }),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              role : 'menuitem',
              children : new _Link_js__WEBPACK_IMPORTED_MODULE_2__.Link({
                to : '/Блог',
                children : 'Блог',
                onkeydown : this.onKeyDown,
              }),
            }),
            new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlLi({
              role : 'menuitem',
              children : new _Link_js__WEBPACK_IMPORTED_MODULE_2__.Link({
                to : '/Контакты',
                children : 'Контакты',
                onkeydown : this.onKeyDown,
              }),
            }),
          ],
        }),
        new _Social_js__WEBPACK_IMPORTED_MODULE_3__.Social,
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlSmall(`© ${ year } Лариса Дедловская`),
      ]),
    ]
  }

  mount() {
    this._hammertime = new Hammer(this._nav.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.props.closeNav()
      }
    })
  }

  destroy() {
    this._hammertime.off('swipe')
  }

  onKeyDown = e => {
    const target = e.nativeEvent.target
    if(e.code === 'Space') {
      e.stopPropagation()
      target.click()
    }
    if(e.code === 'ArrowUp') {
      target.parentElement.previousElementSibling?.querySelector('a').focus()
    }
    if(e.code === 'ArrowDown') {
      target.parentElement.nextElementSibling?.querySelector('a').focus()
    }
  }
}


/***/ }),
/* 44 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inner: () => (/* binding */ Inner)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class Inner extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'Inner'
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class Link extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA
{
  static class = 'Link'

  init() {
    super.init()
    this.on('click', this.onClick)
  }

  assign() {
    super.assign()
    const pathname = decodeURIComponent(location.pathname)
    if(pathname !== this.props.to) {
      this.href = this.props.to
    }
  }

  onClick(e) {
    if(!this.pathname) {
      return
    }
    e.preventDefault()
    history.pushState(null, '', this.pathname)
  }
}


/***/ }),
/* 46 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Social: () => (/* binding */ Social)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);



class Social extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'Social'

  render() {
    return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://instagram.com/design.ld',
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('instagram'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://facebook.com/larisa.dedlovskaya',
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('facebook'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://mona.livejournal.com',
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('livejournal'),
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        target : '_blank',
        rel : 'noreferrer',
        href : 'https://vk.com/larisadedlovskaya',
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('vkontakte'),
      }),
    ])
  }
}


/***/ }),
/* 47 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class Icon extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlSpan
{
  static class = 'Icon'

  constructor(props) {
    super(
      typeof props === 'string' ?
        { glyph : props } :
        props,
    )
  }

  assign() {
    super.assign()
    this.classList = 'icon icon-' + this.props.glyph
  }
}


/***/ }),
/* 48 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


const { protocol, hostname, port } = window.location
const pathname = port? '/portfolio/public/' : '/'
const BASE_URL = protocol + '//' + hostname + pathname

function normalize(name) {
  return name.replace(/[\s():,./]+/g, '_')
}

const api = {
  config: _config_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  cache : {
    '/' : {
      owner_id : _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].owner_id,
      id : _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].album_id,
    },
  },
  async getSection(path) {
    const section = this.cache[path]
    if(!section) {
      throw Error('Страница не найдена')
    }
    if(section.items) {
      return section
    }
    const url = new URL('albums.php', BASE_URL)
    url.searchParams.set('owner_id', section.owner_id)
    const res = await fetch(url)
    const { items } = await res.json()
    section.items = items
    for(const album of items) {
      album.section = section
      this.cache[album.path = path + '/' + normalize(album.title)] = album
    }
    return section
  },
  async getAlbum(path) {
    let album = this.cache[path]
    if(!album) {
      await this.getSection('/' + path.slice(1).split('/')[0])
      album = this.cache[path]
    }
    if(!album) {
      throw Error('Страница не найдена')
    }
    if(album.items) {
      return album
    }
    const url = new URL('album.php', BASE_URL)
    url.searchParams.set('owner_id', album.owner_id)
    url.searchParams.set('album_id', album.id)
    const res = await fetch(url)
    const { items } = await res.json()
    album.items = items
    return album
  },
  async getBlog(offset) {
    const url = new URL('blog.php', BASE_URL)
    url.searchParams.set('owner_id', _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].owner_id)
    url.searchParams.set('offset', offset)
    const res = await fetch(url)
    return res.json()
  },
}

for(const section of _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].sections) {
  api.cache[section.path = '/' + normalize(section.title)] = section
}

window.api = api

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),
/* 49 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  owner_id : -204943414,
  album_id : 278146389,
  sections : [
    {
      title : 'Современная классика',
      owner_id : -205424841,
    },
    {
      title : 'Лофт / минимализм',
      owner_id : -205407254,
    },
    {
      title : 'Экстерьер / другое',
      owner_id : -205425358,
    },
  ],
  docs : [
    {
      title : 'Концептуальный проект',
      path : '/data/docs/conceptual_project.pdf',
    },
    {
      title : 'Эскизный проект',
      path : '/data/docs/draft_project.pdf',
    },
    {
      title : 'Рабочий проект',
      path : '/data/docs/working_project.pdf',
    },
    {
      title : 'Примеры работ в 3D',
      path : '/data/docs/examples_3d.pdf',
    },
  ],
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 51 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Header
{
  position: relative;
  width: 100%;
  color: #fff;
  background: #333;
  z-index: 1;
}
.Header > .Inner
{
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 10px;
}
.Header nav
{
  position: absolute;
  top: 0;
  left: 100%;
  height: 100vh;
  padding: 40px 10px 10px;
  box-sizing: border-box;
  background-color: #333;
  z-index: 2;
}
.Header h1
{
  font-size: 1.3rem;
  white-space: nowrap;
  margin: 0;
}
.Header h1 a
{
  display: block;
  padding: 14px 10px;
  width: fit-content;
}
.Header button
{
  font-size: 1.8rem;
  background-color: transparent;
  color: inherit;
  border: none;
  padding: 2px 6px;
  opacity: .8;
  text-shadow: inherit;
  cursor: pointer;
  outline: none;
}
.Header button:hover,
.Header button:focus,
.Header button:active
{
  opacity: 1;
}
.Header ul
{
  font-weight: bold;
  padding: 0;
  margin: 0;
  list-style: none;
}
.Header li
{
  transition: background-color .2s;
}
.Header li
{
  border-bottom: 1px solid rgba(255, 255, 255, .05);
}
.Header a[href]
{
  color: inherit;
}
.Header li a
{
  display: block;
  padding: 15px 20px;
  opacity: .8;
}
.Header li a:hover,
.Header li a:focus,
.Header li a:not([href])
{
  opacity: 1;
}
.Header li a:not([href])
{
  cursor: default;
}
.Header .Social
{
  padding: 20px;
  font-size: 1.6rem;
  margin-top: 20px;
}
.Header .Social a
{
  display: inline-block;
  padding: 10px;
  opacity: .8;
}
.Header .Social a:hover,
.Header .Social a:focus
{
  opacity: 1;
}
.Header small
{
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: .6rem;
  padding: 10px;
  opacity: .5;
}
@media (min-width: 900px)
{
  .Header
  {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    width: fit-content;
    height: 100%;
  }
  .Header h1
  {
    padding: 10px 0;
  }
  .Header button
  {
    display: none;
  }
  .Header nav
  {
    width: 100%;
    height: auto;
    position: relative;
    left: 0;
    background-color: transparent;
  }
  .Header ul
  {
    width: fit-content;
    padding: 0 10px;
  }
  .Header li a
  {
    padding: 10px;
  }
  .Header .Social
  {
    font-size: 1.2rem;
    padding: 10px;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 52 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);



class Main extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlMain
{
  static class = 'Main'
}


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 54 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Main
{
  display: grid;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.Main > .Content
{
  box-sizing: border-box;
  padding: 0 20px;
  background-color: #fff;
  width: 100%;
}
.Main .Loading
{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  opacity: .5;
  color: #fff;
}
.Main h2
{
  font-size: 1.2rem;
  margin-top: 30px;
}
.Main hr
{
  border: none;
  border-bottom: 1px dotted rgba(0, 0, 0, .1);
  margin: 30px 0;
}
@media (min-width: 900px)
{
  .Main
  {
    height: 100vh;
  }
  .Main > .Content
  {
    padding: 0 30px;
  }
  .Main h2
  {
    font-size: 1.3rem;
    padding: 10px 0;
    margin: 14px 0;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 55 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideShow: () => (/* binding */ SlideShow)
/* harmony export */ });
/* harmony import */ var _ErrorContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _Inner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SlideHeading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _SlideList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var _SlideControl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony import */ var _SlideShow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65);










const { Hammer } = window

class SlideShow extends _Main_js__WEBPACK_IMPORTED_MODULE_2__.Main
{
  static class = 'SlideShow'

  state = {
    album : null,
    current : 0,
    timer : null,
    error : null,
    busy : false,
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const album = this.state.album
    if(this.state.error) {
      return new _ErrorContent_js__WEBPACK_IMPORTED_MODULE_0__.ErrorContent
    }
    if(!album) {
      return new _Loading_js__WEBPACK_IMPORTED_MODULE_1__.Loading
    }
    const section = album.section
    const current = this.state.current
    const prev = this.getIndex(current - 1)
    const next = this.getIndex(current + 1)
    const items = [
      album.items[prev],
      album.items[current],
      album.items[next],
    ]
    if(album.title) {
      document.title = album.title + ' | Лариса Дедловская'
    }
    return new _Inner_js__WEBPACK_IMPORTED_MODULE_3__.Inner([
      section && new _SlideHeading_js__WEBPACK_IMPORTED_MODULE_4__.SlideHeading({
        section,
        album,
      }),
      this._ref = new _SlideList_js__WEBPACK_IMPORTED_MODULE_5__.SlideList({
        items,
        classList : ['appear'],
        onclick : this.onClick,
        ontransitionend : this.onTransitionEnd,
      }),
      new _SlideControl_js__WEBPACK_IMPORTED_MODULE_6__.SlideControl({
        current,
        album,
        switchSlide : this.switchSlide,
      }),
    ])
  }

  async mount() {
    await this.#load()
    if(this.state.error) {
      return
    }
    this.props.auto && this.tick()
    this._hammertime = new Hammer(this._ref.node)
    this._hammertime.on('swipe', e => {
      if(e.direction === Hammer.DIRECTION_LEFT) {
        this.switchSlide(1, true)
      }
      else if(e.direction === Hammer.DIRECTION_RIGHT) {
        this.switchSlide(-1, true)
      }
    })
    document.addEventListener('keydown', this.onKeyDown)
  }

  destroy() {
    if(this.state.timer) {
      clearTimeout(this.state.timer)
    }
    this.setState({ timer : null })
    this._hammertime?.off('swipe')
    document.removeEventListener('keydown', this.onKeyDown)
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        album : await _api_js__WEBPACK_IMPORTED_MODULE_7__["default"].getAlbum(this.props.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }

  tick() {
    const handler = () => {
      this.switchSlide(1)
      this.tick()
    }
    this.setState({
      timer : setTimeout(handler, 5000),
    })
  }

  switchSlide = (shift, stop = false) => {
    if(stop) {
      if(this.state.timer) {
        clearTimeout(this.state.timer)
      }
      this.setState({ timer : null })
    }
    if(this._transition) {
      return
    }
    this._transition = true
    this.setState(state => ({
      current : this.getIndex(state.current + shift),
    }))
  }

  getIndex(i) {
    const items = this.state.album.items
    return i < 0 ?
      items.length + i :
      i % items.length
  }

  onClick = () => {
    this.switchSlide(1, true)
  }

  onKeyDown = e => {
    switch(e.code) {
      case 'ArrowLeft':
        this.switchSlide(-1, true)
        break
      case 'ArrowRight':
      case 'Space':
        this.switchSlide(1, true)
        break
      default:
        void null
    }
  }

  onTransitionEnd = () => {
    this._transition = false
  }
}


/***/ }),
/* 56 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorContent: () => (/* binding */ ErrorContent)
/* harmony export */ });
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _ErrorContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);



class ErrorContent extends _Content_js__WEBPACK_IMPORTED_MODULE_0__.Content
{
  static class = 'ErrorContent'

  render() {
    document.title = 'Страница не найдена'
    return '404'
  }
}


/***/ }),
/* 57 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class Content extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'Content'
}


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ErrorContent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ErrorContent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ErrorContent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ErrorContent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_ErrorContent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 59 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ErrorContent
{
  font-size: 7rem;
  color: rgba(0, 0, 0, .2);
  display: flex;
  align-items: center;
  justify-content: center;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 60 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class Loading extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'Loading'

  render() {
    return 'Загрузка...'
  }
}


/***/ }),
/* 61 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideHeading: () => (/* binding */ SlideHeading)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);



class SlideHeading extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2
{
  static class = 'SlideHeading'

  render() {
    return [
      new _Link_js__WEBPACK_IMPORTED_MODULE_1__.Link({
        to : this.props.section.path,
        children : this.props.section.title,
        onkeydown : this.onKeyDown,
      }),
      ' → ',
      this.props.album.title,
    ]
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
      e.target.click()
    }
  }
}


/***/ }),
/* 62 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideList: () => (/* binding */ SlideList)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _SlideItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);



class SlideList extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'SlideList'

  render() {
    return this.props.items.map(
      (item, i) => new _SlideItem_js__WEBPACK_IMPORTED_MODULE_1__.SlideItem({
        key : item.id,
        index : i,
        item,
      }),
    )
  }
}


/***/ }),
/* 63 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideItem: () => (/* binding */ SlideItem)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


class SlideItem extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.RoleImg
{
  static class = 'SlideItem'

  assign() {
    super.assign()
    const size = this.props.item.sizes.find(
      size => size.type === 'z',
    )
    const url = size.url
    const style = {
      backgroundImage : `url(${ url })`,
      left : (this.props.index - 1) * 100 + '%',
    }
    if(location.hostname === 'new.lddesign.ru') {
      style.backgroundSize = 'cover'
    }
    this.style = style
  }
}


/***/ }),
/* 64 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideControl: () => (/* binding */ SlideControl)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);



class SlideControl extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'SlideControl'

  render() {
    return [
      new SlidePrev({
        title : 'Предыдущий слайд',
        onkeydown : this.onKeyDown,
        onclick : () => this.props.switchSlide(-1, true),
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('angle-left'),
      }),
      new SlideCounter([
        this.props.current + 1, ' / ',
        this.props.album.items.length,
      ]),
      new SlideNext({
        title : 'Следующий слайд',
        onkeydown : this.onKeyDown,
        onclick : () => this.props.switchSlide(1, true),
        children : new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon('angle-right'),
      }),
    ]
  }

  onKeyDown = e => {
    if(e.code === 'Space') {
      e.stopPropagation()
    }
  }
}

class SlidePrev extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlButton
{
  static class = 'SlidePrev'
}

class SlideCounter extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv
{
  static class = 'SlideCounter'
}

class SlideNext extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlButton
{
  static class = 'SlideNext'
}


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_SlideShow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_SlideShow_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_SlideShow_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_SlideShow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_SlideShow_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 66 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SlideShow
{
  width: 100%;
  overflow: hidden;
  color: #fff;
  position: relative;
}
.SlideShow > .Inner
{
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
}
.SlideShow,
.SlideShow .SlideList,
.SlideShow .SlideItem
{
  height: 100%;
}
.SlideShow .SlideList
{
  position: relative;
  white-space: nowrap;
  cursor: grab;
}
.SlideShow .SlideList:active
{
  cursor: grabbing;
}
.SlideShow .SlideItem
{
  display: inline-block;
  background: center center / cover no-repeat;
  width: 100%;
  transition: left .5s;
  position: absolute;
}
.SlideShow .SlideControl
{
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px 10px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
}
.SlideShow .SlideCounter
{
  opacity: .7;
  width: 100px;
  text-align: center;
  user-select: none;
}
.SlideShow button
{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  opacity: .7;
  color: inherit;
  font-size: 3rem;
  text-shadow: inherit;
  /*outline: none;*/
}
.SlideShow button:hover,
.SlideShow button:focus
{
  opacity: 1;
}
.SlideShow .BackLink
{
  position: absolute;
  display: block;
  font-size: 1.4rem;
  z-index: 2;
  color: #fff;
  padding: 4px 20px;
  opacity: .8;
}
.SlideShow .BackLink:hover,
.SlideShow .BackLink:focus
{
  opacity: 1;
  color: #fff;
}
.SlideShow h2
{
  position: absolute;
  font-size: .8rem;
  z-index: 1;
  margin: 0;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.3) 100%);
}
.SlideShow h2 a[href],
.SlideShow h2 a[href]:hover,
.SlideShow h2 a[href]:focus
{
  color: #fff;
}
@media (min-width: 500px)
{
  .SlideShow .BackLink
  {
    font-size: 1.6rem;
  }
  .SlideShow h2
  {
    font-size: 1rem;
  }
}
@media (min-width: 900px)
{
  .SlideShow h2
  {
    padding: 15px 20px;
  }
  .SlideShow .SlideItem
  {
    background-size: contain;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 67 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumGroup: () => (/* binding */ AlbumGroup)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _AlbumItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _ErrorContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _Inner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _AlbumGroup_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69);









class AlbumGroup extends _Main_js__WEBPACK_IMPORTED_MODULE_5__.Main
{
  static class = 'AlbumGroup'

  state = {
    group : null,
    error : null,
    busy : false,
  }

  assign() {
    super.assign()
    this.busy = this.state.busy
  }

  render() {
    const group = this.state.group
    if(this.state.error) {
      return new _ErrorContent_js__WEBPACK_IMPORTED_MODULE_2__.ErrorContent
    }
    if(!group) {
      return new _Loading_js__WEBPACK_IMPORTED_MODULE_4__.Loading
    }
    document.title = group.title + ' | Лариса Дедловская'
    return new _Inner_js__WEBPACK_IMPORTED_MODULE_3__.Inner({
      classList : ['appear'],
      children : [
        new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({
          className : 'AlbumItem',
          children : new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2(group.title),
        }),
        group.items.map(
          album => new _AlbumItem_js__WEBPACK_IMPORTED_MODULE_1__.AlbumItem({
            key : album.id,
            album,
          }),
        ),
      ],
    })
  }

  mount() {
    void this.#load()
  }

  update(prevProps, prevState) {
    if(this.props.path !== prevProps.path) {
      void this.#load()
    }
  }

  async #load() {
    this.setState({ busy : true })
    try {
      this.setState({
        group : await _api_js__WEBPACK_IMPORTED_MODULE_6__["default"].getSection(this.props.path),
        busy : false,
      })
    }
    catch(error) {
      this.setState({ error })
    }
  }
}


/***/ }),
/* 68 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumItem: () => (/* binding */ AlbumItem)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);



class AlbumItem extends _Link_js__WEBPACK_IMPORTED_MODULE_1__.Link
{
  static class = 'AlbumItem'

  init() {
    super.init()
    this.on('keydown', this.onKeyDown)
  }

  assign() {
    super.assign()
    const album = this.props.album
    const size = album.sizes.find(
      size => size.type === 'r',
    )
    const url = size.src
    this.href = album.path
    this.style = {
      backgroundImage : `url(${ url })`,
    }
  }

  render() {
    return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({
      className : 'AlbumInfo',
      children : this.props.album.title,
    })
  }

  onKeyDown(e) {
    const target = e.nativeEvent.target
    switch(e.code) {
      case 'Space':
        target.click()
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        target.previousElementSibling?.focus()
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        target.nextElementSibling?.focus()
        break
      default:
        void null
    }
  }
}


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_AlbumGroup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_AlbumGroup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_AlbumGroup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_AlbumGroup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_AlbumGroup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 70 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.AlbumGroup
{
  overflow: auto;
}
.AlbumGroup .AlbumItem
{
  display: block;
  padding-top: 55%;
  background: center center / cover no-repeat;
  position: relative;
  outline: none;
}
.AlbumGroup .AlbumItem h2
{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.AlbumGroup .AlbumInfo
{
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  box-sizing: border-box;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  display: flex;
  align-items: flex-end;
  font-size: .9rem;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
}
@media (min-width: 500px)
{
  .AlbumGroup > .Inner
  {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 900px)
{
  .AlbumGroup .AlbumInfo
  {
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .8);
    opacity: 0;
    transition: opacity .3s;
    text-shadow: none;
    color: #000;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  .AlbumGroup .AlbumItem:hover .AlbumInfo,
  .AlbumGroup .AlbumItem:focus .AlbumInfo
  {
    opacity: 1;
  }
}
@media (min-width: 1100px)
{
  .AlbumGroup > .Inner
  {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1500px)
{
  .AlbumGroup > .Inner
  {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 71 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentList: () => (/* binding */ DocumentList)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _DocumentList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72);







class DocumentList extends _Main_js__WEBPACK_IMPORTED_MODULE_2__.Main
{
  static class = 'DocumentList'

  render() {
    document.title = 'Проектирование | Лариса Дедловская'
    return new _Content_js__WEBPACK_IMPORTED_MODULE_1__.Content([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2('Проектирование'),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      _api_js__WEBPACK_IMPORTED_MODULE_4__["default"].config.docs.map(item => new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
        key : item.path,
        href : item.path,
        target : '_blank',
        rel : 'noreferrer',
        children : [
          new _Icon_js__WEBPACK_IMPORTED_MODULE_3__.Icon('file-pdf'),
          item.title,
        ],
      })),
    ])
  }
}


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_DocumentList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_DocumentList_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_DocumentList_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_DocumentList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_DocumentList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 73 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.DocumentList a[href]
{
  display: flex;
  align-items: center;
  padding: 15px 0;
  font-size: 1rem;
  width: fit-content;
}
.DocumentList a[href] .icon-file-pdf
{
  font-size: 1.5rem;
  margin-right: 10px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 74 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contacts: () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _Contacts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);






class Contacts extends _Main_js__WEBPACK_IMPORTED_MODULE_3__.Main
{
  static class = 'Contacts'

  render() {
    document.title = 'Контакты | Лариса Дедловская'
    return new _Content_js__WEBPACK_IMPORTED_MODULE_2__.Content([
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH2('Контакты'),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'mailto:lddesign@mail.ru',
        icon : 'mail',
        children : 'lddesign@mail.ru',
      }),
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'tel:+79257711473',
        icon : 'phone',
        children : '+7 925 771 1473',
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://instagram.com/design.ld',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'instagram',
        children : 'design.ld',
      }),
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://facebook.com/larisa.dedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'facebook',
        children : 'larisa.dedlovskaya',
      }),
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://vk.com/larisadedlovskaya',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'vkontakte',
        children : 'larisadedlovskaya',
      }),
      new _ContactsLink_js__WEBPACK_IMPORTED_MODULE_1__.ContactsLink({
        href : 'https://mona.livejournal.com',
        target : '_blank',
        rel : 'noreferrer',
        icon : 'livejournal',
        children : 'mona',
      }),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlHr,
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlDiv({
        className : 'Author',
        children : [
          'Разработчик сайта: ',
          new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA({
            href : 'mailto:vv.aristov@gmail.com',
            target : '_blank',
            rel : 'noreferrer',
            children : 'Вячеслав Аристов',
          }),
        ]
      }),
    ])
  }
}


/***/ }),
/* 75 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsLink: () => (/* binding */ ContactsLink)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);



class ContactsLink extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlA
{
  static class = 'ContactsLink'

  render() {
    return [
      new _Icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon(this.props.icon),
      this.props.children,
    ]
  }
}


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Contacts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Contacts_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Contacts_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Contacts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Contacts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 77 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Contacts dd
{
  margin: 5px 0 30px;
  font-size: 1.2rem;
}
.Contacts .ContactsLink
{
  padding: 10px 0;
  display: flex;
  align-items: center;
  width: fit-content;
}
.Contacts .ContactsLink .icon
{
  font-size: 1.4rem;
  margin-right: 15px;
}
.Contacts .Author
{
  font-size: .8rem;
  margin: 30px 0;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 78 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blog: () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var _Feed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _Blog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);






class Blog extends _Main_js__WEBPACK_IMPORTED_MODULE_2__.Main
{
  static class = 'Blog'

  state = {
    data : null,
    busy : false,
  }

  init() {
    super.init()
    this.on('scroll', this.onScroll)
  }

  render() {
    const data = this.state.data
    if(!data) {
      return new _Loading_js__WEBPACK_IMPORTED_MODULE_1__.Loading
    }
    return new _Feed_js__WEBPACK_IMPORTED_MODULE_0__.Feed({
      data,
      classList : ['appear'],
    })
  }

  mount() {
    void this.#load()
  }

  async #load() {
    this.setState({ busy : true })
    const data = this.state.data || []
    const { count, items } = await _api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getBlog(data.length)
    this._count = count
    this.setState({
      data : [...data, ...items],
      busy : false,
    })
  }

  onScroll() {
    if(this.state.busy) {
      return
    }
    if(this.state.data.length >= this._count) {
      return
    }
    const node = this.node
    if(node.scrollTop > node.scrollHeight - node.clientHeight * 2) {
      void this.#load()
    }
  }
}


/***/ }),
/* 79 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Feed: () => (/* binding */ Feed)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);



class Feed extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.RoleFeed
{
  static class = 'Feed'

  render() {
    return [
      this.props.data.map(item => {
        if(!item.text && !item.attachments) {
          return null
        }
        if(item.copy_history) {
          return null
        }
        return new _Post_js__WEBPACK_IMPORTED_MODULE_1__.Post({ key : item.id, item })
      }),
    ]
  }
}


/***/ }),
/* 80 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Post: () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const { moment } = window
const URL_RE = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z\d.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z\d.-]+)((?:\/[+~%/.\w\-_]*)?\??([-+=&;%@.\w_]*)#?([.!/\\\w]*))?)/g

function replace(str) {
  return str.replace(URL_RE, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
}

class Post extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlArticle
{
  static class = 'Post'

  render() {
    const item = this.props.item
    const [title, ...blocks] = item.text.split('\n\n')
    const date = moment.unix(item.date)
    return [
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlTime(date.format('D MMM YYYY')),
      new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlH3({
        innerHTML : replace(title),
      }),
      !!blocks.length && blocks.map(p => new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlP({
        innerHTML : replace(p),
      })),
      item.attachments?.map(attachment => {
        if(attachment.type !== 'photo') {
          return null
        }
        const size = attachment.photo.sizes.find(
          size => size.type === 'r',
        )
        return new htmlmodule__WEBPACK_IMPORTED_MODULE_0__.HtmlImg({
          key : attachment.photo.id,
          src : size?.url,
          alt : '',
        })
      }),
    ]
  }
}


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Blog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Blog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Blog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Blog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_Blog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 82 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Blog
{
  background-color: #eee;
  display: block;
}
.Blog article
{
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}
.Blog h3,
.Blog p
{
  max-width: 900px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Blog h3
{
  margin-top: 10px;
}
.Blog time
{
  font-size: .8rem;
}
.Blog p
{
  font-size: .9rem;
}
.Blog img
{
  max-width: 100%;
  max-height: 382px;
  vertical-align: top;
  margin-bottom: 5px;
}
.Blog img:not(:last-child)
{
  margin-right: 5px;
}
.Blog .Loading
{
  color: #000;
}
@media (min-width: 900px)
{
  .Blog
  {
    padding: 20px;
  }
  /*.Blog article
  {
    max-width: 900px;
  }*/
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 83 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/**
 * @param {{path:string,render:function}[]} routes
 * @return {*|string|ElemType|*[]|string[]|ElemType[]}
 */
function router(routes) {
  const pathname = decodeURIComponent(location.pathname).replace(/\/$/, '')
  let route, path
  for(route of routes) {
    path = route.path
    if(typeof path === 'string') {
      if(path.replace(/\/$/, '') === pathname) {
        return route.render()
      }
    }
    else if(path.test(pathname)) {
      return route.render()
    }
  }
}


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 85 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.App
{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  transition: margin-left .3s;
}
.App > .Inner
{
  position: relative;
  left: 0;
  height: 100%;
  transition: left .3s;
}
.App > .Inner
{
  display: grid;
  grid-template-rows: auto 1fr;
}
.App .Backdrop
{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
}
@media (max-width: 899px)
{
  .App.open > .Inner
  {
    left: -400px;
  }
  .App .Header nav
  {
    width: 400px;
  }
  .App.open .Backdrop
  {
    display: block;
  }
}
@media (max-width: 499px)
{
  .App.open > .Inner
  {
    left: -80%;
  }
  .App .Header nav
  {
    width: 80vw;
  }
}
@media (min-width: 900px)
{
  .App > .Inner
  {
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
  }
  .App .Header nav
  {
    width: 100%;
  }
  .App.homepage > .Inner
  {
    display: block;
  }
  .App.homepage .Header
  {
    position: absolute;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 5%, rgba(0, 0, 0, 0) 100%) transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  }
  .App.homepage nav
  {
    background: transparent;
  }
  .App.homepage .Social,
  .App.homepage small
  {
    display: none;
  }
  .App.homepage li a[href]
  {
    opacity: 1;
  }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



// noinspection JSUnresolvedVariable
const hot = /* unsupported import.meta.webpackHot */ undefined
const render = app => {
  _App_js__WEBPACK_IMPORTED_MODULE_1__.App.destroy(app)
  return _App_js__WEBPACK_IMPORTED_MODULE_1__.App.render({}, document.getElementById('root'))
}

let app = render()

if(hot) {
  document.getElementById('css')?.remove()
  // noinspection JSUnresolvedVariable
  hot.accept(['./App'], () => app = render(app))
}

})();

/******/ })()
;
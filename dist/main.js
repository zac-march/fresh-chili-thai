/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #eee;\n  --background-colour: rgba(105, 70, 107, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background-colour);\n  color: var(--font-color);\n  background-size: cover;\n}\n\n.background {\n  background-color: var(--background-colour);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 100%;\n  min-height: 100vh;\n}\n\nheader,\nfooter,\nmain {\n  padding: 30px 25% 30px 25%;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.github-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: white;\n}\n\n.fa-github {\n  font-size: 1.5rem;\n  transition: transform 0.2s ease-in-out;\n  color: rgba(0, 0, 0, 0.705);\n}\n\n.fa-github:hover {\n  transform: rotate(-2deg) scale(1.1);\n}\n\n/* Header */\n\nheader {\n  background-color: rgb(96, 65, 99);\n  padding: 20px 20% 20px 20%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 1px 5px -2px rgb(0, 0, 0);\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  justify-content: right;\n  align-items: center;\n  gap: 2rem;\n  list-style: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n\n.nav-link {\n  transition: 0.1s ease-in-out;\n}\n\n.active {\n  padding-bottom: 3px;\n  box-shadow: 0 3px 2px -2px rgb(160, 160, 160);\n}\n\n.nav-link:hover {\n  padding-bottom: 3px;\n  transition: 0.1s ease-in-out;\n  box-shadow: 0 3px 2px -2px rgb(196, 196, 196);\n}\n\n/* Main */\n\n.logo > img {\n  height: 5rem;\n}\n\nmain {\n  width: 100%;\n  height: 100%;\n}\n\nmain > div {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n}\n\nmain > div > h1 {\n  align-self: center;\n  margin-bottom: 0.5rem;\n}\n\nh1,\nh2 {\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n/* Home */\n\n.hero > h1 {\n  margin-top: 5rem;\n  font-size: 5rem;\n}\n.hero > p {\n  width: 70%;\n  align-self: center;\n}\n\n.hero > button {\n  width: max-content;\n  align-self: center;\n  margin-top: 1rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: rgb(230, 65, 44, 0);\n  color: #eee;\n  font-weight: bold;\n  border-radius: 10px;\n  transition: 0.3s ease;\n  background-color: #db4532;\n  border: 0;\n  box-shadow: 0px 2px 6px -5px black;\n}\n\n.hero > button:hover {\n  transition: 0.1s ease;\n  border: 0;\n  box-shadow: 0px 3px 8px -5px black;\n  transform: scale(1.03);\n  cursor: pointer;\n}\n.hero > button:active {\n  transition: 0.1s ease;\n  transform: scale(0.98);\n}\n\n/* About */\n\n.about {\n  display: flex;\n  gap: 1rem;\n}\n\n.about-image {\n  flex: 2;\n  max-height: 50%;\n  justify-content: center;\n  display: flex;\n}\n\n.about-image img {\n  width: 95%;\n  object-fit: cover;\n  overflow: hidden;\n  display: block;\n}\n\n/* Contact */\n\n.contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  gap: 1rem;\n}\n\n.contact > h1 {\n  grid-column: span 2;\n  justify-self: center;\n}\n\n.contact > div {\n  justify-self: center;\n}\n\n.contact-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\niframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.iframe-wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  resize: vertical;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,0CAA0C;EAC1C,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;EAC1C,aAAa;EACb,iCAAiC;EACjC,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;EACtC,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA,WAAW;;AAEX;EACE,iCAAiC;EACjC,0BAA0B;EAC1B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,6CAA6C;EAC7C,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,6CAA6C;AAC/C;;AAEA,SAAS;;AAET;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,qCAAqC;EACrC,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,yBAAyB;EACzB,SAAS;EACT,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,kCAAkC;EAClC,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;EACnC,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n\n:root {\n  --font-color: #eee;\n  --background-colour: rgba(105, 70, 107, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background-colour);\n  color: var(--font-color);\n  background-size: cover;\n}\n\n.background {\n  background-color: var(--background-colour);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 100%;\n  min-height: 100vh;\n}\n\nheader,\nfooter,\nmain {\n  padding: 30px 25% 30px 25%;\n}\n\n/* Footer */\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.github-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: white;\n}\n\n.fa-github {\n  font-size: 1.5rem;\n  transition: transform 0.2s ease-in-out;\n  color: rgba(0, 0, 0, 0.705);\n}\n\n.fa-github:hover {\n  transform: rotate(-2deg) scale(1.1);\n}\n\n/* Header */\n\nheader {\n  background-color: rgb(96, 65, 99);\n  padding: 20px 20% 20px 20%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 1px 5px -2px rgb(0, 0, 0);\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(4, max-content);\n  justify-content: right;\n  align-items: center;\n  gap: 2rem;\n  list-style: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n\n.nav-link {\n  transition: 0.1s ease-in-out;\n}\n\n.active {\n  padding-bottom: 3px;\n  box-shadow: 0 3px 2px -2px rgb(160, 160, 160);\n}\n\n.nav-link:hover {\n  padding-bottom: 3px;\n  transition: 0.1s ease-in-out;\n  box-shadow: 0 3px 2px -2px rgb(196, 196, 196);\n}\n\n/* Main */\n\n.logo > img {\n  height: 5rem;\n}\n\nmain {\n  width: 100%;\n  height: 100%;\n}\n\nmain > div {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n}\n\nmain > div > h1 {\n  align-self: center;\n  margin-bottom: 0.5rem;\n}\n\nh1,\nh2 {\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n/* Home */\n\n.hero > h1 {\n  margin-top: 5rem;\n  font-size: 5rem;\n}\n.hero > p {\n  width: 70%;\n  align-self: center;\n}\n\n.hero > button {\n  width: max-content;\n  align-self: center;\n  margin-top: 1rem;\n  padding: 1rem;\n  font-size: 1.2rem;\n  background-color: rgb(230, 65, 44, 0);\n  color: #eee;\n  font-weight: bold;\n  border-radius: 10px;\n  transition: 0.3s ease;\n  background-color: #db4532;\n  border: 0;\n  box-shadow: 0px 2px 6px -5px black;\n}\n\n.hero > button:hover {\n  transition: 0.1s ease;\n  border: 0;\n  box-shadow: 0px 3px 8px -5px black;\n  transform: scale(1.03);\n  cursor: pointer;\n}\n.hero > button:active {\n  transition: 0.1s ease;\n  transform: scale(0.98);\n}\n\n/* About */\n\n.about {\n  display: flex;\n  gap: 1rem;\n}\n\n.about-image {\n  flex: 2;\n  max-height: 50%;\n  justify-content: center;\n  display: flex;\n}\n\n.about-image img {\n  width: 95%;\n  object-fit: cover;\n  overflow: hidden;\n  display: block;\n}\n\n/* Contact */\n\n.contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  gap: 1rem;\n}\n\n.contact > h1 {\n  grid-column: span 2;\n  justify-self: center;\n}\n\n.contact > div {\n  justify-self: center;\n}\n\n.contact-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\niframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.iframe-wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  resize: vertical;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");


function loadPage(element) {
  _navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.toggleActive();
  for (let link of _navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.links) {
    if (element.textContent == link.text) {
      _navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink = link;
      _navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.toggleActive();
      content.innerHTML = "";
      content.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.pageLoader());
    }
  }
}




/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _pages_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page */ "./src/pages/home-page.js");
/* harmony import */ var _pages_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu-page */ "./src/pages/menu-page.js");
/* harmony import */ var _pages_about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about-page */ "./src/pages/about-page.js");
/* harmony import */ var _pages_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-page */ "./src/pages/contact-page.js");
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");






const navLinkNodes = document.querySelectorAll(".nav-link");

class NavLink {
  constructor(text, pageLoader, isActive, element) {
    this.text = text;
    this.pageLoader = pageLoader;
    this.isActive = isActive;
    this.element = element;
  }
  toggleActive() {
    if (this.isActive) {
      this.element.classList.remove("active");
      this.isActive = false;
    } else {
      this.element.classList.add("active");
      this.isActive = true;
    }
  }
  setElement(e) {
    this.element = e;
  }
}

const homeLink = new NavLink("Home", _pages_home_page__WEBPACK_IMPORTED_MODULE_0__.homeLoad, false);
const menuLink = new NavLink("Menu", _pages_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuLoad, false);
const aboutLink = new NavLink("About", _pages_about_page__WEBPACK_IMPORTED_MODULE_2__.aboutLoad, false);
const contactLink = new NavLink("Contact", _pages_contact_page__WEBPACK_IMPORTED_MODULE_3__.contactLoad, false);

const navbar = {
  links: [homeLink, menuLink, aboutLink, contactLink],
  activeLink: homeLink,
  setLinkElements: function () {
    for (let i = 0; i < this.links.length; i++) {
      navbar.links[i].setElement(navLinkNodes[i]);
      navLinkNodes[i].addEventListener("click", (e) => {
        (0,_loadpage__WEBPACK_IMPORTED_MODULE_4__.loadPage)(e.target);
      });
    }
  },
};

navbar.setLinkElements();




/***/ }),

/***/ "./src/pages/about-page.js":
/*!*********************************!*\
  !*** ./src/pages/about-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutLoad": () => (/* binding */ aboutLoad)
/* harmony export */ });
/* harmony import */ var _images_thaivibe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/thaivibe.jpg */ "./src/images/thaivibe.jpg");


function aboutLoad() {
  const body = document.querySelector("body");
  // body.style.backgroundImage = "";
  const container = document.createElement("div");
  const textContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");
  const image = document.createElement("img");

  container.classList.add("about");
  imageContainer.classList.add("about-image");
  textContainer.classList.add("about-text");

  title.textContent = "About us";
  blurb.textContent =
    "Welcome to Fresh Chilli Thai! We are a family-owned restaurant dedicated to serving authentic Thai cuisine with a modern twist. Our chefs use only the freshest ingredients to create bold and vibrant flavors that will transport you to the streets of Thailand. From classic favorites like Pad Thai and Green Curry to our signature dishes like Chilli Basil Seafood and Mango Sticky Rice, we offer a variety of dishes to satisfy all taste buds. Our cozy and inviting atmosphere paired with our friendly staff will make you feel right at home. Come and experience the flavors of Thailand at Fresh Chilli Thai!";
  image.src = _images_thaivibe_jpg__WEBPACK_IMPORTED_MODULE_0__;

  textContainer.appendChild(title);
  textContainer.appendChild(blurb);
  imageContainer.append(image);

  container.append(textContainer);
  container.append(imageContainer);

  return container;
}



/***/ }),

/***/ "./src/pages/contact-page.js":
/*!***********************************!*\
  !*** ./src/pages/contact-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad() {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const detailsContainer = document.createElement("div");
  const mapContainer = document.createElement("div");
  const map = document.createElement("iframe");

  const details = [
    { title: "Phone", text: "(03) 9369 3796" },
    { title: "Address", text: "1/1-5 Aviation Rd, Laverton VIC 3028" },
  ];
  for (let detail of details) {
    const detailContainer = document.createElement("div");
    const detailTitle = document.createElement("h2");
    const detailText = document.createElement("p");

    detailTitle.textContent = detail.title;
    detailText.textContent = detail.text;

    detailContainer.classList.add("contact-detail");

    detailContainer.appendChild(detailTitle);
    detailContainer.appendChild(detailText);
    detailsContainer.appendChild(detailContainer);
  }
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6965654218247!2d144.7597769511881!3d-37.86738974478788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689b7ca514c95%3A0x9915d95f30dfa4fb!2sFresh%20Chilli%20Thai%20Restaurant!5e0!3m2!1sen!2sau!4v1678176261240!5m2!1sen!2sau";

  mapContainer.classList.add("iframe-wrapper");
  container.classList.add("contact");
  detailsContainer.classList.add("contact-details");
  title.textContent = "Contact us";

  mapContainer.append(map);
  container.appendChild(title);
  container.appendChild(detailsContainer);
  container.append(mapContainer);

  return container;
}



/***/ }),

/***/ "./src/pages/home-page.js":
/*!********************************!*\
  !*** ./src/pages/home-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _images_thaifood_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/thaifood.jpg */ "./src/images/thaifood.jpg");
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loadpage */ "./src/loadpage.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar */ "./src/navbar.js");




function homeLoad() {
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const blurb = document.createElement("p");
  const callToActionBtn = document.createElement("button");
  const body = document.querySelector("body");

  body.style.backgroundImage = `url(${_images_thaifood_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  title.textContent = "FRESH CHILLI THAI";
  blurb.textContent =
    "Where every dish is an explosion of authentic Thai flavors, crafted from the freshest ingredients to tantalize your taste buds.";
  callToActionBtn.textContent = "View Menu";

  callToActionBtn.addEventListener("click", (e) => {
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.loadPage)(_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar.links[1].element);
  });

  hero.classList.add("hero");
  hero.appendChild(title);
  hero.appendChild(blurb);
  hero.append(callToActionBtn);

  return hero;
}



/***/ }),

/***/ "./src/pages/menu-page.js":
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
function menuLoad() {
  const menuContainer = document.createElement("div");
  const title = document.createElement("h1");
  const menuIframe = document.createElement("iframe");
  const content = document.querySelector("#content");

  menuIframe.src =
    "https://drive.google.com/file/d/1XhE9ujNiU_zokGgAzZh62ALhs9fot6vY/preview";
  menuIframe.frameborder = "0";

  menuContainer.classList.add("iframe-wrapper");
  title.textContent = "Menu";

  content.appendChild(title);
  menuContainer.appendChild(menuIframe);

  return menuContainer;
}



/***/ }),

/***/ "./src/images/logo.jpeg":
/*!******************************!*\
  !*** ./src/images/logo.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30debfe1ff13ea7d6e7e.jpeg";

/***/ }),

/***/ "./src/images/thaifood.jpg":
/*!*********************************!*\
  !*** ./src/images/thaifood.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4302b010917368027e56.jpg";

/***/ }),

/***/ "./src/images/thaivibe.jpg":
/*!*********************************!*\
  !*** ./src/images/thaivibe.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68972e93c217d81a746b.jpg";

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");
/* harmony import */ var _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.jpeg */ "./src/images/logo.jpeg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const logo = document.querySelector("#logo");
logo.src = _images_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__;

_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.toggleActive();
(0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.loadPage)(_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.element);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDSTtBQUNBO0FBQ2pCOztBQUVyQjtBQUNBLFdBQVcsOENBQUk7O0FBRWYsbUVBQThCO0FBQzlCLG1EQUFRLENBQUMsOERBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL3BhZ2VzL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvcGFnZXMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL3BhZ2VzL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL3NyYy9wYWdlcy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6ICNlZWU7XFxuICAtLWJhY2tncm91bmQtY29sb3VyOiByZ2JhKDEwNSwgNzAsIDEwNywgMC45KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyLFxcbm1haW4ge1xcbiAgcGFkZGluZzogMzBweCAyNSUgMzBweCAyNSU7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNjUsIDk5KTtcXG4gIHBhZGRpbmc6IDIwcHggMjAlIDIwcHggMjAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggLTJweCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiKDE2MCwgMTYwLCAxNjApO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubG9nbyA+IGltZyB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5tYWluID4gZGl2ID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaGVybyA+IGgxIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcbi5oZXJvID4gcCB7XFxuICB3aWR0aDogNzAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgNjUsIDQ0LCAwKTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDUzMjtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IC01cHggYmxhY2s7XFxufVxcblxcbi5oZXJvID4gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IC01cHggYmxhY2s7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVybyA+IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0LWltYWdlIHtcXG4gIGZsZXg6IDI7XFxuICBtYXgtaGVpZ2h0OiA1MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hYm91dC1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdCA+IGgxIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgPiBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaWZyYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaWZyYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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WCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6ICNlZWU7XFxuICAtLWJhY2tncm91bmQtY29sb3VyOiByZ2JhKDEwNSwgNzAsIDEwNywgMC45KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyLFxcbm1haW4ge1xcbiAgcGFkZGluZzogMzBweCAyNSUgMzBweCAyNSU7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NiwgNjUsIDk5KTtcXG4gIHBhZGRpbmc6IDIwcHggMjAlIDIwcHggMjAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggLTJweCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1heC1jb250ZW50KTtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiKDE2MCwgMTYwLCAxNjApO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubG9nbyA+IGltZyB7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5tYWluID4gZGl2ID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaGVybyA+IGgxIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcbi5oZXJvID4gcCB7XFxuICB3aWR0aDogNzAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyA+IGJ1dHRvbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgNjUsIDQ0LCAwKTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNDUzMjtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IC01cHggYmxhY2s7XFxufVxcblxcbi5oZXJvID4gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IC01cHggYmxhY2s7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVybyA+IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0LWltYWdlIHtcXG4gIGZsZXg6IDI7XFxuICBtYXgtaGVpZ2h0OiA1MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hYm91dC1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDk1JTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdCA+IGgxIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgPiBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuaWZyYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaWZyYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuXG5mdW5jdGlvbiBsb2FkUGFnZShlbGVtZW50KSB7XG4gIG5hdmJhci5hY3RpdmVMaW5rLnRvZ2dsZUFjdGl2ZSgpO1xuICBmb3IgKGxldCBsaW5rIG9mIG5hdmJhci5saW5rcykge1xuICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09IGxpbmsudGV4dCkge1xuICAgICAgbmF2YmFyLmFjdGl2ZUxpbmsgPSBsaW5rO1xuICAgICAgbmF2YmFyLmFjdGl2ZUxpbmsudG9nZ2xlQWN0aXZlKCk7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhci5hY3RpdmVMaW5rLnBhZ2VMb2FkZXIoKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlIH07XG4iLCJpbXBvcnQgeyBob21lTG9hZCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUtcGFnZVwiO1xuaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tIFwiLi9wYWdlcy9tZW51LXBhZ2VcIjtcbmltcG9ydCB7IGFib3V0TG9hZCB9IGZyb20gXCIuL3BhZ2VzL2Fib3V0LXBhZ2VcIjtcbmltcG9ydCB7IGNvbnRhY3RMb2FkIH0gZnJvbSBcIi4vcGFnZXMvY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gXCIuL2xvYWRwYWdlXCI7XG5cbmNvbnN0IG5hdkxpbmtOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XG5cbmNsYXNzIE5hdkxpbmsge1xuICBjb25zdHJ1Y3Rvcih0ZXh0LCBwYWdlTG9hZGVyLCBpc0FjdGl2ZSwgZWxlbWVudCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuICB0b2dnbGVBY3RpdmUoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBzZXRFbGVtZW50KGUpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlO1xuICB9XG59XG5cbmNvbnN0IGhvbWVMaW5rID0gbmV3IE5hdkxpbmsoXCJIb21lXCIsIGhvbWVMb2FkLCBmYWxzZSk7XG5jb25zdCBtZW51TGluayA9IG5ldyBOYXZMaW5rKFwiTWVudVwiLCBtZW51TG9hZCwgZmFsc2UpO1xuY29uc3QgYWJvdXRMaW5rID0gbmV3IE5hdkxpbmsoXCJBYm91dFwiLCBhYm91dExvYWQsIGZhbHNlKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gbmV3IE5hdkxpbmsoXCJDb250YWN0XCIsIGNvbnRhY3RMb2FkLCBmYWxzZSk7XG5cbmNvbnN0IG5hdmJhciA9IHtcbiAgbGlua3M6IFtob21lTGluaywgbWVudUxpbmssIGFib3V0TGluaywgY29udGFjdExpbmtdLFxuICBhY3RpdmVMaW5rOiBob21lTGluayxcbiAgc2V0TGlua0VsZW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXZiYXIubGlua3NbaV0uc2V0RWxlbWVudChuYXZMaW5rTm9kZXNbaV0pO1xuICAgICAgbmF2TGlua05vZGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsb2FkUGFnZShlLnRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5uYXZiYXIuc2V0TGlua0VsZW1lbnRzKCk7XG5cbmV4cG9ydCB7IG5hdmJhciB9O1xuIiwiaW1wb3J0IEltYWdlIGZyb20gXCIuLi9pbWFnZXMvdGhhaXZpYmUuanBnXCI7XG5cbmZ1bmN0aW9uIGFib3V0TG9hZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAvLyBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWltYWdlXCIpO1xuICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0XCIpO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiO1xuICBibHVyYi50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIHRvIEZyZXNoIENoaWxsaSBUaGFpISBXZSBhcmUgYSBmYW1pbHktb3duZWQgcmVzdGF1cmFudCBkZWRpY2F0ZWQgdG8gc2VydmluZyBhdXRoZW50aWMgVGhhaSBjdWlzaW5lIHdpdGggYSBtb2Rlcm4gdHdpc3QuIE91ciBjaGVmcyB1c2Ugb25seSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGJvbGQgYW5kIHZpYnJhbnQgZmxhdm9ycyB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdSB0byB0aGUgc3RyZWV0cyBvZiBUaGFpbGFuZC4gRnJvbSBjbGFzc2ljIGZhdm9yaXRlcyBsaWtlIFBhZCBUaGFpIGFuZCBHcmVlbiBDdXJyeSB0byBvdXIgc2lnbmF0dXJlIGRpc2hlcyBsaWtlIENoaWxsaSBCYXNpbCBTZWFmb29kIGFuZCBNYW5nbyBTdGlja3kgUmljZSwgd2Ugb2ZmZXIgYSB2YXJpZXR5IG9mIGRpc2hlcyB0byBzYXRpc2Z5IGFsbCB0YXN0ZSBidWRzLiBPdXIgY296eSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBwYWlyZWQgd2l0aCBvdXIgZnJpZW5kbHkgc3RhZmYgd2lsbCBtYWtlIHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUuIENvbWUgYW5kIGV4cGVyaWVuY2UgdGhlIGZsYXZvcnMgb2YgVGhhaWxhbmQgYXQgRnJlc2ggQ2hpbGxpIFRoYWkhXCI7XG4gIGltYWdlLnNyYyA9IEltYWdlO1xuXG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlKTtcblxuICBjb250YWluZXIuYXBwZW5kKHRleHRDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kKGltYWdlQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IHsgYWJvdXRMb2FkIH07XG4iLCJmdW5jdGlvbiBjb250YWN0TG9hZCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuXG4gIGNvbnN0IGRldGFpbHMgPSBbXG4gICAgeyB0aXRsZTogXCJQaG9uZVwiLCB0ZXh0OiBcIigwMykgOTM2OSAzNzk2XCIgfSxcbiAgICB7IHRpdGxlOiBcIkFkZHJlc3NcIiwgdGV4dDogXCIxLzEtNSBBdmlhdGlvbiBSZCwgTGF2ZXJ0b24gVklDIDMwMjhcIiB9LFxuICBdO1xuICBmb3IgKGxldCBkZXRhaWwgb2YgZGV0YWlscykge1xuICAgIGNvbnN0IGRldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGV0YWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZGV0YWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGV0YWlsVGl0bGUudGV4dENvbnRlbnQgPSBkZXRhaWwudGl0bGU7XG4gICAgZGV0YWlsVGV4dC50ZXh0Q29udGVudCA9IGRldGFpbC50ZXh0O1xuXG4gICAgZGV0YWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRldGFpbFwiKTtcblxuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxUaXRsZSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFRleHQpO1xuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsQ29udGFpbmVyKTtcbiAgfVxuICBtYXAuc3JjID1cbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMxNDkuNjk2NTY1NDIxODI0NyEyZDE0NC43NTk3NzY5NTExODgxITNkLTM3Ljg2NzM4OTc0NDc4Nzg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg2YWQ2ODliN2NhNTE0Yzk1JTNBMHg5OTE1ZDk1ZjMwZGZhNGZiITJzRnJlc2glMjBDaGlsbGklMjBUaGFpJTIwUmVzdGF1cmFudCE1ZTAhM20yITFzZW4hMnNhdSE0djE2NzgxNzYyNjEyNDAhNW0yITFzZW4hMnNhdVwiO1xuXG4gIG1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lLXdyYXBwZXJcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgZGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuXG4gIG1hcENvbnRhaW5lci5hcHBlbmQobWFwKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHNDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kKG1hcENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCB7IGNvbnRhY3RMb2FkIH07XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90aGFpZm9vZC5qcGdcIjtcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4uL2xvYWRwYWdlXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi4vbmF2YmFyXCI7XG5cbmZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNhbGxUb0FjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtJbWFnZX0pYDtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkZSRVNIIENISUxMSSBUSEFJXCI7XG4gIGJsdXJiLnRleHRDb250ZW50ID1cbiAgICBcIldoZXJlIGV2ZXJ5IGRpc2ggaXMgYW4gZXhwbG9zaW9uIG9mIGF1dGhlbnRpYyBUaGFpIGZsYXZvcnMsIGNyYWZ0ZWQgZnJvbSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgdG8gdGFudGFsaXplIHlvdXIgdGFzdGUgYnVkcy5cIjtcbiAgY2FsbFRvQWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJWaWV3IE1lbnVcIjtcblxuICBjYWxsVG9BY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbG9hZFBhZ2UobmF2YmFyLmxpbmtzWzFdLmVsZW1lbnQpO1xuICB9KTtcblxuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBoZXJvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVyby5hcHBlbmRDaGlsZChibHVyYik7XG4gIGhlcm8uYXBwZW5kKGNhbGxUb0FjdGlvbkJ0bik7XG5cbiAgcmV0dXJuIGhlcm87XG59XG5leHBvcnQgeyBob21lTG9hZCB9O1xuIiwiZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbWVudUlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgbWVudUlmcmFtZS5zcmMgPVxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWGhFOXVqTmlVX3pva0dnQXpaaDYyQUxoczlmb3Q2dlkvcHJldmlld1wiO1xuICBtZW51SWZyYW1lLmZyYW1lYm9yZGVyID0gXCIwXCI7XG5cbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lLXdyYXBwZXJcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUlmcmFtZSk7XG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5leHBvcnQgeyBtZW51TG9hZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9sb2FkcGFnZVwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1hZ2VzL2xvZ28uanBlZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb1wiKTtcbmxvZ28uc3JjID0gTG9nbztcblxubmF2YmFyLmFjdGl2ZUxpbmsudG9nZ2xlQWN0aXZlKCk7XG5sb2FkUGFnZShuYXZiYXIuYWN0aXZlTGluay5lbGVtZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
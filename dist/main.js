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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.toggleActive();
(0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.loadPage)(_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar.activeLink.element);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0k7QUFDakI7O0FBRXJCLG1FQUE4QjtBQUM5QixtREFBUSxDQUFDLDhEQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL2xvYWRwYWdlLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL3NyYy9wYWdlcy9hYm91dC1wYWdlLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpLy4vc3JjL3BhZ2VzL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS8uL3NyYy9wYWdlcy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvcGFnZXMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZyZXNoLWNoaWxsaS10aGFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mcmVzaC1jaGlsbGktdGhhaS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZnJlc2gtY2hpbGxpLXRoYWkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG91cjogcmdiYSgxMDUsIDcwLCAxMDcsIDAuOSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlcixcXG5tYWluIHtcXG4gIHBhZGRpbmc6IDMwcHggMjUlIDMwcHggMjUlO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDY1LCA5OSk7XFxuICBwYWRkaW5nOiAyMHB4IDIwJSAyMHB4IDIwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IC0ycHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtYXgtY29udGVudCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiKDE5NiwgMTk2LCAxOTYpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLmxvZ28gPiBpbWcge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxubWFpbiA+IGRpdiA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKiBIb21lICovXFxuXFxuLmhlcm8gPiBoMSB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG4uaGVybyA+IHAge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gPiBidXR0b24ge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDY1LCA0NCwgMCk7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjQ1MzI7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAtNXB4IGJsYWNrO1xcbn1cXG5cXG4uaGVybyA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAtNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlcm8gPiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dC1pbWFnZSB7XFxuICBmbGV4OiAyO1xcbiAgbWF4LWhlaWdodDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWJvdXQtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QgPiBoMSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0ID4gZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmlmcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmlmcmFtZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVB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c0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG91cjogcmdiYSgxMDUsIDcwLCAxMDcsIDAuOSk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlcixcXG5tYWluIHtcXG4gIHBhZGRpbmc6IDMwcHggMjUlIDMwcHggMjUlO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDY1LCA5OSk7XFxuICBwYWRkaW5nOiAyMHB4IDIwJSAyMHB4IDIwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IC0ycHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtYXgtY29udGVudCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4IHJnYigxNjAsIDE2MCwgMTYwKTtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggcmdiKDE5NiwgMTk2LCAxOTYpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLmxvZ28gPiBpbWcge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxubWFpbiA+IGRpdiA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKiBIb21lICovXFxuXFxuLmhlcm8gPiBoMSB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG4uaGVybyA+IHAge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gPiBidXR0b24ge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDY1LCA0NCwgMCk7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjQ1MzI7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAtNXB4IGJsYWNrO1xcbn1cXG5cXG4uaGVybyA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCAtNXB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlcm8gPiBidXR0b246YWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dC1pbWFnZSB7XFxuICBmbGV4OiAyO1xcbiAgbWF4LWhlaWdodDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWJvdXQtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QgPiBoMSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0ID4gZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmlmcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmlmcmFtZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoZWxlbWVudCkge1xuICBuYXZiYXIuYWN0aXZlTGluay50b2dnbGVBY3RpdmUoKTtcbiAgZm9yIChsZXQgbGluayBvZiBuYXZiYXIubGlua3MpIHtcbiAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PSBsaW5rLnRleHQpIHtcbiAgICAgIG5hdmJhci5hY3RpdmVMaW5rID0gbGluaztcbiAgICAgIG5hdmJhci5hY3RpdmVMaW5rLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIuYWN0aXZlTGluay5wYWdlTG9hZGVyKCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBsb2FkUGFnZSB9O1xuIiwiaW1wb3J0IHsgaG9tZUxvYWQgfSBmcm9tIFwiLi9wYWdlcy9ob21lLXBhZ2VcIjtcbmltcG9ydCB7IG1lbnVMb2FkIH0gZnJvbSBcIi4vcGFnZXMvbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBhYm91dExvYWQgfSBmcm9tIFwiLi9wYWdlcy9hYm91dC1wYWdlXCI7XG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3QtcGFnZVwiO1xuaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tIFwiLi9sb2FkcGFnZVwiO1xuXG5jb25zdCBuYXZMaW5rTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xuXG5jbGFzcyBOYXZMaW5rIHtcbiAgY29uc3RydWN0b3IodGV4dCwgcGFnZUxvYWRlciwgaXNBY3RpdmUsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbiAgdG9nZ2xlQWN0aXZlKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0RWxlbWVudChlKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZTtcbiAgfVxufVxuXG5jb25zdCBob21lTGluayA9IG5ldyBOYXZMaW5rKFwiSG9tZVwiLCBob21lTG9hZCwgZmFsc2UpO1xuY29uc3QgbWVudUxpbmsgPSBuZXcgTmF2TGluayhcIk1lbnVcIiwgbWVudUxvYWQsIGZhbHNlKTtcbmNvbnN0IGFib3V0TGluayA9IG5ldyBOYXZMaW5rKFwiQWJvdXRcIiwgYWJvdXRMb2FkLCBmYWxzZSk7XG5jb25zdCBjb250YWN0TGluayA9IG5ldyBOYXZMaW5rKFwiQ29udGFjdFwiLCBjb250YWN0TG9hZCwgZmFsc2UpO1xuXG5jb25zdCBuYXZiYXIgPSB7XG4gIGxpbmtzOiBbaG9tZUxpbmssIG1lbnVMaW5rLCBhYm91dExpbmssIGNvbnRhY3RMaW5rXSxcbiAgYWN0aXZlTGluazogaG9tZUxpbmssXG4gIHNldExpbmtFbGVtZW50czogZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmF2YmFyLmxpbmtzW2ldLnNldEVsZW1lbnQobmF2TGlua05vZGVzW2ldKTtcbiAgICAgIG5hdkxpbmtOb2Rlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbG9hZFBhZ2UoZS50YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcblxubmF2YmFyLnNldExpbmtFbGVtZW50cygpO1xuXG5leHBvcnQgeyBuYXZiYXIgfTtcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3RoYWl2aWJlLmpwZ1wiO1xuXG5mdW5jdGlvbiBhYm91dExvYWQoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgLy8gYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1pbWFnZVwiKTtcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dFwiKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcbiAgYmx1cmIudGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byBGcmVzaCBDaGlsbGkgVGhhaSEgV2UgYXJlIGEgZmFtaWx5LW93bmVkIHJlc3RhdXJhbnQgZGVkaWNhdGVkIHRvIHNlcnZpbmcgYXV0aGVudGljIFRoYWkgY3Vpc2luZSB3aXRoIGEgbW9kZXJuIHR3aXN0LiBPdXIgY2hlZnMgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBib2xkIGFuZCB2aWJyYW50IGZsYXZvcnMgdGhhdCB3aWxsIHRyYW5zcG9ydCB5b3UgdG8gdGhlIHN0cmVldHMgb2YgVGhhaWxhbmQuIEZyb20gY2xhc3NpYyBmYXZvcml0ZXMgbGlrZSBQYWQgVGhhaSBhbmQgR3JlZW4gQ3VycnkgdG8gb3VyIHNpZ25hdHVyZSBkaXNoZXMgbGlrZSBDaGlsbGkgQmFzaWwgU2VhZm9vZCBhbmQgTWFuZ28gU3RpY2t5IFJpY2UsIHdlIG9mZmVyIGEgdmFyaWV0eSBvZiBkaXNoZXMgdG8gc2F0aXNmeSBhbGwgdGFzdGUgYnVkcy4gT3VyIGNvenkgYW5kIGludml0aW5nIGF0bW9zcGhlcmUgcGFpcmVkIHdpdGggb3VyIGZyaWVuZGx5IHN0YWZmIHdpbGwgbWFrZSB5b3UgZmVlbCByaWdodCBhdCBob21lLiBDb21lIGFuZCBleHBlcmllbmNlIHRoZSBmbGF2b3JzIG9mIFRoYWlsYW5kIGF0IEZyZXNoIENoaWxsaSBUaGFpIVwiO1xuICBpbWFnZS5zcmMgPSBJbWFnZTtcblxuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChibHVyYik7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCB7IGFib3V0TG9hZCB9O1xuIiwiZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICBjb25zdCBkZXRhaWxzID0gW1xuICAgIHsgdGl0bGU6IFwiUGhvbmVcIiwgdGV4dDogXCIoMDMpIDkzNjkgMzc5NlwiIH0sXG4gICAgeyB0aXRsZTogXCJBZGRyZXNzXCIsIHRleHQ6IFwiMS8xLTUgQXZpYXRpb24gUmQsIExhdmVydG9uIFZJQyAzMDI4XCIgfSxcbiAgXTtcbiAgZm9yIChsZXQgZGV0YWlsIG9mIGRldGFpbHMpIHtcbiAgICBjb25zdCBkZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRldGFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGRldGFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGRldGFpbFRpdGxlLnRleHRDb250ZW50ID0gZGV0YWlsLnRpdGxlO1xuICAgIGRldGFpbFRleHQudGV4dENvbnRlbnQgPSBkZXRhaWwudGV4dDtcblxuICAgIGRldGFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxcIik7XG5cbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVGl0bGUpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxUZXh0KTtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbENvbnRhaW5lcik7XG4gIH1cbiAgbWFwLnNyYyA9XG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMTQ5LjY5NjU2NTQyMTgyNDchMmQxNDQuNzU5Nzc2OTUxMTg4MSEzZC0zNy44NjczODk3NDQ3ODc4OCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NmFkNjg5YjdjYTUxNGM5NSUzQTB4OTkxNWQ5NWYzMGRmYTRmYiEyc0ZyZXNoJTIwQ2hpbGxpJTIwVGhhaSUyMFJlc3RhdXJhbnQhNWUwITNtMiExc2VuITJzYXUhNHYxNjc4MTc2MjYxMjQwITVtMiExc2VuITJzYXVcIjtcblxuICBtYXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlmcmFtZS13cmFwcGVyXCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGV0YWlsc1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcblxuICBtYXBDb250YWluZXIuYXBwZW5kKG1hcCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZChtYXBDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgeyBjb250YWN0TG9hZCB9O1xuIiwiaW1wb3J0IEltYWdlIGZyb20gXCIuLi9pbWFnZXMvdGhhaWZvb2QuanBnXCI7XG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gXCIuLi9sb2FkcGFnZVwiO1xuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4uL25hdmJhclwiO1xuXG5mdW5jdGlvbiBob21lTG9hZCgpIHtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjYWxsVG9BY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7SW1hZ2V9KWA7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJGUkVTSCBDSElMTEkgVEhBSVwiO1xuICBibHVyYi50ZXh0Q29udGVudCA9XG4gICAgXCJXaGVyZSBldmVyeSBkaXNoIGlzIGFuIGV4cGxvc2lvbiBvZiBhdXRoZW50aWMgVGhhaSBmbGF2b3JzLCBjcmFmdGVkIGZyb20gdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIHRvIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMuXCI7XG4gIGNhbGxUb0FjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiVmlldyBNZW51XCI7XG5cbiAgY2FsbFRvQWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxvYWRQYWdlKG5hdmJhci5saW5rc1sxXS5lbGVtZW50KTtcbiAgfSk7XG5cbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgaGVyby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBoZXJvLmFwcGVuZChjYWxsVG9BY3Rpb25CdG4pO1xuXG4gIHJldHVybiBoZXJvO1xufVxuZXhwb3J0IHsgaG9tZUxvYWQgfTtcbiIsImZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG1lbnVJZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIG1lbnVJZnJhbWUuc3JjID1cbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVhoRTl1ak5pVV96b2tHZ0F6Wmg2MkFMaHM5Zm90NnZZL3ByZXZpZXdcIjtcbiAgbWVudUlmcmFtZS5mcmFtZWJvcmRlciA9IFwiMFwiO1xuXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlmcmFtZS13cmFwcGVyXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJZnJhbWUpO1xuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuZXhwb3J0IHsgbWVudUxvYWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSBcIi4vbG9hZHBhZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbm5hdmJhci5hY3RpdmVMaW5rLnRvZ2dsZUFjdGl2ZSgpO1xubG9hZFBhZ2UobmF2YmFyLmFjdGl2ZUxpbmsuZWxlbWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
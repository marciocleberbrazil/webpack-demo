(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\r\n//import Print from './print';\r\n\r\nfunction component() {\r\n    var element = document.createElement('div');\r\n\r\n    var button = document.createElement('button');\r\n    var br = document.createElement('br');\r\n\r\n    button.innerHTML = 'Click me and look at the console!';\r\n    //button.onclick = Print.bind(null, 'Hello webpack!');\r\n\r\n    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack 4'], ' ');\r\n\r\n    element.appendChild(br);\r\n    element.appendChild(button);\r\n    \r\n    return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["tjUo","runtime","vendors"]]]);
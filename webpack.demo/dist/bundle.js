/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const addText = text => {\n    const div = document.createElement('div');\n    div.innerHTML = text;\n    document.body.appendChild(div);\n}\n\nconst getProcessText = () => {\n    if (false) {} else {\n        return '开发环境的代码';\n    }\n}\n\naddText(getProcessText())\n\nconst getUserText = () => {\n    if (true) {\n        return '运行客户aa 的代码';\n    } else {}\n}\n\naddText(getUserText())\n\n\n//# sourceURL=webpack://webpack.demo/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;
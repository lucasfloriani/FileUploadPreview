/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/upload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/upload.js":
/*!**************************!*\
  !*** ./src/js/upload.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FileUpload = function () {\n  /* eslint-disable-line */\n  /**\r\n   * Constructor of object FileUpload\r\n   */\n  function FileUpload(container, name, identifier) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n    _classCallCheck(this, FileUpload);\n\n    this.container = document.querySelector(container);\n    this.name = name;\n    this.identifier = identifier;\n    this.callback = callback;\n  }\n\n  /**\r\n   * Function to create FileUpload container\r\n   */\n\n\n  _createClass(FileUpload, [{\n    key: 'run',\n    value: function run() {\n      this.setUploadEvents();\n    }\n\n    /**\r\n     * Return template of file upload field\r\n     */\n\n  }, {\n    key: 'getFileTemplate',\n    value: function getFileTemplate() {\n      return '\\n      <li class=\"file-preview-card\">\\n        <label for=\"' + this.identifier + '\" class=\"file-preview-button file-preview-add\"></label>\\n        <button type=\"button\" class=\"file-preview-button file-preview-remove\"></button>\\n        <input type=\"file\" name=\"' + this.name + '\" class=\"file-preview-hidden\" id=\"' + this.identifier + '\">\\n      </li>\\n    ';\n    }\n\n    /**\r\n     * Add events to input type file\r\n     */\n\n  }, {\n    key: 'setUploadEvents',\n    value: function setUploadEvents() {\n      var _this = this;\n\n      var childrens = Array.from(this.container.children);\n      childrens.forEach(function (li) {\n        var input = li.querySelector('input.file-preview-hidden');\n        input.addEventListener('change', _this.changeFileEvent.bind(input, _this.callback));\n      });\n    }\n\n    /**\r\n     * Event added in function setUploadEvents\r\n     */\n\n  }, {\n    key: 'changeFileEvent',\n    value: function changeFileEvent(callback) {\n      var _this2 = this;\n\n      var files = this.files;\n\n      if (files.length > 0) {\n        var file = files[0];\n        var reader = new FileReader();\n\n        reader.addEventListener('load', function (e) {\n          var loadedFile = e.target;\n\n          if (file.type.match('image')) {\n            _this2.parentNode.style.backgroundImage = 'url(\\'' + loadedFile.result + '\\')';\n          }\n        });\n\n        // Read file\n        reader.readAsDataURL(file);\n\n        if (callback) {\n          callback();\n        }\n      }\n    }\n  }]);\n\n  return FileUpload;\n}();\n\n//# sourceURL=webpack:///./src/js/upload.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });
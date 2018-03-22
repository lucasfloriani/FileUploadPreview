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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FileUpload = function () {\n  // eslint-disable-line\n  /**\r\n   *\r\n   */\n  function FileUpload(container, name, identifier) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    var labelTextAdd = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Choose File';\n    var labelTextChange = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'Change File';\n    var buttonTextRemove = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'Remove File';\n\n    _classCallCheck(this, FileUpload);\n\n    this.container = container;\n    this.name = name;\n    this.identifier = identifier;\n    this.callback = callback;\n    this.labelTextAdd = labelTextAdd;\n    this.labelTextChange = labelTextChange;\n    this.buttonTextRemove = buttonTextRemove;\n\n    this.create();\n  }\n\n  /**\r\n   *\r\n   */\n\n\n  _createClass(FileUpload, [{\n    key: 'create',\n    value: function create() {\n      this.setUploadEvents();\n    }\n\n    /**\r\n     *\r\n     */\n\n  }, {\n    key: 'getFileTemplate',\n    value: function getFileTemplate() {\n      return '\\n      <li>\\n        <label for=\"' + this.identifier + '\">' + this.labelTextAdd + '</label>\\n        <input type=\"file\" name=\"' + this.name + '\" id=\"' + this.identifier + '\">\\n      </li>\\n    ';\n    }\n\n    /**\r\n     *\r\n     */\n\n  }, {\n    key: 'setUploadEvents',\n    value: function setUploadEvents() {\n      var _this = this;\n\n      this.container.forEach(function (li) {\n        var input = li.children[1];\n\n        input.addEventListener('change', _this.changeFileEvent.bind(input, _this.labelTextChange, _this.callback));\n      });\n    }\n\n    /**\r\n     *\r\n     */\n\n  }, {\n    key: 'changeFileEvent',\n    value: function changeFileEvent(labelTextChange, callback) {\n      var _this2 = this;\n\n      var files = this.files;\n\n      if (files.length > 0) {\n        var file = files[0];\n        var reader = new FileReader();\n\n        reader.addEventListener(function (e) {\n          var loadedFile = e.target;\n\n          if (file.type.match('image')) {\n            _this2.style.backgroundImage = 'url(' + loadedFile.result + '\\')';\n          }\n        });\n\n        // Add text to change file\n        this.previousSibling.text = labelTextChange;\n\n        // Read file\n        reader.readAsDataURL(file);\n\n        if (callback) {\n          callback();\n        }\n      }\n    }\n  }]);\n\n  return FileUpload;\n}();\n\n//# sourceURL=webpack:///./src/js/upload.js?");

/***/ })

/******/ });
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form/form.js":
/*!**************************!*\
  !*** ./src/form/form.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_2__);



var form = document.getElementById('form');
var selectInput = document.querySelector('.members_block'),
    membersBlock = document.querySelector('#checkbox'),
    membersTitle = document.querySelector('.members__title'),
    membersWrapper = document.querySelector('.members'),
    id = document.querySelector('#checkbox'),
    input = document.querySelectorAll('.memb__input');
document.addEventListener('click', function (e) {
  var target = e.target;

  if (target === membersTitle || target === membersWrapper) {
    if ('active' === id.getAttribute('data-state')) {
      membersBlock.classList.remove('members__checkboxs');
      membersBlock.classList.add('hide');
      id.setAttribute('data-state', '');
    } else {
      membersBlock.classList.remove('hide');
      membersBlock.classList.add('members__checkboxs');
      id.setAttribute('data-state', 'active');
    }
  } else if (target && target.classList.contains('member__label') === false && target.classList.contains('memb__input') === false) {
    membersBlock.classList.remove('members__checkboxs');
    membersBlock.classList.add('hide');
    id.setAttribute('data-state', '');
  }
});

function addUsers(arr) {
  input.forEach(function (item) {
    item.addEventListener('change', function () {
      if (item.checked && !arr.includes(item.value)) {
        // item = `${item.value.charAt(0).toUpperCase()}${item.value.slice(1)}`
        arr.push(item.value);
      } else {
        var index = arr.indexOf(item.value);
        arr.splice(index, 1);
      }

      var str = arr.join(', ');
      membersTitle.innerHTML = arr.length > 0 ? "".concat(str) : "Select participants";
    });
  });
}

var users = [];
addUsers(users);
var day = document.querySelector('#day'),
    time = document.querySelector('#time'),
    event = document.querySelector('#event'),
    errorBlock = document.querySelector('.error'),
    errorBtn = document.querySelector('.error__btn'),
    closeBtn = document.querySelector('#btn-close'),
    createBtn = document.querySelector('#btn-create'),
    inputEv = document.querySelector('.form__input'),
    error = document.querySelector('.error__title');

function errorMessage() {
  errorBlock.classList.remove('hide');
  errorBtn.addEventListener('click', function () {
    hideErrorMessage();
  });
}

function hideErrorMessage() {
  errorBlock.classList.add('hide');
}

form.addEventListener('click', function (e) {
  var target = e.target;

  if (target && target === closeBtn) {
    e.preventDefault();
    document.location.href = 'calendar.html';
  }

  if (target && target === createBtn) {
    e.preventDefault();
    var data = JSON.stringify({
      'event': "".concat(event.value),
      'day': "".concat(day.value),
      'users': [].concat(users),
      'time': "".concat(time.value)
    });
    var keys = Object.keys(localStorage);

    if (keys.indexOf("".concat(day.value).concat(time.value)) != -1) {
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else if (inputEv.value === '') {
      error.textContent = 'Fill this field!';
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else if (users.length === 0) {
      error.textContent = 'Select the participants!';
      errorMessage();
      setTimeout(hideErrorMessage, 5000);
    } else {
      document.location.href = 'calendar.html';
      localStorage.setItem("".concat(day.value).concat(time.value), data);
    }
  }
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js","vendors-node_modules_fortawesome_fontawesome-free_js_fontawesome_js-node_modules_fortawesome_-b19f2d"],
/******/ 			["./src/form/form.js","vendors-node_modules_babel_polyfill_lib_index_js","vendors-node_modules_fortawesome_fontawesome-free_js_fontawesome_js-node_modules_fortawesome_-b19f2d"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest_task"] = self["webpackChunktest_task"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=form.ef50d612bf822f96faa0.js.map
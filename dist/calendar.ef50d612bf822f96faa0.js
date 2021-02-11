/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calendar/index.js":
/*!*******************************!*\
  !*** ./src/calendar/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_create_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/create-table */ "./src/calendar/scripts/create-table.js");
/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/modal */ "./src/calendar/scripts/modal.js");
/* harmony import */ var _scripts_drag_n_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/drag-n-drop */ "./src/calendar/scripts/drag-n-drop.js");
/* harmony import */ var _scripts_craete_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/craete-event */ "./src/calendar/scripts/craete-event.js");
/* harmony import */ var _scripts_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/filter */ "./src/calendar/scripts/filter.js");







var table = document.querySelector('.table');
var day = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var time = ['', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
(0,_scripts_create_table__WEBPACK_IMPORTED_MODULE_1__.default)(table, day, time);
var closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(btn);

    if (e.target || e.target.classList.contains('close-btn')) {
      var parent = e.target.parentNode;
      (0,_scripts_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)('.modal');
      (0,_scripts_modal__WEBPACK_IMPORTED_MODULE_2__.default)(parent, '.btn--yes', '.btn--no', '.modal');
    }
  });
});
(0,_scripts_craete_event__WEBPACK_IMPORTED_MODULE_4__.default)();
var addEvBtn = document.querySelector('.header__btn');
addEvBtn.addEventListener('click', function () {
  document.location.href = 'form.html';
});
(0,_scripts_filter__WEBPACK_IMPORTED_MODULE_5__.default)('.active', '#filter');
(0,_scripts_drag_n_drop__WEBPACK_IMPORTED_MODULE_3__.default)();

/***/ }),

/***/ "./src/calendar/scripts/craete-event.js":
/*!**********************************************!*\
  !*** ./src/calendar/scripts/craete-event.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function createEventCard() {
  var keys = Object.keys(localStorage);
  keys.forEach(function (item) {
    if (item !== 'newItem') {
      var data = localStorage.getItem(item);
      var objData = JSON.parse(data);
      var card = document.getElementById("".concat(item));
      console.log(item);
      console.log(card);
      var inner = card.querySelector('.inner');
      var event = objData.event,
          users = objData.users;
      users.forEach(function (user) {
        card.classList.add("".concat([user]));
      });
      card.classList.add('active');
      inner.classList.remove('hide');
      inner.classList.add('draggble-card');
      inner.setAttribute("draggable", true);
      inner.querySelector('.eventname').textContent = "".concat(event);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createEventCard);

/***/ }),

/***/ "./src/calendar/scripts/create-table.js":
/*!**********************************************!*\
  !*** ./src/calendar/scripts/create-table.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function createTable(table, day, time) {
  for (var row = 0; row < time.length; row++) {
    var newRow = document.createElement('tr');
    newRow.setAttribute('data-row', "row-".concat(time[row]));

    for (var cell = 0; cell < day.length; cell++) {
      var newCell = document.createElement('td');

      if (row === 0) {
        newCell.setAttribute('id', "id-".concat(time[row].toLowerCase()));
        newCell.innerHTML = "".concat(day[cell]);
      } else if (cell === 0) {
        newCell.setAttribute('id', "".concat(time[row].toLowerCase()));
        newCell.innerHTML = "".concat(time[row]);
      } else {
        newCell.setAttribute('id', "".concat(day[cell].toLowerCase()).concat(time[row]));
        newCell.classList.add('droppable');
        var inner = document.createElement('div');
        var btn = document.createElement('button');
        btn.classList.add('btn', 'close-btn');
        btn.textContent = 'x';
        inner.classList.add('inner', 'hide');
        inner.setAttribute('id', "".concat(day[cell].toLowerCase()).concat(time[row]));
        var eventName = document.createElement('span');
        eventName.classList.add('eventname');
        newCell.append(inner);
        inner.append(eventName);
        inner.append(btn);
      }

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

/***/ "./src/calendar/scripts/drag-n-drop.js":
/*!*********************************************!*\
  !*** ./src/calendar/scripts/drag-n-drop.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _craete_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craete-event */ "./src/calendar/scripts/craete-event.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function dragNDrop() {
  var droppable = document.querySelectorAll('.droppable');

  var dragStart = function dragStart() {
    var _this = this;

    setTimeout(function () {
      _this.classList.remove('active');

      _this.querySelector('.inner').classList.add('hide');

      var id = _this.getAttribute('id');

      var obj = localStorage.getItem(id);
      localStorage.setItem('newItem', obj);
    }, 0);
  }; // const dragEnd = function() {
  //   setTimeout(() => {
  //     this.classList.add('active');
  //     this.querySelector('.inner').classList.remove('hide');
  //   }, 0);
  // };


  var dragOver = function dragOver(e) {
    e.preventDefault();
  };

  var dragEnter = function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  };

  var dragLeave = function dragLeave() {
    this.classList.remove('hovered');
  };

  var dragDrop = function dragDrop(e) {
    this.classList.remove('hovered');
    this.classList.add('active');
    this.querySelector('.inner').classList.remove('hide');
    var newId = this.getAttribute('id');
    var obj = JSON.parse(localStorage.getItem('newItem'));
    var time = obj.time;
    var day = obj.day;
    var newDay = newId.slice(0, 3);
    var newTime = newId.slice(3);
    var newData = JSON.stringify({
      'event': "".concat(obj.event),
      'day': "".concat(newDay),
      'users': _toConsumableArray(obj.users),
      'time': "".concat(newTime)
    });
    localStorage.setItem("".concat(newDay).concat(newTime), newData);
    localStorage.removeItem("".concat(day).concat(time));
    (0,_craete_event__WEBPACK_IMPORTED_MODULE_0__.default)();
  };

  droppable.forEach(function (item) {
    item.addEventListener('dragstart', dragStart); //   item.addEventListener('dragend', dragEnd);

    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (dragNDrop);

/***/ }),

/***/ "./src/calendar/scripts/filter.js":
/*!****************************************!*\
  !*** ./src/calendar/scripts/filter.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function filterUsers(activeCardSelector, dropdownSelector) {
  var activeCard = document.querySelectorAll(activeCardSelector);
  var dropdown = document.querySelector(dropdownSelector);
  dropdown.addEventListener('input', function () {
    var filter = dropdown.value;
    activeCard.forEach(function (item) {
      if (item.classList.contains(filter)) {
        item.classList.add('active');
        item.querySelector('.inner').classList.remove('hide');
      } else if (filter === 'all') {
        item.querySelector('.inner').classList.remove('hide');
        item.classList.add('active');
      } else {
        item.classList.remove('active');
        item.querySelector('.inner').classList.add('hide');
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (filterUsers);

/***/ }),

/***/ "./src/calendar/scripts/modal.js":
/*!***************************************!*\
  !*** ./src/calendar/scripts/modal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; }
/* harmony export */ });
function openModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
}

function Modal(parent, btnYesSelector, btnNoSelector, hideModal) {
  var btnYes = document.querySelector(btnYesSelector),
      btnNo = document.querySelector(btnNoSelector);

  var removeCard = function removeCard() {
    parent.classList.remove('active');
    var id = parent.getAttribute('id');
    var activeCard = document.getElementById("".concat(id));
    activeCard.classList.remove('active');
    var inner = activeCard.querySelector('.inner');
    inner.classList.add('hide');
    localStorage.removeItem(id);
    closeModal(hideModal);
  };

  btnYes.addEventListener('click', removeCard);
  btnNo.addEventListener('click', function () {
    closeModal(hideModal);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);



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
/******/ 			"calendar": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js"],
/******/ 			["./src/calendar/index.js","vendors-node_modules_babel_polyfill_lib_index_js"]
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
//# sourceMappingURL=calendar.ef50d612bf822f96faa0.js.map
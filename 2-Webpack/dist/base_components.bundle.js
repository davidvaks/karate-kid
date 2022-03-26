/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(props) {
    console.log('element <' + props.tag + '> created');
    const element = document.createElement(props.tag);
    if (props.type) element.type = props.type;
    if (props.className) element.className = props.className;
    if (props.value) element.value = props.value;
    if (props.textContent) element.textContent = props.textContent;
    return element;
}

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/base_components.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBaseComponents)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");


function createBaseComponents() {
    const container = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        className: 'container',
    });

    const taskInput = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'input',
        type: 'text',
        className: 'task_input',
    });
    taskInput.placeholder = 'Create New Task';

    const addTaskButton = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'input',
        type: 'button',
        className: 'add_task_button',
        value: 'Add'
    });
    addTaskButton.onclick = 'addTask()';

    const baseForm = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'form',
        className: 'new_task_form',
    })

    const table = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'table',
        className: 'incomplete_tasks',
    });

    const tBody = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'tbody',
        className: 'incomplete_tasks_body',
    })

    const h3 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h3',
    });
    h3.text = 'List: '

    baseForm.appendChild(taskInput);
    baseForm.appendChild(addTaskButton);

    container.appendChild(baseForm);

    table.appendChild(tBody);
    container.appendChild(table);

    return container;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb21wb25lbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFMUI7QUFDZixzQkFBc0IsdURBQWE7QUFDbkM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsc0JBQXNCLHVEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwQkFBMEIsdURBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGtCQUFrQix1REFBYTtBQUMvQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxrQkFBa0IsdURBQWE7QUFDL0I7QUFDQTtBQUNBLEtBQUs7O0FBRUwsZUFBZSx1REFBYTtBQUM1QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMi13ZWJwYWNrLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vMi13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzItd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMi13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMi13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMi13ZWJwYWNrLy4vc3JjL2Jhc2VfY29tcG9uZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHByb3BzKSB7XG4gICAgY29uc29sZS5sb2coJ2VsZW1lbnQgPCcgKyBwcm9wcy50YWcgKyAnPiBjcmVhdGVkJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnKTtcbiAgICBpZiAocHJvcHMudHlwZSkgZWxlbWVudC50eXBlID0gcHJvcHMudHlwZTtcbiAgICBpZiAocHJvcHMuY2xhc3NOYW1lKSBlbGVtZW50LmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICBpZiAocHJvcHMudmFsdWUpIGVsZW1lbnQudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAocHJvcHMudGV4dENvbnRlbnQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9wcy50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJhc2VDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc05hbWU6ICdjb250YWluZXInLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0lucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjbGFzc05hbWU6ICd0YXNrX2lucHV0JyxcbiAgICB9KTtcbiAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSAnQ3JlYXRlIE5ldyBUYXNrJztcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYWRkX3Rhc2tfYnV0dG9uJyxcbiAgICAgICAgdmFsdWU6ICdBZGQnXG4gICAgfSk7XG4gICAgYWRkVGFza0J1dHRvbi5vbmNsaWNrID0gJ2FkZFRhc2soKSc7XG5cbiAgICBjb25zdCBiYXNlRm9ybSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdmb3JtJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbmV3X3Rhc2tfZm9ybScsXG4gICAgfSlcblxuICAgIGNvbnN0IHRhYmxlID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnaW5jb21wbGV0ZV90YXNrcycsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0Qm9keSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICd0Ym9keScsXG4gICAgICAgIGNsYXNzTmFtZTogJ2luY29tcGxldGVfdGFza3NfYm9keScsXG4gICAgfSlcblxuICAgIGNvbnN0IGgzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIHRhZzogJ2gzJyxcbiAgICB9KTtcbiAgICBoMy50ZXh0ID0gJ0xpc3Q6ICdcblxuICAgIGJhc2VGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gICAgYmFzZUZvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFzZUZvcm0pO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodEJvZHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
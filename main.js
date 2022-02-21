/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Modules/ui.js":
/*!***************************!*\
  !*** ./src/Modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });


const ui = (weatherData) => {
    if (!weatherData) return;
    const searchData = document.getElementById('searchResult')
    searchData.classList.add('active')

    const cityName = document.getElementById('cityName')
    const temperature = document.getElementById('temperature')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind')

    cityName.innerHTML = `${weatherData.cityName}`
    temperature.innerHTML = `${weatherData.temperature} °C`
    humidity.innerHTML = `Humidity: ${weatherData.humidity}`
    windSpeed.innerHTML = `Wind Speed: ${weatherData.windSpeed}`

    return searchData;
}

/***/ }),

/***/ "./src/Modules/weather.js":
/*!********************************!*\
  !*** ./src/Modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });


const convertData = (data) => {
    const { name: cityName,
            main: {
                temp: temperature,
                humidity: humidity
            },
            wind: {
                speed: windSpeed
            }
        } = data
    
    return { cityName, temperature, humidity, windSpeed }
}

const weather = async (city) => {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7d118477d9762c05d4af34b441114d8f`
    const response = await fetch(requestUrl, { mode: 'cors'})
    const data = convertData(await response.json())
    
    return data
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _src_Modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/Modules/weather */ "./src/Modules/weather.js");
/* harmony import */ var _src_Modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/Modules/ui */ "./src/Modules/ui.js");





const form = document.getElementById('searchForm');
const formInput = document.getElementById('searchInput');
const formBtn = document.getElementById('searchBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

});

formBtn.addEventListener('click', async () => {
    if (formInput.value === '' || formInput == null) {
        return;
    }
    const weatherData = await (0,_src_Modules_weather__WEBPACK_IMPORTED_MODULE_1__.weather)(formInput.value);
    (0,_src_Modules_ui__WEBPACK_IMPORTED_MODULE_2__.ui)(weatherData)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pELCtCQUErQix5QkFBeUI7QUFDeEQsc0NBQXNDLHFCQUFxQjtBQUMzRCx5Q0FBeUMsc0JBQXNCOztBQUUvRDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCa0I7O0FBRWxCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSw0RUFBNEUsS0FBSztBQUNqRiwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QjtBQUN3QjtBQUNYOzs7QUFHcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBTztBQUNyQyxJQUFJLG1EQUFFO0FBQ04sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL01vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9Nb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IHsgdWkgfVxuXG5jb25zdCB1aSA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybjtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFJlc3VsdCcpXG4gICAgc2VhcmNoRGF0YS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eU5hbWUnKVxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJylcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKVxuXG4gICAgY2l0eU5hbWUuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEuY2l0eU5hbWV9YFxuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLnRlbXBlcmF0dXJlfSDCsENgXG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fWBcbiAgICB3aW5kU3BlZWQuaW5uZXJIVE1MID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlckRhdGEud2luZFNwZWVkfWBcblxuICAgIHJldHVybiBzZWFyY2hEYXRhO1xufSIsImV4cG9ydCB7IHdlYXRoZXIgfVxuXG5jb25zdCBjb252ZXJ0RGF0YSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lOiBjaXR5TmFtZSxcbiAgICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgICAgICB0ZW1wOiB0ZW1wZXJhdHVyZSxcbiAgICAgICAgICAgICAgICBodW1pZGl0eTogaHVtaWRpdHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aW5kOiB7XG4gICAgICAgICAgICAgICAgc3BlZWQ6IHdpbmRTcGVlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gZGF0YVxuICAgIFxuICAgIHJldHVybiB7IGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9XG59XG5cbmNvbnN0IHdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD03ZDExODQ3N2Q5NzYyYzA1ZDRhZjM0YjQ0MTExNGQ4ZmBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIHsgbW9kZTogJ2NvcnMnfSlcbiAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKVxuICAgIFxuICAgIHJldHVybiBkYXRhXG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy9zcmMvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgd2VhdGhlciB9IGZyb20gJy9zcmMvTW9kdWxlcy93ZWF0aGVyJztcbmltcG9ydCB7IHVpIH0gZnJvbSAnL3NyYy9Nb2R1bGVzL3VpJ1xuXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XG5jb25zdCBmb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG59KTtcblxuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBpZiAoZm9ybUlucHV0LnZhbHVlID09PSAnJyB8fCBmb3JtSW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlcihmb3JtSW5wdXQudmFsdWUpO1xuICAgIHVpKHdlYXRoZXJEYXRhKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
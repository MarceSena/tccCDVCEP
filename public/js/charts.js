/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/criaValores.js":
/*!*************************************!*\
  !*** ./resources/js/criaValores.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSC": () => (/* binding */ LSC),
/* harmony export */   "LIC": () => (/* binding */ LIC),
/* harmony export */   "LC": () => (/* binding */ LC),
/* harmony export */   "valoresMedia": () => (/* binding */ valoresMedia),
/* harmony export */   "LSCR": () => (/* binding */ LSCR),
/* harmony export */   "LICR": () => (/* binding */ LICR),
/* harmony export */   "LCR": () => (/* binding */ LCR),
/* harmony export */   "valoresAmplitude": () => (/* binding */ valoresAmplitude)
/* harmony export */ });
var soma = 0;
var media = 0;
var amplitude = 0;
var somaMedia = 0;
var mediaGeral = 0;
var desvio = 0;
var n = 10;
var d2 = 3.078;
var d3 = 0.7971;
var LSC = 0;
var LIC = 0;
var LC = 0;
var valoresMedia = [];
var valoresAmplitude = [];
var LSCR = 0;
var LICR = 0;
var LCR = 0;

function salvaDados() {
  $("#tabelaEditavel tbody tr").each(function () {
    // Recuperar todas as colunas de cada linha percorida
    var colunas = $(this).children(); //json objeto de dados

    var valor = [$(colunas[1]).text(), $(colunas[2]).text(), $(colunas[3]).text(), $(colunas[4]).text(), $(colunas[5]).text(), $(colunas[6]).text(), $(colunas[7]).text(), $(colunas[8]).text(), $(colunas[9]).text(), $(colunas[10]).text()]; //colocando o objeto dentro de um array

    valores.push(valor);
  });
  console.log(valores);
  return valores;
}

;

function medias() {
  for (var i = 0; i < 5; i++) {
    soma = 0;

    for (var j = 0; j < 10; j++) {
      soma = soma + parseFloat(valores[i][j]);
    }

    media = soma / 10;
    valoresMedia.push(media);
    somaMedia += media;
    mediaGeral = somaMedia / 5;
    $("#mediaGeral").val(mediaGeral);
    $("#mediaValor").val(media);
    console.log("valor: " + soma);
    console.log("media: " + media);
    console.log("somaMEdia: " + somaMedia);
    console.log("mediaGeral: " + mediaGeral);
    console.log("valoresMedia: " + valoresMedia);
  }

  return mediaGeral;
}

;

function amplitudes() {
  // Funcao para retornar o menor valor de um array
  Array.min = function (array) {
    return Math.min.apply(Math, array);
  }; // Funcao para retornar o maior valor de um array


  Array.max = function (array) {
    return Math.max.apply(Math, array);
  };

  for (var i = 0; i < 5; i++) {
    var menor = Array.min(valores[i]);
    var maior = Array.max(valores[i]);
    amplitude = maior - menor;
    valoresAmplitude.push(amplitude);
    $("#amplitudeValor").val(amplitude);
    console.log(amplitude);
    var somaAmplitude = +amplitude;
  }

  desvio = somaAmplitude / d2;
  $("#desvioValor").val(desvio); //media das amplitude 

  var mediaAmplitude = somaAmplitude / 5;
  LSC = mediaGeral + 3 * desvio / Math.sqrt(n);
  LIC = mediaGeral - 3 * desvio / Math.sqrt(n);
  LC = mediaGeral;
  LSCR = mediaAmplitude + 3 * d3 * desvio;
  LICR = mediaAmplitude - 3 * d3 * desvio;
  LCR = mediaAmplitude;
  console.log('LSC', LSC);
  console.log('LIC', LIC);
  console.log('LC', LC);
}

$(document).ready(function () {
  $("#n").val(n);
  salvaDados();
  medias();
  amplitudes();
});


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
  !*** ./resources/js/charts.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _criaValores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criaValores */ "./resources/js/criaValores.js");

$(document).ready(function () {
  console.log("aqui:", _criaValores__WEBPACK_IMPORTED_MODULE_0__.LC);
  console.log("valores:", _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[0]);
  console.log("valores:", _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[4]);
  var ctx = document.getElementById('mediaCharts');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['OBS1', 'OBS2', 'OBS3', 'OBS4', 'OBS5'],
      datasets: [{
        label: '# LSC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSC],
        backgroundColor: ['rgba(0, 0, 0, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }, {
        label: '# LC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LC],
        backgroundColor: ['rgba(0, 0, 0, 0)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 2
      }, {
        label: '# LIC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LIC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LIC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LIC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LIC, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LIC],
        backgroundColor: ['rgba(255, 255, 255, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }, {
        label: '#VALORES',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[0], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[1], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[2], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[3], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresMedia[4]],
        backgroundColor: ['rgba(255, 255, 255, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          min: 10,
          max: 50
        },
        title: {
          display: true,
          text: 'MEDIA'
        }
      }
    }
  });
  var ctx = document.getElementById('amplitudeCharts');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['OBS1', 'OBS2', 'OBS3', 'OBS4', 'OBS5'],
      datasets: [{
        label: '# LSC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LSCR],
        backgroundColor: ['rgba(0, 0, 0, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }, {
        label: '# LC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LCR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LCR],
        backgroundColor: ['rgba(0, 0, 0, 0)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 2
      }, {
        label: '# LIC',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.LICR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LICR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LICR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LICR, _criaValores__WEBPACK_IMPORTED_MODULE_0__.LICR],
        backgroundColor: ['rgba(255, 255, 255, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }, {
        label: '#VALORES',
        data: [_criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresAmplitude[0], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresAmplitude[1], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresAmplitude[2], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresAmplitude[3], _criaValores__WEBPACK_IMPORTED_MODULE_0__.valoresAmplitude[4]],
        backgroundColor: ['rgba(255, 255, 255, 0)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          min: 10,
          max: 50
        },
        title: {
          display: true,
          text: 'MEDIA'
        }
      }
    }
  });
});
})();

/******/ })()
;
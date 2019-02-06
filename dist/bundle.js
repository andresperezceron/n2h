var n2h =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Escala.js":
/*!*******************!*\
  !*** ./Escala.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction Escala(tipoEscala) {\r\n    if(tipoEscala === \"larga\") {\r\n        return function(terna, periodo) {\r\n            if (periodo.esUltimaTerna())\r\n                return \"\";\r\n            if (terna === \"000\" && periodo.ternaAnterior000())\r\n                return \"\";\r\n            if (periodo.estamosEnMil() && terna === \"000\")\r\n                return \"\";\r\n            if ((periodo.estamosEnMil() && periodo.terna001() && periodo.traductor.nombreLang === \"Spanish\"))\r\n                return \"mil \";\r\n            if (periodo.estamosEnMil())\r\n                return periodo.traductor.sprMiles;\r\n            if (!periodo.estamosEnMil() && terna === \"000\")\r\n                return periodo.terna001() ? periodo.traductor.getMillar(periodo.peso + 10) + \" \" :\r\n                    periodo.traductor.getMillar(periodo.peso) + \" \";\r\n            if (!periodo.estamosEnMil())\r\n                return periodo.terna001() ? \" \" + periodo.traductor.getMillar(periodo.peso + 10) + \" \" :\r\n                    \" \" + periodo.traductor.getMillar(periodo.peso) + \" \";\r\n        }\r\n    } else return function(terna, periodo) {\r\n        if (periodo.esUltimaTerna() || terna === \"000\")\r\n            return \"\";\r\n        if(periodo.esPenultimaTerna())\r\n            return periodo.traductor.sprMiles;\r\n        return periodo.terna001() ? \" \" + periodo.traductor.getMillar(periodo.peso + 10) + \" \" :\r\n            \" \" + periodo.traductor.getMillar(periodo.peso) + \" \";\r\n    }\r\n}\r\nmodule.exports = Escala;\r\n\n\n//# sourceURL=webpack://n2h/./Escala.js?");

/***/ }),

/***/ "./Exception.js":
/*!**********************!*\
  !*** ./Exception.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nvar Exception = {};\r\n\r\nException.seisceros = {\r\n    check : function(terna, periodo) {\r\n        return (terna === \"000\" && periodo.ternaAnterior000());\r\n    },\r\n    getException : \"\"\r\n};\r\n\r\nException.invalidEntry = {\r\n    check : function(numStr) {\r\n        if(numStr === \"0\") {\r\n            this.getException = \"cero\";\r\n            return true;\r\n        }\r\n        if(numStr.charAt(0) === '0' && numStr.length >= 2) {\r\n            this.getException = \"El primer dígito no puede ser cero.\";\r\n            return true;\r\n        }\r\n        if(numStr === \"\") {\r\n            this.getException = \"\";\r\n            return true;\r\n        }\r\n        for(var i = 0; i < numStr.length; i++) {\r\n            if((numStr.charAt(i) > '9' || numStr.charAt(i) < '0') && numStr.charAt(i) !== \"Backspace\") {\r\n                this.getException = \"No puede contener carácteres. Solo se admiten dígitos.\";\r\n                return true;\r\n            }\r\n        }\r\n        if(numStr.length >= 67) {\r\n            this.getException = \"Demasiado largo. Máximo 66 dígitos.\";\r\n            return true;\r\n        }\r\n        return false;\r\n    },\r\n    getException : \"\"\r\n};\r\n\r\nException.Spanish = {\r\n    unMil : {\r\n        check : function(periodo) {\r\n            return (periodo.terna001() && periodo.estamosEnMil());\r\n        },\r\n        getException : \"\"\r\n    },\r\n\r\n    decenacaUno : {\r\n        check : function(d) {\r\n            return d === 1;\r\n        },\r\n        getException : function(c, u, sprCentenas, traductor) {\r\n            var newDecena;\r\n            switch (u) {\r\n                case 0: newDecena = \"diez\"; break;\r\n                case 1: newDecena = \"once\"; break;\r\n                case 2: newDecena = \"doce\"; break;\r\n                case 3: newDecena = \"trece\"; break;\r\n                case 4: newDecena = \"catorce\"; break;\r\n                case 5: newDecena = \"quince\"; break;\r\n                case 6:\r\n                case 7:\r\n                case 8:\r\n                case 9: newDecena = \"dieci\" + traductor.getUnidad(u);\r\n            }\r\n            return traductor.getCentena(c) + sprCentenas + newDecena;\r\n        }\r\n    },\r\n\r\n    decenaDos : {\r\n        check : function(d) {\r\n            return d === 2;\r\n        },\r\n        getException : function(c, d, u, sprCentenas, periodo) {\r\n            var result = (u === 0) ?\r\n                periodo.traductor.getCentena(c) + sprCentenas + periodo.traductor.getDecena(d) :\r\n                periodo.traductor.getCentena(c) + sprCentenas + \"veinti\" + periodo.traductor.getUnidad(u);\r\n            return (periodo.esUltimaTerna() && u === 1) ? result + \"o\" : result; /* un | uno */\r\n        }\r\n    },\r\n\r\n    ultimaTernaTerminaEnUno : {\r\n        check : function(u, periodo) {\r\n            return periodo.esUltimaTerna() && u === 1;\r\n        }\r\n    },\r\n\r\n    terna100 : {\r\n        check : function(terna) {\r\n            return (terna === \"100\");\r\n        },\r\n        getException : \"cien\"\r\n    }\r\n};\r\n\r\nException.English = {\r\n    decenacaUno : {\r\n        check : function(d) {\r\n            return d === 1;\r\n        },\r\n        getException : function(c, u, sprCentenas, traductor) {\r\n            var newDecena;\r\n            switch (u) {\r\n                case 0: newDecena = \"teen\"; break;\r\n                case 1: newDecena = \"eleven\"; break;\r\n                case 2: newDecena = \"twelve\"; break;\r\n                case 3: newDecena = \"thirteen\"; break;\r\n                case 4:\r\n                case 5:\r\n                case 6:\r\n                case 7:\r\n                case 8:\r\n                case 9:\r\n                    newDecena = traductor.getUnidad(u) + \"teen\";\r\n            }\r\n            return traductor.getCentena(c) + sprCentenas + newDecena;\r\n        }\r\n    },\r\n};\r\n\r\nmodule.exports = Exception;\n\n//# sourceURL=webpack://n2h/./Exception.js?");

/***/ }),

/***/ "./Lang.js":
/*!*****************!*\
  !*** ./Lang.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Lang = {};\r\n\r\nLang.Spanish = {\r\n\r\n    nombre : \"Spanish\",\r\n    sprMiles : \" mil \",\r\n    escala : \"larga\",\r\n\r\n    unidades : [\r\n        \"\",\r\n        \"un\",\r\n        \"dos\",\r\n        \"tres\",\r\n        \"cuatro\",\r\n        \"cinco\",\r\n        \"seis\",\r\n        \"siete\",\r\n        \"ocho\",\r\n        \"nueve\"\r\n    ],\r\n    decenas : [\r\n        \"\",\r\n        \"diez\",\r\n        \"veinte\",\r\n        \"treinta\",\r\n        \"cuarenta\",\r\n        \"cincuenta\",\r\n        \"sesenta\",\r\n        \"setenta\",\r\n        \"ochenta\",\r\n        \"noventa\"\r\n    ],\r\n    centenas : [\r\n        \"\",\r\n        \"ciento\",\r\n        \"doscientos\",\r\n        \"trescientos\",\r\n        \"cuatrocientos\",\r\n        \"quinientos\",\r\n        \"seiscientos\",\r\n        \"setecientos\",\r\n        \"ochocientos\",\r\n        \"novecientos\"\r\n    ],\r\n    millares : [\r\n        \"\",\r\n        \"millones\",\r\n        \"billones\",\r\n        \"trillones\",\r\n        \"cuatrillones\",\r\n        \"quintillones\",\r\n        \"sextillones\",\r\n        \"septillones\",\r\n        \"octillones\",\r\n        \"nonillones\",\r\n        \"decillones\",\r\n        /* ------------- prurales */\r\n        \"millón\",\r\n        \"billón\",\r\n        \"trillón\",\r\n        \"cuatrillón\",\r\n        \"quintillón\",\r\n        \"sextillón\",\r\n        \"septillón\",\r\n        \"optillón\",\r\n        \"nonillón\",\r\n        \"decillón\"\r\n    ]\r\n};\r\n\r\nLang.English = {\r\n\r\n    nombre   : \"English\",\r\n    sprMiles : \" thousand \",\r\n    escala : \"corta\",\r\n\r\n    unidades : [\r\n        \"\",\r\n        \"one\",\r\n        \"two\",\r\n        \"tree\",\r\n        \"four\",\r\n        \"five\",\r\n        \"six\",\r\n        \"seven\",\r\n        \"eight\",\r\n        \"nine\"\r\n    ],\r\n    decenas : [\r\n        \"\",\r\n        \"ten\",\r\n        \"twenty\",\r\n        \"thirty\",\r\n        \"forty\",\r\n        \"fifty\",\r\n        \"sixty\",\r\n        \"seventy\",\r\n        \"eighty\",\r\n        \"ninety\"\r\n    ],\r\n    centenas : [\r\n        \"\",\r\n        \"one hundred\",\r\n        \"two hundred\",\r\n        \"tree hundred\",\r\n        \"four hundred\",\r\n        \"five hundred\",\r\n        \"six hundred\",\r\n        \"seven hundred\",\r\n        \"eight hundred\",\r\n        \"nine hundred\"\r\n    ],\r\n    millares : [\r\n        \"thousand\",\r\n        \"millions\",\r\n        \"billions\",\r\n        \"trillions\",\r\n        \"quadrillions\",\r\n        \"quintillions\",\r\n        \"sextillions\",\r\n        \"septillions\",\r\n        \"optillions\",\r\n        \"nonillions\",\r\n        \"decillions\",\r\n        /* ------------- prurales */\r\n        \"million\",\r\n        \"billion\",\r\n        \"trillion\",\r\n        \"quadrillion\",\r\n        \"quintillion\",\r\n        \"sextillion\",\r\n        \"septillion\",\r\n        \"optillion\",\r\n        \"nonillion\",\r\n        \"decillion\"\r\n    ]\r\n};\r\n\r\nmodule.exports = Lang;\n\n//# sourceURL=webpack://n2h/./Lang.js?");

/***/ }),

/***/ "./Periodo.js":
/*!********************!*\
  !*** ./Periodo.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var PeriodoBase = __webpack_require__(/*! ./PeriodoBase.js */ \"./PeriodoBase.js\");\r\nvar TernaTraslator = __webpack_require__(/*! ./TernaTraslator.js */ \"./TernaTraslator.js\");\r\nvar Exception = __webpack_require__(/*! ./Exception.js */ \"./Exception.js\");\r\n\r\nfunction Periodo(numStr, lang) {\r\n    PeriodoBase.call(this, numStr, lang);\r\n    this.numStr = numStr;\r\n    this.handle = handle;\r\n}\r\nPeriodo.prototype = Object.create(PeriodoBase.prototype);\r\n\r\nfunction handle() {\r\n    var terna;\r\n    var n2h = \"\";\r\n    var resultTT = \"\";\r\n    var ternaTraslator = new TernaTraslator();\r\n    var sprPeriodo = \"\";\r\n\r\n    if(Exception.invalidEntry.check(this.numStr))\r\n        return Exception.invalidEntry.getException;\r\n\r\n    while((terna = this.nextTerna()) !== null) {\r\n        resultTT = ternaTraslator.traslateTerna(terna, this);\r\n        sprPeriodo = this.sprPeriodoMaker(terna, this);\r\n        this.prepareNextTerna();\r\n        n2h += resultTT + sprPeriodo;\r\n    }\r\n    return n2h;\r\n}\r\n\r\nmodule.exports = Periodo;\n\n//# sourceURL=webpack://n2h/./Periodo.js?");

/***/ }),

/***/ "./PeriodoBase.js":
/*!************************!*\
  !*** ./PeriodoBase.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TernaMaker = __webpack_require__(/*! ./TernaMaker.js */ \"./TernaMaker.js\");\r\nvar Traductor = __webpack_require__(/*! ./Traductor.js */ \"./Traductor.js\");\r\nvar Escala = __webpack_require__(/*! ./Escala.js */ \"./Escala.js\");\r\n\r\nfunction PeriodoBase(numStr, lang) {\r\n    var arrayTernas = new TernaMaker(numStr);\r\n    var totalTernas = arrayTernas.length;\r\n    var secuenceMillares = (totalTernas % 2 === 0) ? 1 : 0;\r\n    var iNext = 0;\r\n\r\n    this.traductor = new Traductor(lang);\r\n    this.peso = (this.traductor.escala === \"larga\") ? Math.ceil(totalTernas / 2) - 1 : totalTernas - 2;\r\n    this.esUltimaTerna = function esUltimaTerna() { return iNext === totalTernas; };\r\n    this.esPenultimaTerna = function() { return iNext + 1 === totalTernas; };\r\n    this.nextTerna = function nextTerna() { return this.esUltimaTerna() ? null : arrayTernas[iNext++]; };\r\n    this.terna001 = function terna001() { return arrayTernas[iNext - 1] === \"001\"; };\r\n    this.ternaAnterior000 = function ternaAnterior000() { return arrayTernas[iNext - 2] === \"000\"; };\r\n    this.estamosEnMil = function estamosEnMil() { return secuenceMillares % 2 > 0; };\r\n    this.sprPeriodoMaker = new Escala(this.traductor.escala);\r\n    this.prepareNextTerna = function() {\r\n        this.peso = (this.traductor.escala === \"larga\") ?\r\n            this.estamosEnMil() ? this.peso - 0 : this.peso - 1 : this.peso - 1;\r\n        secuenceMillares++;\r\n    }\r\n}\r\nmodule.exports = PeriodoBase;\n\n//# sourceURL=webpack://n2h/./PeriodoBase.js?");

/***/ }),

/***/ "./TernaMaker.js":
/*!***********************!*\
  !*** ./TernaMaker.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nfunction TernaMaker(numStr) {\r\n    var reves = \"\";\r\n    var derecho = \"\";\r\n    var arrayChar = numStr.split(\"\");\r\n    var arrayNormalized = [];\r\n\r\n    for(var i = arrayChar.length - 1, iDigit = 0; i>=0; i--, iDigit++) {\r\n        reves += arrayChar[i];\r\n        if(iDigit === 2 && i !== 0) {\r\n            reves += \"|\";\r\n            iDigit = -1;\r\n        }\r\n    }\r\n\r\n    arrayChar = reves.split(\"\");\r\n    for(i = arrayChar.length - 1; i>=0; i--) {\r\n        derecho += arrayChar[i];\r\n    }\r\n\r\n    arrayChar = derecho.split(\"|\");\r\n    arrayChar.forEach(function (item) {\r\n        if(item.length === 1)  arrayNormalized.push(\"00\" + item);\r\n        else if(item.length === 2) arrayNormalized.push(\"0\" + item);\r\n        else arrayNormalized.push(item);\r\n    });\r\n\r\n    return arrayNormalized;\r\n}\r\n\r\nmodule.exports = TernaMaker;\r\n\n\n//# sourceURL=webpack://n2h/./TernaMaker.js?");

/***/ }),

/***/ "./TernaTraslator.js":
/*!***************************!*\
  !*** ./TernaTraslator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Exception = __webpack_require__(/*! ./Exception.js */ \"./Exception.js\");\r\n\r\nfunction TernaTraslator() {\r\n    this.traslateTerna = function(terna, periodo) {\r\n        var ternaSplit = terna.split(\"\");\r\n        var c = parseInt(ternaSplit[0], 10);\r\n        var d = parseInt(ternaSplit[1], 10);\r\n        var u = parseInt(ternaSplit[2], 10);\r\n        var sprCentenas = (c === 0 || (d === 0 && u === 0)) ? \"\" : \" \";\r\n        var sprUnidades = (periodo.traductor.nombreLang === \"Spanish\") ?\r\n            (d === 0 || u === 0 ) ? \"\" : \" y \" :\r\n            (d === 0 || u === 0 ) ? \"\" : \" \";\r\n\r\n        if(Exception.seisceros.check(terna, periodo))\r\n            return Exception.seisceros.getException;\r\n\r\n        if(periodo.traductor.nombreLang === \"Spanish\") {\r\n            if (Exception.Spanish.decenacaUno.check(d))\r\n                return Exception.Spanish.decenacaUno.getException(c, u, sprCentenas, periodo.traductor);\r\n            if (Exception.Spanish.decenaDos.check(d))\r\n                return Exception.Spanish.decenaDos.getException(c, d, u, sprCentenas, periodo);\r\n            if (Exception.Spanish.unMil.check(periodo))\r\n                return Exception.Spanish.unMil.getException;\r\n            if (Exception.Spanish.terna100.check(terna))\r\n                return Exception.Spanish.terna100.getException;\r\n            if (Exception.Spanish.ultimaTernaTerminaEnUno.check(u, periodo))\r\n                return periodo.traductor.getCentena(c) + sprCentenas +\r\n                    periodo.traductor.getDecena(d) + sprUnidades +\r\n                    periodo.traductor.getUnidad(u) + \"o\";\r\n        }\r\n\r\n        if(periodo.traductor.nombreLang === \"English\")\r\n            if(Exception.English.decenacaUno.check(d))\r\n                return Exception.English.decenacaUno.getException(c, u, sprCentenas, periodo.traductor);\r\n\r\n        return periodo.traductor.getCentena(c) + sprCentenas +\r\n            periodo.traductor.getDecena(d) + sprUnidades +\r\n            periodo.traductor.getUnidad(u);\r\n    }\r\n}\r\n\r\nmodule.exports = TernaTraslator;\n\n//# sourceURL=webpack://n2h/./TernaTraslator.js?");

/***/ }),

/***/ "./Traductor.js":
/*!**********************!*\
  !*** ./Traductor.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Lang = __webpack_require__(/*! ./Lang */ \"./Lang.js\");\r\n\r\nfunction Traductor(lang) {\r\n    var unidades = Lang[lang].unidades;\r\n    var decenas = Lang[lang].decenas;\r\n    var centenas = Lang[lang].centenas;\r\n    var millares = Lang[lang].millares;\r\n\r\n    this.sprMiles = Lang[lang].sprMiles;\r\n    this.nombreLang = Lang[lang].nombre;\r\n    this.escala = Lang[lang].escala;\r\n    this.getUnidad = function(u) { return unidades[u]; };\r\n    this.getDecena = function(d) { return decenas[d]; };\r\n    this.getCentena = function(c) { return centenas[c]; };\r\n    this.getMillar = function(m) { return millares[m]; };\r\n}\r\nmodule.exports = Traductor;\n\n//# sourceURL=webpack://n2h/./Traductor.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar Periodo = __webpack_require__(/*! ./Periodo.js */ \"./Periodo.js\");\r\nvar result = document.getElementById(\"result\");\r\nvar numStr = document.getElementById(\"numStr\");\r\nvar idioma = document.getElementById(\"idioma\");\r\n\r\nnumStr.onkeypress = function botonOnKeyDown(e) {\r\n    var maxleng = 66;\r\n    if(numStr.value.length === maxleng)\r\n        return false;\r\n    if((e.key > '9' || e.key < '0') && e.key !== \"Backspace\")\r\n        return false;\r\n};\r\n\r\nnumStr.onkeyup = function botonOnClick() {\r\n    var lang = (idioma.innerText === \"Inglés\") ? \"Spanish\" : \"English\";\r\n    result.innerText = new Periodo(numStr.value, lang).handle();\r\n};\r\n\r\n//console.log(new Periodo(\"8125\", \"English\").handle());\n\n//# sourceURL=webpack://n2h/./index.js?");

/***/ })

/******/ });
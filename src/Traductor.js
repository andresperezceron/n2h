var Lang = require('./Lang');

function Traductor(lang) {
    var unidades = Lang[lang].unidades;
    var decenas = Lang[lang].decenas;
    var centenas = Lang[lang].centenas;
    var millares = Lang[lang].millares;

    this.sprMiles = Lang[lang].sprMiles;
    this.nombreLang = Lang[lang].nombre;
    this.getUnidad = function(u) { return unidades[u]; };
    this.getDecena = function(d) { return decenas[d]; };
    this.getCentena = function(c) { return centenas[c]; };
    this.getMillar = function(m) { return millares[m]; };
}
module.exports = Traductor;
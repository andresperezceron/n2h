var TernaMaker = require("./TernaMaker.js");
var Traductor = require("./Traductor.js");
var Escala = require("./Escala.js");

function PeriodoBase(numStr, lang) {
    var arrayTernas = new TernaMaker(numStr);
    var totalTernas = arrayTernas.length;
    var secuenceMillares = (totalTernas % 2 === 0) ? 1 : 0;
    var iNext = 0;

    this.traductor = new Traductor(lang);
    this.peso = (this.traductor.escala === "larga") ? Math.ceil(totalTernas / 2) - 1 : totalTernas - 2;
    this.esUltimaTerna = function esUltimaTerna() { return iNext === totalTernas; };
    this.esPenultimaTerna = function() { return iNext + 1 === totalTernas; };
    this.nextTerna = function nextTerna() { return this.esUltimaTerna() ? null : arrayTernas[iNext++]; };
    this.terna001 = function terna001() { return arrayTernas[iNext - 1] === "001"; };
    this.ternaAnterior000 = function ternaAnterior000() { return arrayTernas[iNext - 2] === "000"; };
    this.estamosEnMil = function estamosEnMil() { return secuenceMillares % 2 > 0; };
    this.sprPeriodoMaker = new Escala(this.traductor.escala);
    this.prepareNextTerna = function() {
        this.peso = (this.traductor.escala === "larga") ?
            this.estamosEnMil() ? this.peso - 0 : this.peso - 1 : this.peso - 1;
        secuenceMillares++;
    }
}
module.exports = PeriodoBase;
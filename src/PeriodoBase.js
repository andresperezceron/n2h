var TernaMaker = require("./TernaMaker.js");
var Traductor = require("./Traductor.js");

function PeriodoBase(numStr, lang) {
    var arrayTernas = new TernaMaker(numStr);
    var totalTernas = arrayTernas.length;
    var iNext = 0;

    this.traductor = new Traductor(lang);
    this.secuenceMillares = (totalTernas % 2 === 0) ? 1 : 0;
    this.peso = Math.ceil(totalTernas / 2) - 1;
    this.esUltimaTerna = function esUltimaTerna() { return iNext === totalTernas; };
    this.nextTerna = function nextTerna() { return this.esUltimaTerna() ? null : arrayTernas[iNext++]; };
    this.terna001 = function terna001() { return arrayTernas[iNext - 1] === "001"; };
    this.ternaAnterior000 = function ternaAnterior000() { return arrayTernas[iNext - 2] === "000"; };
    this.estamosEnMil = function estamosEnMil() { return this.secuenceMillares % 2 > 0; };
    this.sprPeriodoMaker = function(terna) {
        if(this.esUltimaTerna())
            return "";
        if(terna === "000" && this.ternaAnterior000())
            return "";
        if(this.estamosEnMil() && terna === "000")
            return "";
        if((this.estamosEnMil() && this.terna001() && this.traductor.nombreLang === "Spanish"))
            return "mil ";
        if(this.estamosEnMil())
            return this.traductor.sprMiles;
        if(!this.estamosEnMil() && terna === "000")
            return this.terna001() ? this.traductor.getMillar(this.peso + 10) + " " :
                this.traductor.getMillar(this.peso) + " ";
        if(!this.estamosEnMil())
            return this.terna001() ? " " + this.traductor.getMillar(this.peso + 10) + " " :
                " " + this.traductor.getMillar(this.peso) + " ";
    }
}
module.exports = PeriodoBase;
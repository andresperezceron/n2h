var PeriodoBase = require("./PeriodoBase.js");
var TernaTraslator = require("./TernaTraslator.js");

function Periodo(numStr, lang) {
    PeriodoBase.call(this, numStr, lang);
    this.handle = handle;
}
Periodo.prototype = Object.create(PeriodoBase.prototype);

function handle() {
    var terna;
    var n2h = "";
    var resultTT = "";
    var ternaTraslator = new TernaTraslator();
    var sprPeriodo = "";

    while((terna = this.nextTerna()) !== null) {
        resultTT = ternaTraslator.traslateTerna(terna, this);
        sprPeriodo = this.sprPeriodoMaker(terna);
        this.peso = (this.estamosEnMil()) ? this.peso - 0 : this.peso - 1;
        this.secuenceMillares++;
        n2h += resultTT + sprPeriodo;
    }
    return n2h;
}

module.exports = Periodo;
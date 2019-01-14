var Exception = require("./Exception.js");

function TernaTraslator() {
    this.traslateTerna = function(terna, periodo) {
        var ternaSplit = terna.split("");
        var c = parseInt(ternaSplit[0], 10);
        var d = parseInt(ternaSplit[1], 10);
        var u = parseInt(ternaSplit[2], 10);
        var sprCentenas = (c === 0 || (d === 0 && u === 0)) ? "" : " ";
        var sprUnidades = (periodo.traductor.nombreLang === "Spanish") ?
            (d === 0 || u === 0 ) ? "" : " y " :
            (d === 0 || u === 0 ) ? "" : " ";

        if(Exception.seisceros.check(terna, periodo))
            return Exception.seisceros.getException;

        if(Exception.Spanish.decenacaUno.check(d))
            return Exception.Spanish.decenacaUno.getException(c, u, sprCentenas, periodo.traductor);
        if(Exception.Spanish.decenaDos.check(d))
            return Exception.Spanish.decenaDos.getException(c, d, u, sprCentenas, periodo);
        if(Exception.Spanish.unMil.check(periodo))
            return Exception.Spanish.unMil.getException;
        if(Exception.Spanish.terna100.check(terna))
            return Exception.Spanish.terna100.getException;
        if(Exception.Spanish.ultimaTernaTerminaEnUno.check(u, periodo))
            return periodo.traductor.getCentena(c) + sprCentenas +
            periodo.traductor.getDecena(d) + sprUnidades +
            periodo.traductor.getUnidad(u) + "o";

        return periodo.traductor.getCentena(c) + sprCentenas +
            periodo.traductor.getDecena(d) + sprUnidades +
            periodo.traductor.getUnidad(u);
    }
}

module.exports = TernaTraslator;
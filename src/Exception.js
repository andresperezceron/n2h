
var Exception = {};

Exception.seisceros = {
    check : function(terna, periodo) {
        return (terna === "000" && periodo.ternaAnterior000());
    },
    getException : ""
};

Exception.Spanish = {
    unMil : {
        check : function(periodo) {
            return (periodo.terna001() && periodo.estamosEnMil() && periodo.traductor.nombreLang === "Spanish");
        },
        getException : ""
    },

    decenacaUno : {
        check : function(d) {
            return d === 1;
        },
        getException : function(c, u, sprCentenas, traductor) {
            var newUnidad;
            switch (u) {
                case 0: newUnidad = "diez"; break;
                case 1: newUnidad = "once"; break;
                case 2: newUnidad = "doce"; break;
                case 3: newUnidad = "trece"; break;
                case 4: newUnidad = "catorce"; break;
                case 5: newUnidad = "quince"; break;
                case 6:
                case 7:
                case 8:
                case 9: newUnidad = "dieci" + traductor.getUnidad(u);
            }
            return traductor.getCentena(c) + sprCentenas + newUnidad;
        }
    },

    decenaDos : {
        check : function(d) {
            return d === 2;
        },
        getException : function(c, d, u, sprCentenas, periodo) {
            var result = (u === 0) ?
                periodo.traductor.getCentena(c) + sprCentenas + periodo.traductor.getDecena(d) :
                periodo.traductor.getCentena(c) + sprCentenas + "veinti" + periodo.traductor.getUnidad(u);
            return (periodo.esUltimaTerna() && u === 1) ? result + "o" : result; /* un | uno */
        }
    },

    ultimaTernaTerminaEnUno : {
        check : function(u, periodo) {
            return periodo.esUltimaTerna() && u === 1;
        }
    },

    terna100 : {
        check : function(terna) {
            return (terna === "100");
        },
        getException : "cien"
    }
};

Exception.invalidEntry = {
    check : function(numStr) {
        if(numStr === "") {
            this.getException = "";
            return true;
        }
        for(var i = 0; i < numStr.length; i++) {
            if((numStr.charAt(i) > '9' || numStr.charAt(i) < '0') && numStr.charAt(i) !== "Backspace") {
                this.getException = "NUMERO INTRODUCIDO NO VALIDO. INSERTAR SOLO DIGITOS.";
                return true;
            }
        }
        if(numStr.length >= 67) {
            this.getException = "NUMERO DEMASIADO LARGO. MAXIMO 66 DIGITOS.";
            return true;
        }
        return false;
    },
    getException : ""
};

module.exports = Exception;
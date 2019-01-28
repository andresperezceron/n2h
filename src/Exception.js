
var Exception = {};

Exception.seisceros = {
    check : function(terna, periodo) {
        return (terna === "000" && periodo.ternaAnterior000());
    },
    getException : ""
};

Exception.invalidEntry = {
    check : function(numStr) {
        if(numStr === "0") {
            this.getException = "cero";
            return true;
        }
        if(numStr.charAt(0) === '0' && numStr.length >= 2) {
            this.getException = "El primer dígito no puede ser cero.";
            return true;
        }
        if(numStr === "") {
            this.getException = "";
            return true;
        }
        for(var i = 0; i < numStr.length; i++) {
            if((numStr.charAt(i) > '9' || numStr.charAt(i) < '0') && numStr.charAt(i) !== "Backspace") {
                this.getException = "No puede contener carácteres. Solo se admiten dígitos.";
                return true;
            }
        }
        if(numStr.length >= 67) {
            this.getException = "Demasiado largo. Máximo 66 dígitos.";
            return true;
        }
        return false;
    },
    getException : ""
};

Exception.Spanish = {
    unMil : {
        check : function(periodo) {
            return (periodo.terna001() && periodo.estamosEnMil());
        },
        getException : ""
    },

    decenacaUno : {
        check : function(d) {
            return d === 1;
        },
        getException : function(c, u, sprCentenas, traductor) {
            var newDecena;
            switch (u) {
                case 0: newDecena = "diez"; break;
                case 1: newDecena = "once"; break;
                case 2: newDecena = "doce"; break;
                case 3: newDecena = "trece"; break;
                case 4: newDecena = "catorce"; break;
                case 5: newDecena = "quince"; break;
                case 6:
                case 7:
                case 8:
                case 9: newDecena = "dieci" + traductor.getUnidad(u);
            }
            return traductor.getCentena(c) + sprCentenas + newDecena;
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

Exception.English = {
    decenacaUno : {
        check : function(d) {
            return d === 1;
        },
        getException : function(c, u, sprCentenas, traductor) {
            var newDecena;
            switch (u) {
                case 0: newDecena = "teen"; break;
                case 1: newDecena = "eleven"; break;
                case 2: newDecena = "twelve"; break;
                case 3: newDecena = "thirteen"; break;
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    newDecena = traductor.getUnidad(u) + "teen";
            }
            return traductor.getCentena(c) + sprCentenas + newDecena;
        }
    },
};

module.exports = Exception;
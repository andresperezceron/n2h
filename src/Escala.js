
function Escala(tipoEscala) {
    if(tipoEscala === "larga") {
        return function(terna, periodo) {
            if (periodo.esUltimaTerna())
                return "";
            if (terna === "000" && periodo.ternaAnterior000())
                return "";
            if (periodo.estamosEnMil() && terna === "000")
                return "";
            if ((periodo.estamosEnMil() && periodo.terna001() && periodo.traductor.nombreLang === "Spanish"))
                return "mil ";
            if (periodo.estamosEnMil())
                return periodo.traductor.sprMiles;
            if (!periodo.estamosEnMil() && terna === "000")
                return periodo.terna001() ? periodo.traductor.getMillar(periodo.peso + 10) + " " :
                    periodo.traductor.getMillar(periodo.peso) + " ";
            if (!periodo.estamosEnMil())
                return periodo.terna001() ? " " + periodo.traductor.getMillar(periodo.peso + 10) + " " :
                    " " + periodo.traductor.getMillar(periodo.peso) + " ";
        }
    } else return function(terna, periodo) {
        if (periodo.esUltimaTerna() || terna === "000")
            return "";
        if(periodo.esPenultimaTerna())
            return periodo.traductor.sprMiles;
        return periodo.terna001() ? " " + periodo.traductor.getMillar(periodo.peso + 10) + " " :
            " " + periodo.traductor.getMillar(periodo.peso) + " ";
    }
}
module.exports = Escala;

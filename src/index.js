
var Periodo = require("./Periodo.js");
var result = document.getElementById("result");
var numStr = document.getElementById("numStr");
var idioma = document.getElementById("idioma");

numStr.onkeypress = function botonOnKeyDown(e) {
    var maxleng = 66;
    if(numStr.value.length === maxleng)
        return false;
    if((e.key > '9' || e.key < '0') && e.key !== "Backspace")
        return false;
};

numStr.onkeyup = function botonOnClick() {
    var lang = (idioma.innerText === "Inglés") ? "Spanish" : "English";
    result.innerText = new Periodo(numStr.value, lang).handle();
};

//console.log(new Periodo("8125", "English").handle());
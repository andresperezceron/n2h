
var Periodo = require("./Periodo.js");
var result = document.getElementById("result");
var numStr = document.getElementById("numStr");

numStr.onkeypress = function botonOnKeyDown(e) {
    var maxleng = 66;
    if(numStr.value.length === maxleng)
        return false;
    if((e.key > '9' || e.key < '0') && e.key !== "Backspace")
        return false;
};

numStr.onkeyup = function botonOnClick() {
    result.innerText = new Periodo(numStr.value, "English").handle();
};

//console.log(new Periodo("8125", "English").handle());
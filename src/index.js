
var Periodo = require("./Periodo.js");
var result = document.getElementById("result");
var numStr = document.getElementById("numStr");

numStr.onkeypress = function botonOnKeyDown(event) {
    if((event.key > '9' || event.key < '0') && event.key !== "Backspace")
        return false;
};

numStr.onkeyup = function botonOnClick() {
    result.innerText = new Periodo(numStr.value, "Spanish").handle();
};


//console.log(new Periodo("1121", "Spanish").handle());





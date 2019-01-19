
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

numStr.onkeyup = function botonOnClick(e) {
    var maxleng = 66;
    var validNumber = "";
    if(numStr.value.length > maxleng)
        numStr.value = numStr.value.substring(0, maxleng);

    if(invalidNumber(numStr.value)) {
        var novalidNumber = numStr.value;
        for(var i = 0; i < novalidNumber.length; i++) {
            if(novalidNumber.charAt(i) >= '0' && novalidNumber.charAt(i) <= '9')
                validNumber += novalidNumber.charAt(i);
        }
        numStr.value = validNumber;
    }else validNumber = numStr.value;
    result.innerText = new Periodo(validNumber, "Spanish").handle();
};

function invalidNumber(str) {
    for(var i = 0; i < str.length; i++) {
        if((str.charAt(i) > '9' || str.charAt(i) < '0') && str.charAt(i) !== "Backspace")
            return true;
    }
    return false;
}

//console.log(new Periodo("1121", "Spanish").handle());

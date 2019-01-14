

function TernaMaker(numStr) {
    var reves = "";
    var derecho = "";
    var arrayChar = numStr.split("");
    var arrayNormalized = [];

    for(var i = arrayChar.length - 1, iDigit = 0; i>=0; i--, iDigit++) {
        reves += arrayChar[i];
        if(iDigit === 2 && i !== 0) {
            reves += "|";
            iDigit = -1;
        }
    }

    arrayChar = reves.split("");
    for(i = arrayChar.length - 1; i>=0; i--) {
        derecho += arrayChar[i];
    }

    arrayChar = derecho.split("|");
    arrayChar.forEach(function (item) {
        if(item.length === 1)  arrayNormalized.push("00" + item);
        else if(item.length === 2) arrayNormalized.push("0" + item);
        else arrayNormalized.push(item);
    });

    return arrayNormalized;
}

module.exports = TernaMaker;

const sumAll = function(num1, num2) {

    // Error si no son números
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR";
    }

    // ERROR si alguno es negativo
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // comprobar cual es mayor, colocar el menor primero
    if (num1 > num2) {
        let aux = num1;
        num1 = num2;
        num2 = aux;
    }

    let suma = 0;
    for (num1; num1 <= num2; num1++) {
        suma += num1;
    }
    console.log(suma);
    return suma;
};

// Do not edit below this line
module.exports = sumAll;

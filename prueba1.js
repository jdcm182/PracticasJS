//code review 1 dia 2 2022-03-10
var arr = [1, 2, 3]

function callback(value, index) {
    console.log('for    ', { value, index })
}

for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i);
}

arr.forEach(function (value, index) {
    console.log('forEach', { value, index })
})

//###############################################################
//code review 1 dia 2 2022-03-10
function binarioADecimal(num) {
    return num
        .split("")
        .reverse()
        .reduce(function (result, value, index) {
            return result + 2 ** index * value;
        }, 0);

    return result;

    /*
    // es igual a:
    var result = 0;
    //convertir le string en un array de numeros
    //  "10" => [1, 0]
    // "111" => [1,1,1]
    num = num.split("");

    //invertir el orden del array
    // [1, 0] => [0, 1]
    // [1, 1, 1] => [1, 1, 1]
    num = num.reverse();

    // Recorrer los numeros del array
    // [0, 1] => 2^0 * 1 => 2^1 * 1 => 2^2 * 1
    num.forEach(function (value, index) {
        // usando el indice elevamos la base por le indice y guardamos el valor 
        const potencia = 2 ** index
        // usamos el resultado y lo multiplicamos por el valor del array (el que estamos iterando)
        // sumamos
        result = result + potencia * value;
        */
}


let binario = '10'
console.log('El nro binario ' + binario + ' es: ' + binarioADecimal(binario));

//###############################################################

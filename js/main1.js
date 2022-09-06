/* Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6] */

let numbers = [3, 5, 7, 1, 6];
function getBiggest(numbers) {
    temp = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (temp<numbers[i]) {
            temp = numbers[i];
        }
}
return temp;

}
console.log(getBiggest(numbers) +" es el mayor de " + numbers);


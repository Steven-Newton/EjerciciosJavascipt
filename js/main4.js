/* 
## Ejercicio #4
Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
 */
numbers = [1, 2, 5, 14, 24, 31, 50, 105];
function randomizeArray(numbers) {
    let temp;
    let temp2;
    for (let i = 0; i < numbers.length; i++) {
    temp =    (Math.floor(Math.random() * numbers.length))
    temp2 = numbers[i];
    numbers[i] = numbers[temp];
    numbers[temp] = temp2;
    }  
    return numbers;
}

console.log(randomizeArray(numbers));
console.log(randomizeArray(numbers));
console.log(randomizeArray(numbers));

/* ## Ejercicio #3
Escribir una función que permita saber si un número se repite dentro de un arreglo.

> Blockquote
**Casos de prueba**:

_Caso 1_: Resultado esperado: El número 5 se encuentra más de una vez
[1, 22, 5, 17, 10, 5, 40, 5]

_Caso 2_: Resultado esperado: El número 7 se encuentra más de una vez
[7, 41, 5, 7, 10, 13, 2]

_Caso 3_: Resultado esperado: No hay números repetidos
[1, 22, 5, 14, 24, 31, 27, 15, 105] */

numbers = [1, 22, 5, 17, 10, 5, 40, 5]; 
numbers2 = [7, 41, 5, 7, 10, 13, 2]
numbers3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];

function checkRepeat(numbers) {
    let tempLog ;
    let check = true;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((numbers[i] == numbers[j]) && (i != j)) {
/*                 tempLog += ` el numero ${numbers[i]} se repite  (${i} and ${j})`
 */                check = false;
                tempLog = `El numero ${numbers[i]} e encuentra más de una vez  `
            }
        }
    }
    if (check) {
    tempLog = `No hay números repetidos`;
    }
    return tempLog;
}
console.log(checkRepeat(numbers));
console.log(checkRepeat(numbers2));
console.log(checkRepeat(numbers3));


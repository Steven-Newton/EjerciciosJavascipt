/* ## Ejercicio #2
María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño. */
let numbers =  [-1, 3, 4, 2, 6];
function getSmallest(numbers) {
    temp = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (temp>numbers[i]) {
            temp = numbers[i];
        }
}
return temp;

}
console.log(getSmallest(numbers) + " es el menor de " + numbers);


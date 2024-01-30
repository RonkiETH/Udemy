'use strict'

let params = process.argv.slice(2);

let numero1 = parseFloat(params[0]);
let numero2 = parseFloat(params[1]);

console.log(numero1);
console.log(numero2);

let plantilla = `
El resultado de la Suma es: ${numero1 + numero2}
El resultado de la Resta es: ${numero1 - numero2}
El resultado de la Multiplicación es: ${numero1 * numero2}
El resultado de la División es: ${numero1 / numero2}
`;

console.log(plantilla);

console.log("Hola mundo con NodeJS");
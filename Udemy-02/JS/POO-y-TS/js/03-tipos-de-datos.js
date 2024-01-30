//String
var cadena = "holamaigoasd";
cadena = 1;
//Number
var numero = 12;
//Boleano
var verdadero_falso = true;
//Any
var cualquiera = "Hola";
//Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14, 15];
//Let vs Var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log("Dentro: " + numero1_1, numero2);
}
console.log("Fuera: " + numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);

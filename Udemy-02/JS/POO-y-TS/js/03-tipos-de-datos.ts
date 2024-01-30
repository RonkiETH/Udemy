type alfanumerico = string | number;

//String
var cadena: alfanumerico = "holamaigoasd";
cadena = 1;
//Number

var numero: number = 12;

//Boleano
var verdadero_falso: boolean = true;

//Any
var cualquiera: any = "Hola";

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

var years: number[] = [12, 13, 14, 15];

//Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log("Dentro: " + numero1, numero2)
}
console.log("Fuera: " + numero1, numero2)


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);

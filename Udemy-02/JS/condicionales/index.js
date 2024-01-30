'use strict'

//Condicional IF
//Si a es igual a b, hacé algo

var edad = 35;
var nombre = 'Juanito Pistola';


if(edad >= 18){
    console.log(nombre+ " tiene " + edad + " años, es mayor de edad")
    if(edad == 33){
        console.log("Sos un pendex");
}else{
    console.log(nombre+ " tiene " + edad + " años, es menor de edad")
}
}

//Condicional Switch

var edad = 25
var imprime = " ";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
    break;
    case 25:
        imprime = "Ya sos un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Sos un viejardo";
    break;
    default:
        imrpime = "Tu edad es distinta";
    break;
}

console.log(imprime);
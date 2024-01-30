'use strict'

//Programa que pida dos números y que nos diga cual es mayor y cual es menor. Si los números no son números, o son menores o iguales a cero, nos los vuelva a pedir

var numero1 = parseInt(prompt('Introduce el primer número'));
var numero2 = parseInt(prompt('Introduce el segundo número'));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer número'));
    numero2 = parseInt(prompt('Introduce el segundo número'));
}

if(numero1 == numero2){
    alert("LOS NUMEROS SON IGUALES");
}else if(numero1 > numero2){
    alert("EL NÚMERO MAYOR ES:" + numero1);
    alert("EL NÚMERO MENOR ES:" + numero2);
}else if(numero2 > numero1){
    alert("EL NÚMERO MAYOR ES:" + numero2);
    alert("EL NÚMERO MENOR ES:" + numero1);
}
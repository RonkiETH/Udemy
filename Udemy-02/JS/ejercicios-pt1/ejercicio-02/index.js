'use strict'

//Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducitr un número negativo y ahí mostrar el resultado

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce números hasta que ingreses uno negativo'));
    
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma+= numero;

        contador++;

        console.log(suma);
        console.log(contador);
    }
}while(numero >= 0);

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + (suma/contador));
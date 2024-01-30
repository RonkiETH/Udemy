'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario y que nos diga si está en el array, y su índice.
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h2>Contenido del array "+textoCustom+"</h2>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//Pedir 6 números
var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}
//Mostrarlo en consola y en pantalla
mostrarArray(numeros);
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a, b){return a-b}
);
mostrarArray(numeros, "ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "al revés");

//Mostrar cantidad de elementos
document.write("<h2>El array tiene: "+numeros.length+" elementos</h2>");

//Búsqueda

var busqueda = parseInt(prompt("Buscá un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h2>Posición de la búsqueda: "+posicion+"</h2>")
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}


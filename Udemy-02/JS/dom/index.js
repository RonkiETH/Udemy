'use strict'

//DOM - Document Object Model

//var caja = document.getElementById("micaja");
//Llamar un elemento por ID
var caja = document.querySelector("#micaja");

console.log(caja);

//Llamar elemento por su etiqueta

// var todosLosDivs = document.getElementsByTagName('div');
// console.log(todosLosDivs)

// var contenidoEnTexto = todosLosDivs[1]
// console.log(contenidoEnTexto);
// contenidoEnTexto.innerHTML = "Otro texto"
// contenidoEnTexto.style.background = "red";

var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr");



var todosLosDivs = document.getElementsByTagName('div');
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo)
    }
}
seccion.append(hr);


//Llamar elemento por su clase css
var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos);
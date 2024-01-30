'use strict'

//Arrays

// var nombres = ["Juan", "José", "Luis", "Pedro Sanchez"];

// var lenguajes = new Array("PHP", "JS", "Go", "Java");

// console.log(nombres[2]);
// console.log(lenguajes);


// Array multidimensional

var categorias = ["acción", "comedia", "terror"];
var peliculas = ["Harry Potter", "Hombres de Negro"];

var cine= [categorias, peliculas];

console.log(cine[0][1]) //----> Categoriías ---> Comedia
console.log(cine[1][0]) //----> Películass ---> Harry Potter



// Para añadir elementos al array

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");
    
console.log(peliculas);





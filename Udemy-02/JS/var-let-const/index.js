'use strict'

// VARIABLES, LET y CONSTANTES

// var define una variable local o global

// let define variables dentro de un bloque

//const contenedor de datos como una variable, pero su valor no se puede modificar nunca

// VAR

var perro = "Labrador";
let gato = "Señor";

var numero = 40;
console.log(numero); //40 

if(true){
    var numero = 50; 
    console.log(numero) //50
}

console.log(numero); //50

// LET

var texto = "Hola putitos";
console.log(texto); //Hola

if(true){
    let texto= "Chau putitos";
    console.log(texto) //Chau 
}

console.log(texto); //Hola

//CONST

var web = "puercos";
const ip = "chanchos"

web = "leones"
// ip = "tigres" (no se puede)
console.log(web, ip);

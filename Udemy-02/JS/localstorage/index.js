'use strict'

// Localstorage

if(typeof(Storage) !== 'undefined'){
    console.log("Disponible");
}else{
    console.log("No disponible men");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Go");

//Recuperar elemento
localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre: "Juani",
    email: "aparato@gmail.com",
    web: "uwu.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));       

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

//Remover item
// localStorage.removeItem("usuario");

//Limpiar local storage
// localStorage.clear();

'use strict'

let fecha = new Date
let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDate();
var hour = fecha.getHours();
var minutes = fecha.getMinutes();

let textoHora = `
    El año es: ${year}
    El mes es: ${month + 1}
    El día es: ${day}
    La hora es: ${hour}:${minutes}
    `

console.log(textoHora);
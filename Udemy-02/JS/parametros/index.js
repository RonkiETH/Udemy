'use strict'

//PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("Naranja", "Manzana", "Pera", "Banana")
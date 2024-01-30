'use strict'

//Tabla de multiplicar de un número introducido en pantalla

var numero = parseInt(prompt("¿De qué número querés la tabla?"));

for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>")
}

//Todas las tablas de multiplicar
for(var c = 1; c <= 10; c++){
    document.write(i+" x "+c+" = "+(i*c)+"<br/>")
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+numero+" = "+(i*numero)+"<br/>")
    }
}

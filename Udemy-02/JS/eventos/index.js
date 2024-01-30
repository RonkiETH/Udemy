'use strict'

//Eventos (Función que se ejecuta cuando pasa algo)

//Eventos del mouse

window.addEventListener('load', () =>{
    function cambiarColor(){
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
        return true
    }
    
    var boton = document.querySelector("#btn");
    
    
    //Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });
    
    //Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "orange";
    });
    
    //Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "pink";
    });
    
    //Eventos del teclado
    var input = document.querySelector("#campo_nombre");
    
    //Focus
    input.addEventListener('focus', function(){
        console.log("Estás dentro del imput");
    });
    
    //Blur
    input.addEventListener('blur', function(){
        console.log("Estás fuera del imput");
    });
    
    //Keydown
    input.addEventListener('keydown', function(e){
        console.log("[keydown] Estás pulsando la tecla: ", e.key);
    });
    
    //Keypress
    input.addEventListener('keypress', function(e){
        console.log("[keypress] Estás pulsando la tecla: ", e.key);
    });
    
    //Keyup
    input.addEventListener('keyup', function(e){
        console.log("[keyup] Estás soltando la tecla: ", e.key);
    });
});


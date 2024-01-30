'use strict'

//Selector de iD
$("#rojo").css("background", "red")
          .css("color", "white");

$("#amarillo").css("background", "yellow")
              .css("color", "green");

$("#verde").css("background", "green")
               .css("color", "white");

//Selectores de clases
var mi_clase = $(".zebra");
mi_clase.css("padding", "5px");

$('.sin_borde').on("click", function () {
    $(this).addClass('zebra');
})


//Selectores de etiqueta
var parrafos = $("p").css("cursor", "pointer");

parrafos.click(function(){
    var that = $(this);
    if(!that.hasClass("grande")){
        that.addClass("grande");
    }else{
        that.removeClass("grande");
    }
});

//Selectores de atributo
$('[title="Google"]').css('background', 'green');
$('[title="Facebook"]').css('background', 'orange');

'use strict'
$(document).ready(function(){

    //Mover elemento por la página (Draggable)
    $('.elemento').draggable();

    //Redimensionar elementos
    $('.elemento').resizable();

    //Seleccionar y ordenar elementos
    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable();

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Soltaste un elemento bobo");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").effect("explode");
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    
    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
});
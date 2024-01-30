
$(document).ready(function(){
    var caja = $("#caja");
    
    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "orange");
    // });
    
    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaVerde(){
        $(this).css("background", "green");
    }

    //Hover
    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", "purple");
    });

    //Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "2px solid red");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
        datos.text($(this).val()).show();
    });

    //Mousedown y Mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //Mousemove
    $(document).on("mousemove", function (event) {
        var sigueme =  $("#sigueme");
        console.log(event.clientX);
        console.log(event.clientY);  
        $('body').css("cursor", "none");
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });
});
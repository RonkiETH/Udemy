$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.show('fast');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.hide('fast');
    });

    $("#todoenuno").click(function(){
        caja.toggle('fast');
    });

    $("#animar").click(function(){
        caja.animate({
                       marginLeft: "500px",
                       fontSize: "40px",
                       height: "100px"
                     }, 'fast');
    });

});
'use strict'

window.addEventListener('load', function(){

    //Timers
    var tiempo = setInterval(function(){
        console.log("Set interval");
        document.querySelector("h1").style.background = "orange"
    }, 1500);

});
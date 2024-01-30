'use strict'
$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            auto: true,
            randomStart: true,
            speed: 200,
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    };
    //Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de título 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
            {
                title: 'Prueba de título 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
            {
                title: 'Prueba de título 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
            {
                title: 'Prueba de título 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
            {
                title: 'Prueba de título 6',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eius doloremque aspernatur, earum itaque nisi. Accusamus, quidem ipsam ullam necessitatibus vitae illum nisi sunt quisquam, qui, quibusdam asperiores deserunt alias.'
            },
        ];
        
        posts.forEach((item, index) =>{
            var post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>
                            ${item.content}
                            </p>
                            <a href="#" class="button-more">Leer más</a>
                        `;
                        $("#posts").append(post);
        });
    };
    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll
    $(".subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });


    var form_name = localStorage.getItem("form_name");

    if(form_name != null & form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<b>Bienvenido, " + form_name + "</b>");
        about_parrafo.append("</br> <a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    };
    //Acordeón
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    };
    
    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj);
        }, 1000);
    };

    //Validación
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy',
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
        });
    }
});


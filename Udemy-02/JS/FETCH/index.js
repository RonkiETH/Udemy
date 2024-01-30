'use strict'

//Fetch (ajax) y peticiones a servicios / apis REST

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getInfo(){
    var profesor = {
        nombre: "Juanito",
        apellido: "Ronqui",
        url: "ajdajdasjdj.com"
    };
    
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == "") return reject("Error");
            
            return resolve(profesor_string)
        }, 3000);
        
    });
    
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) =>{
        let nombre = document.createElement("h3");
        
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);
    });
}

function mostrarJanet(user){
    let nombre = document.createElement("h4");
        
    nombre.innerHTML = user.first_name + " " + user.last_name;

    div_janet.appendChild(nombre);
}


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
})
try {
    console.log("Hola");
  }
  catch(error) {
   console.log("Error");
  };
    


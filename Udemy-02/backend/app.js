'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//cargar archivos de rutas
let project_routes = require('./routes/project')


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Configurar cabeceras y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', project_routes);

//request.body: Contiene los parámetros que le pasemos por el cuerpo de la petición.

//request.query: Contiene los parámetros que le pasemos por la URL desde desde NodeJS.

//request.params: Contiene los parámetros que le pasemos por la URL.

//exportar
module.exports = app;
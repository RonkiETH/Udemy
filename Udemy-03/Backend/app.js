let express = require('express');
let bodyParser = require('body-parser');
let app = express();


//Rutas
let articleRoutes = require('./Routes/article.routes');

//Middlewares
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


//CORS
let CORS = require('cors');
//Cargar rutas
app.use('/api', articleRoutes);



module.exports = app;
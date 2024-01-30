let mongoose = require('mongoose');
let app = require('./app');
let PORT = 3900;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',
{ useNewUrlParser:true })
.then(() => {
    console.log('Conexión a la base de datos correcta.');

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto: ${PORT}`);
    })
})

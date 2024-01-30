let validator = require('validator');
let fs = require('fs');
let path = require('path');
let Article = require('../Models/Article');

let controller = {
    datosCurso: (req, res) => {
        let hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'master en frameworks',
            autor: 'Ronki',
            url: 'si',
            hola
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            status: 'error',
            message: 'Soy la acción del test de mi controlador'
        });
    },

    save: (req, res) => {
        //Recoger parámetros por post
        let params = req.body;

        //Validar datos (validator)
        try{
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

        if(validateTitle && validateContent){
            //Crear objeto a guardar
            let article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar artículo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado'
                    })
                }
                //Devolver una respuesta
                return res.status(200).send({
                    status: 'sucecss',
                    article: articleStored
                });
            });
 
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos'
            })
        }
    },

    getArticles: (req, res) => {

        let query = Article.find({});

        let last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }

        //Find
        query.sort('-_id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos'
                });
            } else if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostrar'
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    articles
                });
            }
        })
    },

    getArticle: (req, res) => {
        //Guardar el id de la url
        let articleId = req.params.id;

        //Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo'
            });
        }else {
            //Buscar el artículo
            Article.findById(articleId, (err, article) => {
                if (err || !article) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo'
                    });
                } else {
                    //Devolverlo como JSON
                    return res.status(404).send({
                        status: 'success',
                        article
                    });
                }
            });
        }
    },

    update: (req, res) => {
        //Guardar el id del artículo por la url
        let articleId = req.params.id;

        //Guardar los datos que llegan  por put
        let params = req.body;

        //Validar datos
        try{
            let validateTitle = !validator.isEmpty(params.title);
            let validateContent = !validator.isEmpty(params.content);

            if (validateTitle && validateContent) {
                //Find and update
                Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                    if (err) {
                        return res.status(500).send({
                            status: 'error',
                            message: 'Error al actualizar'
                        })
                    } else if (!articleUpdated) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el artículo'
                        })
                    } else {
                        return res.status(200).send({
                            status: 'success',
                            article: articleUpdated
                        })
                    }
                });
            } else {
               //Devolver respuesta
                return res.status(200).send({
                    status: 'error',
                    message: 'La validación no es correcta'
                })
            }
        }catch(err){
            return res.status(200).send({
                status: 'success',
                message: 'Faltan datos por enviar'
            });
        } 
    },

    delete: (req, res) => {
        //Guardar el id de la url
        let articleId = req.params.id;

        //Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'success',
                    message: 'Error al borrar'
                });
            } else if (!articleRemoved) {
                return res.status(200).send({
                    status: 'success',
                    message: 'No se ha borrado el artículo, probablemente no exista'
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    article: articleRemoved
                })
            }
        });
    },

    upload: (req, res) => {
        //Configuramos el módulo del connect-multiparty en las rutas

        //Recoger el fichero de la petición
        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: 'Inconvenientes'
            });
        }

        //Conseguir nombre y la extensión del archivo
        let filePath = req.files.file0.path;
        let fileSplit = filePath.split('\\');

        //Nombre del archivo
        let fileName = fileSplit[2];

        //Extensión del fichero
        let extensionSplit = fileName.split('\.');
        fileExt = extensionSplit[1];

        //Comprobar la extensión, solo imagenes, si no es válido, borrar el fichero
        if (fileExt != 'png' && fileExt != 'jpg' && fileExt != 'jpeg' && fileExt != 'gif') {
            //Borrar el archivo subido
            fs.unlink(filePath, (err) => {
                return res.status(200).send({
                    status: 'err',
                    message: 'La extensión de la imagen no es válida'
                });
            })

        } else {
            //Si todo es válido, sacando id de la url
            let articleId = req.params.id;
            //Buscar el artículo, asignarle el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({_id: articleId}, {image: fileName}, {new: true}, (err, articleUpdated) => {
                if (err || !articleUpdated) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen'
                    });
                } else {
                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                }
            });
        } 
    },

    getImage: function (req, res) {
        let fileName = req.params.fileName;
        let pathFile = './upload/articles/' + fileName;

        fs.stat(pathFile, (err, exists) => {
            if (exists) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return res.status(404).send({
                    message: 'No existe la imagen'
                });
            }
        });
    },

    search: (req, res) => {
        //Sacar el string a buscar
        let searchString = req.params.search;

        //Find or
        Article.find({ "$or": [
            {"title": {"$regex": searchString, "$options": "i"}},
            {"content": {"$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error en la petición'
                });
            } else if (!articles || articles.length <= 0) {
                return res.status(400).send({
                    message: 'No hay artículos que coincidan con tu busqueda'
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    articles
                });
            }
            
        })
        
        
    }
};

module.exports = controller;
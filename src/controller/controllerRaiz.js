const controller = {  }
const path = require('path');

controller.get = (req, res, next) => {
    console.log('ESTOY EN LA RUTA /');

    // TENGO QUE LEER LOS ARCHIVOS QUE TENGO EN LA CARPETA DE LOS SALVAPANTALLAS
    // SE SUPONE QUE LOS SALVAPANTALLAS QUE TENGO EL LA CARPTETA YA TIENEN LAS MEDIDAS.
    res.render('index');
}

module.exports = controller;

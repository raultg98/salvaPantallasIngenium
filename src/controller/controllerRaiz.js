const controller = {  }
const path = require('path');
const fs = require('fs');
const script = require('../serverScripts/serverScript');


controller.get = (req, res, next) => {
    console.log('ESTOY EN LA RUTA /');

    script.pasarDatosCliente();

    res.render('index');
}

controller.borrarSalPan = (req, res, next) => {
    // OBTENGO EL SALVAPANTALLAS EL CUAL QUIERO ELIMINAR.
    const { id } = req.params;

    script.borrarSalvaPantallas(id);
    
    res.redirect('/');
}

module.exports = controller;

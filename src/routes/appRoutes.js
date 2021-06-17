const { Router } = require('express');
const controllerRaiz = require('../controller/controllerRaiz');
const controllerAdd = require('../controller/controllerAdd');

const router = Router();

/********    RUTA /    ********/
router.get('/', controllerRaiz.get);


/********    RUTA /ADD    ********/

module.exports = router;
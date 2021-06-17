const { Router } = require('express');
const controllerRaiz = require('../controller/controllerRaiz');
const controllerAdd = require('../controller/controllerAdd');

const router = Router();

/********    RUTA /    ********/
router.get('/', controllerRaiz.get);


/********    RUTA /ADD    ********/
router.get('/add', controllerAdd.get);

router.post('/add', controllerAdd.upload ,controllerAdd.post);


module.exports = router;
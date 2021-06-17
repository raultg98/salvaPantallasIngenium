const controller = {  }
const path = require('path');

controller.get = (req, res, next) => {
    res.send('ENLAZADO');
}

module.exports = controller;

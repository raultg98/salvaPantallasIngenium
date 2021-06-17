const controller = {  }
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const resizeImg = require('resize-img');

const pathSalvaPantallas = path.join(__dirname, '../public/img/salvaPantallas/');

controller.get = (req, res, next) => {
    console.log('ESTOY EN LA RUTA /add');

    res.render('add');
}

/***************       MULTER       ***************/
const fileFilter = (req, file, cb) => {
    // EXPRESION REGULAR PARA VALIDAR QUE LA IMAGEN TENGA ESTAS EXTENSIONES
    const fileTypes = /jpeg|jpg|png/;
    const extensionArchivo = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if(extensionArchivo && extname){
        return cb(null, true);
    }else {
        return cb('ERROR: El archivo debe de ser una imagen');
    }
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/salvaPantallas'), 
    filename: (req, res, cb) => {
        // OBTENGO TODOS LOS SALVAPANTALLAS QUE TENGO SUBIDOS.
        const salvaPantallasSubidos = fs.readdirSync(path.join(__dirname, '../public/img/salvaPantallas')).length;

        // EL NOMBRE DEL SALVAPANTALLAS TIENE QUE SER: 'SalPanNUM.png'
        cb(null, 'SalPan' + salvaPantallasSubidos +'.png');
    }
});

controller.upload = multer({
    storage, 
    fileFilter
}).array('salvapantallas');


function cambiarTamanio() {
    const salvaPantallas = fs.readdirSync(pathSalvaPantallas);
    const imgWithPath = [];

    salvaPantallas.forEach(img => {
        imgWithPath.push(pathSalvaPantallas + img);
    });

    imgWithPath.forEach(img => {
        // CAMBIO EL TAMAÑO DE LA IMAGEN Y LA GUARDO CON EL MISMO NOMBRE Y EXTENSION.
        resizeImg(fs.readFileSync(img), { width:800, height: 400 })
        .then(buf => {
            fs.writeFileSync(img, buf);
        });
    });
}

controller.post = (req, res, next) => {
    // TENGO QUE CAMBIAR EL TAMAÑO A LA IMAGEN AL HACER EL POST
    cambiarTamanio();

    res.redirect('/add');
}


module.exports = controller;
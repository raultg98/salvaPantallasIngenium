const path = require('path');
const fs = require('fs');
const script = { };

const pathSalvaPantallas = path.join(__dirname, '../public/img/salvaPantallas/');
const pathClienteJSON = path.join(__dirname, '../public/datos/salvaJSON.json');

/**
 * FUNCION QUE ME CREA UN JSON CON EL NOMBRE DE LOS SALVAPANTALLAS, PARA DESPUES ACCEDER
 * A ELLOS DESDE EL CLIENTE
 */
script.pasarDatosCliente = () => {
    const salvaPantallas = fs.readdirSync(pathSalvaPantallas);
    const arraySalvaPantallas = [];

    salvaPantallas.forEach(img => {
        const objeto = {
            salvaPantallas: '/img/salvaPantallas/'+ img
        }

        arraySalvaPantallas.push(objeto);
    });

    const json_obj = JSON.stringify(arraySalvaPantallas);
    fs.writeFileSync(pathClienteJSON, json_obj);
}

/**
 * FUNCION QUE ME ELIMINA UN SALVAPANTALLAS EN CONCRETO Y ME RENOMBRA LOS SALVAPANTALLAS
 * QUE QUEDAN, PARA QUE NUNCA TENGAS HUECOS DE NUMEROS ENTRE LOS ID'S.
 *  EJEMPLOS:
 *      - BORRANDO EL SALVAPANTALLAS CON ID=2: 0, 1, 3, 4 ===> 0, 1, 2, 3 
 *      - BORRANDO EL SALVAPANTALLAS CON ID=0: 1, 2, 3, 4 ===> 0, 1, 2, 3
 * 
 * @param { NUMBER } id , Numero del salvapantallas que queremos eliminar SalPanID.png
 */
script.borrarSalvaPantallas = (id) => {
    const listaSalvaPantallasBeforeDelete = fs.readdirSync(pathSalvaPantallas);

    const salvaToDelete = pathSalvaPantallas + listaSalvaPantallasBeforeDelete[id];

    fs.unlinkSync(salvaToDelete);

    const listaSalvaPantallas = fs.readdirSync(pathSalvaPantallas);

    for(let i=0; i<listaSalvaPantallas.length; i++){
        const nuevoNombre = pathSalvaPantallas +'SalPan'+ i +'.png';
        const antiguoNombre = pathSalvaPantallas + listaSalvaPantallas[i];

        fs.renameSync(antiguoNombre, nuevoNombre);
    }
}

module.exports = script;
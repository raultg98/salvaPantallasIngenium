const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

/***************    SETTINGS    ***************/
app.set('appName', 'SalvaPantllas Ingenium');
app.set('port', process.env.PORT || 5000);

// MOTOR DE PLANTILLAS.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


/***************    RUTAS    ***************/
app.use(require('./routes/appRoutes'));


/***************    STATIC FILES    ***************/
app.use(express.static(path.join(__dirname, '/public')));


/***************    LISTEN    ***************/
app.listen(app.get('port'), ()=>{
    // console.log('Nombre de la aplicación: '+ app.get('appName'))
    console.log('Server on port: ', app.get('port'));
});
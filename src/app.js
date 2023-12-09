const express = require('express');
const app = express();
const puerto = 80;

app.use(express.json());


// Importa los controladores correspondientes
const UsuariosController = require('./controllers/UsuariosControllers');
const CuestionariosController = require('./controllers/CuestionariosControllers');
const DificultadesController = require('./controllers/DificultadesControllers');
const PuntosProgController = require('./controllers/PuntosProgControllers');

// Endpoints para la tabla usuarioj
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.ItemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

// Endpoints para la tabla cuestionario
app.get('/cuestionarios', CuestionariosController.indexGet);
app.get('/cuestionarios/:id([0-9]+)', CuestionariosController.ItemGet);
app.post('/cuestionarios', CuestionariosController.indexPost);
app.put('/cuestionarios/:id([0-9]+)', CuestionariosController.itemPut);
app.patch('/cuestionarios/:id([0-9]+)', CuestionariosController.itemPatch);

// Endpoints para la tabla dificultad
app.get('/dificultades', DificultadesController.indexGet);
app.get('/dificultades/:id([0-9]+)', DificultadesController.ItemGet);
app.post('/dificultades', DificultadesController.indexPost);
app.put('/dificultades/:id([0-9]+)', DificultadesController.itemPut);
app.patch('/dificultades/:id([0-9]+)', DificultadesController.itemPatch);

// Endpoints para la tabla puntosProg
app.get('/puntosProg', PuntosProgController.indexGet);
app.get('/puntosProg/:id([0-9]+)', PuntosProgController.ItemGet);
app.post('/puntosProg', PuntosProgController.indexPost);
app.put('/puntosProg/:id([0-9]+)', PuntosProgController.itemPut);
app.patch('/puntosProg/:id([0-9]+)', PuntosProgController.itemPatch);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenido a EstateIQ!');
});

app.listen(puerto, function () {
    console.log("Servidor iniciado");
});



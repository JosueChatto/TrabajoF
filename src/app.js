//const http= require('http');
const express = require('express');
const app= express();
const puerto = 80;

const MenusController=require('./controllers/MenuControllers');
app.use(express.json())
app.get('/menus',MenusController.indexGet);
app.get('/menus/:id([0-9]+)', MenusController.ItemGet);
//app.get('/menus/:id)', MenusController.getMenuById);

const productos_tiposController=require('./controllers/productos_tiposControllers');
app.use(express.json())
app.get('/productos_tipos',productos_tiposController.indexGet);

const productos_Controller=require('./controllers/productosControllers');
app.use(express.json())
app.get('/productos',productos_Controller.indexGet);

const categorias_Controller=require('./controllers/categoriasController');
app.use(express.json())
app.get('/categorias',categorias_Controller.indexGet);
app.get('/categorias/:id([0-9]+)', categorias_Controller.ItemGet);


app.get('/', function(req,res) {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo');
});

app.listen(puerto, function(){
    console.log('Servidor iniciado');
});

/*

*/
//consultar categorias, productos y buscar individualmente el elemento que se especifica.
//Respuestas que deben devolver cada metodo POST,GET
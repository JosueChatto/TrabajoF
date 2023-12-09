const productos_Model = require('../models/productosModel');

class productos_Controller{
    static async indexGet(req,res){
        let data =await productos_Model.consultar();
        res.send(data);
        }
}

module.exports=productos_Controller;
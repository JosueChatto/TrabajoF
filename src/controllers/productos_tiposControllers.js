const productos_tiposModel = require('../models/productos_tiposModel');

class productos_tiposController{
    static async indexGet(req,res){
        let data =await productos_tiposModel.consultar();
        res.send(data);
        }
}

module.exports=productos_tiposController;
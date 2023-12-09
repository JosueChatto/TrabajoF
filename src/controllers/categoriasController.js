const categorias_Model = require('../models/categoriasModel');

class categorias_Controller{
    static async indexGet(req,res){
        let data =await categorias_Model.consultar();
        res.send(data);
        }

    static async ItemGet(req,res){
        let id = req.params.id;
        let data = await categorias_Model.consultarPorId(id);
        if(data.length >0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error:'Not found'});
        
    }
}

module.exports=categorias_Controller;
const db= require('../dbconnection');

class productos_tiposModel{
    static async consultar(){
        let query =db("productos_tipos");
        return await query;
    }
}

module.exports=productos_tiposModel;
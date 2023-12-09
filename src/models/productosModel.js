const db= require('../dbconnection');

class productos_Model{
    static async consultar(){
        let query =db("productos");
        return await query;
    }
}

module.exports=productos_Model;
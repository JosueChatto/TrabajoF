const {connectToMysql}= require('../dbconnection');

class categorias_Model{
    static async consultar(){
        let db= await connectToMysql();
        let query =db("categorias");
        return await query;
    }

    static async consultarPorId(id){
        let db= await connectToMysql();
        return await db("categorias").where('id_categoria',id);
      }
}

module.exports=categorias_Model;
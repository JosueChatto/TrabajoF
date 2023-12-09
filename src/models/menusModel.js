const {connectToMysql}= require('../dbconnection');

class MenusModel{
    static async consultar(){
      let db= await connectToMysql();
        let query =db("menus");
        return await query;
    }

    /*static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id );
        return await query;
      }*/
    
      static async consultarPorId(id){
        let db= await connectToMysql();
        return await db("menus").where('id_menu',id);
      }

      static async insertar(menu){
        let db= await connectToMysql();
        return await db('menus').insert(menu)
      }
}

module.exports=MenusModel;
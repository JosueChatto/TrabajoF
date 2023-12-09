const {connectToMysql} = require('../dbconnection');

class UsuarioModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db.select('*').from('usuarioj');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('usuarioj').where('idJugador', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('usuarioj').insert(datos).returning('idJugador');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('usuarioj').where('idJugador', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['idJugador'] = id;
        await db('usuarioj').where('idJugador', id).del();
        await db.insert(newData).into('usuarioj');
        return id;
    }
}

module.exports = UsuarioModel;

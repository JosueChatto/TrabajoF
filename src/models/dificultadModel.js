const { connectToMysql } = require('../dbconnection');

class DificultadModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db.select('*').from('dificultad');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('dificultad').where('idDif', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('dificultad').insert(datos).returning('idDif');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('dificultad').where('idDif', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['idDif'] = id;
        await db('dificultad').where('idDif', id).del();
        await db.insert(newData).into('dificultad');
        return id;
    }
}

module.exports = DificultadModel;

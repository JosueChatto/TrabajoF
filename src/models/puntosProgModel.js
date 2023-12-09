const { connectToMysql } = require('../dbconnection');

class PuntosProgModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db.select('*').from('puntosProg');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('puntosProg').where('idPuntos', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('puntosProg').insert(datos).returning('idPuntos');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('puntosProg').where('idPuntos', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['idPuntos'] = id;
        await db('puntosProg').where('idPuntos', id).del();
        await db.insert(newData).into('puntosProg');
        return id;
    }
}

module.exports = PuntosProgModel;

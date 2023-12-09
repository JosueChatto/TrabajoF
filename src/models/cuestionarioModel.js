const { connectToMysql } = require('../dbconnection');

class CuestionarioModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db.select('*').from('cuestionario');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('cuestionario').where('idCuest', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('cuestionario').insert(datos).returning('idCuest');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('cuestionario').where('idCuest', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['idCuest'] = id;
        await db('cuestionario').where('idCuest', id).del();
        await db.insert(newData).into('cuestionario');
        return id;
    }
}

module.exports = CuestionarioModel;

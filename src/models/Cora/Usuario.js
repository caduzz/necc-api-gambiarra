const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(conexao) {
        super.init({
            id_usuario: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_usuario: DataTypes.STRING,
            senha_usuario: DataTypes.STRING,
        }, {
            sequelize: conexao,
            tableName: 'cw_usuario',
            createdAt: false,
            updatedAt: false
        })
    }
}

module.exports = Usuario;
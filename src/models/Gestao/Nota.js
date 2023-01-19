const { Model, DataTypes } = require('sequelize');

class Nota extends Model {
    static init(conexao) {
        super.init({
            id_nota: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            valor_nota: DataTypes.STRING,
            unidade_nota: DataTypes.INTEGER
        }, {
            sequelize: conexao,
            tableName: 'cw_nota',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.belongsTo(models.Disciplina, { foreignKey: 'id_disciplina', as: 'nota_disciplina' })
        this.belongsTo(models.Matricula, { foreignKey: 'id_matricula', as: 'nota_matricula' })
    }
}

module.exports = Nota;
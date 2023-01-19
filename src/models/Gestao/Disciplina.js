const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
    static init(conexao) {
        super.init({
            id_disciplina: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_disciplina: DataTypes.STRING,
        }, {
            sequelize: conexao,
            tableName: 'cw_disciplina',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.belongsTo(models.Turma, { foreignKey: 'id_turma', as: 'disciplina_turma' })
        this.hasMany(models.Nota, { foreignKey: 'id_disciplina', as: 'nota_disciplina' })
    }
}

module.exports = Disciplina;
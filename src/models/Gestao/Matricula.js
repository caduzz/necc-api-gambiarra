const { Model, DataTypes } = require('sequelize');

class Matricula extends Model {
    static init(conexao) {
        super.init({
            id_matricula: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_aluno: DataTypes.STRING,
            data_nasc: DataTypes.DATEONLY,
            situacao_aluno: DataTypes.INTEGER,
        }, {
            sequelize: conexao,
            tableName: 'cw_matricula',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.belongsTo(models.Turma, { foreignKey: 'id_turma', as: 'matricula_turma' })
        this.hasMany(models.Nota, { foreignKey: 'id_nota', as: 'nota_matricula' })
    }
}

module.exports = Matricula;
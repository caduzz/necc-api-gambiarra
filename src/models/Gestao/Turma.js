const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(conexao) {
        super.init({
            id_turma: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome_turma: DataTypes.STRING,
            turno_turma: DataTypes.STRING,
            sala_turma: DataTypes.STRING,
            ano_turma: DataTypes.INTEGER,
            bloqueio_notas: DataTypes.BOOLEAN,
        }, {
            sequelize: conexao,
            tableName: 'cw_turma',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.hasMany(models.Matricula, { foreignKey: 'id_turma', as: 'matricula_turma' })
        this.hasMany(models.Disciplina, { foreignKey: 'id_turma', as: 'disciplina_turma' })
    }
}

module.exports = Turma;
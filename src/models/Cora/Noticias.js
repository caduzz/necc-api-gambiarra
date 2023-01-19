const { Model, DataTypes } = require('sequelize');

class Noticia extends Model {
    static init(conexao) {
        super.init({
            id_noticia: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            titulo_noticia: DataTypes.STRING,
            desc_noticia: DataTypes.STRING,
            texto_noticia: DataTypes.STRING,
            data_noticia: DataTypes.DATEONLY,
            desc_noticia: DataTypes.STRING,
            desc_img: DataTypes.STRING,
            img_noticia: DataTypes.STRING,
            categoria_noticia: DataTypes.STRING,
        }, {
            sequelize: conexao,
            tableName: 'cw_noticia',
            createdAt: false,
            updatedAt: false
        })
    }
}

module.exports = Noticia;
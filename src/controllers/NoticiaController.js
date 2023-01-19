const Noticia = require('../models/Cora/Noticias');

module.exports = {
    async index(req, res) {
        const noticias = await Noticia.findAll(
            {
                order: [
                    ['data_noticia', 'desc']
                ]
            }
        );

        return res.status(200).json(noticias);
    },
    async show(req, res) {
        const noticia = await Noticia.findByPk(req.body.id);

        return res.status(200).json(noticia)
    }
}
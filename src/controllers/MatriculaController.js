const Matricula = require('../models/Gestao/Matricula');

module.exports = {
    async index(req, res) {
        try {
            const { id_turma } = req.body;
            const matriculas = await Matricula.findAll({
                where: { id_turma },
                order: [
                    ['nome_aluno', 'ASC'],
                ],
            });
    
            return res.status(200).json(matriculas)
        } catch (error) {
            console.log(error)
        }

    }
}
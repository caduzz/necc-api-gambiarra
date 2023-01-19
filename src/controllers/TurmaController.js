const Turma = require('../models/Gestao/Turma');

module.exports = {
    async index(req, res) { 
        const turmas = await Turma.findAll();
        
        return res.status(200).json(turmas)
    },
    async blockTurma(req, res) {
        try {
            const { id } = req.body;
                            
            const turma = await Turma.findByPk(id)
            await Turma.update({ bloqueio_notas: !turma.bloqueio_notas },{ where: { id_turma: id } })

            const turmas = await Turma.findAll();

            res.status(200).json(turmas)
        } catch (error) {
            res.json({error});
        }
    }
}
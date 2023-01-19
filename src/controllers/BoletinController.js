const Matricula = require('../models/Gestao/Matricula');
const Disciplina = require('../models/Gestao/Disciplina')

module.exports = {
    async show(req, res) {
        try {
            const {nome, data, ano} = req.body

            const matricula = await Matricula.findOne({
                where: {
                    nome_aluno: nome,
                    data_nasc: data
                },
                include: [{
                    association: 'matricula_turma',
                    where: {
                        ano_turma: ano,
                        bloqueio_notas: false
                    }
                }]
            });

            if(!matricula)
                return res.status(404).json({error: 'aluno não encontrado'});

            const disciplina = await Disciplina.findAll({
                where: {id_turma: matricula.id_turma},
                include: { 
                    association: 'nota_disciplina',
                    where: {
                        id_matricula: matricula.id_matricula,
                    }
                },
                order: [
                    ['id_disciplina', 'asc'],
                    ['nota_disciplina', 'unidade_nota', 'asc']
                ]
            })

            return res.status(200).json({matricula, disciplina});
        } catch (error) {
            return res.status(400).json({erro: 'error:' + error});
        }
    },
    async index(req, res) {
        const {nome, data} = req.body
        const matricula = await Matricula.findAll({
            where: {
                nome_aluno: nome,
                data_nasc: data
            },
            include: [{
                association: 'matricula_turma'
            }]
        });

        const ano = matricula.map((item) => {
            return {
                ano: item.matricula_turma.ano_turma
            };
        })

        return res.status(200).json(ano)
    }
}
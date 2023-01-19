const Sequelize = require('sequelize');

const dbConfigGestao = require('../config/databaseGestao');
const dbConfigCora = require('../config/databaseCora');

const Turma = require('../models/Gestao/Turma');
const Matricula = require('../models/Gestao/Matricula');
const Disciplina = require('../models/Gestao/Disciplina');
const Nota = require('../models/Gestao/Nota');

const Noticia = require('../models/Cora/Noticias');
const Usuario = require('../models/Cora/Usuario');

// Conexões
const conexaoGestao = new Sequelize(dbConfigGestao);
const conexaoCora = new Sequelize(dbConfigCora);

// Banco de Dados gestão
Turma.init(conexaoGestao);
Matricula.init(conexaoGestao);
Disciplina.init(conexaoGestao);
Nota.init(conexaoGestao);

Turma.associate(conexaoGestao.models);
Matricula.associate(conexaoGestao.models);
Disciplina.associate(conexaoGestao.models);
Nota.associate(conexaoGestao.models)

// Banco de dados Noticias
Usuario.init(conexaoCora);

Noticia.init(conexaoCora);

module.exports = conexaoGestao, conexaoCora;
const express = require('express');

const { auth } = require('../middlewares/auth');

const routes = express.Router();

//Controlers
const BoletinController = require('../controllers/BoletinController');
const NoticiaController = require('../controllers/NoticiaController');
const MatriculaController = require('../controllers/MatriculaController.js');
const TurmaController = require('../controllers/TurmaController.js');

const { generateToken } = require('../services/token');

routes.use(auth)

routes.get('/turma', TurmaController.index);
routes.post('/block', TurmaController.blockTurma)

routes.post('/matriculas', MatriculaController.index);


module.exports = app => app.use('/auth', routes)
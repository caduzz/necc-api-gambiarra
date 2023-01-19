const express = require('express');

const { secret } = require('../middlewares/auth');

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js');

const routes = express.Router();

//Controlers
const BoletinController = require('../controllers/BoletinController');
const NoticiaController = require('../controllers/NoticiaController');
const UserController = require('../controllers/UserController');
const { validateToken } = require('../services/token');

routes.use(secret);

routes.get('/token_validate', validateToken)

routes.post('/login', UserController.userAuthenticator);

routes.post('/boletin', BoletinController.show);
routes.post('/boletins', BoletinController.index);

routes.get('/noticia', NoticiaController.index);
routes.post('/noticia', NoticiaController.show);

module.exports = app => app.use(routes)
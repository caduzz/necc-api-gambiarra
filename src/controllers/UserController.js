const Usuario = require("../models/Cora/Usuario");
const bcrypt = require('bcryptjs');

const { generateToken } = require("../services/token");

module.exports = {
    async userAuthenticator (req, res) {
        const { nome_usuario, senha_usuario } = req.body;
        try{
            if(!nome_usuario || !senha_usuario)
                return res.status(200).json({error: 'Please enter the username and password'});

            const user = await Usuario.findOne({ where: {nome_usuario} });

            if(!user)
                return res.status(200).json({error: 'User not found'});

            if(!await bcrypt.compare( senha_usuario, user.senha_usuario ))
                return res.status(200).json({error: 'Invalid password'});
            
            const token = generateToken({ id: user.id_usuario });

            user.senha_usuario = undefined;

            res.status(200).json({user, token})
        }catch(err){
            return res.status(200).json({error: 'Authenticate failed'})
        }
    }
}
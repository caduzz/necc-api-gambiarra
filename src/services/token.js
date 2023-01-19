const Usuario = require("../models/Cora/Usuario");
const jwt = require("jsonwebtoken");

const authConfig = require('../config/auth')

module.exports ={ 
    generateToken (params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 864000
        });
    },
    async validateToken (req, res) {
        try {
            let id = 0;
            const authHeader = req.headers.authorization;
        
            if(!authHeader)
                return res.status(200).json({validate: false});
        
            const parts = authHeader.split(' ');
        
            if(!parts.length === 2)
                return res.status(200).json({validate: false});
            
            const [ scheme, token ] = parts;
        
            if(!/^Bearer$/i.test(scheme))
                return res.status(200).json({validate: false});
        
            jwt.verify(token, authConfig.secret, (err, decoded) => {
                if(err) return res.status(200).json({validate: false})
                id = decoded.id
            });

            const user = await Usuario.findByPk(id)
            user.senha_usuario = undefined
            res.status(200).json({validate: true, user})
        } catch (error) {
            console.log(error)
            res.status(400).json({validate: false})
        }
    }
}
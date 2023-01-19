const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.js');

module.exports = {
    secret(req, res, next) {
        const hash = req.query.secret_api;

        if(hash !== process.env.SECRET_API )
            return res.status(401).json({ error: 'Invalid access' });

        return next();
    },
    auth(req, res, next) {
        const authHeader = req.headers.authorization;
    
        if(!authHeader)
            return res.status(401).json({ error: 'No token provided' });
    
        const parts = authHeader.split(' ');
    
        if(!parts.length === 2)
            return res.status(401).json({ error: 'Token error' });
    
        const [ scheme, token ] = parts;
    
        if(!/^Bearer$/i.test(scheme))
            return res.status(401).json({ error: 'Token malformatted' });
    
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) return res.status(401).json({ error: 'Token invalid' })
            req.user_id = decoded.id;
            return next();
        });
    },
};
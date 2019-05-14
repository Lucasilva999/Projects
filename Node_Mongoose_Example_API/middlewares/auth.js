const jwt = require('jsonwebtoken')
const config = require('../config/config')

const auth = (req, res, next) => {
    const tokenPassword = require('../config/jwtPassword')
    const token_header = req.headers.auth

    if(!token_header) return res.status(401).send({error: 'Autenticação não autorizada'})

    jwt.verify(token_header, tokenPassword, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token Inválido'})
        res.locals.auth_data = decoded
        return next()
    })
}

module.exports = auth
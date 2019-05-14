const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data)
    res.send({message: "Informação confidencial, somente pessoal autorizado pode ter acesso."})
})

router.post('/', (req, res) => {
    res.send({message: "Tudo ok com POST raíz"})
})

module.exports = router

/* STATUS CODES
200 - OK
201 - CREATED
202 - ACCEPTED

400 - BAD REQUEST
401 - UNAUTHORIZED - AUTENTICAÇÃO, TEM CARATER TEMPORÁRIO
403 - FORBIDDEN - AUTORIZAÇÃO, TEM CARATER PERMANENTE
404 - NOT FOUND

500 - INTERNAL SERVER ERROR - ERO NA API
501 - NOT IMPLEMENTED - A API NÃO SUPORTA A FUNCIONALIDADE
503 - SERVICE UNAVALIABLE - A API EXECUTA A OPERAÇÃO, MAS NO MOMENTO ESTÁ INDISPONÍVEL
*/ 
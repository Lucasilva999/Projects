//IMPORTING EXPRESS AND MONGOOSE AND DECLARING A CONSTANT FOR PORT
const express = require('express')
app = express()
const mongoose = require('mongoose')
const config = require('./config/config')
const porta = process.env.PORTA || 3000

//MONGOOSE CONFIG -->
//DECLARING A CONNECTION
const url = config.bd_string //String de conexão do MongoDB
const options = { 
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 500, 
    poolSize: 5,
    useNewUrlParser : true
}

mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

//SPECIFYING WHAT HAPPENS IN EACH TYPE OF ACTION THAT HAPPENS WHEN CONNECTING 
mongoose.connection.on('error', err => {
    console.log(`Erro na conexão com o Banco de Dados: ${err}`)
})

mongoose.connection.on('disconnected', ()=> {
    console.log('Aplicação desconectada do Banco de dados')
})

mongoose.connection.on('connected', ()=> {
    console.log('Aplicação conectada ao Banco de Dados')
}) 

//BODY PARSER USING EXPRESS
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//USING ROUTES
const indexRoute = require('./routes/index')
const usersRoute = require('./routes/users')

//SPECIFYING WHICH ROUTE EACH ONE ONE THE ROUTERS CREATED WILL USE
app.use('/', indexRoute)
app.use('/users', usersRoute)

//LISTENING TO THE PORT
app.listen(porta, ()=> {
    console.log(`Escutando porta ${porta}...`)
})

//EXPORTING THE EXPRESS INSTANCE
module.exports = app
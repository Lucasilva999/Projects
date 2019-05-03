const express = require('express')
const app = express()
const mysql = require('mysql')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const porta = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

const router = require('./routes/user')
app.use(router)


app.listen(porta, ()=> {
    console.log(`Escutando na porta ${porta}...`)
})


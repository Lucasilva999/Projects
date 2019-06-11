const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

const port = process.env.PORT || 5000

//Config
    //Express BodyParser
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//Rotas
const index = require('./routes/index')
app.use('/', index)



app.listen(port, ()=> {
    console.log(`Escutando na porta ${port}...`)
})
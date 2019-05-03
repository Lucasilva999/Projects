const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/users', (req, res)=> {
    
    getConnection().query('SELECT * FROM my_users', (err, rows, fields)=> {
        
        if(err) {
            console.log(`Failed to query users: ${err}`)
            res.sendStatus(500)
            res.end()
            return
        }

        res.json(rows)
    })
})

router.get('/users/:id', (req, res)=> {
    console.log(`Fetching info from id: ${req.params.id}`)
    
    
    getConnection().query('SELECT * FROM my_users WHERE id = ?', [req.params.id] ,(err, rows, fields)=> {
        
        if(err) {
            console.log(`Failed to query users: ${err}`)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log('I think we fetched users successfully')
        res.json(rows)
    })
})

router.post('/user_create', (req, res)=> {
    console.log(`Primeiro nome: ${req.body.criar_nome}, Sobrenome: ${req.body.criar_sobrenome}`)
    const nome = req.body.criar_nome
    const sobrenome = req.body.criar_sobrenome
    const queryString = 'INSERT INTO my_users (nome, sobrenome) VALUES (?, ?)'
    
    getConnection().query(queryString, [nome, sobrenome] , (err, results, fields)=> {
        if(err) {
            console.log(`Failed to insert new user: ${err}`)
            res.sendStatus(500)
            return
        }
        console.log(`Inserted new user with ID: ${results.insertId}`)
        res.end()
    })
    
    res.end()
})

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'users'
})

function getConnection() { return pool }

module.exports = router
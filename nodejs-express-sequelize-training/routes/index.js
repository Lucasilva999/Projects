const express = require('express')
const router = express.Router()

const Post = require('../models/Posts')

router.get('/', (req, res)=> {
    res.render('home')
})

router.get('/form', (req, res) => {
    res.render('formulario')
})

router.get('/mensagens', async(req, res)=> {
    try {
        await Post.findAll({order: [['id', 'DESC']]}).then(post => {
            res.render('mensagens', {post}) 
        })

    } catch(err) {
        throw err
    }
})

router.get('/deletar/:id', async (req, res)=> {
    try {
        await Post.destroy({where: {'id': req.params.id}})
        res.redirect('/mensagens')
    } catch(err) {
        throw err
    }
})

router.post('/post', async (req, res)=> {
    try {
        if(req.body.nome != '' && req.body.mensagem != ''){
            await Post.create({
                nome: req.body.nome,
                mensagem: req.body.mensagem
            })
            res.redirect('/mensagens')
        }
        
    } catch(err) {
        throw err
    }
})

module.exports = router
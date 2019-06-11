const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

//User Model
const User = require('../models/User')

//LOGIN
router.get('/login', (req, res) => {
    res.render('login')
})
//REGISTER
router.get('/register', (req, res) => {
    res.render('register')
})

//REGISTER HANDLE
router.post('/register', (req, res)=> {
    const { name, email, password, password2} = req.body
    let errors = []

//Check Required Fields
if(!email || !name || !password || !password2)
    errors.push({msg: 'Please fill in all fields!!!'})

//Check if Passwords Match
if(password != password2) errors.push({msg: 'Passwords do not match!'})

//Check Password Length
if(password.length < 6) errors.push({msg: 'Password must have at least 6 characters!'})
module.exports = router

if(errors.length > 0) {
    res.render( 'register', {
        errors,
        name,
        email,
        password,
        password2
    })
} else {
    //Validation Passed
    User.findOne({email})
    .then(user => {
        if(user) {
            errors.push({msg: 'Email is already registered!'})
            res.render( 'register', {
                errors,
                name,
                email,
                password,
                password2
            })
        }
        else {
            const newUser = new User({
                name,
                email,
                password
            })
            
            //Hash Password
            bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash)=> {
                if(err) throw err
                //Set Password to Hash
                newUser.password = hash
                //Save User
                newUser.save()
                .then((user)=> {
                    req.flash('success_msg', 'Registered successfully! You can now Login!')
                    res.redirect('/users/login')
                })
                .catch(err => console.log(err))
            }))
        }
    })
}
})

//Login Handler
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

//Logout Handle
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Logged Out successfully!')
    res.redirect('/users/login')
})

module.exports = router

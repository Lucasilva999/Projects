const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

//DECLARING A MONGOOSE SCHEMA FOR USERS

const userSchema = new Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true, select: false},
    created: {type: Date, default: Date.now}
})

userSchema.pre('save', async function(next) {
    let user = this
    if(!user.isModified('password')) return next()

    user.password = await bcrypt.hash(user.password, 10)
    return next()
})
/* CALLBACK HELL VERSION
userSchema.pre('save', function(next) {
    let user = this
    if(!user.isModified('password')) return next()

    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted
        return next()
    })
})*/

//EXPORTING THE SCHEMA
module.exports = mongoose.model('User', userSchema)
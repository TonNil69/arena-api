var express = require('express')
var app = express()
var login = require('./actions/Auth/action')

app.use('/login', login)

module.exports = app
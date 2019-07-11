var express = require('express')
var app = express()
var router = require('./src/router/router')
require('dotenv').config()

app.use('/', router)

app.listen(process.env.SERVER_PORT, function () {
  console.log(`Servidor rodando com sucesso na URL: http://${process.env.VIRTUAL_HOST}`)
});
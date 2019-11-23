const express = require('express')
const router = require('./src/router/router')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/api/', router)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando com sucesso na URL: http://${process.env.VIRTUAL_HOST}`)
});

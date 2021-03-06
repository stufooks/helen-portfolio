const express = require('express')
const app = express()
const favicon = require('serve-favicon')

app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(favicon(__dirname + '/public/images/favicon.jpg'))

const controllers = require('./controllers/index')
app.use('/', controllers)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
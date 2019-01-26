const express = require('express')
const app = express()

const hbs = require("hbs")
app.set("view engine", "hbs")
app.use(express.static("public"))

const router = express.Router()

const controllers = require('./controllers/index')
app.use('/', controllers)


app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
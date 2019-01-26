const express = require('express')

const app = express()

const router = express.Router()

const controllers = require('./controllers/index')
app.use('/', controllers)


app.listen(3000, () => {
    console.log('listening on port 3000')
})
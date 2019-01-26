const express = require('express')
const router = express.Router()
const Portrait = require('../models/Portrait')


router.get('/', (req, res) => {
    res.render('app/index')
})

module.exports = router
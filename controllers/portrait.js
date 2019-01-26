const express = require('express')
const router = express.Router()
const Portrait = require('../models/Portrait')
const Thumbnail = require('../models/Thumbnail')


router.get('/', (req, res) => {
    Thumbnail.find({})
    .then(thumbnails => {
        res.render('portrait/index', { thumbnails })
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const Portrait = require('../models/Portrait')
const Thumbnail = require('../models/Thumbnail')


router.get('/', (req, res) => {
    Thumbnail.find({$and: [{ setDec: false }, { prop: false }] })
    .sort({ year: -1, title: 1 })
    .then(thumbnails => {
        res.render('portrait/index', { thumbnails })
    })
})

router.get('/:id', (req, res) => {
    Portrait.findOne({ thumbnail: req.params.id })
    .then(portrait => {
        res.render('portrait/show', { portrait })
    })
})

module.exports = router
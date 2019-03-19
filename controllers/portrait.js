const express = require('express')
const router = express.Router()
const Portrait = require('../models/Portrait')
const Thumbnail = require('../models/Thumbnail')


router.get('/', (req, res) => {
    Thumbnail.find({$and: [{ setDec: false }, { prop: false }] })
    .sort([['_id', 1]])
    .then(thumbnails => {
        res.render('portrait/index', { thumbnails })
    })
})

router.get('/:id', (req, res) => {
    Portrait.findOne({ thumbnail: req.params.id })
    .then(portrait => {
        console.log(portrait)
        res.render('portrait/show', { portrait })
    })
})

module.exports = router
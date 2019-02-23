const express = require('express')
const router = express.Router()
const SetDec = require('../models/SetDec')
const Thumbnail = require('../models/Thumbnail')


router.get('/', (req, res) => {
    Thumbnail.find({ setDec: true })
    .then(thumbnails => {
        res.render('setdec/index', { thumbnails })
    })
})

router.get('/:id', (req, res) => {
    SetDec.findOne({ thumbnail: req.params.id })
    .then(setdec => {
        console.log(setdec)
        res.render('setdec/show', { setdec })
    })
})

module.exports = router
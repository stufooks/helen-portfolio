const express = require('express')
const router = express.Router()
const Prop = require('../models/Prop')
const Thumbnail = require('../models/Thumbnail')


router.get('/', (req, res) => {
    Thumbnail.find({ prop: true })
    .then(thumbnails => {
        res.render('prop/index', { thumbnails })
    })
})

router.get('/:id', (req, res) => {
    Prop.findOne({ thumbnail: req.params.id })
    .then(prop => {
        console.log(prop)
        res.render('prop/show', { prop })
    })
})

module.exports = router
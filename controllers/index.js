const express = require('express')
const router = express.Router()

router.use('/', require('./application'))
router.use('/portrait', require('./portrait'))
router.use('/prop', require('./prop'))
router.use('/setdec', require('./setdec'))
router.use('/contact', require('./contact'))
router.use('/resume', require('./resume'))


router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router
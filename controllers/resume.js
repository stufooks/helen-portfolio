const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('resume/index')
})

module.exports = router
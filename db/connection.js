const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/helen')

mongoose.Promise = Promise
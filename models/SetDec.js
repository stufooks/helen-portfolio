const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const SetDec = new Schema({
	title: String,
	source: String,
	description: String,
	creditsOne: String,
	creditsTwo: String,
	year: Number,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	thumbnail: String
})

module.exports = mongoose.model("SetDec", SetDec)
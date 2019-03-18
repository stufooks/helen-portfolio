const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Portrait = new Schema({
	title: String,
	source: String,
	description: String,
	year: Number,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	thumbnail: String,
	creditsOne: String,
	creditsTwo: String
})

module.exports = mongoose.model("Portrait", Portrait)
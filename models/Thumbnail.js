const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Thumbnail = new Schema({
	title: String,
	source: String,
	year: Number,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	setDec: {
		type: Boolean,
		default: false
	},
	prop: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model("Thumbnail", Thumbnail)
const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Prop = new Schema({
	title: String,
	source: String,
	description: String,
	year: Number,
	createdAt: {
		type: Date,
		default: Date.now()
	},
	thumbnail: String
})

module.exports = mongoose.model("Prop", Prop)
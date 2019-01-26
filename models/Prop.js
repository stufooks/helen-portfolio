const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Prop = new Schema({
	title: String,
	source: String,
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("Prop", Prop)
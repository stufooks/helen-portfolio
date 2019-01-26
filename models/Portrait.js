const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Portrait = new Schema({
	title: String,
	source: String,
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model("Portrait", Portrait)
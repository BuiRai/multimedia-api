'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({
	name: {
		type: String,
		required: 'You must to be fill the name',
		unique: true
	}
});

module.exports = mongoose.model('Category', CategorySchema);
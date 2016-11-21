var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CategorySchema = new Schema({
	name: {
		type: String,
		required: 'Debes de establecer el nombre de la categoria',
		unique: true
	}
});

module.exports = mongoose.model('Category', CategorySchema);
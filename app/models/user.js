/**
 * Created by SkyN on 05/12/2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    nombre: {
        type: String,
        required: 'You must to be fill the title'
    },
    apellido: {
        type: String,
        required: 'You must to be fill the title'
    },
    usuario: {
        type: String,
        required: 'You must to be fill the title'
    },
    pass: {
        type: String,
        required: 'You must to be fill the title'
    }
});

module.exports = mongoose.model('User', UserSchema);

/**
 * Created by buirai on 21/11/2016.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MultimediaSchema = new Schema({
    type: {
        type: String,
        required: 'You must to be fill the title'
    },
    title: {
        type: String,
        required: 'You must to be fill the title'
    },
    qualification: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    description: {
        type: String,
        required: 'You must to be fill the description'
    },
    urlImage: {
        type: String,
        required: true
    },
    urlInfo: {
        type: String,
        required: 'You must to be fill the url info'
    },
    urlVideo: {
        type: String
    },
    year: {
        type: Date,
        required: true,
        default: Date.now()
    },
    categories: [{
        type: Schema.ObjectId,
        ref: 'Category'
    }]
});

module.exports = mongoose.model('Multimedia', MultimediaSchema);


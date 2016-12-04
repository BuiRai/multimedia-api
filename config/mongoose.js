/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var config = require('./config'),
    mongoose = require('mongoose'),
    seedDB = require('./seed.server.config');

module.exports = function () {
    var db = mongoose.connect(config.db);

    require('./../app/models/category');
    require('./../app/models/multimedia');
    // seedDB();
    return db;
};
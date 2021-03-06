/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var config = require('./config'),
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser');

module.exports = function (db) {
  var app = express();
  var server = http.createServer(app);

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  require('../app/routes/categories.server.routes')(app);
  require('../app/routes/multimedias.server.routes')(app);

  app.use(express.static('./public'));

  return server;
};

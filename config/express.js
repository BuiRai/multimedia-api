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

  // CORS access
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  require('../app/routes/categories.server.routes')(app);
  require('../app/routes/multimedias.server.routes')(app);
  require('../app/routes/user.server.routes')(app);

  app.use(express.static('./public'));

  return server;
};

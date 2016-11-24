// 'use strict';

'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var	mongoose = require('./config/mongoose'),
	express = require('./config/express');

var port = process.env.PORT || 8080;

var db = mongoose();
var app = express(db);
app.listen(port);

module.exports = app;

console.log('Server runnig at the port:', port);
/**
 * Created by SkyN on 05/12/2016.
 */
'use strict';

var user = require('./../controllers/user.server.controller');

module.exports = function (app) {
    app.route('/api/user')
        .post(user.create);

    app.route('/api/login/')
        .post(user.login);

};

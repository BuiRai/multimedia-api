/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var multimedias = require('./../controllers/multimedias.server.controller');

module.exports = function (app) {
    app.route('/api/multimedias')
        .get(multimedias.list)
        .post(multimedias.create);

    app.route('/api/multimedias/:multimediaById')
        .get(multimedias.read)
        .put(multimedias.update)
        .delete(multimedias.delete);

    app.param('multimediaById', multimedias.multimediaById);
};

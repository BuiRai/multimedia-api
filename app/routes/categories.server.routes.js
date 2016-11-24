/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var categories = require('./../controllers/categories.server.controller');

module.exports = function (app) {
    app.route('/api/categories')
      .get(categories.list)
      .post(categories.create);

    app.route('/api/categories/:categoryId')
        .get(categories.read)
        .put(categories.update)
        .delete(categories.delete);

    app.param('categoryId', categories.categoryById);
};

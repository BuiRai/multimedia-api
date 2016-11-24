/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var Category = require('./../models/category');

exports.create = function (req, res) {
    var category = new Category(req.body);
    category.save(function (err, _category) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_category);
    });
};

exports.list = function (req, res) {
    Category.find(function (err, _categories) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_categories);
    });
};

exports.read = function (req, res) {
    res.json(req.category);
};

exports.update = function (req, res) {
    var category = req.category;
    category.name = req.body.name;
    category.save(function (err, _categorySaved) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_categorySaved);
    });
};

exports.delete = function (req, res) {
    var category = req.category;
    category.remove(function (err, _category) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_category);
    });
};

exports.categoryById = function (req, res, next, id) {
  Category.findById(id, function (err, _category) {
     if (err) {
         res.status(404).send({
             error: err
         });
     }
     if (!_category) {
         res.send({
             message: 'Failed to load category' + id
         });
     }
     req.category = _category;
      next();
  });
};

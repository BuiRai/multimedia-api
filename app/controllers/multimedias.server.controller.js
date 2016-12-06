/**
 * Created by buira on 21/11/2016.
 */

/**
 * Created by buira on 21/11/2016.
 */

'use strict';

var Multimedia = require('./../models/multimedia');

exports.create = function (req, res) {
    var multimedia = new Multimedia(req.body);
    multimedia.save(function (err, _multimedia) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_multimedia);
    });
};

exports.list = function (req, res) {
    Multimedia.find().populate('categories').exec(function (err, __multimedias) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(__multimedias);
    });
};

exports.read = function (req, res) {
    res.json(req.multimedia);
};

exports.update = function (req, res) {
    var multimedia = req.multimedia;
    multimedia.title = req.body.title;
    multimedia.description = req.body.description;
    multimedia.year = req.body.year;
    multimedia.qualification = req.body.qualification;
    multimedia.urlImage = req.body.urlImage;
    multimedia.urlInfo = req.body.urlInfo;
    multimedia.urlVideo = req.body.urlVideo;
    multimedia.categories = req.body.categories;

    multimedia.save(function (err, _multimedia) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_multimedia);
    });
};

exports.delete = function (req, res) {
    var multimedia = req.multimedia;
    multimedia.remove(function (err, _multimedia) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(_multimedia);
    });
};

exports.multimediaById = function (req, res, next, id) {
    Multimedia.findById(id).populate('categories').exec(function (err, _multimedia) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        if (!_multimedia) {
            res.send({
                message: 'Failed to load category' + id
            });
        }
        req.multimedia = _multimedia;
        next();
    });
};

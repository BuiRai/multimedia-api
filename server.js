// 'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// var express = require('express'),
	// bodyParser = require('body-parser'),
var	mongoose = require('./config/mongoose'),
	express = require('./config/express');
	// Category = require('./app/models/category.js'),
	// Multimedia = require('./app/models/multimedia');

var port = process.env.PORT || 8080;

var db = mongoose();
var app = express(db);
app.listen(port);

module.exports = app;
//
// var router = express.Router();
//
// router.use(function(req, res, next){
// 	console.log("Something is happening");
// 	next();
// });
//
// router.get('/', function(req, res){
// 	res.json({ message: 'hooray! welcome to our api!' });
// });
//
// /**
//  * ==================================================================================================================
//  * Categories section
//  * ==================================================================================================================
//  */
// router.route('/categories/:categoryId')
// 	.get(function (req, res) {
// 		Category.findById(req.params.categoryId, function (err, _category) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_category);
// 		});
// 	})
// 	.put(function (req, res) {
// 		Category.findById(req.params.categoryId, function (err, _category) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			_category.name = req.body.name;
// 			_category.save(function (err, _categorySaved) {
// 				if (err) {
// 					res.status(404).send({
// 						error: err
// 					});
// 				}
// 				res.json(_categorySaved);
// 				});
// 		});
// 	})
// 	.delete(function (req, res) {
// 		Category.remove({_id: req.params.categoryId}, function (err, _category) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_category);
// 		});
// 	});
//
// /**
//  * ==================================================================================================================
//  * Multimedia section
//  * ==================================================================================================================
//  */
//
// router.route('/multimedias')
// 	.post(function (req, res) {
// 		var multimedia = new Multimedia(req.body);
// 		multimedia.save(function (err, _multimedia) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_multimedia);
// 		});
// 	})
// 	.get(function (req, res) {
// 		Multimedia.find(function (err, _multimedia) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_multimedia);
// 		})
// 	});
//
// router.route('/multimedias/:multimediaId')
// 	.get(function (req, res) {
// 		Multimedia.findById(req.params.multimediaId).populate('categories').exec(function (err, _multimedia) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_multimedia);
// 		})
// 	})
// 	.put(function (req, res) {
// 		Multimedia.findById(req.params.multimediaId, function (err, _multimedia) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			_multimedia.title = req.body.title;
// 			_multimedia.description = req.body.description;
// 			_multimedia.year = req.body.year;
// 			_multimedia.qualification = req.body.qualification;
// 			_multimedia.urlImage = req.body.urlImage;
// 			_multimedia.urlInfo = req.body.urlInfo;
// 			_multimedia.urlVideo = req.body.urlVideo;
// 			_multimedia.categories = req.body.categories;
// 			_multimedia.save(function (err, _multimediaSaved) {
// 				if (err) {
// 					res.status(404).send({
// 						error: err
// 					});
// 				}
// 				res.json(_multimediaSaved);
// 			})
// 		});
// 	})
// 	.delete(function (req, res) {
// 		Multimedia.remove({_id: req.params.multimediaId}, function (err, _multimedia) {
// 			if (err) {
// 				res.status(404).send({
// 					error: err
// 				});
// 			}
// 			res.json(_multimedia);
// 		})
// 	});
//
// app.use('/api', router);
// app.listen(port);
console.log('Server runnig at the port:', port);
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Category = require('./models/category.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/movies-api');

var router = express.Router();

router.use(function(req, res, next){
	console.log("Something is happening");
	next();
});

router.get('/', function(req, res){
	res.json({ message: 'hooray! welcome to our api!' }); 
});

router.route('/categories')
	.post(function (req, res) {
		var category = new Category(req.body);
		category.save(function (err, _category) {
			if (err) {
				res.status(404).send({
					error: err
				});
			}
			res.json(_category);
		});
	})
	.get(function (req, res) {
		Category.find(function (err, _categories) {
			if (err) {
				res.status(404).send({
					error: err
				});
			}
			res.json(_categories);
		});
	});

router.route('/categories/:categoryId')
	.get(function (req, res) {
		Category.findById(req.params.categoryId, function (err, _category) {
			if (err) {
				res.status(404).send({
					error: err
				});
			}
			res.json(_category);
		});
	})
	.put(function (req, res) {
		Category.findById(req.params.categoryId, function (err, _category) {
			if (err) {
				res.status(404).send({
					error: err
				});
			}
			_category.name = req.body.name;
			_category.save(function (err, _categorySaved) {
				if (err) {
					res.status(404).send({
						error: err
					});
				}
				res.json(_categorySaved);
				});
		});
	})
	.delete(function (req, res) {
		Category.remove({_id: req.params.categoryId}, function (err, _category) {
			if (err) {
				res.status(404).send({
					error: err
				});
			}
			res.json(_category);
		});
	});

app.use('/api', router);
app.listen(port);
console.log('Server runnig at the port:', port);
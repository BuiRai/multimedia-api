/**
 * Created by SkyN on 05/12/2016.
 */

'use strict';

var User = require('./../models/user');

exports.create = function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            res.status(404).send({
                error: err
            });
        }
        res.json(user);
    });
};

exports.login = function(req, res){
    console.log(req);
};


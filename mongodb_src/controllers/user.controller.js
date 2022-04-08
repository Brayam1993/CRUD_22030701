const { UCS2_PERSIAN_CI } = require('mysql/lib/protocol/constants/charsets');
user_mgdb = require('../models/user.model.js');

exports.index = function (req, res) {
    user_mgdb.get(function (err, user_mgdb_otro) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        };
        res.json({
            status: "success",
            message: "Books retrieved successfully",
            data: user_mgdb_otro 
        })

    });
};

// Post new user in mongodb
exports.new = function (req, res) {
    var mgdb = new user_mgdb();
    mgdb.username = req.body.username ? req.body.username : mgdb.username;
    mgdb.fullname = req.body.fullname;
    mgdb.age      = req.body.age;
    mgdb.password = req.body.password;

    // save the usermongodb an check for errors
    mgdb.save(function (err) {
        //
        //
        res.json({
            message: 'New User Mongodb created!',
            data: mgdb
        });

    });
};



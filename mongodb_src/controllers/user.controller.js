const postsMongodb = require('../models/user.model.js');

// Post new user in mongodb
exports.new = function (req, res) {
    var mgdb = new Mgdb();
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
            data: user
        });

    });
};



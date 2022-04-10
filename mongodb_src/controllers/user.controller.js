user_mgdb = require('../models/user.model.js');

exports.index = function (req, res) {
  user_mgdb.get((err, userMgdbOtro) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Books retrieved successfully',
      data: userMgdbOtro,
    });
  });
};

// Post new user in mongodb
exports.new = function (req, res) {
  const mgdb = new user_mgdb();
  mgdb.username = req.body.username ? req.body.username : mgdb.username;
  mgdb.fullname = req.body.fullname;
  mgdb.age = req.body.age;
  mgdb.password = req.body.password;

  // save the usermongodb an check for errors
  mgdb.save((err) => {
    //
    //
    res.json({
      message: 'New User Mongodb created!',
      data: mgdb,
    });
  });
};

exports.update = function (req, res) {
  user_mgdb.findById(req.params.mgdb_id, (err, book) => {
    if (err) res.send(err);
    user_mgdb.username = req.body.username ? req.body.username : user_mgdb.username;
    user_mgdb.fullname = req.body.fullname;
    user_mgdb.age = req.body.age;
    user_mgdb.password = req.body.password;

    // save the mongo user and check for errors
    mgdb.save((err) => {
      if (err) res.json(err);
      res.json({
        message: 'Mongo User Updated',
        data: mgdb,
      });
    });
  });
};

// Delete a user in mongodb
exports.delete = function (req, res) {
  user_mgdb.deleteOne({
    _id: req.params.book_id,
  }, (err, userMgdbOtroMas) => {
    if (err) res.send(err);
    res.json({
      status: 'success',
      message: 'Mongo User Deleted',
    });
  });
};

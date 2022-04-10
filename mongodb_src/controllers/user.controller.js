/* eslint-disable func-names */
const UserMgdb = require('../models/user.model');

exports.index = function (req, res) {
  UserMgdb.get((err, userMgdbOtro) => {
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
  const mgdb = new UserMgdb();
  mgdb.username = req.body.username ? req.body.username : mgdb.username;
  mgdb.fullname = req.body.fullname;
  mgdb.age = req.body.age;
  mgdb.password = req.body.password;

  // save the usermongodb an check for errors
  mgdb.save(() => {
    res.json({
      message: 'New User Mongodb created!',
      data: mgdb,
    });
  });
};

exports.update = function (req, res) {
  UserMgdb.findById(req.params.mgdb_id, (err) => {
    if (err) res.send(err);
    UserMgdb.username = req.body.username ? req.body.username : UserMgdb.username;
    UserMgdb.fullname = req.body.fullname;
    UserMgdb.age = req.body.age;
    UserMgdb.password = req.body.password;

    UserMgdb.save(() => {
      if (err) res.json(err);
      res.json({
        message: 'Mongo User Updated',
        data: UserMgdb,
      });
    });
  });
};

// Delete a user in mongodb
exports.delete = function (req, res) {
  UserMgdb.deleteOne({
    _id: req.params.book_id,
  }, (err) => {
    if (err) res.send(err);
    res.json({
      status: 'success',
      message: 'Mongo User Deleted',
    });
  });
};

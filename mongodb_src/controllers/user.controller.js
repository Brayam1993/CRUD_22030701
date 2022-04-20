/* eslint-disable no-param-reassign */
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

// works with logic!
// exports.view = function (req, res) {
//   UserMgdb.findById(req.params.posts_id, (err, mgdb) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json({
//         message: '1 user found!',
//         data: mgdb,
//       });
//     }
//   });
// };

exports.view = function (req, res) {
  UserMgdb.findById(req.params.posts_id, (err, mgdb) => {
    try {
      if (err) {
        res.send(err);
      }

      res.json({
        message: '1 user found!',
        data: mgdb,
      });
    } catch (ex) {
      console.log('exception handle ++++', ex);
    }
  });
};

exports.update = function (req, res) {
  UserMgdb.findById(req.params.posts_id, (err, mgdb) => {
    if (err) res.send(err);
    mgdb.username = req.body.username ? req.body.username : UserMgdb.username;
    mgdb.fullname = req.body.fullname;
    mgdb.age = req.body.age;
    mgdb.password = req.body.password;

    mgdb.save(() => {
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
  UserMgdb.deleteOne({
    _id: req.params.posts_id,
  }, (err) => {
    if (err) res.send(err);
    res.json({
      status: 'success',
      message: 'Mongo User Deleted',
    });
  });
};

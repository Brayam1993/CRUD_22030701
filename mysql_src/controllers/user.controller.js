/* eslint-disable no-console */
/* eslint-disable func-names */
const User = require('../models/user.model');

exports.create = function (req, res) {
  const newUser = new User(req.body);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    User.create(newUser, (err, user) => {
      if (err) res.send(err);
      res.json({ error: false, message: 'User added successfully!', data: user });
    });
  }
};

exports.findAll = function (req, res) {
  User.findAll((err, user) => {
    console.log('controller');
    if (err) res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.findById = function (req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    User.update(req.params.id, new User(req.body), (err) => {
      if (err) res.send(err);
      res.json({ error: false, message: 'User successfully update' });
    });
  }
};

exports.delete = function (req, res) {
  User.delete(req.params.id, (err) => {
    if (err) res.send(err);
    res.json({ error: false, message: 'Employee successfully deleted' });
  });
};

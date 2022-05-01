const userController = require('../../controllers/user.controller');
const User = require('../../models/user.model');

var httpMocks = require('node-mocks-http');

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
  User.create = jest.fn();
});

describe('user controller create', () => {
  beforeEach(() => {
    req.body = {
      username: 'jfc',
      fullname: 'Jonas',
      age: 23,
      password: '12345'
    };
  });

  it('should have a create function', () => {
    expect(typeof userController.create).toBe('function');
  });

  it("should call User.create", () => {
    userController.create(req, res, next);
    expect(User.create).toBeCalled();
  });

  it("should call User.create and fail", () => {
    
    User.create = jest.fn().mockImplementation((newUser, result) => {
      let err = 'insert error';
      if (err) {
        result(err, null);
      } else {
        let res = {
          insertId: 1
        };
        result(null, res.insertId);
      }
    });

    userController.create(req, res, next);
    expect(User.create).toBeCalled();
  });

  it("should return 400 response code", () => {
    req.body = {};
    userController.create(req, res, next);
    expect(res.statusCode).toBe(400);
  }); 

  it("should return 200 response code", () => {
    req.body = {
      username: 'jfc',
      fullname: 'Jonas',
      age: 23,
      password: '12345'
    };
    userController.create(req, res, next);
    expect(res.statusCode).toBe(200);
  });
});

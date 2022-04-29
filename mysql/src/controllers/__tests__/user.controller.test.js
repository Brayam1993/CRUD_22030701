const { create } = require('../user.controller');
// const create = jest.fn();
var httpMocks = require('node-mocks-http');

jest.mock('../user.controller', () => ({
  res: jest.fn(),
}));

describe('user controller create', () => {
  it('should be a function', () => {
    // actual test 1
    expect(typeof (create)).toBe('function');
  });

  it('should use 2 params', () => {
    // actual test 1
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    create(request, response);
    expect(create).toHaveBeenCalledWith(123, 'lalal');
  });
});

const { create } = require('../user.controller');

describe('user controller create', () => {
  it('it should be a function', () => {
    // actual test
    expect(typeof (create)).toBe('function');
  });
});

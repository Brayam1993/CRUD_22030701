const merge = require('deepmerge');

const setupMWs = ({ reqExtensions = {}, resExtensions = {} }) => {
  const reqCommons = {
    traceRequestId: 'abc123',
    headers: {
    },
    body: {},
    cookies: {},
    platform: {},
    device: {
      type: 'desktop',
    },
    translations: {},
  };
  const resCommons = {
    status: jest.fn().mockReturnValue({}),
    json: jest.fn().mockReturnValue({}),
    locals: {
    },
    redirect: jest.fn(),
    render: jest.fn(),
    cookie: jest.fn(),
  };
  const req = merge(reqCommons, reqExtensions);
  const res = merge(resCommons, resExtensions);
  const next = jest.fn();
  return {
    req, res, next,
  };
};

module.exports = {
  setupMWs,
};

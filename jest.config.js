const config = {
  coverageDirectory: './coverage',
  coverageReporters: [
    'lcov',
    'html',
    'json',
    'text',
    'text-summary',
  ],
  verbose: false,
  collectCoverage: true,
  projects: [
    /**
     * MySQL tests
     */
    {
      displayName: 'MYSQL API',
      testMatch: ['<rootDir>/mysql/**/*.test.js'],
      testEnvironment: 'node',
    },
  ],
};

module.exports = config;

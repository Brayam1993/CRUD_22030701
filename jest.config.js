const config = {
  coverageDirectory: './coverage',
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
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

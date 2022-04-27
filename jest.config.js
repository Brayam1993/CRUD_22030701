const config = {
  coverageDirectory: './coverage',
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  projects: [
    /**
     * Server-related tests such as services or middlewares
     */
    {
      displayName: 'API AJAX',
      testMatch: ['<rootDir>/api/**/*.test.js'],
      testEnvironment: 'node',
    },
  ],
};

module.exports = config;

module.exports = {
  plugins: ['jest', 'cypress'],
  env: {
    browser: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
};
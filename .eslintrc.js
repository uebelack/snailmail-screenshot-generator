module.exports = {
  rules: {
    'max-len': [
      'error',
      {
        code: 180,
        tabWidth: 4,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  },
  extends: ['airbnb'],
  plugins: ['jest', 'cypress'],
  env: {
    browser: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
};

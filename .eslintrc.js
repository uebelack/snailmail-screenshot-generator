module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'cypress'],
  ignorePatterns: ['dist', '.eslintrc.js', 'vite.config.ts', 'cypress.config.js'],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        'cypress/globals': true,
      },
    },
    {
      files: ['cypress/**/*.js'],
      env: {
        'cypress/globals': true,
      },
    },
  ],
};

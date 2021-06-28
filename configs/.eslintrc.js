module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    'tsdoc/syntax': 'warn',
  },
  plugins: ['eslint-plugin-tsdoc'],
  parser: '@typescript-eslint/parser',
  env: {
    mocha: true,
  },
  overrides: [
    {
      files: ['.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
};

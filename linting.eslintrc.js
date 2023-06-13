module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  };
  
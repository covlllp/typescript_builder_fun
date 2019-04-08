module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: { browser: true },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
  },
};

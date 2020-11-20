// @ts-check

/**@type {import('prettier').Options} */
const prettierConfig = {
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'all',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    complexity: ['warn', 10],
  },
};

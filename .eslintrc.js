module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  plugins: [],
  extends: [ 'eslint:recommended' ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  rules: {
    indent: [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    semi: [ 'error', 'always' ],
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'keyword-spacing': [ 'error' ],
    'semi-spacing': [ 'error', { before: false, after: true }],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'no-empty': [ 'error', { allowEmptyCatch: true }],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    'no-var': [ 'error' ],
    'no-duplicate-imports': [ 'error' ],
    'no-else-return': [ 'error' ],
    'prefer-const': [ 'error' ],
    'prefer-rest-params': [ 'error' ],
    'prefer-template': [ 'error' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'prefer-arrow-callback': [ 'error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    'arrow-spacing': [ 'error', {
      'after': true,
      'before': true
    }],
    'object-shorthand': [ 'error', 'always', {
      'avoidQuotes': true,
      'ignoreConstructors': false
    }]
  }
};

module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'spellcheck'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-bitwise': 'off',
    'import/no-cycle': 'off',
    semi: [1, 'always'],
    'linebreak-style': 'off',
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        ignoreRequire: true,
        lang: 'en_US',
        skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils'],
        skipIfMatch: ['http://[^s]*'],
        skipWordIfMatch: ['^foobar.*$'],
        minLength: 5,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};

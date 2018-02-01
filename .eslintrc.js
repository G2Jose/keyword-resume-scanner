module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/standard'],
  rules: {},
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    camelcase: 0,
    'no-restricted-syntax': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};

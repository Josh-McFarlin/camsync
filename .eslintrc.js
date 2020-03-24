module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'global-require': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-tag-spacing': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'max-len': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'newline-before-return': 'error',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    "import/no-unresolved": [
      2,
      { "caseSensitive": false }
    ]
  }
};

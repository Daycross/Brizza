module.exports = {
  env: {
    es6: true,
  },

  extends: ['airbnb', 'prettier', 'prettier/react'],

  globals: {
    Atomics: 'readonly',

    SharedArrayBuffer: 'readonly',
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 2018,

    sourceType: 'module',
  },

  plugins: ['react', 'prettier'],

  rules: {
    'jsx-a11y/label-has-associated-control': 'off',

    'jsx-a11y/label-has-for': 'off',

    'prettier/prettier': 'error',

    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],

    'import/prefer-default-export': 'off',

    // eslint-disable-next-line no-dupe-keys
    'prettier/prettier': [
      'error',

      {
        endOfLine: 'auto',
      },
    ],
  },
};

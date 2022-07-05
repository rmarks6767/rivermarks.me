module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'unix'],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx'],
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
  },
};

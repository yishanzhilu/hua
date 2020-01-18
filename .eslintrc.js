const path = require('path');

module.exports = {
  extends: ['react-app'],
  plugins: ['header'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.tsx', '.ts', '.json'],
        map: [['@', path.resolve(__dirname, './')]],
      },
    },
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'header/header': [
      'warn',
      'block',
      '*\n * Copyright (c) 2019 Yishan Authors\n *\n * All rights reserved\n ',
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', args: 'after-used', varsIgnorePattern: '^_' },
    ],
    'no-console': ['off'],
    'no-param-reassign': ['off'],
    'jsx-a11y/accessible-emoji': ['warn']
  },
};

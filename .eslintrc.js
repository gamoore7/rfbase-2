module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    fetch: false,
    navigator: false,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'off',
    'object-shorthand': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': ['error', 140],
    'spaced-comment': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'no-await-in-loop': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*Slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
  ],
};

/* eslint-disable */

const forbiddenElements = [
  {  element: 'p', message: 'Use <Text> instead' },
];

module.exports = {
  extends: [
    'airbnb',
    'next',
    'next/core-web-vitals',
    'turbo',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'require-explicit-generics'],
  env: { jest: true },
  globals: { JSX: true, React: true },
  rules: {
    // ----- NEXTJS ----- //
    '@next/next/no-html-link-for-pages': 'error',

    // ----- GENERAL ----- //
    'arrow-parens': ['error', 'always'],
    'camelcase': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 100 }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-shadow': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'sort-keys': 'error',
    'sort-vars': 'error',

    // ----- IMPORTING ----- //
    'import/extensions': ['error', 'never'],
    'import/no-anonymous-default-export': [0],
    'import/no-extraneous-dependencies': [0],
    'import/prefer-default-export': [0],

    // ----- REACT ----- //
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.tsx'] }],
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 2, multi: 1 }}],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    "react/forbid-elements": [2, { "forbid": forbiddenElements }],

    // ----- TYPESCRIPT ----- //
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-shadow': 'warn',
    'require-explicit-generics/require-explicit-generics': ['error', ['useState']],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',

    // ----- JSX-A11y ----- //
    "jsx-a11y/anchor-is-valid": [
      "error",
      { "components": [] }
    ],
  },
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        // Allow HTML tags in files under the UI workspace
        "react/forbid-elements": 0,
      },
    },
  ],
};

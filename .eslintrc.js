module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'cypress', 'unused-imports'],
  env: {
    'cypress/globals': true,
    jest: true,
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': ['warn', {alphabetize: {order: 'asc'}}], // group and then alphabetize lines - https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'no-duplicate-imports': 'error',
    quotes: ['error', 'single', {avoidEscape: true}], // single quote unless using interpolation
    'react/jsx-uses-react': 'off',
    'react/no-unstable-nested-components': ['warn', {allowAsProps: true}],
    'react/react-in-jsx-scope': 'off',
    'sort-imports': [
      'warn',
      {ignoreDeclarationSort: true, ignoreMemberSort: false},
    ],
    // alphabetize named imports - https://eslint.org/docs/rules/sort-imports
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};

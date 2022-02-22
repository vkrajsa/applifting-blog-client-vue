module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: ['plugin:vue/vue3-recommended', 'prettier'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  'extends': [
    'plugin:vue/vue3-recommended',
    'prettier',
    '@vue/typescript'
  ]
};

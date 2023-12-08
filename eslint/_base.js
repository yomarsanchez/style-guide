const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./consts')

const prettierOptions = require('./../prettier')

require('@rushstack/eslint-patch/modern-module-resolution')

/**
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    [`es${ECMA_VERSION}`]: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    require.resolve('./rules/best-practice'),
    require.resolve('./rules/comments'),
    require.resolve('./rules/import'),
    require.resolve('./rules/possible-errors')
  ],
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
  // Global settings used by all overrides.
  settings: {
    // Use the Node resolver by default.
    // 'import/resolver': { node: {} }
  },
  // Global parser options.
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module'
  },
  // Global plugins.
  rules: {
    // Pretter config.
    'prettier/prettier': ['error', prettierOptions]
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false
      }
    }
  ]
}

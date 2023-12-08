const { TYPESCRIPT_FILES } = require('./consts')

/**
 * TypeScript ESLint Config
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      // parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'standard-with-typescript',
        require.resolve('./rules/typescript')
      ]
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error'
      }
    }
  ]
}

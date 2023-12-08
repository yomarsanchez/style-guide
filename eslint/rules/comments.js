/**
 * Comments rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    /**
     * Require comments on ESlint disable directives.
     *
     * @see - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
     */
    'eslint-comments/require-description': 'error'
  }
}

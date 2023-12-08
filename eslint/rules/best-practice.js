/**
 * Best practices rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  rules: {
    /**
     * Require or disallow method and property shorthand syntax for object literals.
     *
     * @see - https://eslint.org/docs/latest/rules/object-shorthand
     */
    'object-shorthand': 'error',
    /**
     * Require or disallow padding lines between statements.
     *
     * @see - https://eslint.org/docs/latest/rules/prefer-arrow-callback
     */
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' }
    ],
    /**
     * Require rest parameters instead of arguments.
     *
     * @see - https://eslint.org/docs/latest/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',
    /**
     * Require spread operators instead of .apply()
     *
     * @see - https://eslint.org/docs/latest/rules/prefer-spread
     */
    'prefer-spread': 'error',
    /**
     * Require template literals instead of string concatenation.
     *
     * @see - https://eslint.org/docs/latest/rules/prefer-template
     */
    'prefer-template': 'error',
    /**
     * Enforce the consistent use of the radix argument when using parseInt().
     *
     * @see - https://eslint.org/docs/latest/rules/radix
     */
    radix: 'error',
    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield.
     *
     * @see - https://eslint.org/docs/latest/rules/require-atomic-updates
     */
    'require-atomic-updates': 'error',
    /**
     * Enforce consistent spacing before function definition opening parenthesis.
     *
     * @see - https://eslint.org/docs/latest/rules/space-before-function-paren
     */
    'space-before-function-paren': 'off'
  }
}

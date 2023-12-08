/**
 * Error rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  rules: {
    /**
     * Disallow await inside of loops.
     *
     * @see - https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'error',
    /**
     * Disallow the use of console.
     *
     * @see - https://eslint.org/docs/rules/no-console
     */
    'no-console': 'error',
    /**
     * Disallow expressions where the operation doesn't affect the value.
     *
     * @see - https://eslint.org/docs/rules/no-console
     */
    'no-constant-binary-expression': 'error',
    /**
     * Disallow else blocks after return statements in if statements.
     *
     * @see - https://eslint.org/docs/latest/rules/no-else-return
     */
    'no-else-return': 'error',
    /**
     * Disallow if statements as the only statement in else blocks.
     *
     * @see - https://eslint.org/docs/latest/rules/no-lonely-if
     */
    'no-lonely-if': 'error',
    /**
     * Disallow reassigning function parameters.
     *
     * @see - https://eslint.org/docs/latest/rules/no-param-reassign
     */
    'no-param-reassign': 'error',
    /**
     * Disallow returning values from Promise executor functions.
     *
     * @see - https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',
    /**
     * Disallow template literal placeholder syntax in regular strings, as
     * these are likely errors.
     *
     * @see - https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',
    /**
     *  Disallow loops with a body that allows only one iteration.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',
    /**
     * Require let or const instead of var
     *
     * @see - https://eslint.org/docs/latest/rules/no-var
     */
    'no-var': 'error'
  }
}

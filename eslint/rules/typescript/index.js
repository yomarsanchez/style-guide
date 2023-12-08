/**
 * TypeScript rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  rules: {
    /**
     * Enforce type definitions to consistently use either `interface` or `type`.
     *
     * @see  - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    '@typescript-eslint/consistent-type-definitions': 'off',
    /**
     * Require consistent usage of type exports.
     *
     * @see - https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    /**
     * Disallow non-null assertion in locations that may be confusing.
     *
     * @see - https://typescript-eslint.io/rules/no-confusing-non-null-assertion
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * Disallow non-null assertion in locations that may be confusing.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    /**
     * Require expressions of type void to appear in statement position.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
     */
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    /**
     * Disallow assigning a value with type `any` to variables and properties.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /**
     * Disallow member access on a value with type `any`.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * Disallow unused variables.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    '@typescript-eslint/no-unused-vars': 'error',
    /**
     * Enforce the use of `for-of` loop over the standard `for` loop where possible.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
     */
    '@typescript-eslint/prefer-for-of': 'error',
    /**
     * Enforce consistent spacing before function parenthesis.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-function-paren.md
     */
    '@typescript-eslint/space-before-function-paren': 'off',
    /**
     * Disallow certain types in boolean expressions.
     *
     * @see - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
     */
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}

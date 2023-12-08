/**
 * Playwright Test Config
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:jest-playwright/recommended', require.resolve('./rules/playwright-test')]
}

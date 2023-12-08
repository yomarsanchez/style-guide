/**
 * Browser env specific rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true
  },
  extends: require.resolve('./_base')
}

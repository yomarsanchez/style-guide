/**
 * Node.js specific rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    node: true
  },
  extends: require.resolve('./_base')
}

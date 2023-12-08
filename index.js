const base = require('./eslint/_base')

/**
 * Browser env specific rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [base]
}

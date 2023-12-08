/**
 * These are enabled by `react/recommended`, but we've made the decision to
 * disable them.
 *
 * TODO: Setup and test rules.
 */
const disabledRules = {
  // We recommend using TypeScript over `prop-types`, as `prop-types` can add
  // to a project's build size.
  'react/prop-types': 'off',
  // Disable requiring React to be imported, as this is no longer required.
  'react/react-in-jsx-scope': 'off'
}

/**
 * React ESLint Config
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...disabledRules,
    /**
     * Prevents usage of unsafe `target='_blank'`.
     *
     * This rule is a part of `react/recommended`, but we've modified it to
     * allow referrer.
     *
     * @see - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true
      }
    ]
  }
}

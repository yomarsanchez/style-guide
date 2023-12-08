const IMPORT_SORT_GROUPS = [
  // Built-in node dependencies
  [
    '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
  ],
  // Packages. `react` and `next/` related packages come first.
  ['^react', '^next', '^@?\\w'],
  // Material UI organization packages.
  // Core organization packages.
  // Any other organization packages.
  ['^@emotion', '^@mui', '^@seekpe', '^@core', '^@/'],
  // Side effect imports.
  ['^\\u0000'],
  // Parent imports. Put `..` last.
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  // Other relative imports. Put same-folder imports and `.` last.
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  // Style imports.
  ['^.+\\.s?css$']
]

/**
 * Import rules
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es6: true
  },
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    /**
     * If a default import is requested, this rule will report if there is no default export
     * in the imported module.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
     */
    'import/default': 'error',
    /**
     * Reports funny business with exports, like repeated exports of names or defaults.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
     */
    'import/export': 'error',
    /**
     * Enforces that all exports are declared at the bottom of the file.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',
    /**
     * Verifies that all named imports are part of the set of named exports in the referenced module.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
     */
    'import/named': 'error',
    /**
     * Enforces names exist at the time they are dereferenced, when imported as a full namespace
     * (i.e. import * as foo from './foo'; foo.bar(); will report if bar is not exported by ./foo.).
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'error',
    /**
     * Enforces having one or more empty lines after the last top-level import statement
     * or require call.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',
    /**
     * Disallow import of modules using absolute paths.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',
    /**
     * Disallow cyclical dependencies between modules.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import/no-cycle': 'error',
    /**
     * Reports if a resolved path is imported more than once.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',
    /**
     * Reports use of an exported name as the locally imported name of a default export.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'warn',
    /**
     * Reports use of an exported name as a property on the default export.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'warn',
    /**
     * Disallow a module from importing itself.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',
    /**
     * Ensures an imported module can be resolved to a module on the local filesystem,
     * as defined by standard Node require.resolve behavior.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'error',
    /**
     * Forbid Webpack loader syntax in imports.
     *
     * @see - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'error',
    /**
     * Enforces sorting of exports.
     *
     * @see - https://github.com/lydell/eslint-plugin-simple-import-sort/tree/main?tab=readme-ov-file#exports
     */
    'simple-import-sort/exports': 'error',
    /**
     * Enforces sorting of imports.
     *
     * @see - https://github.com/lydell/eslint-plugin-simple-import-sort/tree/main?tab=readme-ov-file#imports
     */
    'simple-import-sort/imports': [
      'error',
      {
        groups: IMPORT_SORT_GROUPS
      }
    ],
    /**
     * Reports modules without any exports, or with unused exports.
     *
     * @see - https://github.com/sweepline/eslint-plugin-unused-imports?tab=readme-ov-file#usage
     */
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ]
  }
}

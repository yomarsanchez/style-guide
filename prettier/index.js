/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  // Include parentheses around a sole arrow function parameter.
  arrowParens: 'avoid',
  // Print spaces between brackets in object literals.
  bracketSpacing: true,
  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  bracketSameLine: false,
  // Line Feed only
  endOfLine: 'lf',
  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: true,
  // Specify the line length that the printer will wrap on.
  printWidth: 100,
  // Print semicolons at the ends of statements.
  semi: false,
  // Use single quotes instead of double quotes.
  singleQuote: true,
  // Specify the number of spaces per indentation-level.
  tabWidth: 2,
  // Print trailing commas wherever possible when multi-line.
  trailingComma: 'none',
  // Indent lines with tabs instead of spaces.
  useTabs: false
}

module.exports = {
  ...overridableDefaults,
  plugins: ['prettier-plugin-packagejson']
}

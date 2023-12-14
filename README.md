<p align="center">
  <a href="https://seek.pe/">
    <img src="https://seek.pe/seek_logo_firma-2021.png" width="200px"/>
  </a>
</p>

# The Seek Style Guide

## Introduction

This repository is the Seek style guide for JavaScript and TypeScript projects. It is a set of rules and configurations that we use to ensure consistency and quality in our code.

The configuration is based on [StandardJS](https://standardjs.com/) and [Prettier](https://prettier.io/), and it is meant to be used with [ESLint](https://eslint.org/) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).

## Installation

All of our configs are contained in one package `@yomarsanchez/style-guide`, so you can install it with a single command.

```sh
# If you use npm
npm i --save-dev @yomarsanchez/style-guide

# If you use pmpm
pnpm i --save-dev @yomarsanchez/style-guide

# If you use yarn
yarn add --dev @yomarsanchez/style-guide
```

> [!NOTE]
> Some of our ESLint configs require peer dependencies. We'll note those
> alongside the available configs in the [ESLint](#eslint) section.

## Usage

Prettier and ESLint are a peer-dependency of this package, and should be installed in the root of your project. See [Prettier documentation](https://prettier.io/docs/en/install.html) and [ESLint documentation](https://eslint.org/docs/latest/use/getting-started#manual-set-up)

```sh
# If you use npm
npm i --save-dev prettier eslint

# If you use pmpm
pnpm i --save-dev prettier eslint

# If you use yarn
yarn add --dev prettier eslint
```

If you are using TypeScript, you'll also need to install `typescript` and `@typescript-eslint/eslint-plugin`.

```sh
# If you use npm
npm i --save-dev typescript @typescript-eslint/eslint-plugin

# If you use pmpm
pnpm i --save-dev typescript @typescript-eslint/eslint-plugin

# If you use yarn
yarn add --dev typescript @typescript-eslint/eslint-plugin
```

### Prettier

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@yomarsanchez/style-guide/prettier"
}
```

### ESLint

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs:

- `@yomarsanchez/style-guide/eslint/browser`
- `@yomarsanchez/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- [ ] `@yomarsanchez/style-guide/eslint/next`
- [ ] `@yomarsanchez/style-guide/eslint/playwright-test`
- [x] `@yomarsanchez/style-guide/eslint/react`
- [x] `@yomarsanchez/style-guide/eslint/typescript` (requires `typescript` and `@typescript-eslint/eslint-plugin` to be installed and [additional configuration](#configuring-eslint-for-typescript))

> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

For example, use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
/**
 * ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve('@yomarsanchez/style-guide/eslint/browser'),
    require.resolve('@yomarsanchez/style-guide/eslint/react')
  ]
}
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting)

```js
const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

/**
 * ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: [
    require.resolve('@yomarsanchez/style-guide/eslint/browser'),
    require.resolve('@yomarsanchez/style-guide/eslint/typescript')
  ],
  parserOptions: {
    project
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parserOptions: {
  //       project
  //     }
  //   }
  // ],
}
```

> [!NOTE]
> Please note that some of the rules enabled by default require that you have `strict: true` in your `tsconfig.json`.

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

In this example, TypeScript rules only apply to files that match the `*.ts` and `*.tsx` extensions..

```js
/**
 * ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [require.resolve('@yomarsanchez/style-guide/eslint/browser')],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [require.resolve('@yomarsanchez/style-guide/eslint/typescript')]
    }
  ]
}
```

#### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts` and
`.tsx`.

However, when using overrides, file extensions must be included or ESLint will
only include `.js` files.

```js
/**
 * ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [{ files: [`directory/**/*.[jt]s?(x)`], rules: { 'my-rule': 'off' } }]
}
```

## Automatic Formatting in VSCode

To automatically format your code in VSCode, install the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

Then, create a `.vscode/settings.json` file in your project with the following configuration:

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.format": "explicit",
    "source.organizeImports": "never",
    "source.sortMembers": "explicit"
  },
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.tsdk": "node_modules\\typescript\\lib",
  "[javascript, javascriptreact, typescript, typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[scss, css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

> [!TIP]
> If you want to highlight errors in your code, you can add the extension [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to your VSCode.

## Contributing

- [ ] Add a CONTRIBUTING.md file with instructions on how to contribute.

> [!NOTE]
> This project is still in its early stages. We are still working on the rules
> and configurations, and we are open to feedback and contributions.

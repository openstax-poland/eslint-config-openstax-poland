# Shared [ESLint](https://eslint.org) configurations

ESlint configurations used by OpenStax Poland.

## Usage

1.  Add dependency on this repository

    ```json
    {
        "devDependencies": {
            "eslint-config-openstax-poland": "https://github.com/openstax-poland/eslint-config-openstax-poland.git"
        }
    }
    ```

2.  Add `openstax-poland/config` as a dependency to your ESLint config. For
    example for the `base` config:

    ```yaml
    extends: openstax-poland/base
    ```

3.  You may also need to add the following configuration if you're using Yarn
    PnP:

    ```yaml
    settings:
      # Consider PnP-installed modules as external
      import/external-module-folders: ["node_modules", ".yarn"]
    ```

## Configs:

- `openstax-poland/base`: Extends `eslint:recommended` with additional best
  practices. Designed to contain as few stylistic rules as possible.

- `openstax-poland/react`: Extends `openstax-poland/base` with additional
  rules from `eslint-plugin-react`. To use this config you must also add
  `eslint-plugin-react` to your `devDependencies`.

- `openstax-poland/typescript`: Extends `openstax-poland/base` with
  additional rules for TypeScript. See [TypeScript](#typescript) for
  instructions on using this config.

Note that while different configs can be used together, they don't extend
one another. It's recommended that in your config you extend
`openstax-poland/base` first, and then add other configs of your choice.

## Adding a new config

1.  Choose a name for you config. We'll use `my-config` as an example.

2.  Create a file named `my-config.yml`. This is your primary config file.

3.  Create a file named `my-config.js` with following content:

    ```js
    module.exports = {
        extends: "./my-config.yml",
    }
    ```

    This file should be placed in the same directory as `my-config.yml`.

## TypeScript

To use TypeScript configs you must add `@typescript-eslint/eslint-plugin`
and `@typescript-eslint/parser` to your `devDependencies`, and add the following
to your ESLint config:

```yaml
parserOptions:
  project: relative/path/to/tsconfig.json
```

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

## Configs:

- `openstax-poland/base`: Extends `eslint:recommended` with additional best
  practices. Designed to contain as few stylistic rules as possible.

- `openstax-poland/react/base`: Extends `openstax-poland/base` with additional
  rules from `eslint-plugin-react`. To use this config you must also add
  `eslint-plugin-react` to your `devDependencies`.

## Adding a new config

1.  Choose a name for you config. We'll use `my-config` as an example.

2.  Create a file named `my-config.yml`. This is your primary config file.

3.  If you want to extend an existing config, use relative paths to YAML files.
    For example if you want to extend the base config do

    ```yaml
    extends: relative/path/to/base.yml
    ```

4.  Create a file named `my-config.js` with following content:

    ```js
    module.exports = {
        extends: "./my-config.yml",
    }
    ```

    This file should be placed in the same directory as `my-config.yml`.

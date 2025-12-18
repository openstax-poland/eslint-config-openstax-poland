## Migrating from 0.5 to 0.6

1.  Package was renamed to `@openstax-poland/esling-config`
2.  Switched to ESLint 9's flat configs. You no longer need to provide peer
    dependencies `@stylistic/eslint-plugin` and `eslint-plugin-import`
3.  Separate configuration for TypeScript was merged into the base config.
    Non-TypeScript projects are no longer supported. You no longer need to
    provide peer dependencies `@typescript-eslint/eslint-plugin` and
    `@typescript-eslint/parser`

## Migrating from 0.4 to 0.5

1.  Update dependencies to latest versions matching this package's peer
    dependencies
2.  Change `parserOptions.project` to `parserOptions.projectService`
3.  Style presets has been merged into base presets, and they no longer extend
    `openstax-poland/base`, change `extends: openstax-poland/preset/variant` to
    ```yaml
    extends:
        - openstax-poland/base
        - openstax-poland/preset
    ```

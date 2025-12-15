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

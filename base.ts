// Copyright 2025 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

// Enforce best practices and protect against common mistakes.

import { type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import { importX } from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export const base = defineConfig({
    plugins: {
        js,
        '@stylistic': stylistic,
    },

    extends: [
        // Use ESLint's recommendations. Remember to review changes to them when
        // upgrading ESLint.
        'js/recommended',
        tseslint.configs.recommendedTypeChecked,
        importX.flatConfigs.recommended,
        stylistic.configs.customize({
            braceStyle: '1tbs',
            indent: 4,
            quoteProps: 'as-needed',
        }),
    ],

    linterOptions: {
        reportUnusedDisableDirectives: true,
    },

    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
            projectService: true,
        },
    },

    settings: {
        // Omit `.d.ts` because 1) TypeScript compilation already confirms that
        // types are resolved, and 2) it would mask an unresolved
        // `.ts`/`.tsx`/`.js`/`.jsx` implementation.
        'import-x/extensions': ['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx', '.cjs', '.mjs'],
        'import-x/external-module-folders': ['node_modules', 'node_modules/@types', '.yarn'],
        'import-x/resolver': {
            typescript: true,
        },
        'import-x/resolver-next': [
            createTypeScriptImportResolver(),
        ],
    },

    rules: {
        // ----------------------------------------------------- correctness ---

        // Require all overload signatures to be next to each other
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        // Check that for each setter there is a corresponding getter.
        'accessor-pairs': 'warn',

        // Ensure return statements are used consistently with or without a value.
        'consistent-return': 'error',

        // Require default case to be present in each switch statement.
        'default-case': 'error',

        // Require default case to be the last branch of a switch condition
        'default-case-last': 'error',

        // Force all default parameters to come last.
        'default-param-last': 'error',

        // Only use type-safe equality operators.
        'eqeqeq': ['error', 'smart'],

        // Require non-inferred type annotations on all public APIs
        '@typescript-eslint/explicit-module-boundary-types': 'error',

        // Import statements must precede other statements.
        'import-x/first': 'error',

        // Require all functions to have a name.
        //
        // When an error is thrown in an anonymous function, it will be
        // described in the stack trace just as an “anonymous function”, which
        // makes debugging more difficult (especially when there are multiple
        // such functions).
        'func-names': 'error',

        // Require accessor pairs to be declared together, without other members
        // in between
        'grouped-accessor-pairs': 'error',

        // Forbid imports from absolute paths (beginning with / on
        // unix-compatible systems or with a drive letter on windows).
        'import-x/no-absolute-path': 'error',

        // Forbid use of alert().
        'no-alert': 'error',

        // Prefer array literal over array constructor.
        'no-array-constructor': 'error',

        // Warn when calling toString (including implicitly) on a value which is
        // known to produce useless output (eg. `"[object object]"`)
        '@typescript-eslint/no-base-to-string': 'error',

        // Forbid use of deprecated features.
        'no-caller': 'error',
        'no-iterator': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',

        // Forbid use of the commonjs module system if it can be replaced with
        // ES5 import/export statements
        'import-x/no-commonjs': 'error',

        // Forbid type assertions which may be mistaken for non-equality
        // comparison: `lhs! == rhs` vs `lhs !== rhs`
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        // Forbid use of console, except for logging problems.
        'no-console': ['error', {
            allow: ['warn', 'error'],
        }],

        // Forbid returning values from constructors
        'no-constructor-return': 'error',

        // Forbid duplicate imports
        'no-duplicate-imports': 'off',
        'import-x/no-duplicates': 'error',

        // Forbid potential security vulnerabilities.
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-script-url': 'error',

        // Warn against using empty functions.
        //
        // Empty functions can be confusing and can be a mistake (e.g. () => {}
        // returns undefined, not an empty object). In case when you do
        // intentionally want to use an empty function, disable this rule with
        //
        // /* eslint-disable-next-line no-empty-function */
        //
        // and describe why are you using an empty function.
        'no-empty-function': 'warn',

        // Forbid use of the any type.
        '@typescript-eslint/no-explicit-any': 'error',

        // Forbid extending prototypes of build-in objects.
        'no-extend-native': 'error',

        // Forbid unnecessary function binding.
        'no-extra-bind': 'error',

        // Forbid unnecessary labels.
        'no-extra-label': 'error',

        // Disallow unnecessary non-null assertions.
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        // Disallow usage of classes as namespaces.
        '@typescript-eslint/no-extraneous-class': 'error',

        // Forbid imports of dependencies not declared in package.json.
        'import-x/no-extraneous-dependencies': 'error',

        // Require errors in promises to be handled.
        '@typescript-eslint/no-floating-promises': 'error',

        // Forbid implicit type coercion
        'no-implicit-coercion': 'error',

        // Forbid potential security vulnerabilities.
        '@typescript-eslint/no-implied-eval': 'error',

        // Imported names are declared as read-only, and reassigning them causes
        // a runtime error.
        'no-import-assign': 'error',

        // Forbid use of module.exports in ES5 modules
        'import-x/no-import-module-exports': 'error',

        // Forbid unnecessary use of blocks.
        'no-lone-blocks': 'error',

        // Forbid else blocks with a single if clause. Use else if instead.
        'no-lonely-if': 'error',

        // Warn against constructing functions in loops.
        'no-loop-func': 'error',

        // Forbid likely incorrect uses of spread operator
        '@typescript-eslint/no-misused-spread': 'error',

        // Forbid use of new for side effects.
        'no-new': 'error',

        // Forbid use of the Function constructor.
        'no-new-func': 'error',

        // Prevent accidental attempts to invoke new on non-constructive
        // singletons
        'no-new-native-nonconstructor': 'error',

        // Prefer object literal over object constructor.
        'no-new-object': 'error',

        // Forbid use of new Wrapper for primitive type wrappers.
        'no-new-wrappers': 'error',

        // Forbid non-null assertions on the left side of a ??
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

        // Prefer `expr!` over `expr as type` when `expr` is nullable
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',

        // Forbid most usages of the Object() constructor
        'no-object-constructor': 'error',

        // Forbid returning values from promise executors, as it's likely
        // a mistake (their return value is never used)
        'no-promise-executor-return': 'error',

        // Forbid initializing variables to undefined.
        'no-undef-init': 'error',

        // Forbid loops in which loop condition never changes.
        'no-unmodified-loop-condition': 'error',

        // Forbid comparing against a boolean literal.
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        // Forbid assigning a constructor parameter property to itself
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

        // Forbid unnecessary boolean conditions. Disabled since it seems to
        // have false positives. For example:
        //
        // const [variable] = function() ?? []
        // if (variable == null) { ... }
        //
        // triggers this lint.
        // '@typescript-eslint/no-unnecessary-condition': 'error',
        // TODO: 8.8.0 might have fixed this?

        // Forbid unnecessary type assertions.
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        // Warn when using <T extends any> or <T extends unknown>.
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        // Forbid unnecessary type conversions
        '@typescript-eslint/no-unnecessary-type-conversion': 'error',

        // Forbid ternary operator when simpler alternatives exist.
        'no-unneeded-ternary': 'error',

        // Forbid loops which are not actually loops
        'no-unreachable-loop': 'error',

        // Unused expressions often indicate a logic error.
        'no-unused-expressions': 'error',

        // Forbid unused variables, except when used in
        // a `const { var, ...rest } = expr` to exclude some names from
        // an object
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
        }],

        // Forbid private class members which are never used
        'no-unused-private-class-members': 'error',

        // Forbid use of names before they are defined, except at the top level.
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: false,
        }],

        // Forbid uses of .call and .apply when not necessary.
        'no-useless-call': 'error',

        // Forbid computed key with a literal.
        'no-useless-computed-key': 'error',

        // Forbid empty constructors.
        'no-useless-constructor': 'error',

        // Forbid renaming to the same name.
        'no-useless-rename': 'error',

        // Forbid return statements which have no effect on control flow.
        'no-useless-return': 'error',

        // Forbid assignment in return statements.
        'no-return-assign': 'error',

        // Forbid comparing a value against itself.
        'no-self-compare': 'error',

        // Forbid use of the comma operator.
        'no-sequences': 'error',

        // Forbid a module from importing itself.
        'import-x/no-self-import': 'error',

        // Only allow instances of Error to be thrown.
        'no-throw-literal': 'error',

        // Use as simple import paths as possible.
        'import-x/no-useless-path-segments': 'error',

        // Forbid use of the var keyword.
        'no-var': 'error',

        // Prefer `literal as const` over `literal as literal`.
        '@typescript-eslint/prefer-as-const': 'error',

        // Prefer a function type over a callable interface if it has no
        // additional properties.
        '@typescript-eslint/prefer-function-type': 'error',

        // Prefer Array#includes over Array#indexOf and String#includes over
        // String#indexOf when checking for presence of an item.
        '@typescript-eslint/prefer-includes': 'error',

        // Prefer nullish coalescing operator (`??`) over logical OR (`||`).
        //
        // Warn only because it has too many false-positives.
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',

        // Prefer the optional chain operator (?.) over manual check for null
        // before property access
        '@typescript-eslint/prefer-optional-chain': 'error',

        // Forbid non-Error values as arguments to Promise.reject().
        'prefer-promise-reject-errors': 'error',

        // Disallow constructing RegExp from a string literal.
        'prefer-regex-literals': 'error',

        // Prefer f(): this over f(): Type when function contains return this
        '@typescript-eslint/prefer-return-this-type': 'warn',

        // Prefer String#startsWith and String#endsWith over equivalent methods.
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        // Forbid Unicode BOM.
        'unicode-bom': 'error',

        // Require Promise.catch's argument to be typed unknown
        // Disabled because, while documented, it doesn't seem to exist?
        // '@typescript-eslint/use-unknown-in-catch-callback-variables': 'error',

        // Require calls to Array#sort to provide a comparator function.
        '@typescript-eslint/require-array-sort-compare': 'error',

        // Require that each async function have an await expression.
        'require-await': 'error',

        // Require switch statements to cover all possible cases.
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        // Require that each generator function have an await expression.
        'require-yield': 'error',



        // ----------------------------------------------------------- style ---

        // Require consistent use of line breaks in array expressions.
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-element-newline': ['error', 'consistent'],

        // Prefer type[] over Array<type>.
        '@typescript-eslint/array-type': 'error',

        // Forbid braces around an arrow function's body unless necessary.
        'arrow-body-style': 'error',

        // Forbid parentheses in arrow functions with a single argument.
        '@stylistic/arrow-parens': ['error', 'as-needed'],

        // Prefer `expr as type` over `<type> expr`
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
        }],

        // Require curly braces only around multiline bodies, and require that
        // they be used consistently across branches.
        'curly': ['error', 'multi-line', 'consistent'],
        '@stylistic/curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],

        // Require that properties be accessed via the dot operator when possible.
        'dot-notation': 'error',

        // Require all class members to be explicitly marked as either public,
        // protected, or private.
        '@typescript-eslint/explicit-member-accessibility': 'error',

        // Import paths shouldn't use extensions when importing JavaScript
        // modules, and should use extensions in all other cases.
        'import-x/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        }],

        // There is no spacing between function name and opening parenthesis.
        '@stylistic/function-call-spacing': 'error',

        // Require consistent use of newlines between function call arguments.
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],

        '@stylistic/generator-star-spacing': ['error', {
            after: false,
            before: true,
            anonymous: 'neither',
        }],

        // When using arrow functions with implicit return (without braces)
        // the value must be placed on the same line as arrow token.
        '@stylistic/implicit-arrow-linebreak': 'error',

        // Use four spaces indentation.
        '@stylistic/indent': ['error', 4, {
            // Align subsequent variables in a declaration to the first
            VariableDeclarator: 'first',
        }],
        // This rule is too simplistic for us
        '@stylistic/indent-binary-ops': 'off',

        // Use Unix style line breaks.
        '@stylistic/linebreak-style': 'error',

        // Limit line width to 80 columns.
        '@stylistic/max-len': ['error', {
            code: 100,
            comments: 80,
        }],

        // Don't use member delimiters in interface declarations (for
        // consistency with class declarations) and comma in type declarations
        // (for consistency with object literals).
        '@stylistic/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',
            },

            singleline: {
                delimiter: 'comma',
            },

            overrides: {
                typeLiteral: {
                    multiline: {
                        delimiter: 'comma',
                        requireLast: true,
                    },
                },
            },
        }],

        // Use sequences of line comments for multi-line comments
        '@stylistic/multiline-comment-style': ['error', 'separate-lines'],

        // Enforce consistent naming convention. Since this is a new lint, and
        // defining a style guide for TS/JS is non-trivial, this is currently
        // only a warning.
        '@typescript-eslint/naming-convention': 'warn',

        // Enforce an empty line after last import statement.
        'import-x/newline-after-import': ['error', {
            considerComments: true,
        }],

        // Require each chained call (for chains longer than 3) to be on
        // a separate line.
        '@stylistic/newline-per-chained-call': 'error',

        // Require all default exports to be named
        'import-x/no-anonymous-default-export': ['error', {
            allowCallExpression: false,
        }],

        // Warn on usage of deprecated functions
        '@typescript-eslint/no-deprecated': 'warn',

        // Forbid else { return }
        'no-else-return': 'error',

        // Forbid empty interfaces
        '@typescript-eslint/no-empty-interface': 'error',

        // Forbid import {} from '..'
        'import-x/no-empty-named-blocks': 'error',

        // Forbid extra parenthesis, except when used to make things clearer.
        '@stylistic/no-extra-parens': ['error', 'all', {
            nestedBinaryExpressions: false,
        }],

        // Forbid unnecessary semicolons
        '@stylistic/no-extra-semi': 'error',

        // Forbid mixing of operators with the same precedence.
        '@stylistic/no-mixed-operators': 'error',

        // Forbid sequences of multiple spaces.
        //
        // Multiple spaces are usually inserted by mistake, and are a common
        // source of diff noise.
        '@stylistic/no-multi-spaces': 'error',

        // Prefer import name over import { default as name }.
        'import-x/no-named-default': 'error',

        // Forbid `export {}` when it is not needed to turn a file into a module
        '@typescript-eslint/no-useless-empty-export': 'error',

        // Forbid tailing whitespace.
        //
        // Tailing whitespace often gets introduced by accident when editing
        // (since it usually not displayed or marked in any way), and is
        // a common source of diff noise.
        '@stylistic/no-trailing-spaces': 'error',

        // Require consistent use of line breaks in object expressions.
        '@stylistic/object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],

        // Require use of object shorthand syntax.
        'object-shorthand': 'error',

        // Only allow one variable declaration per line when they are
        // initialized.
        '@stylistic/one-var-declaration-per-line': 'error',

        '@stylistic/operator-linebreak': ['error', 'before', {
            overrides: {
                '=': 'after',
            },
        }],

        'import-x/order': ['error', {
            'newlines-between': 'always',
            groups: [
                ['builtin', 'external', 'unknown'],
                ['internal', 'parent', 'sibling', 'index'],
            ],
        }],

        // Prefer arrow functions over function expressions as callbacks.
        'prefer-arrow-callback': 'error',

        // Variables which are never assigned should be declared const.
        'prefer-const': ['error', {
            destructuring: 'all',
        }],

        // Prefer x ** y over Math.pow(x, y)
        'prefer-exponentiation-operator': 'error',

        // Prefer for-of loops over looping with an index.
        '@typescript-eslint/prefer-for-of': 'error',

        // Prefer (a: T[]).find() over (a: T[]).filter(..)[0]
        '@typescript-eslint/prefer-find': 'error',

        // Prefer numeric literals over Number.parseInt.
        'prefer-numeric-literals': 'error',

        // Prefer Object.hasOwn over Object.prototype.hasOwnProperty
        'prefer-object-has-own': 'warn',

        // Prefer object spread syntax over Object.assign
        'prefer-object-spread': 'error',

        // Private class properties which are never modified should be marked as
        // readonly (for consistency with prefer-const).
        '@typescript-eslint/prefer-readonly': 'error',

        // Prefer arguments spread over the arguments variable.
        'prefer-rest-params': 'error',

        // Prefer argument spread over calling .apply()
        'prefer-spread': 'error',

        // Require Promise-returning functions to be marked async.
        '@typescript-eslint/promise-function-async': 'error',

        // Don't enforce a specific quote style - we tend to use double quotes
        // for text and single quotes for non-text strings, which is difficult
        // to enforce algorithmically
        '@stylistic/quotes': 'off',

        // Only use semicolons where they would not be inserted by ASI. In those
        // places semicolon goes at the start of a line.
        '@stylistic/semi': ['error', 'never', {
            beforeStatementContinuationChars: 'always',
        }],
        '@stylistic/semi-style': ['error', 'first'],

        'sort-imports': ['error', {
            ignoreCase: true,
            ignoreDeclarationSort: true,
        }],

        // Forbid spaces before the left parenthesis opening a function's
        // parameter list, except for async arrow functions, where it's required.
        '@stylistic/space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
        }],

        // Disable until we can use PEP8-style spacing for default arguments.
        // '@stylistic/space-infix-ops': 'error',

        // Require space after case colon, and no spaces before it.
        '@stylistic/switch-colon-spacing': 'error',

        // Warn when two or more overloads could be unified into a single
        // function using a union, an optional, or a rest parameter.
        '@typescript-eslint/unified-signatures': 'warn',



        // ------------------------------------------------------------- JSX ---
        // Syntax/style rules only. Rules requiring an additional plugin live in
        // @openstax-poland/eslint-config/react, and require installing a peer
        // dependency.

        // Require closing bracket to be aligned with properties, and closing
        // tag with opening tag.
        '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
        '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],

        // Disallow unnecessary curly braces in JSX.
        '@stylistic/jsx-curly-brace-presence': 'error',

        // Disallow multiple props on one line, except when props and tag are
        // all on the same line.
        '@stylistic/jsx-max-props-per-line': ['error', {
            when: 'multiline',
        }],

        // Require consistent spacing within JSX tags
        '@stylistic/jsx-tag-spacing': ['error', {
            beforeSelfClosing: 'allow',
        }],

        // Don't wrap multiline JSX (we prefer the opposite)
        '@stylistic/jsx-wrap-multilines': 'off',
    },
})

export const typescript: Linter.Config = {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
        // ---------------------------------------------------------------------
        // Following are ESlint rules which are handled by TypeScript itself,
        // and as such unnecessary.
        'consistent-return': 'off',

        // Enforces default case even when it's provable not necessary.
        // Exhaustiveness of switch statements is also now enforced by
        // @typescript-eslint/switch-exhaustiveness-check.
        'default-case': 'off',

        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        // Force all default parameters to come last.
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',

        // Handled by TS itself
        'import-x/named': 'off',

        // Prefer array literal over array constructor.
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        // Warn against using empty functions.
        //
        // Empty functions can be confusing and can be a mistake (e.g. () => {}
        // returns undefined, not an empty object). In case when you do
        // intentionally want to use an empty function, disable this rule with
        //
        // /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        //
        // and describe why are you using an empty function.
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',

        // Forbid constructing functions in loops.
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        // Forbid private class members which are never used
        'no-unused-private-class-members': 'off',
        '@typescript-eslint/no-unused-private-class-members': 'error',

        // Forbid unused variables, except when used in a
        // `const { var, ...rest } = expr` to exclude some names from an object
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            ignoreRestSiblings: true,
        }],

        // Forbid use of names before they are defined, except at the top level.
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
        }],

        // Forbid empty constructors.
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        // Require that each async function have an await expression.
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
    },
}

export default defineConfig([base, typescript])

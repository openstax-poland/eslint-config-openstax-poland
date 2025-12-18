// Copyright 2025 OpenStax Poland
// Licensed under the MIT license. See LICENSE file in the project root for
// full license text.

// Enforce best practices and protect against common mistakes in JSX and React.
//
// This is an addition to @openstax-poland/eslint-config/base which includes
// additional rules from eslint-plugin-react.

import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'

export default defineConfig({
    plugins: {
        react,
    },

    extends: [
        react.configs.flat['recommended']!,
        react.configs.flat['jsx-runtime']!,
    ],

    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        // Default value of type is "submit", which may cause unexpected page
        // reloads
        'react/button-has-type': 'error',

        // Forbid uses of forwardRef with no/unused ref parameter
        'react/forward-ref-uses-ref': 'error',

        // act/iframe-missing-sandbox: error
        'react/iframe-missing-sandbox': 'error',

        // Prefer shorthand syntax for fragments (<>...</> rather than
        // <React.Fragment>...</React.Fragment>).
        'react/jsx-fragments': 'error',

        // Forbid use of .bind() and arrow functions as JSX callbacks, as they
        // are not comparable and can cause unnecessary re-renders.
        'react/jsx-no-bind': 'error',

        // Forbid non-stable values being used as context, as they can cause
        // costly unintentional re-renders.
        'react/jsx-no-constructed-context-values': 'error',

        // Forbid attempts at conditional rendering which may accidentally
        // render the condition instead (e.g. value && <Something />).
        'react/jsx-no-leaked-render': 'error',

        // Forbid uses of fragments with a single child element
        'react/jsx-no-useless-fragment': 'error',

        // Forbid using {...props} two times for the same component
        'react/jsx-props-no-spread-multi': 'error',

        // Warn against dangerous usage of this.state in calls to this.setState
        'react/no-access-state-in-setstate': 'warn',

        // Forbid usages of array indexes as keys
        'react/no-array-index-key': 'error',

        // Warn against uses of this.setState within componentDidMount and
        // componentDidUpdate, as this will trigger an additional render
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',

        // Forbid uses of non-primitive values as prop defaults, as this could
        // cause infinite re-render loops
        'react/no-object-type-as-default-prop': 'error',

        // Properties in state must be used
        'react/no-unused-state': 'error',

        // Forbid usage of unsafe lifecycle methods
        'react/no-unsafe': 'error',

        // Forbid components in components (as their state will never be
        // preserved across renders)
        'react/no-unstable-nested-components': 'error',

        // Don't use shouldComponentUpdate within a React.PureComponent, as then
        // extending PureComponent is meaningless
        'react/no-redundant-should-component-update': 'error',

        // Use of this in functional components is most likely a mistake
        'react/no-this-in-sfc': 'error',

        // Protect against common typos
        'react/no-typos': 'error',

        // Calling this.setState within componentWillUpdate can lead to
        // indeterminate state
        'react/no-will-update-set-state': 'error',

        // React components must be defined as ES6 classes
        'react/prefer-es6-class': 'error',

        // Stateless components must be written as functions
        'react/prefer-stateless-function': 'error',

        // Disallow passing children to void DOM elements
        'react/void-dom-elements-no-children': 'error',

        // Enforce use of self-closing tags whenever possible
        'react/self-closing-comp': ['error', {
            component: true,
            html: true,
        }],

        // Require propTypes to be sorted
        'react/sort-prop-types': 'error',
    },
})

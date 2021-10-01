# React Native Template

# Base + Redux + Thunk

**Table of Contents**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Dependencies](#dependencies)
- [Structure Folder](#structure-folder)
- [Responsive styles](#responsive-styles)
- [Eslint and Prettier](#eslint-and-prettier)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Dependencies

- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [React Redux](https://github.com/reduxjs/react-redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)

## Structure Folder

```
src/
├── assets/
│   ├── fonts/ # App fonts
│   ├── icons/ # App icons
|   └── images/ # App images
├── components/ # Global Components
├── ducks/ # Ducks for use redux and redux-thunk
├── navigation/ # React Navigation files
├── services/ # Services, e.g. fetch, firebase, etc.
├── styles/ # Global Styles
├── utils/ # Global utils
├── views/ # Views
└── App.jsx
```

## Responsive styles

```js
import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const scaleFont = width / 320

/**
 * Normalize Font Size respect to window width with the scale width:320
 * @param {number} size
 */
export function normalizeFontSize(size) {
  const newSize = size * scaleFont
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

const scaleWidth = width / 420

/**
 * Normalize px respect to window width with the scale width:420
 * @param {number, string} size
 */
export function normalizePx(size) {
  if (typeof size === 'string') {
    return size
  }
  const newSize = size * scaleWidth
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

/**
 * Compute window width * p
 * @param {number} p - 0 < p <= 1
 */
export const pWidth = p => width * p

/**
 * Compute window height * p
 * @param {number} p - 0 < p <= 1
 */
export const pHeight = p => height * p
```

## Eslint and Prettier

**devDependencies**

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node @react-native-community/eslint-config  eslint-plugin-react
```

**.eslintrc.js**

```js
module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@react-native-community', 'react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        jsxBracketSameLine: true,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
}
```

**.prettierrc.js**

```js
module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
}
```

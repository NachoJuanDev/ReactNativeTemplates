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

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb/hooks'
  ],

  plugins: [
    'import-helpers'
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          '/^next/',
          '/^@material-ui/',
          'module',
          '/^@components/',
          '/^@theme/',
          '/^@hooks/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/prop-types': 0,
  },

  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@components': './src/components',
          '@theme': './src/theme',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.d.ts'],
      }
    }
  }

};

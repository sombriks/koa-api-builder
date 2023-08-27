module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
    jest: true
  },
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-return-assign': 'warn'
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*.spec.mjs'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}

module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-return-assign': 'off',
    'no-useless-concat': 'off'
  }
}

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: '17.01', // React version, default to the latest React stable release
    },
  },
};

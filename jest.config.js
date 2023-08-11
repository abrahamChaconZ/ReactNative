module.exports = {
  preset: 'react-native',
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(test).ts?(x)"],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@firebase/auth)'
  ],
}
/** @type {import('jest').Config} */
module.exports = {
  preset: "@quasar/quasar-app-extension-testing-unit-jest",
  // collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //      branches: 50,
  //      functions: 50,
  //      lines: 50,
  //      statements: 50
  //   },
  // },
  transform: {
    ".*\\.js$": "babel-jest",
  },
  testMatch: [
    "**/test/jest/__tests__/**/*.(spec|test).+(ts|js)?(x)",
    "**/src/**/*.jest.(spec|test).+(ts|js)?(x)",
  ],

  // Ignora la carpeta node_modules
  testPathIgnorePatterns: ["/node_modules/"],
};

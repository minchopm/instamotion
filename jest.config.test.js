module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "**/*.ts",
    "!**/__tests__**",
    "!**/node_modules/**",
    "!**/.webpack/**"
  ],
  testMatch: [
    "**/unit/**/*.test.ts"
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        exclude: /\.(spec|test)\.ts$/,
        warnOnly: true,
        ignoreCodes: [6133]
      }
    }
  },
};

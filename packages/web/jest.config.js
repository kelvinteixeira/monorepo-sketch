const { defaults } = require('jest-config');

module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[jt]s?(x)',
    '!<rootDir>/src/**/*.{stories,test,spec,d}.[jt]s?(x)',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/transform/fileTransformer.js',
  },
  transformIgnorePatterns: ['node_modules/'],
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  clearMocks: true,
};

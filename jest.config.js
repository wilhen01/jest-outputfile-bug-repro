module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-report',
        outputName: 'junit.xml',
      },
    ],
  ],
};

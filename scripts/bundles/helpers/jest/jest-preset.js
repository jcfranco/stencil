const path = require('path');
const testingDir = __dirname;
const rootDir = path.join(testingDir, '..');
const internalDir = path.join(rootDir, 'internal');

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  moduleNameMapper: {
    "^@stencil/core/cli$": path.join(rootDir, 'cli', 'index_legacy.js'),
    "^@stencil/core/compiler$": path.join(rootDir, 'compiler', 'index.js'),
    "^@stencil/core/internal/app-data$": path.join(internalDir, 'app-data', 'index.js'),
    "^@stencil/core/internal/platform$": path.join(internalDir, 'testing', 'index.js'),
    "^@stencil/core/internal/runtime$": path.join(internalDir, 'runtime', 'index.js'),
    "^@stencil/core/mock-doc$": path.join(rootDir, 'mock-doc', 'index.js'),
    "^@stencil/core/sys$": path.join(rootDir, 'sys', 'node', 'index.js'),
    "^@stencil/core/testing$": path.join(testingDir, 'index.js'),
    "^@stencil/core$": path.join(internalDir, 'testing', 'index.js')
  },
  setupFilesAfterEnv: [
    path.join(testingDir, 'jest-setuptestframework.js')
  ],
  testEnvironment: path.join(testingDir, 'jest-environment.js'),
  testPathIgnorePatterns: [
    '/.stencil',
    '/.vscode',
    '/dist',
    '/node_modules',
    '/www'
  ],
  maxConcurrency: 1,
  testRegex: '(/__tests__/.*|\\.?(test|spec))\\.(tsx?|ts?|jsx?|js?)$',
  transform: {
    '^.+\\.(ts|tsx|jsx)$': path.join(testingDir, 'jest-preprocessor.js')
  }
};

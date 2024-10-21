const tsconfig = require('./tsconfig.test.json');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
        compiler: 'typescript',
        diagnostics: false,
      },
    ],
  },
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  cacheDirectory: '<rootDir>/../tmp/jest-cache',
  coverageDirectory: '<rootDir>/../tmp/test-results/',
  testMatch: ['<rootDir>/src/app/**/@(*.)@(spec.ts?(x))'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
  moduleNameMapper: mapTypescriptAliasToJestAlias({
    '\\.(css|scss)$': 'identity-obj-proxy',
    sinon: require.resolve('sinon/pkg/sinon.js'),
  }),
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './../tmp/test-results/', outputName: 'TESTS-results-jest.xml' }],
    ['jest-sonar', { outputDirectory: './../tmp/test-results/jest', outputName: 'TESTS-results-sonar.xml' }],
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/src/app/setup-tests.ts'],
  globals: {
    I18N_HASH: 'generated_hash',
    ...require('./webpack/environment'),
    DEVELOPMENT: false,
  },
};

function mapTypescriptAliasToJestAlias(alias = {}) {
  const jestAliases = { ...alias };
  if (!tsconfig.compilerOptions.paths) {
    return jestAliases;
  }
  Object.entries(tsconfig.compilerOptions.paths)
    .filter(([key, value]) => {
      // use Typescript alias in Jest only if this has value
      if (value.length) {
        return true;
      }
      return false;
    })
    .map(([key, value]) => {
      // if Typescript alias ends with /* then in Jest:
      // - alias key must end with /(.*)
      // - alias value must end with /$1
      const regexToReplace = /(.*)\/\*$/;
      const aliasKey = key.replace(regexToReplace, '$1/(.*)');
      const aliasValue = value[0].replace(regexToReplace, '$1/$$1');
      return [aliasKey, `<rootDir>/${aliasValue}`];
    })
    .reduce((aliases, [key, value]) => {
      aliases[key] = value;
      return aliases;
    }, jestAliases);
  return jestAliases;
}
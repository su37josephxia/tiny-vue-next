module.exports = {
    preset: 'ts-jest',
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text'],
    
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    
    rootDir: __dirname,
  }
  
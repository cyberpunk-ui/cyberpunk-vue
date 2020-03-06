const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],

    files: ['tests/**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec', 'coverage'],

    browsers: ['ChromeHeadless'],

    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    }
  })
}
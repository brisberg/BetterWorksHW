// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine',
            'karma-coverage'
        ],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'node_modules/angular/angular.js',
            'src/vendor/angular-ui-router.min.js',
            'src/vendor/d3.min.js',
            'src/app/**/*.js',
            'src/app/**/*.html',
            'node_modules/angular-mocks/angular-mocks.js',
            'test/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.tmpl.html': ['ng-html2js'],
            './src/**/*.js' : ['coverage']
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'src/',

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'templates'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        junitReporter: {
            outputFile: 'reports/junit/TESTS-xunit.xml'
        },

        coverageReporter: {
            dir: 'reports',
            subdir: 'coverage',
            reporters: [
                {type: 'lcov'},
                {type: 'text-summary'},
                {type: 'text'}
            ]

        }
    });
};

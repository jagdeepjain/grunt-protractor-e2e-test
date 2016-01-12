exports.config = {
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--test-type']
        }
    },
    specs: ['test/e2e/**/*spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    baseUrl: 'https://angularjs.org'
};

exports.config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    capabilities : {
    browserName : 'chrome',
    chromeOptions: {
        args: ['--test-type']
    }
},

    specs: ['test/e2e/spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    baseUrl: 'https://angularjs.org'


};
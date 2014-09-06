
module.exports = function(grunt) {


    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: false,
                noColor: false
            },
            run: {}
        },
    });


    grunt.loadNpmTasks("grunt-protractor-runner")
    grunt.registerTask('test:e2e', ['protractor']);

}
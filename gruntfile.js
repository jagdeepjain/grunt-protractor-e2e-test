
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: false,
                noColor: false
            },
            run: {}
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-protractor-runner")
    grunt.registerTask('test:e2e', ['protractor']);
    grunt.registerTask('default', ['jshint']);

}
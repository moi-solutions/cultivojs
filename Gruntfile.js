'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
          'dest/cultivo.min.js': [
            'cultivo.js',
            'cultivo.notify.js',
            'cultivo.http.js',
            'cultivo.date.js',
            'cultivo.datepicker.js',
            'cultivo.select.js',
            'cultivo.datatable.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}

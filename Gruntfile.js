module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files: {
          'styles/css/compiled.css': 'styles/css/style.less'
        }
      },
      prod: {
        options: {
          compress: true,
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
          ]
        },
        files: {
          'styles/css/compiled.css': 'styles/css/style.less'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'styles/css/compiled.css': ['styles/css/compiled.css']
        }
      }
    },
    watch: {
      less: {
        files: ['styles/css/*.less'],
        tasks: ['less:dev'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['less:dev', 'watch']);
  grunt.registerTask('productionBuild', ['less:dev', 'cssmin']);

}
;

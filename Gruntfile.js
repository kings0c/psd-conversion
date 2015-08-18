module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'scss/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'postcss', 'concat', 'cssmin']
			},
            scripts: {
                files: ['**/*.js'],
                tasks: ['jshint']
           }
		},
        concat: {
          css: {
            src: ['css/vendor/normalize.css', 'css/style.css'],
            dest: 'css/concat.css'
          },
            options: {
                separator: "\n"
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            sourceMap: true
          },
          target: {
            files: {
              'css/style.min.css': ['css/concat.css']
            }
          }
        },
        uglify: {
            my_target: {
              files: {
                'js/main.min.js': ['js/vendor/jquery.js', 'js/main.js']
              }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/main.js']
        },
        postcss: {
            options: {
              map: true, // inline sourcemaps

              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer-core')({browsers: 'ie > 8'}), // add vendor prefixes
              ]
            },
            dist: {
              src: 'css/style.css'
            }
        }
	});
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
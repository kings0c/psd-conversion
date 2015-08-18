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
            src: ['css/style.css', 'css/vendor/normalize.css'],
            dest: 'css/concat.css'
          },
            options: {
                separator: "\n",
                sourceMap: true
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
                require('autoprefixer-core')({browsers: ['last 2 versions', 'ie > 8', 'Safari > 5']}), // add vendor prefixes
              ]
            },
            dist: {
              src: 'css/style.css'
            }
        },
        pngmin: {
            options: {
              // Task-specific options go here. 
            },
            your_target: {
              // Target-specific file lists and/or options go here. 
            },
          }
	});
    grunt.loadNpmTasks('grunt-pngmin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
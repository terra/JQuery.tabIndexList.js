module.exports = function(grunt) {
	
	//configuração do projeto
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	
		jshint: {
			files: ['Gruntfile.js', 'src/*.js']
		},

		uglify : {
			build: {
				src : 'releases/jquery.tabindexlist-<%= pkg.version %>.js', 
				dest : 'releases/jquery.tabindexlist-<%= pkg.version %>.min.js'
			}
		},

		concat : {
			dist: {
				src : 'src/*.js',
				dest : 'releases/jquery.tabindexlist-<%= pkg.version %>.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('hint', ['jshint']);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');

	var config = {
		uglify: {
			js: {
				files: {
					'anim.min.js': ['anim.min.js']
				}
			}
		}
	};

	grunt.initConfig(config);

	grunt.registerTask(
		'default',
		'Minify the main script',
		['uglify']
	);
};
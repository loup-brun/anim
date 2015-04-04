module.exports = function(grunt) {

	var config = {
		uglify: {
			js: {
				options: {
					beautify: true
				},
				files: {
					'anim.min.js': ['anim.min.js']
				}
			}
		}
	};

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig()

}
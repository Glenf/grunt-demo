module.exports = {
	options: {
		compress : {
			drop_console : true
		},
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		report : 'gzip'
	},
	dist : {
		files : {
			'dist/js/app.min.js' : '<%= concat.dist.dest %>',
			'dist/js/vendor.min.js' : '<%= concat.vendordist.dest %>'
		}
	}
}
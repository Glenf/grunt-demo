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
			'dist/js/<%= pkg.name %>.min.js' : '<%= concat.dist.dest %>'
		}
	}
}
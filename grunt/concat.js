module.exports = {
	options : {
		separator : ';'
	},
	dev : {
		src : ['src/**/*.js'],
		dest : 'dev/js/<%= pkg.name %>.js'
	},
	dist : {
		src : ['src/**/*.js'],
		dest : 'dist/js/<%= pkg.name %>.js'
	}
}
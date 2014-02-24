module.exports = {
	dev : {
		options : {
			pretty : true // Indenting html structure
		},
		files : {
			'dev/index.html' : 'src/jade/index.jade'
		}
	},
	dist : {
		files : {
			'dist/index.html' : 'src/jade/index.jade'
		}
	}
}
module.exports = {
	dev : {
		options : {
			pretty : true // Indenting html structure
		},
		files : {
			'dev/index.html' : 'src/index.jade'
		}
	},
	dist : {
		files : {
			'dist/index.html' : 'src/index.jade'
		}
	}
}
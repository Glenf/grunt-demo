module.exports = {
	dev : {
		options : {
			style : 'expanded',
			sourcemap : true
		},
		files : {
			'dev/css/style.css' : 'src/sass/style.scss'
		}
	},
	dist : {
		options : {
			style : 'compressed'
		},
		files : {
			'dist/css/style.css' : 'src/sass/style.scss'
		}
	}
}
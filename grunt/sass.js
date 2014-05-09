module.exports = {
	dev : {
		options : {
			style : 'expanded',
			sourcemap : true
		},
		files : {
			'.tmp/style.css' : 'src/sass/style.scss'
		}
	},
	dist : {
		options : {
			style : 'compressed'
		},
		files : {
			'.tmp/style.css' : 'src/sass/style.scss'
		}
	}
}
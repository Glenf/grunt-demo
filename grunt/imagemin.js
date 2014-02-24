module.exports = {
	dist : {
		options : {
			optimizationLevel : 7,
			progressive : true,
			inelaced : true
		},
		files : [{
			expand : true,
			cwd : 'src/img',
			src : ['**/*.{png,jpg,gif}', '!**/sprites/**'],
			dest : 'dist/img'
		}]
	}
}
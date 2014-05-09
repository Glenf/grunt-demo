module.exports = {
	options : {
		separator : ';'
	},
	dev : {
		src : ['src/js/*.js'],
		dest : 'dev/js/app.js'
	},
	dist : {
		src : ['src/js/*.js'],
		dest : 'dist/js/app.js'
	},
	vendordev : {
		src : ['vendor/scripts/jquery.js','vendor/**/*.js'],
		dest : 'dev/js/vendor.js'
	},
	vendordist : {
		src : ['vendor/scripts/jquery.js','vendor/**/*.js'],
		dest : 'dist/js/vendor.js'
	}

}
module.exports = {
	options : {
		livereload : true
	},

	scss : {
		files : 'src/**/*.scss',
		tasks : ['newer:sass:dev'],
		options : {
			livereload : false
		}
	},

	css : {
		files : 'dev/**/*.css'
	},

	script : {
		files : 'src/**/*.js',
		tasks : ['newer:jshint', 'concat:dev'],
		options : {
			spawn : false
		}
	},

	jade : {
		files : 'src/jade/**/*.jade',
		tasks : ['newer:jade:dev']
	}
}
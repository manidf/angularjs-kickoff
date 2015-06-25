module.exports = function ( karma ) {
	karma.set({
		basePath: '../',
		files: [
			<% scripts.forEach( function ( file ) { %>'<%= file %>',
			<% }); %>
			'src/**/*.js'
		],
		exclude: [
			'src/assets/**/*.js'
		],
		frameworks: [ 'jasmine' ],
		plugins: [
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-phantomjs-launcher'
		],
		preprocessors: {
			'src/**/*.js': ['coverage']
		},
		reporters: [ 'dots', 'coverage' ],
		coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
		port: 9018,
		runnerPort: 9100,
		urlRoot: '/',
		autoWatch: false,
		browsers: [
			/**'Chrome',**/
			/**'Firefox',**/
			'PhantomJS'
		]
	});
};

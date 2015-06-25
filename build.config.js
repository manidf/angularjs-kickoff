module.exports = {
	build_dir: 'build',
	compile_dir: 'bin',
	app_files: {
		js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
		jsunit: [ 'src/**/*.spec.js' ],

		coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
		coffeeunit: [ 'src/**/*.spec.coffee' ],

		atpl: [ 'src/app/**/*.tpl.html' ],
		ctpl: [ 'src/common/**/*.tpl.html' ],

		html: [ 'src/index.html' ],
		less: 'src/less/main.less'
	},
	test_files: {
		js: [
			'vendor/angular-mocks/angular-mocks.js'
		]
	},
	vendor_files: {
		js: [
			'vendor/angular/angular.js',
			'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'vendor/angular-placeholders/dist/placeholders-0.0.1-SNAPSHOT.min.js',
			'vendor/angular-ui-router/release/angular-ui-router.js',
			'vendor/angular-ui-utils/modules/route/route.js',
			'vendor/angular-resource/angular-resource.js',
			'vendor/ng-table/ng-table.js'
		],
		css: [
		],
		assets: [
			'vendor/bootstrap/fonts/**/*'
		]
	},
};

module.exports = function (config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine', 'karma-typescript'],
		files: [
			{ pattern: 'src/**/*.ts' }
		],
		plugins: [
			'karma-typescript',
			'karma-jasmine',
			'karma-phantomjs-launcher'
		],
		preprocessors: {
			'src/**/*.ts': ['karma-typescript']
		},
		reporters: ['progress', 'karma-typescript'],
		karmaTypescriptConfig: {
			tsconfig: 'tsconfig.json',
			coverageOptions: {
				instrumentation: false
			}
		},
		browsers: [
			'PhantomJS'
		]
	});
};

const path = require('path');
const fs = require('fs');

module.exports = {
	managerWebpack(config, options) {
		// update config here
		const templateParametersGenerator = config.plugins[1].options.templateParameters;

		config.plugins[1].options.templateParameters = (...args) => {
			const headHtmlSnippet = fs.readFileSync('./manager-head.html', 'utf8');
			const templateParameters = templateParametersGenerator(...args);
			return {
				...templateParameters,
				headHtmlSnippet: headHtmlSnippet + templateParameters.headHtmlSnippet
			};
		};

		return config;
	},
	managerBabel(config, options) {
		// update config here
		return config;
	},
	webpack(config, options) {
		return config;
	},
	webpackFinal(config, options) {
		const templateParametersGenerator = config.plugins[0].options.templateParameters;

		config.plugins[0].options.templateParameters = (...args) => {
			const headHtmlSnippet = fs.readFileSync('./preview-head.html', 'utf8');
			const templateParameters = templateParametersGenerator(...args);
			return {
				...templateParameters,
				headHtmlSnippet: headHtmlSnippet + templateParameters.headHtmlSnippet
			};
		};

		return config;
	},
	babel(config, options) {
		return config;
	},
	addons(entry = []) {
		return entry;
	},
	entries(entries) {
		return [
			...entries,
			path.resolve('./setup.js')
		];
	}
};
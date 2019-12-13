const path = require('path');

module.exports = {
	managerWebpack(config, options) {
		// update config here
		return config;
	},
	managerBabel(config, options) {
		// update config here
		return config;
	},
	webpack(config, options) {
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
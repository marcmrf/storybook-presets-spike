import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
	options: {
		theme: create({
			base: 'dark',
			brandTitle: 'Ditto'
		})
	}
});

configure(require.context('./src', true, /\.stories\.js$/), module);
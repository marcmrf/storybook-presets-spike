import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

configure(require.context('../src', true, /\.pepe\.js$/), module);
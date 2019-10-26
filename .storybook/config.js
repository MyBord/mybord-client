import React from 'react';
import { addParameters, configure } from '@storybook/react';
import addonConfigs from './addons.configs';

addonConfigs();

// disabling addon panel by default. See:
// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
  options: {
    showPanel: false,
  },
});

const req = require.context('../src', true, /\.stories\.[tj]sx$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);

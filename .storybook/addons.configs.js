import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import viewports from './viewport.config';

const addonConfigs = () => {
  setConsoleOptions({ // configs for console addon
    panelExclude: [],
  });

  addDecorator((storyFn, context) => withConsole()(storyFn)(context)); // configs for console addon

  addDecorator(withKnobs); // adds knobs addon as default

  addDecorator(withA11y); // adds a11y accessibility addon

  addParameters({
    backgrounds: [ // adds background addon configs
      // { name: 'white', value: '#ffffff', default: true },
      { name: 'white', value: '#ffffff'},
      { name: 'blue', value: '#44a9cc' },
      { name: 'grey', value: '#d7d8d4', default: true },
    ],
    viewport: { // adds viewport addon configs
      viewports: {
        ...viewports,
        ...INITIAL_VIEWPORTS,
      },
    },
  });
};

export default addonConfigs;

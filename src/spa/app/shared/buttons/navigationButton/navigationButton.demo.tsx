import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { optionsKnob as options, text } from '@storybook/addon-knobs';
import { animatedIcons } from 'icons/animatedIcon/animatedIcon';
import NavigationButton from './navigationButton';

const iconList = Object.keys(animatedIcons);
const iconNameOptions: {[key: string]: string} = {};
iconList.forEach((iconName) => {
  iconNameOptions[iconName] = iconName;
});

const NavigationButtonDemo: React.FC = () => (
  <MemoryRouter initialEntries={['/foo']}>
    <NavigationButton
      // @ts-ignore - don't care that the `options` addon is not a string type.
      iconName={options('Icon Name', iconNameOptions, iconList[0], { display: 'select' })}
      label={text('Label', 'Button')}
      to="foo"
    />
  </MemoryRouter>
);

export default NavigationButtonDemo;

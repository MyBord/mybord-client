import * as React from 'react';
import { optionsKnob as options } from '@storybook/addon-knobs';
import Icon, { icons } from './icon';

const iconList = Object.keys(icons);
const iconNameOptions: {[key: string]: string} = {};
iconList.forEach((iconName) => {
  iconNameOptions[iconName] = iconName;
});

const IconDemo: React.FC = () => (
  <Icon
    // @ts-ignore - don't care that the `options` addon is not a string type.
    iconName={options('Icon Name', iconNameOptions, iconList[0], { display: 'select' })}
    size={60}
  />
);

export default IconDemo;

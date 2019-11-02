import * as React from 'react';
import { boolean, number, optionsKnob as options } from '@storybook/addon-knobs';
import AnimatedIcon, { icons } from './animatedIcon';

const iconList = Object.keys(icons);
const iconNameOptions: {[key: string]: string} = {};
iconList.forEach((iconName) => {
  iconNameOptions[iconName] = iconName;
});

const AnimatedIconDemo: React.FC = () => (
  <AnimatedIcon
    // @ts-ignore - don't care that the `options` addon is not a string type.
    iconName={options('Icon Name', iconNameOptions, iconList[0], { display: 'select' })}
    isStopped={boolean('Is Stopped', true)}
    size={number('Icon Size', 60)}
  />
);

export default AnimatedIconDemo;

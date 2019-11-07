import * as React from 'react';
import { optionsKnob as options, text } from '@storybook/addon-knobs';
import Typography, { typographyTypes } from './typography';

const typographyList = Object.keys(typographyTypes);
const typographyOptions: {[key: string]: string} = {};
typographyList.forEach((type) => {
  typographyOptions[type] = type;
});

const TypographyDemo: React.FC = () => (
  <Typography
    text={text('Text', 'Hello World')}
    // @ts-ignore - don't care that the `options` addon is not a string type.
    type={options('Type', typographyOptions, typographyList[0], { display: 'select' })}
  />
);

export default TypographyDemo;

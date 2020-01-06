import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import TextInput from '../textInput';

const AntTextInputDemo: React.FC = () => (
  <TextInput
    defaultValue="not-a-valid-email"
    disabled={boolean('disabled', false)}
    helpMessage={text('helpMessage', 'Please enter a valid email')}
    placeholder={text('placeholder', 'Enter Email')}
    status={select('Status', { Default: null, Error: 'error' }, null)}
  />
);

export default AntTextInputDemo;

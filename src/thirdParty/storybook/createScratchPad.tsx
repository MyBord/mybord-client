import * as React from 'react';
import { storiesOf } from '@storybook/react';

interface Props {
  Component: React.FC;
  ComponentName: string;
}

export default (Component: React.FC, ComponentName: string) => {
  storiesOf('ScratchPad', module)
    .add(ComponentName, () => <Component />);
};

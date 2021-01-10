import * as React from 'react';
import { storiesOf } from '@storybook/react';

export default (Component: React.FC, ComponentName: string) => {
  storiesOf('ScratchPad', module)
    .add(ComponentName, () => <Component />);
};

import * as React from 'react';
import createScratchPad from 'storybook/createScratchPad';
import HamburgerButton from './hamburgerButton';

const Component: React.FC = () => <HamburgerButton onClick={() => {}} />;

createScratchPad(Component, 'HamburgerButton');

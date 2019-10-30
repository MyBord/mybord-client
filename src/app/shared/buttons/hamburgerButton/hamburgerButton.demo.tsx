import * as React from 'react';
import { action } from '@storybook/addon-actions';
import HamburgerButton from './hamburgerButton';

const HamburgerButtonDemo: React.FC = () => <HamburgerButton onClick={action('clicked')} />;

export default HamburgerButtonDemo;

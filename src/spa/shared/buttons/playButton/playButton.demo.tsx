import * as React from 'react';
import { action } from '@storybook/addon-actions';
import PlayButton from './playButton';

const PlayButtonDemo: React.FC = () => <PlayButton onClick={action('clicked')} shouldSpin />;

export default PlayButtonDemo;

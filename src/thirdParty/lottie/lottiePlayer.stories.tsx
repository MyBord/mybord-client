import * as React from 'react';
import createScratchPad from 'storybook/createScratchPad';
import animationData from 'lottie/lotties/hamburger.json';
import LottiePlayer from './lottiePlayer';

const Component: React.FC = () => <LottiePlayer animationData={animationData} size={400} />;

createScratchPad(Component, 'Lottie');

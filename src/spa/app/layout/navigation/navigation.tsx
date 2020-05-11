import * as React from 'react';
import NavigationAnimation from 'framerMotion/navigationAnimation';
import NavigationButtons from './navigationButtons/navigationButtons';
import NavigationLogo from './navigationLogo/navigationLogo';

const Navigation: React.FC = () => (
  <NavigationAnimation>
    <NavigationLogo />
    <NavigationButtons />
  </NavigationAnimation>
);

export default Navigation;

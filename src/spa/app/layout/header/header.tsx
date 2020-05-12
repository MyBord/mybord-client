import * as React from 'react';
import HeaderAnimation from 'framerMotion/headerAnimation';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';

const Header: React.FC = () => (
  <HeaderAnimation>
    <HeaderTitles />
    <HeaderTools />
  </HeaderAnimation>
);

export default Header;

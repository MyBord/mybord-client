import * as React from 'react';
import HeaderAnimation from 'framerMotion/headerAnimation';
import PopOverContainer from 'modals/popOver/popOverContainer';
import Icon from 'icons/icon/icon';
import HeaderTitles from './headerTitles/headerTitles';
import HeaderTools from './headerTools/headerTools';

const Header: React.FC = () => (
  <HeaderAnimation>
    <HeaderTitles />
    <HeaderTools />
    <PopOverContainer Content={<h1>hello world</h1>} placement="bottom-center">
      <div style={{ background: 'blue', height: '8rem', width: '6rem' }}>
        test box
      </div>
    </PopOverContainer>
    <div style={{ display: 'flex' }}>
      <PopOverContainer Content={<h1>hello world</h1>} placement="bottom-center">
        <div style={{ height: '5rem', display: 'flex', alignItems: 'center' }}>
          <Icon iconName="notification" size={30} />
        </div>
      </PopOverContainer>
      <PopOverContainer Content={<h1>hello world</h1>} placement="bottom-center">
        <div style={{ height: '5rem', display: 'flex', alignItems: 'center' }}>
          <Icon iconName="avatar" size={40} />
        </div>
      </PopOverContainer>
    </div>
  </HeaderAnimation>
);

export default Header;

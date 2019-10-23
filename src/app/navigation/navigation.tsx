import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import * as styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const [isExpanded, setState] = React.useState(false);
  const styleProps = useSpring({ width: isExpanded ? '20rem' : '10rem' });
  return (
    <animated.nav
      className={styles.nav}
      style={styleProps}
    >
      This is the nav
      {isExpanded ? 'EXPANDED' : 'COLLAPSED'}
      <button onClick={() => setState(!isExpanded)} type="button">Click Me</button>
      <div>foo bar</div>
    </animated.nav>
  );
};

export default Navigation;

import * as React from 'react';
import HeaderProfile from './headerProfile/headerProfile';
import PageHeader from './pageHeaders/pageHeader';
import HeaderAnimation from 'framerMotion/headerAnimation';
import * as styles from './header.module.less';

// const Header: React.FC = () => (
//   <header className={styles.header}>
//     <PageHeader />
//     <HeaderProfile />
//   </header>
// );

// const Header: React.FC = () => (
//   <header
//     className={styles.header}
//     style={{
//       border: '2px solid blue',
//     }}
//   >
//     <section
//       style={{
//         height: '3rem', // @headerHeight
//         background: 'red',
//         width: '100%',
//         top: '-1rem',
//         position: 'absolute',
//       }}
//     >
//       <h3 style={{ margin: '0' }}>This is the header</h3>
//     </section>
//   </header>
// );

const Header: React.FC = () => (
  <header
    className={styles.header}
    style={{
      border: '2px solid blue',
    }}
  >
    <HeaderAnimation>
      <h3 style={{ margin: '0' }}>This is the header</h3>
    </HeaderAnimation>
  </header>
);

export default Header;

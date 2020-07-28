import * as React from 'react';
import Header from 'header/header';
import Navigation from 'navigation/navigation';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;

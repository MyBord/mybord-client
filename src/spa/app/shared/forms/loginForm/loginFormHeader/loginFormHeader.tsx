import * as React from 'react';
import logo from 'assets/logo.png';
import Typography from 'typography/typography';
import * as styles from './loginFormHeader.module.less';

const LoginFormHeader: React.FC = () => (
  <div className={styles.div}>
    <img alt="MyBord logo" className={styles.img} src={logo} />
    <Typography size="xl" text="MyBord.io" weight="bold" />
  </div>
);

export default LoginFormHeader;

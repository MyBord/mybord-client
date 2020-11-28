import * as React from 'react';
import logoWithType from 'graphics/logoWithType.png';
import * as styles from './loginFormHeader.module.less';

const LoginFormHeader: React.FC = () => (
  <div className={styles.div}>
    <img alt="MyBord logo" className={styles.img} src={logoWithType} />
  </div>
);

export default LoginFormHeader;

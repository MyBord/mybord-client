import * as React from 'react';
import logo from 'assets/logo/myBordMark.png';
import logoWithType from 'assets/logo/myBordMarkType.png';
import Typography from 'typography/typography';
import * as styles from './loginFormHeader.module.less';

const LoginFormHeader: React.FC = () => (
  <div className={styles.div}>
    <img alt="MyBord logo" className={styles.img} src={logoWithType} />
    {/* <Typography size="five" text="MyBord.io" weight="bold" /> */}
  </div>
);

export default LoginFormHeader;

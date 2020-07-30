import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Typography from 'typography/typography';
import * as styles from './loginFormSocial.module.less';

const LoginFormLoginSocial: React.FC = () => {
  const handleFacebookAuth = (): void => {
    console.log('authenticating with facebook');
  };
  const handleGoogleAuth = (): void => {
    console.log('authenticating with google');
  };

  return (
    <div className={styles.div}>
      <Typography text="or login with" />
      <Anchor label="Google" onClick={handleGoogleAuth} />
      <Anchor label="Facebook" onClick={handleFacebookAuth} />
    </div>
  );
};

export default LoginFormLoginSocial;

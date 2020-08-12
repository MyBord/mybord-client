import * as React from 'react';
import Button from 'buttons/button/button';
import Typography from 'typography/typography';
import * as styles from './loginFormSocial.module.less';

const LoginFormSignUpSocial: React.FC = () => {
  const handleFacebookAuth = (): void => {
    console.log('authenticating with facebook');
  };
  const handleGoogleAuth = (): void => {
    console.log('authenticating with google');
  };

  return (
    <div className={styles.div}>
      <Typography text="or sign up with" />
      <Button label="Google" onClick={handleGoogleAuth} type="tertiary" />
      <Button label="Facebook" onClick={handleFacebookAuth} type="tertiary" />
    </div>
  );
};

export default LoginFormSignUpSocial;

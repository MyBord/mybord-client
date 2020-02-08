import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Typography from 'typography/typography';
import { LoginFormStatus } from 'types/formTypes';
import * as styles from './loginFormSocial.module.less';

interface Props {
  formStatus: LoginFormStatus;
}

const LoginFormSocial: React.FC<Props> = ({ formStatus }) => (
  <div className={styles.div}>
    <Typography text={`or ${formStatus === 'login' ? 'login' : 'sign up'} with`} />
    <Anchor label="Google" onClick={() => {}} />
    <Anchor label="Facebook" onClick={() => {}} />
  </div>
);

export default LoginFormSocial;
